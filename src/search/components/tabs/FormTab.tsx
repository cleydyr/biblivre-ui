import {
  EuiAccordion,
  EuiBadge,
  EuiDescriptionList,
  EuiFlexGrid,
  EuiFlexGroup,
  EuiFlexItem,
  EuiI18n,
  EuiPanel,
  EuiSpacer,
  EuiText,
  EuiTitle,
} from "@elastic/eui";
import { groupBy, indexBy } from "../../../utils";
import {
  FormFieldConfig,
  MarcFieldIndicator,
  MarcFieldTag,
  MarcFormFieldConfigPropertyName,
  OpenBiblivreBibliographicRecord,
} from "../../types";
import { TabDefinition } from "./types";

type SubfieldFormProps = {
  subfieldOrIndicator: MarcFormFieldConfigPropertyName;
  datafield: MarcFieldTag;
  value: string;
};

const translationPrefix = "marc.bibliographic.datafield.";

const FormTab: TabDefinition = {
  order: 2,
  id: "form",
  name: <EuiI18n token="cataloging.tabs.form" default="Formulário" />,
  content: ({ record, biblioFormFieldsConfig }) => {
    const biblioFormFieldsConfigIndexedByDatafield =
      biblioFormFieldsConfig.reduce(indexBy("datafield"), {});

    const tagsToRender = filterTagsToRender(
      record,
      biblioFormFieldsConfigIndexedByDatafield
    );

    const briefFormData = toBriefFormData(
      tagsToRender,
      record,
      biblioFormFieldsConfig
    );

    return (
      <EuiFlexGrid>
        {tagsToRender.map((recordDatafield) => {
          const dataFieldConfig =
            biblioFormFieldsConfigIndexedByDatafield[recordDatafield];

          const { collapsed } = dataFieldConfig;

          return (
            <EuiFlexItem key={recordDatafield}>
              <EuiAccordion
                id={`${record.id}#${recordDatafield}`}
                buttonContent={
                  <AccordionButtonContent {...{ recordDatafield }} />
                }
                initialIsOpen={!collapsed}
              >
                <SubfieldsDescriptionList
                  subfieldFormProps={briefFormData[recordDatafield]}
                />
              </EuiAccordion>
              <EuiSpacer />
            </EuiFlexItem>
          );
        })}
      </EuiFlexGrid>
    );
  },
};

function SubfieldsDescriptionList({
  subfieldFormProps: configSubfields,
}: {
  subfieldFormProps: SubfieldFormProps[];
}) {
  function renderDescription(
    datafield: string,
    value: string,
    isIndicator: boolean,
    indicatorOrder: string
  ): JSX.Element {
    return (
      <EuiFlexGroup>
        <EuiFlexItem>
          <EuiText color="subdued" size="s">
            {isIndicator ? (
              <EuiI18n
                token={`${translationPrefix}${datafield}.indicator.${indicatorOrder}.${value}`}
                default=""
              />
            ) : (
              value
            )}
          </EuiText>
        </EuiFlexItem>
      </EuiFlexGroup>
    );
  }

  function renderTitle(
    datafield: string,
    subfieldOrIndicator: string,
    isIndicator: boolean,
    indicatorOrder: string
  ): JSX.Element {
    return (
      <EuiFlexGroup justifyContent="flexEnd">
        <EuiFlexItem grow={false}>
          <EuiI18n
            token={`${translationPrefix}${datafield}.${
              isIndicator
                ? `indicator.${indicatorOrder}`
                : `subfield.${subfieldOrIndicator}`
            }`}
            default=""
          />
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <EuiBadge>
            {isIndicator ? `#${indicatorOrder}` : `$${subfieldOrIndicator}`}
          </EuiBadge>
        </EuiFlexItem>
      </EuiFlexGroup>
    );
  }

  const listItems = configSubfields.map(
    ({ datafield, subfieldOrIndicator, value }) => {
      const isIndicator = subfieldOrIndicator.length > 1;

      const indicatorOrder = subfieldOrIndicator.substring(3);

      return {
        title: renderTitle(
          datafield,
          subfieldOrIndicator,
          isIndicator,
          indicatorOrder
        ),
        description: renderDescription(
          datafield,
          value,
          isIndicator,
          indicatorOrder
        ),
      };
    }
  );

  return (
    <EuiPanel>
      <EuiDescriptionList
        align="center"
        gutterSize="s"
        compressed
        type="column"
        listItems={listItems}
      />
    </EuiPanel>
  );
}

function filterTagsToRender(
  record: OpenBiblivreBibliographicRecord,
  biblioFormFieldsConfigGroupedByDatafield: Record<
    MarcFieldTag,
    FormFieldConfig
  >
): MarcFieldTag[] {
  return Object.keys(record.json).filter((recordDatafield) => {
    const biblioFormFieldConfig =
      biblioFormFieldsConfigGroupedByDatafield[recordDatafield];

    return biblioFormFieldConfig?.subfields.some(({ subfield }) =>
      record.json[recordDatafield].some(
        (recordSubfield) => subfield in recordSubfield
      )
    );
  });
}

function toBriefFormData(
  tagsToRender: string[],
  openedRecord: OpenBiblivreBibliographicRecord,
  biblioFormFieldsConfig: FormFieldConfig[]
): Record<MarcFieldTag, SubfieldFormProps[]> {
  return tagsToRender
    .flatMap((tag) => {
      const marcFieldValues = openedRecord.json[tag];

      return marcFieldValues.flatMap((marcFieldValue) =>
        Object.keys(marcFieldValue).flatMap((subfieldOrIndicator) => {
          const marcSubfieldTag =
            subfieldOrIndicator as MarcFormFieldConfigPropertyName;

          const subfieldValue = marcFieldValue[marcSubfieldTag];

          if (typeof subfieldValue === "string") {
            if (subfieldValue.trim().length === 0) {
              return [];
            }

            return [
              {
                datafield: tag,
                subfieldOrIndicator: marcSubfieldTag,
                value: subfieldValue,
              },
            ];
          }

          return subfieldValue.map((value) => ({
            datafield: tag,
            subfieldOrIndicator: marcSubfieldTag,
            value: value,
          }));
        })
      );
    })
    .sort(comparingSubfieldsAndIndicators(biblioFormFieldsConfig))
    .reduce(groupBy("datafield"), {});
}

function comparingSubfieldsAndIndicators(
  biblioFields: FormFieldConfig[]
): (a: SubfieldFormProps, b: SubfieldFormProps) => number {
  return (a, b) => {
    if (a.subfieldOrIndicator === MarcFieldIndicator.IND1) {
      return -1;
    }

    if (b.subfieldOrIndicator === MarcFieldIndicator.IND1) {
      return 1;
    }

    if (a.subfieldOrIndicator === MarcFieldIndicator.IND2) {
      return -1;
    }

    if (b.subfieldOrIndicator === MarcFieldIndicator.IND2) {
      return 1;
    }

    const [da, db] = [a, b].map((item) =>
      biblioFields.find(({ datafield }) => datafield === item.datafield)
    );

    if (da === undefined || db === undefined) {
      return 0;
    }

    const sa = da.subfields.find(
      ({ subfield }) => subfield === a.subfieldOrIndicator
    );

    const sb = db.subfields.find(
      ({ subfield }) => subfield === b.subfieldOrIndicator
    );

    if (sa === undefined || sb === undefined) {
      return 0;
    }

    return sa.sortOrder - sb.sortOrder;
  };
}

function AccordionButtonContent({
  recordDatafield,
}: {
  recordDatafield: string;
}) {
  return (
    <EuiFlexGroup justifyContent="spaceEvenly">
      <EuiFlexItem grow={false}>
        <EuiBadge>{`${recordDatafield}`}</EuiBadge>
      </EuiFlexItem>
      <EuiFlexItem>
        <EuiTitle size="xxs">
          <EuiText>
            <EuiI18n
              token={`${translationPrefix}${recordDatafield}`}
              default=""
            />
          </EuiText>
        </EuiTitle>
      </EuiFlexItem>
    </EuiFlexGroup>
  );
}
export default FormTab;

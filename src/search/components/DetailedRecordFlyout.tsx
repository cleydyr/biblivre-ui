import {
  EuiAccordion,
  EuiBadge,
  EuiCodeBlock,
  EuiDescriptionList,
  EuiFlexGrid,
  EuiFlexGroup,
  EuiFlexItem,
  EuiFlyout,
  EuiFlyoutBody,
  EuiFlyoutFooter,
  EuiFlyoutHeader,
  EuiI18n,
  EuiPanel,
  EuiSpacer,
  EuiTab,
  EuiTabs,
  EuiText,
  EuiTitle,
  useEuiI18n,
} from "@elastic/eui";
import { field } from "../../translations/utils";
import { ReactNode, useMemo, useState } from "react";
import {
  FormFieldConfig,
  MarcFieldTag,
  MarcFieldValuePropertyName,
  OpenBiblivreBibliographicRecord,
} from "../types";

type FormSubfieldProps = {
  subfieldOrIndicator: MarcFieldValuePropertyName;
  datafield: MarcFieldTag;
  value: string;
};

type DetailedRecordFlyoutProps = {
  record: OpenBiblivreBibliographicRecord;
  biblioFields: Array<FormFieldConfig>;
  onClose: () => void;
};

type TabId = "brief" | "form" | "marc" | "holdings";

type TabDefinition = {
  id: TabId;
  name: string;
  content: (record: OpenBiblivreBibliographicRecord) => ReactNode;
};

type DetailedRecordFlyoutState = {
  selectedTabId: TabId;
};

const translationPrefix = "marc.bibliographic.datafield.";

export function DetailedRecordFlyout({
  record,
  biblioFields,
  onClose,
}: DetailedRecordFlyoutProps) {
  const initialState: DetailedRecordFlyoutState = {
    selectedTabId: "brief",
  };

  const detailedRecordTabs: Array<TabDefinition> = [
    {
      id: "brief",
      name: useEuiI18n("cataloging.tabs.brief", "Resumo Catalográfico"),
      content: (detailedRecord: OpenBiblivreBibliographicRecord) => (
        <EuiDescriptionList
          listItems={detailedRecord.fields.map(({ value, datafield }) => ({
            title: field(datafield, ""),
            description: value,
          }))}
        />
      ),
    },
    {
      id: "form",
      name: useEuiI18n("cataloging.tabs.form", "Formulário"),
      content: (detailedRecord: OpenBiblivreBibliographicRecord) => {
        const tagsToRender = Object.keys(detailedRecord.json)
          .filter((recordDataField) => {
            const biblioField = biblioFields.find(
              ({ datafield }) => datafield === recordDataField
            );

            if (biblioField === undefined) {
              return false;
            }

            return biblioField.subfields.some((subfield) =>
              detailedRecord.json[recordDataField]?.some(
                (s) => s[subfield.subfield] !== undefined
              )
            );
          })
          .sort(comparingDatafield(biblioFields));

        const briefFormData = tagsToRender
          .map((tag) => {
            const values = detailedRecord.json[tag];

            return values.map((value) =>
              Object.keys(value).map((subfieldOrIndicator) => {
                const marcSubfieldTag =
                  subfieldOrIndicator as MarcFieldValuePropertyName;

                const p = value[marcSubfieldTag];

                if (Array.isArray(p)) {
                  return p.map((v) => ({
                    datafield: tag,
                    subfieldOrIndicator: marcSubfieldTag,
                    value: v,
                  }));
                }

                if (p === " " || p === "" || p === undefined) {
                  return [];
                }

                return [
                  {
                    datafield: tag,
                    subfieldOrIndicator: marcSubfieldTag,
                    value: p,
                  },
                ];
              })
            );
          })
          .flat()
          .flat()
          .flat()
          .sort(comparingSubfieldsAndIndicators(biblioFields));

        return (
          <EuiFlexGrid>
            {tagsToRender.map((recordDatafield) => {
              const dataFieldConfig = biblioFields.find(
                (biblioField) => biblioField.datafield === recordDatafield
              );

              if (dataFieldConfig === undefined) {
                return <></>;
              }

              const { collapsed } = dataFieldConfig;

              return (
                <EuiFlexItem key={recordDatafield}>
                  <EuiAccordion
                    id={`${record.id}#${recordDatafield}`}
                    buttonContent={accordionButtonContent(recordDatafield)}
                    initialIsOpen={!collapsed}
                  >
                    {accordionBody(
                      briefFormData.filter(
                        (w) => w.datafield === recordDatafield
                      )
                    )}
                  </EuiAccordion>
                  <EuiSpacer />
                </EuiFlexItem>
              );
            })}
          </EuiFlexGrid>
        );
      },
    },
    {
      id: "marc",
      name: useEuiI18n("cataloging.tabs.marc", "MARC 21"),
      content: (detailedRecord: OpenBiblivreBibliographicRecord) => (
        <EuiCodeBlock isCopyable overflowHeight={960}>
          {detailedRecord.marc}
        </EuiCodeBlock>
      ),
    },
    {
      id: "holdings",
      name: useEuiI18n("cataloging.tabs.holdings", "Exemplares"),
      content: (detailedRecord: OpenBiblivreBibliographicRecord) => (
        <p>holdings</p>
      ),
    },
  ];

  const [state, setState] = useState(initialState);

  const { selectedTabId } = state;

  const selectedTabContent = useMemo(
    () =>
      detailedRecordTabs
        .find((tab) => tab.id === selectedTabId)
        ?.content(record),
    [selectedTabId]
  );

  return (
    <EuiFlyout size="m" onClose={onClose}>
      <EuiFlyoutHeader>
        <EuiTabs>
          {detailedRecordTabs.map((tab) => (
            <EuiTab
              key={tab.id}
              isSelected={tab.id === selectedTabId}
              onClick={() => setState({ selectedTabId: tab.id })}
            >
              {tab.name}
            </EuiTab>
          ))}
        </EuiTabs>
      </EuiFlyoutHeader>
      <EuiFlyoutBody>{selectedTabContent}</EuiFlyoutBody>
      <EuiFlyoutFooter></EuiFlyoutFooter>
    </EuiFlyout>
  );

  function accordionButtonContent(recordDatafield: string): ReactNode {
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

  function accordionBody(configSubfields: FormSubfieldProps[]) {
    const listItems = configSubfields.map(
      ({ datafield, subfieldOrIndicator: subfield, value }) => {
        const isIndicator = ["ind1", "ind2"].includes(subfield);

        const indicatorOrder = subfield.substring(3);

        return {
          title: (
            <EuiFlexGroup justifyContent="flexEnd">
              <EuiFlexItem grow={false}>
                <EuiI18n
                  token={`${translationPrefix}${datafield}.${
                    isIndicator
                      ? `indicator.${indicatorOrder}`
                      : `subfield.${subfield}`
                  }`}
                  default=""
                />
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiBadge>
                  {isIndicator ? `#${indicatorOrder}` : `$${subfield}`}
                </EuiBadge>
              </EuiFlexItem>
            </EuiFlexGroup>
          ),
          description: (
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
        ></EuiDescriptionList>
      </EuiPanel>
    );
  }
}

function comparingSubfieldsAndIndicators(
  biblioFields: FormFieldConfig[]
): (a: FormSubfieldProps, b: FormSubfieldProps) => number {
  return (a, b) => {
    if (a.subfieldOrIndicator === "ind1") {
      return -1;
    }

    if (b.subfieldOrIndicator === "ind1") {
      return 1;
    }

    if (a.subfieldOrIndicator === "ind2") {
      return -1;
    }

    if (b.subfieldOrIndicator === "ind2") {
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

function comparingDatafield(
  biblioFields: FormFieldConfig[]
): (a: string, b: string) => number {
  return (a, b) => {
    const da = biblioFields.find(({ datafield }) => datafield === a);

    const db = biblioFields.find(({ datafield }) => datafield === b);

    if (da === undefined || db === undefined) {
      return 0;
    }

    return da.sortOrder - db.sortOrder;
  };
}

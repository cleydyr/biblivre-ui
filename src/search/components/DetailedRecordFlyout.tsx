import {
  EuiAccordion,
  EuiBadge,
  EuiBasicTable,
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
  EuiListGroup,
  EuiNotificationBadge,
  EuiPanel,
  EuiSpacer,
  EuiTab,
  EuiTabs,
  EuiText,
  EuiTitle,
  useEuiI18n,
} from "@elastic/eui";
import { ReactNode, useMemo } from "react";
import {
  FormFieldConfig,
  MarcFieldIndicator,
  MarcFieldTag,
  MarcFormFieldConfigPropertyName,
  OpenBiblivreBibliographicRecord,
} from "../types";
import { BibliographicSearchAPI } from "../api/search";
import usePartialState from "../../hooks/usePartialState";
import { FormFieldI18n } from "../../translations/FormFieldI18n";
import { groupBy, indexBy } from "../../utils";

type SubfieldFormProps = {
  subfieldOrIndicator: MarcFormFieldConfigPropertyName;
  datafield: MarcFieldTag;
  value: string;
};

type DetailedRecordFlyoutProps = {
  record: OpenBiblivreBibliographicRecord;
  biblioFormFieldsConfig: Array<FormFieldConfig>;
  onClose: () => void;
  api: BibliographicSearchAPI;
};

type TabId = "brief" | "form" | "marc" | "holdings" | "media";

type TabDefinition = {
  id: TabId;
  name: string;
  append?: ReactNode;
  content: (record: OpenBiblivreBibliographicRecord) => ReactNode;
};

type DetailedRecordFlyoutState = {
  selectedTabId: TabId;
};

const translationPrefix = "marc.bibliographic.datafield.";

export function DetailedRecordFlyout({
  record,
  biblioFormFieldsConfig,
  onClose,
  api,
}: DetailedRecordFlyoutProps) {
  const initialState: DetailedRecordFlyoutState = {
    selectedTabId: "holdings",
  };

  const detailedRecordTabs: Array<TabDefinition> = [
    {
      id: "holdings",
      name: useEuiI18n("cataloging.tabs.holdings", "Exemplares"),
      append: (
        <EuiNotificationBadge color="subdued">
          {record.holdingsCount}
        </EuiNotificationBadge>
      ),
      content: (openedRecord: OpenBiblivreBibliographicRecord) => {
        const columns = ["accession_number", "shelf_location"].map(
          (property) => ({
            field: property,
            name: <EuiI18n token={`search.holding.${property}`} default="?" />,
          })
        );

        const identifierColumn = {
          field: "id",
          name: "ID",
        };

        return (
          <EuiFlexGroup direction="column">
            {holdingsCountSummary(openedRecord)}
            <EuiBasicTable
              items={openedRecord.holdings.filter(
                (holding) => holding.availability === "available"
              )}
              columns={[identifierColumn, ...columns]}
              noItemsMessage={
                <EuiI18n
                  token="circulation.lending.no_holding_found"
                  default="Nenhum exemplar encontrado"
                />
              }
            />
          </EuiFlexGroup>
        );
      },
    },
    {
      id: "brief",
      name: useEuiI18n("cataloging.tabs.brief", "Resumo Catalográfico"),
      content: (openedRecord: OpenBiblivreBibliographicRecord) => (
        <EuiDescriptionList
          listItems={openedRecord.fields.map(({ value, datafield }) => ({
            title: <FormFieldI18n field={datafield} />,
            description: value,
          }))}
        />
      ),
    },
    {
      id: "form",
      name: useEuiI18n("cataloging.tabs.form", "Formulário"),
      content: (openedRecord: OpenBiblivreBibliographicRecord) => {
        const biblioFormFieldsConfigIndexedByDatafield =
          biblioFormFieldsConfig.reduce(indexBy("datafield"), {});

        const tagsToRender = filterTagsToRender(
          openedRecord,
          biblioFormFieldsConfigIndexedByDatafield
        );

        const briefFormData = toBriefFormData(
          tagsToRender,
          openedRecord,
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
    },
    {
      id: "marc",
      name: useEuiI18n("cataloging.tabs.marc", "MARC"),
      content: (openedRecord: OpenBiblivreBibliographicRecord) => (
        <EuiCodeBlock isCopyable overflowHeight={960}>
          {openedRecord.marc}
        </EuiCodeBlock>
      ),
    },
    {
      id: "media",
      name: useEuiI18n("cataloging.common.digital_files", "Arquivos digitais"),
      append: (
        <EuiNotificationBadge color="subdued">
          {record.attachments.length}
        </EuiNotificationBadge>
      ),
      content: (openedRecord: OpenBiblivreBibliographicRecord) => {
        if (openedRecord.attachments.length === 0) {
          return (
            <EuiTitle size="xxs">
              <EuiText>
                <EuiI18n
                  token="cataloging.bibliographic.no_attachments"
                  default=""
                />
              </EuiText>
            </EuiTitle>
          );
        }

        return (
          <EuiListGroup
            color="primary"
            listItems={openedRecord.attachments.map((attachment) => ({
              label: attachment.name,
              href: api.attachmentURL(attachment.uri),
              iconType: "download",
            }))}
          />
        );
      },
    },
  ];

  const [state, patchState] = usePartialState(initialState);

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
              onClick={() => patchState({ selectedTabId: tab.id })}
              append={tab.append}
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

  function SubfieldsDescriptionList({
    subfieldFormProps: configSubfields,
  }: {
    subfieldFormProps: SubfieldFormProps[];
  }) {
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
  }
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

function holdingsCountSummary(
  openedRecord: OpenBiblivreBibliographicRecord
): ReactNode {
  return (
    <EuiDescriptionList
      gutterSize="s"
      compressed
      type="responsiveColumn"
      listItems={[
        {
          title: (
            <EuiI18n
              token="search.bibliographic.holdings_available"
              default="Disponíveis"
            />
          ),
          description: openedRecord.holdingsAvailable,
        },
        {
          title: (
            <EuiI18n
              token="search.bibliographic.holdings_lent"
              default="Emprestados"
            />
          ),
          description: openedRecord.holdingsLent,
        },
        {
          title: (
            <EuiI18n
              token="search.bibliographic.holdings_reserved"
              default="Reservados"
            />
          ),
          description: openedRecord.holdingsReserved,
        },
      ]}
    />
  );
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

import {
  EuiCodeBlock,
  EuiDescriptionList,
  EuiFlyout,
  EuiFlyoutBody,
  EuiFlyoutFooter,
  EuiFlyoutHeader,
  EuiTab,
  EuiTabs,
  useEuiI18n,
} from "@elastic/eui";
import { field } from "../../translations/utils";
import { ReactNode, useMemo, useState } from "react";
import { OpenBiblivreBibliographicRecord } from "../types";

type DetailedRecordFlyoutProps = {
  record: OpenBiblivreBibliographicRecord;
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

export function DetailedRecordFlyout({
  record,
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
      content: (detailedRecord: OpenBiblivreBibliographicRecord) => <p>form</p>,
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
    <EuiFlyout size="l" onClose={onClose}>
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
}

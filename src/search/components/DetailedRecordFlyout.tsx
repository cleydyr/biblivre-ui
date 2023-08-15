import {
  EuiBasicTable,
  EuiCodeBlock,
  EuiFlyout,
  EuiFlyoutBody,
  EuiFlyoutFooter,
  EuiFlyoutHeader,
  EuiTab,
  EuiTabs,
  useEuiI18n,
} from "@elastic/eui";
import { field } from "../../translations/utils";
import { useMemo, useState } from "react";
import { OpenBiblivreBibliographicRecord } from "../types";
import { DetailedRecordFlyoutProps } from "./Search";

export function DetailedRecordFlyout({
  record,
  onClose,
}: DetailedRecordFlyoutProps) {
  const initialState = {
    selectedTabId: "brief",
  };

  const detailedRecordTabs = [
    {
      id: "brief",
      name: useEuiI18n("cataloging.tabs.brief", "Resumo Catalográfico"),
      content: (detailedRecord: OpenBiblivreBibliographicRecord) => (
        <EuiBasicTable
          columns={detailedRecord.fields.map(({ value, datafield }) => ({
            render: () => value,
            name: field(datafield, ""),
          }))}
          items={[detailedRecord]}
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
        <EuiCodeBlock isCopyable overflowHeight={300}>
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

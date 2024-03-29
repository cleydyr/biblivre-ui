import {
  EuiButton,
  EuiFlyout,
  EuiFlyoutBody,
  EuiFlyoutFooter,
  EuiFlyoutHeader,
  EuiI18n,
  EuiTab,
  EuiTabs,
} from "@elastic/eui";
import { useMemo } from "react";
import usePartialState from "../../hooks/usePartialState";
import { FormFieldConfig, OpenBiblivreBibliographicRecord } from "../types";

import allTabs from "./tabs";

type DetailedRecordFlyoutProps = {
  record: OpenBiblivreBibliographicRecord;
  biblioFormFieldsConfig: Array<FormFieldConfig>;
  onClose: () => void;
  attachmentURL: (path: string) => string;
  onAddToExport: () => void;
};

type DetailedRecordFlyoutState = {
  selectedTabId: string;
};

export function DetailedRecordFlyout({
  record,
  biblioFormFieldsConfig,
  onClose,
  attachmentURL,
  onAddToExport,
}: DetailedRecordFlyoutProps) {
  const initialState: DetailedRecordFlyoutState = {
    selectedTabId: "holdings",
  };

  const [state, patchState] = usePartialState(initialState);

  const { selectedTabId } = state;

  const selectedTabContent = useMemo(
    () =>
      allTabs
        .find((tab) => tab.id === selectedTabId)
        ?.content({ record, attachmentURL, biblioFormFieldsConfig }),
    [selectedTabId, record]
  );

  return (
    <EuiFlyout size="m" onClose={onClose}>
      <EuiFlyoutHeader>
        <EuiTabs>
          {allTabs.map(({ id, append, name }) => (
            <EuiTab
              key={id}
              isSelected={id === selectedTabId}
              onClick={() => patchState({ selectedTabId: id })}
              append={append?.(record)}
            >
              {name}
            </EuiTab>
          ))}
        </EuiTabs>
      </EuiFlyoutHeader>
      <EuiFlyoutBody>{selectedTabContent}</EuiFlyoutBody>
      <EuiFlyoutFooter>
        <EuiButton size="s" onClick={onAddToExport}>
          <EuiI18n
            token="search.bibliographic.select_item_button"
            default="Open"
          />
        </EuiButton>
      </EuiFlyoutFooter>
    </EuiFlyout>
  );
}

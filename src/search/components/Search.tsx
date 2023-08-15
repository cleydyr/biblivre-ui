import { EuiFlexGroup, EuiFlexItem, EuiFlyout } from "@elastic/eui";

import SearchResults from "./SearchResults";

import { useState } from "react";
import { BiblioRecord, BiblivreSearchResult, SearchParameters } from "../types";
import { BibliographicSearchBar } from "./BibliographicSearchBar";
import api from "../api/search";

type SearchComponentState = {
  results?: BiblivreSearchResult;
  loading: boolean;
  isAdvancedMode: boolean;
  isShowExportFlyout: boolean;
  exportResults: Array<BiblioRecord>;
  isShowRecordDetailsFlyout: boolean;
};

const initialState: SearchComponentState = {
  loading: false,
  isAdvancedMode: false,
  isShowExportFlyout: false,
  exportResults: [],
  isShowRecordDetailsFlyout: false,
};

export function SearchComponent() {
  const [state, setState] = useState(initialState);

  const doSearch = async ({ query }: SearchParameters) => {
    toggleLoadingResults();

    const results = await (query === "" ? api.listAll() : api.search(query));

    setState({
      ...state,
      loading: false,
      results,
    });
  };

  const paginateResults = async (page: number): Promise<void> => {
    toggleLoadingResults();

    const { results } = state;

    const newResults = await api.paginate(
      page + 1,
      results?.search?.id ?? 0,
      0
    );

    setState({
      ...state,
      loading: false,
      results: newResults,
    });
  };

  const toggleLoadingResults = () => {
    setState({
      ...state,
      loading: true,
    });
  };

  const setRecordDetailFlyoutVisible = (visible: boolean) => {
    setState({
      ...state,
      isShowRecordDetailsFlyout: visible,
    });
  };

  const addToExport = (record: BiblioRecord): void => {
    setState({
      ...state,
      exportResults: [...state.exportResults, record],
    });
  };

  const { loading, results, isShowRecordDetailsFlyout } = state;

  let recordDetailsFlyout;

  if (isShowRecordDetailsFlyout) {
    recordDetailsFlyout = (
      <EuiFlyout
        type="overlay"
        onClose={() => setRecordDetailFlyoutVisible(false)}
      >
        <h1>Hello</h1>
      </EuiFlyout>
    );
  }

  return (
    <EuiFlexGroup direction="column">
      <EuiFlexItem>
        <BibliographicSearchBar onSubmit={doSearch} />
      </EuiFlexItem>
      <EuiFlexItem>
        <SearchResults
          results={results}
          onPageClick={paginateResults}
          isLoading={loading}
          onAddToExport={addToExport}
          onRecordClick={(record: BiblioRecord) => {
            setRecordDetailFlyoutVisible(true);
          }}
        />
      </EuiFlexItem>
      {recordDetailsFlyout}
    </EuiFlexGroup>
  );
}

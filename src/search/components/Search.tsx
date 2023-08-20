import { EuiFlexGroup, EuiFlexItem } from "@elastic/eui";

import SearchResults from "./SearchResults";

import { useState } from "react";
import {
  BiblioRecord,
  BiblivreSearchResult,
  FormFieldConfig,
  OpenBiblivreBibliographicRecord,
  SearchParameters,
} from "../types";
import { BibliographicSearchBar } from "./BibliographicSearchBar";
import { DetailedRecordFlyout } from "./DetailedRecordFlyout";
import { BibliographicSearchAPI } from "../api/search";
import usePartialState from "../../usePartialState";

type SearchComponentState = {
  results?: BiblivreSearchResult;
  loading: boolean;
  isAdvancedMode: boolean;
  isShowExportFlyout: boolean;
  exportResults: Array<BiblioRecord>;
  detailedRecord?: OpenBiblivreBibliographicRecord;
};

const initialState: SearchComponentState = {
  loading: false,
  isAdvancedMode: false,
  isShowExportFlyout: false,
  exportResults: [],
};

type SearchComponentProps = {
  api: BibliographicSearchAPI;
  biblioFields: Array<FormFieldConfig>;
};

export function SearchComponent({ api, biblioFields }: SearchComponentProps) {
  const [state, patchState] = usePartialState(initialState);

  const doSearch = async ({ query }: SearchParameters) => {
    toggleLoadingResults();

    const results = await (query === "" ? api.listAll() : api.search(query));

    patchState({
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

    patchState({
      loading: false,
      results: newResults,
    });
  };

  const toggleLoadingResults = () => {
    patchState({
      loading: true,
    });
  };

  const setDetailedRecord = (
    detailedRecord?: OpenBiblivreBibliographicRecord
  ) => {
    patchState({
      detailedRecord,
    });
  };

  const addToExport = (record: BiblioRecord): void => {
    patchState({
      exportResults: [...state.exportResults, record],
    });
  };

  const { loading, results, detailedRecord } = state;

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
          onRecordClick={setDetailedRecord}
          api={api}
        />
      </EuiFlexItem>
      {detailedRecord && (
        <DetailedRecordFlyout
          record={detailedRecord}
          biblioFormFieldsConfig={biblioFields}
          onClose={() => setDetailedRecord(undefined)}
          api={api}
        />
      )}
    </EuiFlexGroup>
  );
}

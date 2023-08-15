import { EuiButton, EuiFlexGroup, EuiFlexItem } from "@elastic/eui";

import SearchResults from "./SearchResults";

import { useState } from "react";
import { BiblivreSearchResult } from "../types";
import { BibliographicSearchBar } from "./BibliographicSearchBar";
import noop from "../utils/noop";
import api from "../api/search";

type SearchComponentState = {
  results?: BiblivreSearchResult;
  query: string;
  loading: boolean;
  isAdvancedMode: boolean;
};

export function SearchComponent() {
  const initialState: SearchComponentState = {
    loading: false,
    isAdvancedMode: false,
    query: "",
  };

  const [state, setState] = useState(initialState);

  const doSearch = async () => {
    toggleLoadingResults();

    const results = await (query === "" ? api.listAll() : api.search(query));

    setState({
      ...state,
      loading: false,
      results,
    });
  };

  const onQueryChange = (newQuery: string) => {
    setState({
      ...state,
      query: newQuery,
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

  const { query, loading, results, isAdvancedMode } = state;

  return (
    <>
      <EuiFlexGroup>
        <EuiFlexItem>
          <BibliographicSearchBar
            query={query}
            onQueryChange={onQueryChange}
            isAdvanced={isAdvancedMode}
            onAdvancedModeChanged={noop}
          />
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <EuiButton onClick={doSearch}>
            {query ? "Search" : "List All"}
          </EuiButton>
        </EuiFlexItem>
      </EuiFlexGroup>
      <div>
        <SearchResults
          results={results}
          onPageClick={paginateResults}
          isLoading={loading}
        />
      </div>
    </>
  );
}

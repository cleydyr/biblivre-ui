import { EuiFlexGroup, EuiFlexItem } from "@elastic/eui";

import SearchResults from "./SearchResults";

import { useState } from "react";
import { BiblivreSearchResult, SearchParameters } from "../types";
import { BibliographicSearchBar } from "./BibliographicSearchBar";
import api from "../api/search";

type SearchComponentState = {
  results?: BiblivreSearchResult;
  loading: boolean;
  isAdvancedMode: boolean;
};

export function SearchComponent() {
  const initialState: SearchComponentState = {
    loading: false,
    isAdvancedMode: false,
  };

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

  const { loading, results } = state;

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
        />
      </EuiFlexItem>
    </EuiFlexGroup>
  );
}

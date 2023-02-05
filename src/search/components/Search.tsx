import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiButton,
  EuiSearchBar
} from '@elastic/eui';

import SearchResults from './SearchResults';
import LoadingSearch from './LoadingSearch';

import { useState } from 'react';
import { BiblivreSearchResult } from '../types';
import { BibliographicSearchBar } from './BibliographicSearchBar';

type ResultState = BiblivreSearchResult | undefined;

export function SearchComponent() {
  const initialQuery = EuiSearchBar.Query.MATCH_ALL

  const [query, setQuery] = useState(initialQuery);

  const [results, setResults] = useState(undefined as ResultState);

  const [loading, setLoading] = useState(false)

  const doSearch = () => {
    setLoading(!loading)
  }

  return (
    <>
      <EuiFlexGroup direction='row'>
        <EuiFlexItem>
          <BibliographicSearchBar/>
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <EuiButton onClick={() => doSearch()}>Search</EuiButton>
        </EuiFlexItem>
      </EuiFlexGroup>
      <div>
        {loading ? <LoadingSearch /> : <SearchResults results={results} />}
      </div>
    </>
  );
}

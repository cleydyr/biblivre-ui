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
import noop from '../utils/noop';
import api from '../api/search';

type SearchComponentState = {
  results?: BiblivreSearchResult
  query?: string
  loading: boolean
}

export function SearchComponent() {
  const initialState: SearchComponentState = {
    loading: false
  };

  const [state, setState] = useState(initialState);

  const doSearch = async () => {
    setState({
      ...state,
      loading: true
    })

    const results = await (query === undefined ? api.listAll() : api.search(query))

    setState({
      ...state,
      loading: false,
      results
    })
  }

  const onQueryChange = (newQuery: string) => {
    setState({
      ...state,
      query: newQuery
    })
  }

  const {
    query,
    loading,
    results
  } = state;

  return (
    <>
      <BibliographicSearchBar query={query} onQueryChange={onQueryChange} />
      <EuiButton onClick={doSearch}>{query ? 'Search' : 'List All'} </EuiButton>
      <div>
        {loading ? <LoadingSearch /> : <SearchResults results={results} />}
      </div>
    </>
  );
}

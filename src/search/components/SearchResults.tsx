import { BiblivreSearchResult } from '../types';

type SearchResultProps = {
  results?: BiblivreSearchResult
}

const SearchResults = ({results}: SearchResultProps) => {
  return <ul>
    {results?.search.data.map(result => <li key={result.id}>{result.title}</li>)}
  </ul>;
}

export default SearchResults;
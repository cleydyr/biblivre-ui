import { EuiCallOut } from '@elastic/eui';
import { BiblivreSearchResult } from '../types';

type SearchResultProps = {
  results?: BiblivreSearchResult
}

type CalloutColor = "primary" | "success" | "warning" | "danger" | undefined

const SearchResults = ({ results }: SearchResultProps) => {
  if (results?.search) {
    return (
      <ul>
        {results?.search?.data.map(result => <li key={result.id}>{result.title}</li>)}
      </ul>
    );
  }
  
  return <EuiCallOut title={results?.message} color={results?.message_level as CalloutColor} ></EuiCallOut>
}

export default SearchResults;
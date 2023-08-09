import { EuiCallOut, EuiPagination } from "@elastic/eui";
import { BiblivreSearchResult } from "../types";
import noop from "../utils/noop";

type SearchResultProps = {
  results?: BiblivreSearchResult;
};

type CalloutColor = "primary" | "success" | "warning" | "danger" | undefined;

const SearchResults = ({ results }: SearchResultProps) => {
  if (results?.search) {
    return (
      <>
        <ul>
          {results?.search?.data.map((result) => (
            <li key={result.id}>{result.title}</li>
          ))}
        </ul>
        <EuiPagination
          aria-label="Few pages example"
          pageCount={results?.search.pageCount}
          activePage={results?.search?.page}
          onPageClick={noop}
        />
      </>
    );
  }

  return (
    <EuiCallOut
      title={results?.message}
      color={results?.message_level as CalloutColor}
    ></EuiCallOut>
  );
};

export default SearchResults;

import { EuiCallOut, EuiPagination } from "@elastic/eui";
import { BiblivreSearchResult } from "../types";

type SearchResultProps = {
  results?: BiblivreSearchResult;
  onPageClick: (page: number) => void;
};

type CalloutColor = "primary" | "success" | "warning" | "danger" | undefined;

const SearchResults = ({ results, onPageClick }: SearchResultProps) => {
  if (results?.search) {
    const { data, pageCount, page } = results?.search;

    return (
      <>
        <ul>
          {data.map((record) => (
            <li key={record.id}>{record.title}</li>
          ))}
        </ul>
        <EuiPagination
          aria-label={`Pagination component showing page ${page} of ${pageCount}`}
          pageCount={pageCount}
          activePage={page}
          onPageClick={onPageClick}
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

import { EuiCallOut, EuiPagination, EuiSkeletonRectangle } from "@elastic/eui";
import { BiblivreSearchResult } from "../types";

type SearchResultProps = {
  results?: BiblivreSearchResult;
  onPageClick: (page: number) => void;
  isLoading: boolean;
};

type CalloutColor = "primary" | "success" | "warning" | "danger" | undefined;

const SearchResults = ({
  results,
  onPageClick,
  isLoading,
}: SearchResultProps) => {
  if (isLoading) {
    return (
      <>
        {Array(10)
          .fill(0)
          .map((_) => (
            <EuiSkeletonRectangle
              isLoading={true}
              borderRadius="s"
              width={540}
              height={240}
              style={{ margin: 16 }}
            ></EuiSkeletonRectangle>
          ))}
      </>
    );
  }

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

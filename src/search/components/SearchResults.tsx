import { EuiCallOut, EuiFlexGrid, EuiProgress, Pagination } from "@elastic/eui";
import { BiblivreSearchResult } from "../types";
import RecordSearchResultItem from "./RecordSearchResultItem";

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
  if (results?.search) {
    const { data, recordCount, recordsPerPage, page } = results?.search;

    return (
      <EuiFlexGrid columns={4}>
        {isLoading && <EuiProgress size="xs" position="fixed" />}
        {data.map((record) => (
          <RecordSearchResultItem
            key={record.id}
            record={record}
            isLoading={isLoading}
          />
        ))}
      </EuiFlexGrid>
    );
  }

  return (
    <>
      {isLoading && <EuiProgress size="m" position="fixed" />}
      <EuiCallOut
        title={results?.message}
        color={results?.message_level as CalloutColor}
      ></EuiCallOut>
    </>
  );
};

export default SearchResults;

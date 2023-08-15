import {
  EuiCallOut,
  EuiFlexGrid,
  EuiFlexGroup,
  EuiPagination,
  EuiProgress,
} from "@elastic/eui";
import { BiblivreSearchResult, CalloutColor, SearchResult } from "../types";
import RecordSearchResultItem from "./RecordSearchResultItem";
import { ReactNode } from "react";

type SearchResultProps = {
  results?: BiblivreSearchResult;
  onPageClick: (page: number) => Promise<void>;
  isLoading: boolean;
};

const pageCount = (recordCount: number, recordsPerPage: number): number => {
  return Math.ceil(recordCount / recordsPerPage);
};

const renderSearchResults = (
  search: SearchResult,
  isLoading: boolean,
  onPageClick: (page: number) => Promise<void>
): ReactNode => {
  const { data, recordCount, recordsPerPage, page } = search;

  return (
    <EuiFlexGrid>
      <EuiFlexGrid columns={4}>
        {data.map((record) => (
          <RecordSearchResultItem
            key={record.id}
            record={record}
            isLoading={isLoading}
          />
        ))}
      </EuiFlexGrid>
      <EuiFlexGroup justifyContent="center">
        <EuiPagination
          pageCount={pageCount(recordCount, recordsPerPage)}
          activePage={page}
          onPageClick={onPageClick}
        />
      </EuiFlexGroup>
    </EuiFlexGrid>
  );
};

const renderCallout = (results?: BiblivreSearchResult): ReactNode => {
  if (results?.message) {
    return (
      <EuiCallOut
        title={results?.message}
        color={results?.message_level as CalloutColor}
      ></EuiCallOut>
    );
  }
};

const SearchResults = ({
  results,
  onPageClick,
  isLoading,
}: SearchResultProps) => {
  return (
    <EuiFlexGrid>
      {isLoading && <EuiProgress size="s" position="fixed" color="primary" />}
      {results?.search
        ? renderSearchResults(results.search, isLoading, onPageClick)
        : renderCallout(results)}
    </EuiFlexGrid>
  );
};

export default SearchResults;

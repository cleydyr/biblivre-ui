import {
  EuiCallOut,
  EuiFlexGrid,
  EuiFlexGroup,
  EuiPagination,
  EuiProgress,
  EuiSkeletonRectangle,
} from "@elastic/eui";
import {
  BiblioRecord,
  BiblivreSearchResult,
  CalloutColor,
  OpenBiblivreBibliographicRecord,
  SearchResult,
} from "../types";
import RecordSearchResultItem from "./RecordSearchResultItem";
import { ReactNode } from "react";
import api, { BibliographicSearchAPI } from "../api/search";

type SearchResultProps = {
  results?: BiblivreSearchResult;
  onPageClick: (page: number) => Promise<void>;
  isLoading: boolean;
  onAddToExport: (record: BiblioRecord) => void;
  onRecordClick: (record?: OpenBiblivreBibliographicRecord) => void;
  api: BibliographicSearchAPI;
};

const pageCount = (recordCount: number, recordsPerPage: number): number => {
  return Math.ceil(recordCount / recordsPerPage);
};

const renderSearchResults = (
  search: SearchResult,
  isLoading: boolean,
  onPageClick: (page: number) => Promise<void>,
  onAddToExport: (record: BiblioRecord) => void,
  onRecordClick: (record?: OpenBiblivreBibliographicRecord) => void,
  api: BibliographicSearchAPI
): ReactNode => {
  const { data, recordCount, recordsPerPage, page } = search;

  const loadingResultsPlaceholder = Array(20)
    .fill(0)
    .map((_, index) => (
      <EuiSkeletonRectangle key={index} width={290.8} height={488} />
    ));

  return (
    <EuiFlexGrid>
      <EuiFlexGrid columns={4}>
        {isLoading
          ? loadingResultsPlaceholder
          : data.map((record) => (
              <RecordSearchResultItem
                key={record.id}
                record={record}
                onAddToExport={() => onAddToExport(record)}
                onClick={onRecordClick}
                api={api}
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
  onAddToExport,
  onRecordClick,
  api,
}: SearchResultProps) => {
  return (
    <EuiFlexGrid>
      {isLoading && <EuiProgress size="s" position="fixed" color="primary" />}
      {results?.search
        ? renderSearchResults(
            results.search,
            isLoading,
            onPageClick,
            onAddToExport,
            onRecordClick,
            api
          )
        : renderCallout(results)}
    </EuiFlexGrid>
  );
};

export default SearchResults;

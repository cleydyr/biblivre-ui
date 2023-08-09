import {
  EuiBasicTable,
  EuiCallOut,
  EuiProgress,
  Pagination,
} from "@elastic/eui";
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
  if (results?.search) {
    const { data, recordCount, recordsPerPage, page } = results?.search;

    const pagination: Pagination = {
      pageIndex: page,
      pageSize: recordsPerPage,
      totalItemCount: recordCount,
      showPerPageOptions: false,
    };

    const columns = [
      {
        field: "title",
        name: "Title",
        width: "48%",
        truncateText: true,
      },
      {
        field: "author",
        name: "Author",
        width: "16%",
        truncateText: true,
      },
      {
        field: "publicationYear",
        name: "Publication Year",
        width: "8%",
      },
      {
        field: "shelfLocation",
        name: "Shelf location",
      },
      {
        field: "subject",
        name: "Subject",
        // width: "36%",
        truncateText: true,
      },
    ];

    return (
      <>
        {isLoading && <EuiProgress size="m" position="fixed" />}
        <EuiBasicTable
          tableCaption="Search results"
          items={data}
          columns={columns}
          pagination={pagination}
          onChange={({ page: { index } }) => onPageClick(index)}
        />
      </>
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

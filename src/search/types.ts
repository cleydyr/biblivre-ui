export type BiblioRecordRaw = {
  holdings_count: number;
  holdings_lent: number;
  attachments: Attachment[];
  created: string;
  author: string;
  subject: string;
  isbn?: string;
  title: string;
  shelf_location: string;
  material_type: string;
  database: string;
  publication_year: string;
  marc: string;
  modified: string;
  json: object;
  id: number;
  holdings_reserved: number;
  holdings_available: number;
};
export type SearchResultRaw = {
  record_count: number;
  record_limit: number;
  records_per_page: number;
  indexing_group_count: IndexingGroupCountRaw[];
  data: BiblioRecordRaw[];
};
export type IndexingGroup = {
  defaultSort: boolean;
  translationKey: string;
  id: number;
  sortable: boolean;
};
export type IndexingGroupRaw = {
  default_sort: boolean;
  translation_key: string;
  id: number;
  sortable: boolean;
};
export type IndexingGroupCount = {
  groupId: number;
  resultCount: number;
};
export type IndexingGroupCountRaw = {
  group_id: number;
  result_count: number;
};
type Attachment = {
  path: string;
  file: string;
  name: string;
  uri: string;
};
export type BiblioRecord = {
  holdingsCount: number;
  holdingsLent: number;
  attachments: Attachment[];
  created: Date;
  author: string;
  subject: string;
  isbn?: string;
  title: string;
  shelfLocation: string;
  materialType: string;
  database: string;
  publicationYear: string;
  marc: string;
  modified: Date;
  json: object;
  id: number;
  holdingsReserved: number;
  holdingsAvailable: number;
};
export type SearchResult = {
  recordCount: number;
  recordLimit: number;
  recordsPerPage: number;
  indexingGroupCount: IndexingGroupCount[];
  data: BiblioRecord[];
};
export type BiblivreSearchResult = {
  search: SearchResult;
  indexingGroups: IndexingGroup[];
  success: boolean;
};
export type BiblivreSearchResultRaw = {
  search: SearchResultRaw;
  indexing_groups: IndexingGroupRaw[];
  success: boolean;
};

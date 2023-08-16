export type BiblioRecordRaw = {
  holdings_count: number;
  holdings_lent: number;
  created: string;
  author: string;
  subject: string;
  isbn?: string;
  title: string;
  shelf_location: string;
  material_type: MaterialType;
  database: string;
  publication_year: string;
  marc: string;
  modified: string;
  json: BiblivreMarcJson;
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
  page: number;
  page_count: number;
  time: number;
  id: number;
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
  json: BiblivreMarcJson;
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
  page: number;
  pageCount: number;
  time: number;
  id: number;
};
export type BiblivreSearchResult = {
  message?: string;
  message_level?: string;
  search?: SearchResult;
  indexingGroups?: IndexingGroup[];
  success: boolean;
};
export type BiblivreSearchResultRaw = {
  message?: string;
  message_level?: string;
  search?: SearchResultRaw;
  indexing_groups?: IndexingGroupRaw[];
  success: boolean;
};

export type FieldRaw = {
  datafield: string;
  value: string;
};

export type HoldingAvailability = "available" | "unavailable";

export type MaterialType =
  | "book"
  | "pamphlet"
  | "manuscript"
  | "thesis"
  | "periodic"
  | "articles"
  | "computer_legible"
  | "map"
  | "photo"
  | "movie"
  | "score"
  | "music"
  | "nonmusical_sound"
  | "object_3d"
  | "authorities"
  | "vocabulary"
  | "holdings";

export type HoldingRaw = {
  accession_number: string;
  attachments: Array<Attachment>;
  availability: HoldingAvailability;
  created: string;
  database: string;
  id: number;
  location_d: string;
  material_type: MaterialType;
  modified: string;
  record_id: string;
  shelf_location: string;
};

export type Holding = {
  accession_number: string;
  attachments: Array<Attachment>;
  availability: HoldingAvailability;
  created: Date;
  database: string;
  id: number;
  location_d: string;
  material_type: MaterialType;
  modified: Date;
  record_id: string;
  shelf_location: string;
};

export type MarcSubfieldTag =
  | "a"
  | "b"
  | "c"
  | "d"
  | "e"
  | "f"
  | "g"
  | "h"
  | "i"
  | "j"
  | "k"
  | "l"
  | "m"
  | "n"
  | "o"
  | "p"
  | "q"
  | "r"
  | "s"
  | "t"
  | "u"
  | "v"
  | "w"
  | "x"
  | "y"
  | "z";

export type MarcFieldValue = Record<
  MarcSubfieldTag | "ind1" | "ind2",
  Array<string>
>;

export type Digit = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";

export type MarcFieldTag = string;

export type BiblivreMarcJson = Record<MarcFieldTag, Array<MarcFieldValue>>;

export type OpenBiblivreBibliographicRecordRaw = {
  attachments: Array<Attachment>;
  author: string;
  created: string;
  database: string;
  fields: Array<FieldRaw>;
  holdings: Array<HoldingRaw>;
  holdings_available: number;
  holdings_count: number;
  holdings_lent: number;
  holdings_reserved: number;
  id: number;
  json: BiblivreMarcJson;
  marc: string;
  material_type: MaterialType;
  modified: string;
  publication_year: string;
  shelf_location: string;
  subject: string;
  title: string;
};

export type Field = FieldRaw;

export type OpenBiblivreBibliographicRecord = {
  attachments: Array<Attachment>;
  author: string;
  created: Date;
  database: string;
  fields: Array<FieldRaw>;
  holdings: Array<HoldingRaw>;
  holdingsAvailable: number;
  holdingsCount: number;
  holdingsLent: number;
  holdingsReserved: number;
  id: number;
  json: BiblivreMarcJson;
  marc: string;
  materialType: MaterialType;
  modified: Date;
  publicationYear: string;
  shelfLocation: string;
  subject: string;
  title: string;
};

export type OpenBiblivreBibliographicRecordResultRaw = {
  data?: OpenBiblivreBibliographicRecordRaw;
  success: boolean;
  message_level?: MessageLevel;
  message?: string;
};

export type OpenBiblivreBibliographicRecordResult = {
  data?: OpenBiblivreBibliographicRecord;
  success: boolean;
  messageLevel?: MessageLevel;
  message?: string;
};

export type MessageLevel = "warning" | "error";

export type SimpleSearchParameters = {
  query: string;
};

export type AdvancedSearchParameters = {
  query: string;
};

export type SearchParameters =
  | SimpleSearchParameters
  | AdvancedSearchParameters;

export type CalloutColor =
  | "primary"
  | "success"
  | "warning"
  | "danger"
  | undefined;

export type AutocompleteType =
  | "disabled"
  | "previous_values"
  | "fixed_table"
  | "fixed_table_with_previous_values"
  | "biblio"
  | "authorities"
  | "vocabulary";

export type FormSubfieldConfig = {
  subfield: MarcSubfieldTag;
  datafield: MarcFieldTag;
  autocompleteType: AutocompleteType;
  collapsed: boolean;
  repeatable: boolean;
  sortOrder: number;
};

export type FormFieldConfig = {
  materialType: Array<MaterialType>;
  datafield: MarcFieldTag;
  collapsed: boolean;
  repeatable: boolean;
  subfields: Array<FormSubfieldConfig>;
  sortOrder: number;
};

export type FormFieldConfigRaw = {
  material_type: Array<MaterialType>;
  datafield: MarcFieldTag;
  collapsed: boolean;
  repeatable: boolean;
  subfields: Array<FormSubfieldConfigRaw>;
  sortOrder: number;
};

export type FormSubfieldConfigRaw = {
  subfield: MarcSubfieldTag;
  datafield: MarcFieldTag;
  autocomplete_type: AutocompleteType;
  collapsed: boolean;
  repeatable: boolean;
  sortOrder: number;
};

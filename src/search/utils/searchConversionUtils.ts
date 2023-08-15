import {
  IndexingGroupRaw,
  IndexingGroup,
  IndexingGroupCountRaw,
  IndexingGroupCount,
  BiblioRecordRaw,
  BiblioRecord,
  SearchResultRaw,
  SearchResult,
  BiblivreSearchResultRaw,
  BiblivreSearchResult,
  OpenBiblivreBibliographicRecordResultRaw,
  OpenBiblivreBibliographicRecordRaw,
  OpenBiblivreBibliographicRecord,
  OpenBiblivreBibliographicRecordResult,
} from "../types";

function toIndexingGroup(indexingGroupRaw: IndexingGroupRaw): IndexingGroup {
  return {
    sortable: indexingGroupRaw.sortable,
    defaultSort: indexingGroupRaw.default_sort,
    id: indexingGroupRaw.id,
    translationKey: indexingGroupRaw.translation_key,
  };
}
function toIndexingGroupCount(
  indexingGroupCount: IndexingGroupCountRaw
): IndexingGroupCount {
  return {
    groupId: indexingGroupCount.group_id,
    resultCount: indexingGroupCount.result_count,
  };
}
function toData(biblioRecord: BiblioRecordRaw): BiblioRecord {
  return {
    ...biblioRecord,
    created: new Date(biblioRecord.created),
    holdingsReserved: biblioRecord.holdings_reserved,
    holdingsAvailable: biblioRecord.holdings_available,
    holdingsCount: biblioRecord.holdings_count,
    holdingsLent: biblioRecord.holdings_lent,
    materialType: biblioRecord.material_type,
    modified: new Date(biblioRecord.modified),
    publicationYear: biblioRecord.publication_year,
    shelfLocation: biblioRecord.shelf_location,
    subject: biblioRecord.subject,
  };
}
function toSearchResult(
  searchResultRaw?: SearchResultRaw
): SearchResult | undefined {
  if (searchResultRaw === undefined) {
    return undefined;
  }

  return {
    recordCount: searchResultRaw.record_count,
    indexingGroupCount: searchResultRaw.indexing_group_count.map(
      (indexingGroupCount) => toIndexingGroupCount(indexingGroupCount)
    ),
    data: searchResultRaw.data.map((datum) => toData(datum)),
    recordLimit: searchResultRaw.record_limit,
    recordsPerPage: searchResultRaw.records_per_page,
    page: searchResultRaw.page - 1,
    pageCount: searchResultRaw.page_count,
    time: searchResultRaw.time,
    id: searchResultRaw.id,
  };
}
export function toBiblivreSearchResult(
  json: BiblivreSearchResultRaw
): BiblivreSearchResult {
  return {
    ...json,
    search: toSearchResult(json.search),
    indexingGroups: json.indexing_groups?.map((indexingGroupRaw) =>
      toIndexingGroup(indexingGroupRaw)
    ),
  };
}

function toOpenBiblivreBibliographicRecord(
  json: OpenBiblivreBibliographicRecordRaw | undefined
): OpenBiblivreBibliographicRecord {
  if (json === undefined) {
    throw new Error(`can't parse undefined json`);
  }

  return {
    ...json,
    created: new Date(json.created),
    modified: new Date(json.modified),
    holdingsAvailable: json.holdings_available,
    holdingsCount: json.holdings_count,
    holdingsLent: json.holdings_lent,
    holdingsReserved: json.holdings_reserved,
    materialType: json.material_type,
    publicationYear: json.publication_year,
    shelfLocation: json.shelf_location,
  };
}

export function toOpenBiblivreBibliographicRecordResult(
  json: OpenBiblivreBibliographicRecordResultRaw
): OpenBiblivreBibliographicRecordResult {
  return {
    ...json,
    data: toOpenBiblivreBibliographicRecord(json.data),
  };
}

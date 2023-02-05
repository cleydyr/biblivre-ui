import { IndexingGroupRaw, IndexingGroup, IndexingGroupCountRaw, IndexingGroupCount, BiblioRecordRaw, BiblioRecord, SearchResultRaw, SearchResult, BiblivreSearchResultRaw, BiblivreSearchResult } from '../types';

function toIndexingGroup(indexingGroupRaw: IndexingGroupRaw): IndexingGroup {
  return {
    sortable: indexingGroupRaw.sortable,
    defaultSort: indexingGroupRaw.default_sort,
    id: indexingGroupRaw.id,
    translationKey: indexingGroupRaw.translation_key
  };
}
function toIndexingGroupCount(indexingGroupCount: IndexingGroupCountRaw): IndexingGroupCount {
  return {
    groupId: indexingGroupCount.group_id,
    resultCount: indexingGroupCount.result_count
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
    subject: biblioRecord.shelf_location,
  };
}
function toSearchResult(searchResultRaw: SearchResultRaw): SearchResult {
  return {
    recordCount: searchResultRaw.record_count,
    indexingGroupCount: searchResultRaw.indexing_group_count
      .map(indexingGroupCount => toIndexingGroupCount(indexingGroupCount)),
    data: searchResultRaw.data.map(datum => toData(datum)),
    recordLimit: searchResultRaw.record_limit,
    recordsPerPage: searchResultRaw.records_per_page
  };
}
export function toBiblivreSearchResult(json: BiblivreSearchResultRaw): BiblivreSearchResult {
  return {
    search: toSearchResult(json.search),
    indexingGroups: json.indexing_groups.map(indexingGroupRaw => toIndexingGroup(indexingGroupRaw)),
    success: json.success
  };
}

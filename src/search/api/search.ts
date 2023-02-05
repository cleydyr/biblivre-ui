import searchResults from './search_result.json'

import {BiblivreSearchResult} from '../types'

import { toBiblivreSearchResult } from '../utils/searchConversionUtils'

type BibliographicSearchAPI = {
    search: (term: string) => Promise<BiblivreSearchResult>
}

const api: BibliographicSearchAPI = {
    search: async (term) => Promise.resolve(toBiblivreSearchResult(searchResults))
}

export default api
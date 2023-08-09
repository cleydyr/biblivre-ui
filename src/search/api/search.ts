import { BiblivreSearchResult } from "../types";

import { toBiblivreSearchResult } from "../utils/searchConversionUtils";

type BibliographicSearchAPI = {
  listAll: () => Promise<BiblivreSearchResult>;
  search: (query: string) => Promise<BiblivreSearchResult>;
  paginate: (
    page: number,
    search_id: number,
    indexingGroup: number
  ) => Promise<BiblivreSearchResult>;
};

const url = "https://baixadaliteraria.biblivre.cloud/bcjudithlacaz/";

const api: BibliographicSearchAPI = {
  listAll: async () => {
    const responseBody = await fetchJSONFromServer(
      url,
      "cataloging.bibliographic",
      "search",
      {
        search_parameters: JSON.stringify({
          database: "main",
          material_type: "all",
          search_mode: "list_all",
        }),
      }
    );

    return toBiblivreSearchResult(responseBody);
  },
  search: async (query: string) => {
    const responseBody = await fetchJSONFromServer(
      url,
      "cataloging.bibliographic",
      "search",
      {
        search_parameters: JSON.stringify({
          database: "main",
          material_type: "all",
          search_mode: "simple",
          search_terms: [{ query }],
        }),
      }
    );

    return toBiblivreSearchResult(responseBody);
  },

  paginate: async (page: number, searchId: number, indexingGroup: number) => {
    const responseBody = await fetchJSONFromServer(
      url,
      "cataloging.bibliographic",
      "paginate",
      {
        page,
        search_id: searchId,
        indexing_group: indexingGroup,
      }
    );

    return toBiblivreSearchResult(responseBody);
  },
};

const actions = {
  SEARCH: "search",
  PAGINATE: "paginate",
  PING: "ping",
  OPEN: "open",
};

const modules = {
  CATALOGING_BIBLIOGRAPHIC: "cataloging.bibliographic",
  MENU: "menu",
};

// async function fetchi18n(url: string, i18nPath: string) {
//   const i18nResponse = await fetch(`${url}/${i18nPath}`);

//   const i18nScript = await i18nResponse.text();

//   return JSON.parse(i18nScript.replace('Translations.translations = ', ''));
// }

async function fetchJSONFromServer(
  host: string,
  module: string,
  action: string,
  otherParams: object
) {
  const response = await fetch(host, {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
    body: new URLSearchParams({
      controller: "json",
      module,
      action,
      ...otherParams,
    }).toString(),
  });

  return response.json();
}

export async function getCatalographicSearchResults(
  host: string,
  query: string
) {
  const result = fetchJSONFromServer(
    host,
    modules.CATALOGING_BIBLIOGRAPHIC,
    actions.SEARCH,
    {
      search_parameters: JSON.stringify({
        database: "main",
        material_type: "all",
        search_mode: query ? "simple" : "list_all",
        search_terms: query ? [{ query }] : undefined,
      }),
    }
  );

  return result;
}

export async function paginateCatalographicSearchResults(
  host: string,
  search_id: number,
  page: number,
  indexing_group: number
) {
  const result = fetchJSONFromServer(
    host,
    modules.CATALOGING_BIBLIOGRAPHIC,
    actions.PAGINATE,
    {
      page,
      search_id,
    }
  );

  return result;
}

export async function openBibliographicRecord(host: string, recordId: number) {
  return await fetchJSONFromServer(
    host,
    modules.CATALOGING_BIBLIOGRAPHIC,
    actions.OPEN,
    {
      id: recordId,
    }
  );
}

export default api;

import { FormFieldConfig, FormFieldConfigRaw } from "../search/types";
import { fetchAndselect } from "../translations/htmlParser";

export type LibraryData = {
  title: string;
  subtitle: string;
  i18n: Record<string, string>;
  biblioFields: Array<FormFieldConfig>;
  holdingFields: Array<FormFieldConfig>;
};

export async function getLibraryData(url: string): Promise<LibraryData> {
  const [title, subtitle, i18nPath, biblioFieldsPath, holdingFieldsPath] =
    await fetchAndselect(`${url}?action=search_bibliographic`, [
      "/html/body/form/div[1]/div[2]/h1/a/text()",
      "/html/body/form/div[1]/div[2]/h2/text()",
      "//script[contains(@src, '.i18n.js')]/@src",
      "//script[contains(@src, 'cataloging.biblio')]/@src",
      "//script[contains(@src, 'cataloging.holding')]/@src",
    ]);

  const [i18n, biblioFields, holdingFields] = await Promise.all(
    [i18nPath, biblioFieldsPath, holdingFieldsPath].map((path) =>
      fetchScriptData(url, path ?? "")
    )
  );

  return {
    title,
    subtitle,
    i18n: toI18n(i18n),
    biblioFields: toFields(biblioFields),
    holdingFields: toFields(holdingFields),
  };
}

function toI18n(i18n: Record<string, any>): Record<string, string> {
  let answer = {};

  for (let key of Object.keys(i18n)) {
    answer = {
      ...answer,
      [key]: i18n[key],
    };
  }

  return answer;
}

function toFields(
  rawFields: Array<FormFieldConfigRaw>
): Array<FormFieldConfig> {
  return rawFields.map((rawField) => ({
    ...rawField,
    materialType: rawField.material_type,
    subfields: rawField.subfields.map((subfield) => ({
      ...subfield,
      autocompleteType: subfield.autocomplete_type,
    })),
  }));
}

async function fetchScriptData(url: string, path: string) {
  const response = await fetch(`${url}/${path}`);

  const script = await response.text();

  return JSON.parse(script.slice(script.indexOf("=") + 1, -1));
}

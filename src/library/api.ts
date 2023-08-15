import { fetchAndselect } from "../translations/htmlParser";

export async function getLibraryData(url: string) {
  const [title, subtitle, i18nPath, biblioFieldsPath, holdingFieldsPath] =
    await fetchAndselect(url, [
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
    i18n,
    biblioFields,
    holdingFields,
  };
}

async function fetchScriptData(url: string, path: string) {
  const response = await fetch(`${url}/${path}`);

  const script = await response.text();

  return JSON.parse(script.slice(script.indexOf("=")));
}

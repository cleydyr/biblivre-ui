import xpath from "xpath";
import { DOMParser } from "xmldom";
import { decode } from "html-entities";

export const select = (html: string | null | undefined) => (path: string) => {
  const parser = new DOMParser();

  const doc = parser.parseFromString(decode(html));

  return xpath.select(path, doc);
};

export async function fetchAndselect(url: string, paths: any[]) {
  const response = await fetch(url);

  const html = await response.text();

  return paths.map((path) => {
    const nodes = select(html)(path);

    if (Array.isArray(nodes)) {
      const [node] = nodes;

      return node.nodeValue ?? "";
    }

    throw new Error(`can't find path ${path}`);
  });
}

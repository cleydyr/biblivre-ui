import translations from "./pt_BR";

export function field(field: string, language: string): string {
  const key = `cataloging.tab.record.custom.field_label.biblio_${field}`;
  var backupKey = `marc.bibliographic.datafield.${field}`;

  return translations[key] || translations[backupKey];
}

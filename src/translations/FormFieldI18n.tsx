import { EuiI18n } from "@elastic/eui";

type FormFieldI18nProps = {
  field: string;
};

export function FormFieldI18n(props: FormFieldI18nProps) {
  const { field } = props;

  const key = `cataloging.tab.record.custom.field_label.biblio_${field}`;
  var backupKey = `marc.bibliographic.datafield.${field}`;

  return (
    <EuiI18n
      token={key}
      default={
        <EuiI18n
          token={backupKey}
          default={`*No translation for neither ${key} or ${backupKey} found`}
        />
      }
    />
  );
}

import { ReactNode } from "react";
import { FormFieldConfig, OpenBiblivreBibliographicRecord } from "../../types";

export type TabContentProps = {
  attachmentURL: (path: string) => string;
  record: OpenBiblivreBibliographicRecord;
  biblioFormFieldsConfig: Array<FormFieldConfig>;
};

export type TabDefinition = {
  order: number;
  id: string;
  name: ReactNode;
  append?: (record: OpenBiblivreBibliographicRecord) => ReactNode;
  content: (props: TabContentProps) => ReactNode;
};

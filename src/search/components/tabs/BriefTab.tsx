import { EuiDescriptionList, EuiI18n } from "@elastic/eui";
import { FormFieldI18n } from "../../../translations/FormFieldI18n";
import { TabDefinition } from "./types";

const BriefTab: TabDefinition = {
  order: 1,
  id: "brief",
  name: (
    <EuiI18n token="cataloging.tabs.brief" default="Resumo Catalográfico" />
  ),
  content: ({ record }) => (
    <EuiDescriptionList
      listItems={record.fields.map(({ value, datafield }) => ({
        title: <FormFieldI18n field={datafield} />,
        description: value,
      }))}
    />
  ),
};

export default BriefTab;

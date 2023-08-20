import { EuiCodeBlock, EuiI18n } from "@elastic/eui";
import { TabDefinition } from "./types";

const MarcTab: TabDefinition = {
  order: 3,
  id: "marc",
  name: <EuiI18n token="cataloging.tabs.marc" default="MARC" />,
  content: ({ record: { marc } }) => (
    <EuiCodeBlock isCopyable overflowHeight={960}>
      {marc}
    </EuiCodeBlock>
  ),
};

export default MarcTab;

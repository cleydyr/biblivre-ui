import { TabDefinition } from "./types";

import brief from "./BriefTab";
import form from "./FormTab";
import marc from "./MarcTab";
import holdings from "./HoldingsTab";
import media from "./DigitalMediaTab";

const allTabs: Array<TabDefinition> = [brief, form, marc, holdings, media].sort(
  (a, b) => a.order - b.order
);

export default allTabs;

import {
  EuiBasicTable,
  EuiDescriptionList,
  EuiFlexGroup,
  EuiI18n,
  EuiNotificationBadge,
} from "@elastic/eui";
import { OpenBiblivreBibliographicRecord } from "../../types";
import { ReactNode } from "react";
import { TabDefinition } from "./types";

const HoldingsTab: TabDefinition = {
  order: 0,
  id: "holdings",
  name: <EuiI18n token="cataloging.tabs.holdings" default="Exemplares" />,
  append: (openedRecord: OpenBiblivreBibliographicRecord) => (
    <EuiNotificationBadge color="subdued">
      {openedRecord.holdingsCount}
    </EuiNotificationBadge>
  ),
  content: ({ record }) => {
    const columns = ["accession_number", "shelf_location"].map((property) => ({
      field: property,
      name: <EuiI18n token={`search.holding.${property}`} default="?" />,
    }));

    const identifierColumn = {
      field: "id",
      name: "ID",
    };

    return (
      <EuiFlexGroup direction="column">
        {holdingsCountSummary(record)}
        <EuiBasicTable
          items={record.holdings.filter(
            (holding) => holding.availability === "available"
          )}
          columns={[identifierColumn, ...columns]}
          noItemsMessage={
            <EuiI18n
              token="circulation.lending.no_holding_found"
              default="Nenhum exemplar encontrado"
            />
          }
        />
      </EuiFlexGroup>
    );
  },
};

function holdingsCountSummary(
  openedRecord: OpenBiblivreBibliographicRecord
): ReactNode {
  return (
    <EuiDescriptionList
      gutterSize="s"
      compressed
      type="responsiveColumn"
      listItems={[
        {
          title: (
            <EuiI18n
              token="search.bibliographic.holdings_available"
              default="Disponíveis"
            />
          ),
          description: openedRecord.holdingsAvailable,
        },
        {
          title: (
            <EuiI18n
              token="search.bibliographic.holdings_lent"
              default="Emprestados"
            />
          ),
          description: openedRecord.holdingsLent,
        },
        {
          title: (
            <EuiI18n
              token="search.bibliographic.holdings_reserved"
              default="Reservados"
            />
          ),
          description: openedRecord.holdingsReserved,
        },
      ]}
    />
  );
}

export default HoldingsTab;

import { EuiSwitch } from "@elastic/eui";
import noop from "../utils/noop";
import AdvancedBibliographicSearchBar from "./AdvancedBibliographicSearchBar";
import SimpleBibliographicSearchBar from "./SimpleBibliographicSearchBar";

type BibliographicSearchBarProps = {
  query: string;
  isAdvanced: boolean;
  onQueryChange: (query: string) => void;
  onAdvancedModeChanged: (isAdvanced: boolean) => void;
};

export const BibliographicSearchBar = (props: BibliographicSearchBarProps) => {
  const { query, isAdvanced, onQueryChange } = props;

  return (
    <div>
      <div>
        {isAdvanced ? (
          <AdvancedBibliographicSearchBar onQueryChange={onQueryChange} />
        ) : (
          <SimpleBibliographicSearchBar
            queryText={query}
            onQueryChange={onQueryChange}
          />
        )}
      </div>
      <div>
        <EuiSwitch label="Advanced" checked={isAdvanced} onChange={noop} />
      </div>
    </div>
  );
};

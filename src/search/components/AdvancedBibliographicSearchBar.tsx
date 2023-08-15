import { EuiSearchBar } from "@elastic/eui";
import { SearchParameters } from "../types";

type AdvancedBibliographicSearchBarProps = {
  onQueryChange: (search: SearchParameters) => void;
};

const AdvancedBibliographicSearchBar = (
  props: AdvancedBibliographicSearchBarProps
) => {
  const { onQueryChange } = props;

  return (
    <EuiSearchBar
      onChange={(evt) =>
        onQueryChange({
          query: evt.queryText,
        })
      }
    />
  );
};

export default AdvancedBibliographicSearchBar;

import { EuiSearchBar } from "@elastic/eui";

type AdvancedBibliographicSearchBarProps = {
  onQueryChange: (search: string) => void;
};

const AdvancedBibliographicSearchBar = (
  props: AdvancedBibliographicSearchBarProps
) => {
  const { onQueryChange } = props;

  return <EuiSearchBar onChange={(evt) => onQueryChange(evt.queryText)} />;
};

export default AdvancedBibliographicSearchBar;

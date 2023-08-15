import { EuiFieldSearch } from "@elastic/eui";
import { ReactElement, useState } from "react";

type SimpleBibliographicSearchBarProps = {
  onQueryChange: (search: string) => void;
  onSearch: (search: string) => void;
  submitButton?: ReactElement;
};

const SimpleBibliographicSearchBar = (
  props: SimpleBibliographicSearchBarProps
) => {
  const { onSearch, onQueryChange, submitButton } = props;

  const [query, setQuery] = useState("");

  return (
    <EuiFieldSearch
      append={submitButton}
      fullWidth={true}
      value={query}
      onChange={(evt) => {
        const query = evt.target.value;

        setQuery(query);
        onQueryChange(query);
      }}
      onSearch={onSearch}
    />
  );
};

export default SimpleBibliographicSearchBar;

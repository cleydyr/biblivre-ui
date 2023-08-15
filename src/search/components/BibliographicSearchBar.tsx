import { EuiButton, EuiFlexGroup, EuiFlexItem, EuiSwitch } from "@elastic/eui";
import noop from "../utils/noop";
import AdvancedBibliographicSearchBar from "./AdvancedBibliographicSearchBar";
import SimpleBibliographicSearchBar from "./SimpleBibliographicSearchBar";
import { SearchParameters } from "../types";
import { useState } from "react";

type BibliographicSearchBarProps = {
  onSubmit: (search: SearchParameters) => Promise<void>;
};

type BibliographicSearchBarState = {
  isAdvancedMode: boolean;
  search: SearchParameters;
};

const initialState: BibliographicSearchBarState = {
  isAdvancedMode: false,
  search: {
    query: "",
  },
};

export const BibliographicSearchBar = (props: BibliographicSearchBarProps) => {
  const { onSubmit } = props;

  const [{ isAdvancedMode, search }, setState] = useState(initialState);

  const onQueryChange = (newSearch: SearchParameters) => {
    setState({
      isAdvancedMode,
      search: newSearch,
    });
  };

  return (
    <EuiFlexGroup alignItems="center">
      <EuiFlexItem>
        {isAdvancedMode ? (
          <AdvancedBibliographicSearchBar onQueryChange={onQueryChange} />
        ) : (
          <SimpleBibliographicSearchBar
            onQueryChange={(query: string) => onQueryChange({ query })}
            onSearch={(query: string) => {
              onSubmit({ query });
            }}
            submitButton={
              <EuiButton onClick={() => onSubmit(search)}>
                {search.query ? "Search" : "List All"}
              </EuiButton>
            }
          />
        )}
      </EuiFlexItem>
      <EuiFlexItem grow={false}>
        <EuiSwitch label="Advanced" checked={isAdvancedMode} onChange={noop} />
      </EuiFlexItem>
    </EuiFlexGroup>
  );
};

import {
  EuiButton,
  EuiFlexGroup,
  EuiFlexItem,
  EuiI18n,
  EuiSwitch,
  useEuiI18n,
} from "@elastic/eui";
import noop from "../utils/noop";
import AdvancedBibliographicSearchBar from "./AdvancedBibliographicSearchBar";
import SimpleBibliographicSearchBar from "./SimpleBibliographicSearchBar";
import { SearchParameters } from "../types";
import { useState } from "react";
import usePartialState from "../../hooks/usePartialState";

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

  const [{ isAdvancedMode, search }, patchState] =
    usePartialState(initialState);

  const onQueryChange = (newSearch: SearchParameters) => {
    patchState({
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
                {search.query ? (
                  <EuiI18n
                    token="search.common.button.search"
                    default="Pesquisar"
                  />
                ) : (
                  <EuiI18n
                    token="search.common.button.list_all"
                    default="Listar Todos"
                  />
                )}
              </EuiButton>
            }
          />
        )}
      </EuiFlexItem>
      <EuiFlexItem grow={false}>
        <EuiSwitch
          label={useEuiI18n(
            "search.common.advanced_search",
            "Pesquisa avançada"
          )}
          checked={isAdvancedMode}
          onChange={noop}
        />
      </EuiFlexItem>
    </EuiFlexGroup>
  );
};

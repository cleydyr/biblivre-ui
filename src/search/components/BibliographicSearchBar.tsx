import {
  EuiButton,
  EuiFlexGroup,
  EuiFlexItem,
  EuiI18n,
  EuiSelect,
  EuiSwitch,
  EuiText,
  useEuiI18n,
} from "@elastic/eui";
import noop from "../utils/noop";
import AdvancedBibliographicSearchBar from "./AdvancedBibliographicSearchBar";
import SimpleBibliographicSearchBar from "./SimpleBibliographicSearchBar";
import { SearchParameters, SearchableMaterialType } from "../types";
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
    materialType: SearchableMaterialType.ALL,
  },
};

export const BibliographicSearchBar = (props: BibliographicSearchBarProps) => {
  const { onSubmit } = props;

  const [
    {
      isAdvancedMode,
      search: { query, materialType },
    },
    _,
    setState,
  ] = usePartialState(initialState);

  const onQueryChange = (newSearch: string) => {
    setState((state) => ({
      ...state,
      search: {
        ...state.search,
        query: newSearch,
      },
    }));
  };

  const onMaterialTypeChange = (materialType: SearchableMaterialType) => {
    setState((state) => ({
      ...state,
      search: {
        ...state.search,
        materialType: materialType,
      },
    }));
  };

  const materialTypeOptions = Object.values(SearchableMaterialType).map(
    (value) => ({
      value,
      text: <EuiI18n token={`marc.material_type.${value}`} default={value} />,
    })
  );

  const materialTypePrepend = useEuiI18n(
    "search.bibliographic.material_type",
    "Tipo de material"
  );

  return (
    <EuiFlexGroup alignItems="center">
      <EuiFlexItem>
        {isAdvancedMode ? (
          <AdvancedBibliographicSearchBar onQueryChange={onQueryChange} />
        ) : (
          <SimpleBibliographicSearchBar
            onQueryChange={onQueryChange}
            onSearch={(query: string) => {
              onSubmit({ query, materialType });
            }}
            submitButton={
              <EuiButton onClick={() => onSubmit({ query, materialType })}>
                {query ? (
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
        <EuiSelect
          prepend={materialTypePrepend}
          options={materialTypeOptions}
          onChange={(evt) => {
            onMaterialTypeChange(evt.target.value as SearchableMaterialType);
          }}
        />
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

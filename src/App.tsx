import { EuiBottomBar, EuiContext, EuiProvider, EuiSwitch } from "@elastic/eui";
import "./App.css";
import "@elastic/eui/dist/eui_theme_light.css";
import { Fragment, useEffect, useState } from "react";

import { SearchComponent } from "./search/components/Search";
import { LibraryData, getLibraryData } from "./library/api";
import searchAPI from "./search/api/search";
import { I18nShape } from "@elastic/eui/src/components/context/context";

type AppState = {
  colorMode: "light" | "dark";
  libraryData: LibraryData;
};

const initialState: AppState = {
  libraryData: {
    title: "",
    subtitle: "",
    i18n: {},
    biblioFields: [],
    holdingFields: [],
  },
  colorMode: "light",
};

const App = () => {
  const [state, setState] = useState(initialState);

  const url = "http://localhost/";

  useEffect(() => {
    getLibraryData(url).then((data) => {
      const { title, subtitle, i18n, biblioFields, holdingFields } = data;

      setState({
        ...state,
        libraryData: {
          title,
          subtitle,
          biblioFields,
          i18n,
          holdingFields,
        },
      });
    });
  }, []);

  const toggleTheme = () => {
    setState({
      ...state,
      colorMode: state.colorMode === "light" ? "dark" : "light",
    });
  };

  const {
    libraryData: { i18n, biblioFields },
    colorMode,
  } = state;

  const mappings: I18nShape = {
    locale: "pt-br",
    mapping: i18n,
  };

  return (
    <EuiProvider colorMode={colorMode}>
      <Fragment>
        <EuiContext i18n={mappings}>
          <SearchComponent api={searchAPI(url)} biblioFields={biblioFields} />
          <EuiBottomBar>
            <EuiSwitch
              onChange={toggleTheme}
              checked={colorMode === "dark"}
              label="Dark Mode"
            ></EuiSwitch>
          </EuiBottomBar>
        </EuiContext>
      </Fragment>
    </EuiProvider>
  );
};

export default App;

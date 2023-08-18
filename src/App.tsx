import { EuiContext, EuiProvider } from "@elastic/eui";
import "./App.css";
import "@elastic/eui/dist/eui_theme_light.css";
import { Fragment, useEffect, useState } from "react";

import { SearchComponent } from "./search/components/Search";
import { LibraryData, getLibraryData } from "./library/api";
import searchAPI from "./search/api/search";
import { I18nShape } from "@elastic/eui/src/components/context/context";

const initialState: LibraryData = {
  title: "",
  subtitle: "",
  i18n: {},
  biblioFields: [],
  holdingFields: [],
};

const App = () => {
  const [state, setState] = useState(initialState);

  const url = "http://localhost/";

  useEffect(() => {
    getLibraryData(url).then((data) => {
      const { title, subtitle, i18n, biblioFields, holdingFields } = data;

      setState({
        title,
        subtitle,
        biblioFields,
        i18n,
        holdingFields,
      });
    });
  }, []);

  const { i18n, biblioFields } = state;

  const mappings: I18nShape = {
    locale: "pt-br",
    mapping: i18n,
  };

  return (
    <EuiProvider colorMode="light">
      <Fragment>
        <EuiContext i18n={mappings}>
          <SearchComponent api={searchAPI(url)} biblioFields={biblioFields} />
        </EuiContext>
      </Fragment>
    </EuiProvider>
  );
};

export default App;

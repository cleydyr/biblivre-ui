import { EuiContext, EuiProvider } from "@elastic/eui";
import "./App.css";
import "@elastic/eui/dist/eui_theme_light.css";
import { Fragment, useEffect, useState } from "react";

import { SearchComponent } from "./search/components/Search";
import translations from "./translations/pt_BR";
import { LibraryData, getLibraryData } from "./library/api";
import { FormFieldConfig } from "./search/types";
import searchAPI from "./search/api/search";

const initialState: LibraryData = {
  title: "",
  subtitle: "",
  i18n: {},
  biblioFields: [],
  holdingFields: [],
};

const App = () => {
  const mappings = {
    pt_br: {
      ...translations,
    },
  };

  const [state, setState] = useState(initialState);

  const url = "https://baixadaliteraria.biblivre.cloud/bcjudithlacaz/";

  useEffect(() => {
    getLibraryData(url).then((data) => {
      const { title, subtitle, i18n, biblioFields, holdingFields } = data;

      setState({
        ...state,
        biblioFields,
      });
    });
  }, []);

  const { title, subtitle, i18n, biblioFields, holdingFields } = state;
  return (
    <EuiProvider colorMode="light">
      <Fragment>
        <EuiContext i18n={i18n}>
          <SearchComponent api={searchAPI(url)} />
        </EuiContext>
      </Fragment>
    </EuiProvider>
  );
};

export default App;

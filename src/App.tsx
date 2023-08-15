import { EuiContext, EuiProvider } from "@elastic/eui";
import "./App.css";
import "@elastic/eui/dist/eui_theme_light.css";
import { Fragment } from "react";

import { SearchComponent } from "./search/components/Search";
import translations from "./translations/pt_BR";

const App = () => {
  const mappings = {
    pt_br: {
      ...translations,
    },
  };

  const i18n = {
    mapping: mappings.pt_br,
    formatNumber: (value: number) =>
      new Intl.NumberFormat("pt-BR").format(value),
  };

  return (
    <EuiProvider colorMode="light">
      <Fragment>
        <EuiContext i18n={i18n}>
          <SearchComponent />
        </EuiContext>
      </Fragment>
    </EuiProvider>
  );
};

export default App;

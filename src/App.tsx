import {
  EuiProvider,
} from '@elastic/eui';
import './App.css';
import '@elastic/eui/dist/eui_theme_light.css';
import { Fragment } from 'react';

import { SearchComponent } from './search/components/Search';

const App = () => {
  

  return (
    <EuiProvider colorMode="light">
      <Fragment>
        <SearchComponent />
      </Fragment>
    </EuiProvider>
  );

}

export default App;


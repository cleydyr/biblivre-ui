import { EuiProvider } from '@elastic/eui';
import './App.css';
import '@elastic/eui/dist/eui_theme_light.css';

const App = () => {
  return (
    <EuiProvider colorMode="light">

    </EuiProvider>
  );

}

export default App;
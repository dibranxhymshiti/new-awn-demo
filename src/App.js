import Layout from './components/Layout/Layout';
import RouterConfig from './navigation/RouterConfig';
import { createTheme, MuiThemeProvider } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';

const App = () => {
  const theme = createTheme({
    palette: {
      primary: blue
    }
  });
  return (
    <MuiThemeProvider theme={theme}>
      <Layout>
        <RouterConfig />
      </Layout>
    </MuiThemeProvider>
  );
};

export default App;

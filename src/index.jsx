import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CssBaseLine from '@mui/material/CssBaseline';
import { BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import './index.scss';

const theme = createTheme({
  palette: {
    primary: {
      main: '#526D82',
      light: '#9DB2BF',
      dark: '#27374D',
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <PersistGate loading={null} persistor={persistor}>
          <Provider store={store}>
            <CssBaseLine>
              <App />
            </CssBaseLine>
          </Provider>
        </PersistGate>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);

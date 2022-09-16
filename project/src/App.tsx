import { createTheme, ThemeProvider } from '@mui/material';

import { BrowserRouter } from 'react-router-dom';

import Routes from './routes/Routes';
import Header from './components/Header/Header';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const App = () => (
  <ThemeProvider theme={darkTheme}>
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes />
      </div>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;

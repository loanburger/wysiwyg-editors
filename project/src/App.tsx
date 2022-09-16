import { BrowserRouter } from 'react-router-dom';

import Routes from './routes/Routes';
import Header from './components/Header/Header';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Header />
      <Routes />
    </div>
  </BrowserRouter>
);

export default App;

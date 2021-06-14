import './assets/sass/app.scss';
import{ BrowserRouter as Router} from 'react-router-dom';
import Routes from './Routes';
import Header from './Modules/Header';

function App() {
  return (
    <Router>
        <Header />
        <Routes />
    </Router>
  );
}

export default App;

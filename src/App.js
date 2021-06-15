import './assets/sass/app.scss';
import{ BrowserRouter as Router} from 'react-router-dom';
import Routes from './Routes';
import Header from './Modules/Header';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <Router>
        <div className="container">
          <Header />
          <Routes />
        </div>
    </Router>
  );
}

export default App;

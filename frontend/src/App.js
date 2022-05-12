// import logo from './logo.svg';
import './App.css';
import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import HomePage from './pages/HomePage';
import NoticiasPage from './pages/NoticiasPage';
import PartidosPage from './pages/PartidosPage';
import TraspasosPage from './pages/TraspasosPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Nav />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/noticias" exact component={NoticiasPage} />
          <Route path="/partidos" exact component={PartidosPage} />
          <Route path="/traspasos" exact component={TraspasosPage} />
        </Switch>
        <Footer />
      </Router>

    </div>
  );
}

export default App;

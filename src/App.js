import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import MovieDetail from './Components/MovieDetail';
import PageNotFound from './Components/PageNotFound';
import Footer from './Components/Footer';
import './App.scss';


function App() {
  return (
    <div className="app">
        <Router>
          <Header></Header>
          <div className="container">
          <Switch> 
          <Route exact path="/" component={Home} />
          <Route path="/movie/:imdbID" component={MovieDetail} />
          <Route component={PageNotFound} />
          </Switch>
          </div>
          {/* <Footer /> */}
        </Router>
    </div>
  );
}

export default App;

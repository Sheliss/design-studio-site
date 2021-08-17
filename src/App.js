import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import About from './Components/About';
import Contact from './Components/Contact';
import Work from './Components/Work';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route path="/design-studio-site" exact component={Home}/>
          <Route path="/design-studio-site/about" component={About}/>
          <Route path="/design-studio-site/contact" component={Contact}/>
          <Route path="/design-studio-site/work/:id" component={Work}/>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;

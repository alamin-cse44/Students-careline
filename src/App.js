import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Admin from './components/Admin/Admin/Admin';

function App() {
  return (
    <div>
      <Router>
        <Switch>

          <Route exact path='/'>
            <Home />
          </Route>

          <Route exact path='/home'>
            <Home />
          </Route>

          <Route exact path='/teams'>
            <Admin />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;

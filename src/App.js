
import './App.css';
import Main from './components/Main/Main';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import NotFound from './components/NotFound';

function App() {
  return (
    <main>
      <BrowserRouter>
        <div id="navbar">
          <NavLink to="/255/255/255">WHITE</NavLink>
          <NavLink to="/100/255/100">GREEN</NavLink>
          <NavLink to="/100/100/255">BLUE</NavLink>
          <NavLink to="/255/100/100">RED</NavLink>
        </div>
        <Switch>

          <Route path="/:r/:g/:b">
            <Main></Main>
          </Route>

          <Route path="*" component={NotFound}></Route>
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;

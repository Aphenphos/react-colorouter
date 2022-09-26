import logo from './logo.svg';
import './App.css';
import Main from './components/Main/Main';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from './components/NotFound';

function App() {
  return (
    <main>
      <BrowserRouter>
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

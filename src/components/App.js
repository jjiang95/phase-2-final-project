import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import '../App.css';
import Nav from "./Nav";
import Home from './Home';
import AddBook from './AddBook';

function App() {
  return (
    <div>
      <h1>Personal Library</h1>
      <Nav/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/new">
          <AddBook/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

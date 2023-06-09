import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import React from 'react';
import Nav from "./Nav";
import Home from './Home';
import AddBook from './AddBook';
import BookDetails from './BookDetails';

function App() {

  return (
    <div>
      <h1>My Book Collection</h1>
      <Nav/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/new">
          <AddBook/>
        </Route>
        <Route exact path="/:id">
          <BookDetails/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

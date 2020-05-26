import React from 'react';
import Books from './Books';
import NewBook from './NewBook';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from 'react-router-dom';

function Hello() {
  const history = useHistory();

  return (
    <div>
      <button onClick={() => history.push('/books')}>ListBooks</button>
      <button onClick={() => history.push('/books/new')}>CreateBook</button>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Hello />
        </Route>
        <Route path="/books" exact>
          <Books />
        </Route>
        <Route path="/books/new" exact>
          <NewBook />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

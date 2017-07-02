import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Container from './Container';
import Sidebar from './Partials/Sidebar';
import TodoApp from './Container/TodoApp';
import TicTACTeoApp from './Container/TicTacTeoApp';
import store from './store';

const App = () =>
  <Provider store={store}>
    <Router>
      <Container>
      <div style={{ display :'flex'}}>
        <Sidebar/>
        <Switch>
        flex-direction :row
          <Route path="/todo" exact component={TodoApp} />
          <Route path="/tictacteo" exact component={TicTACTeoApp} />
          <Route component={() => <h1>Not found</h1>} />
        </Switch>
       </div> 
      </Container>
    </Router>
  </Provider>;

export default App;

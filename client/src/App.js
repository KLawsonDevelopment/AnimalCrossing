import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Characters from './components/Characters';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/characters" component={Characters} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

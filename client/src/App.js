import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Characters from './components/Characters';
import SingleCharacter from './components/SingleCharacter';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/characters" component={Characters} />
            <Route path="/character/:id" component={SingleCharacter} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

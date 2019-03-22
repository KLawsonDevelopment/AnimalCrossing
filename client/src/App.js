import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Characters from './components/Characters';
import SingleCharacter from './components/SingleCharacter';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/characters" component={Characters} />
            <Route path="/character/:id" component={SingleCharacter} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

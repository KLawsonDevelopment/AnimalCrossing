import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Characters from './components/Characters';
import SingleCharacter from './components/SingleCharacter';
import Home from './components/Home';
import faceGuide from './components/faceGuide';
import hairGuide from './components/hairGuide';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Link to={"/"}>Home</Link>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/characters" component={Characters} />
            <Route path="/character/:id" component={SingleCharacter} />
            <Route path="/faceGuide" component={faceGuide} />
            <Route path="/hairGuide" component={hairGuide} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

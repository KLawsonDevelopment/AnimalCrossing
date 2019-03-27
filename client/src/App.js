import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Characters from './components/Characters';
import SingleCharacter from './components/SingleCharacter';
import Home from './components/Home';
import faceGuide from './components/faceGuide';
import hairGuide from './components/hairGuide';
import Items from './components/Items';
import singleItem from './components/singleItem';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/characters" component={Characters} />
            <Route path="/character/:id" component={SingleCharacter} />
            <Route path="/faceGuide" component={faceGuide} />
            <Route path="/hairGuide" component={hairGuide} />
            <Route path="/items" component={Items} />
            <Route path="/item/:id" component={singleItem} />
          </Switch>
          <Link id="home" to={"/"}>Home</Link>
        </div>
      </Router>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Home from './components/pages/Home';
import Page1 from './components/pages/Page1';
import Page2 from './components/pages/Page2';
import { Switch, Route, Redirect, Link } from 'react-router-dom';

//Routing and liking
class Exercicio3_2 extends Component {

  render() {

    return (
      <div>
        <input type="text"></input>
        <br/>
        <Switch>
          <Route exact path="/" component={Home} />
          
          <Route path="/page1" component={Page1} />
          <Route path="/page2" component={Page2} />

          <Route render={() => <Redirect to="/"/>} />
        </Switch>
        <br/>
        <Link to="/">Home</Link>
        <br/>
        <Link to="/page1">Page1</Link>
        <br/>
        <Link to="/page2">Page2</Link>
      </div>
    )
  }
}

export default Exercicio3_2;
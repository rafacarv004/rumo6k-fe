import React, { Component } from 'react';
//import {BrowserRouter} from 'react-router-dom';


//Routing and liking
class Exercicio3_2 extends Component {

  render() {
    return (
      //<BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/path1" component={Component1} />
          <Route path="/path2" component={Component1} />
          <Route render={() => <Redirect to="/"/>} />
        </Switch>
      //</BrowserRouter>
    )
  }
}

//<Link to="/path1">Path 1</Link>
//<Link to="/path2">Path 2</Link>

export default Exercicio3_2;
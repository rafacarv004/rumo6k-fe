import React, { Component } from 'react';
import { hoc1 } from './hocs/myHocs';

//high order components (HOCs)
//sessionStorage e localStorage
class Exercicio3_1 extends Component {

  login = () => {
    localStorage.setItem("login", "true");
  }

  logoff = () => {
    localStorage.setItem("login", "false");
  }

  isLogged = () => {
    const login = localStorage.getItem("login");
    return login === "true";
  }

  render() {
    const { injected } = this.props;

    const login = localStorage.getItem("login");

    if(login === "true") {
      return (
        <div>
          <div>Oi {injected}! Você está online!</div>
          <button onClick={this.logoff}>Log out</button>
        </div>
      )
    }
    return (
      <div>
        <div>Oi {injected}! Você está offline!</div>
        <button onClick={this.login}>Log in</button>
      </div>
    )
  }
}

export default hoc1(Exercicio3_1)
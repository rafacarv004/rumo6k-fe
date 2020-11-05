import React, { Component } from 'react';

//Pure Component or Class Component
class Exercicio4 extends Component {

  // boilerplate
  constructor(props) {
    super(props);

    this.state = {
      currentUser : {
        name: "-",
        age: "-"
      }
    }
  }

  getHeaders = () => {
    return {
      'Content-Type': 'application/json'
    }
  }

  getUsers = async () => {
    return fetch("http://localhost:8080/hello", {
      method: 'GET',
      headers: new Headers(this.getHeaders())
    });
  }

  updateUser = async () => {
    const response = await this.getUsers();
    console.log("response:", response)
  }

  componentDidMount() {
    this.updateUser();
  }

  render() {
    const { currentUser } = this.state;

    return <div>
      Current user name: {currentUser.name}
      <br/>
      Current user age: {currentUser.age}
    </div>
  }
}

export default Exercicio4;
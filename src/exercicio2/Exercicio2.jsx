import React, { Component } from 'react';

//Pure Component or Class Component
class Exercicio2 extends Component {

  constructor(props) {
    super(props);

    this.myinterval = null;

    this.state = {
      value: "",
      counter: 0,
    }
  }

  // myFunc = () => {
  //   this.setState({value: "Função disparada!"})
  // }

  myFunc2 = () => {
    if(this.state.counter < 10) {
      this.setState({counter: this.state.counter + 1});
      return;
    }
    this.setState({counter: "BOOM!!!"});
  }

  render() {
    const { counter } = this.state;

    return <div>{counter}</div>
  }

  componentDidMount() {
    //setTimeout(this.myFunc, 5000);
    this.myinterval = setInterval(this.myFunc2, 1000);
  }

  componentWillUnmount() {
    if(this.myinterval) {
      clearInterval(this.myinterval);
    }
  }
}


export default Exercicio2;
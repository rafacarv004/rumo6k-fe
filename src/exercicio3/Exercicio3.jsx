import React, { Component } from 'react';
import ChildComponent1 from './childComponents/ChildComponent1';

//callbacks, async, await, promises
class Exercicio3 extends Component {
  constructor(props){
    super(props);

    this.state = {
      meuTexto: ""
    }
  }

  componentDidMount() {
    this.minhaFuncaoAssincrona1();
    this.minhaFuncaoSincrona2();
  }

  minhaFuncaoAssincrona1 = async () => {
    await this.sleep(5000);
    console.log("oi, eu sou a função assíncrona 1!")
  }

  minhaFuncaoSincrona2 = () => {
    console.log("oi, eu sou a função síncrona 2!")
  }

  // Callback = function
  inputTextHandler = (item) => {
    //console.log(item.target.value)
    this.setState({meuTexto: item.target.value})
  }

  render() {
    const { meuTexto } = this.state;

    return (
    <div>
      <div>Conteudo: {meuTexto}</div>
      <ChildComponent1 minhaCallback={this.inputTextHandler} valorDoCampo={meuTexto} />
    </div>
    )
  }



  sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }
}

export default Exercicio3;
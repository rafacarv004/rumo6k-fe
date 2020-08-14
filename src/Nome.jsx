import React, { Component } from 'react';

//Pure Component or Class Component
class Nome extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      nome: "",
      idade: "",
      nomeInput: "",
      idadeInput: ""
    }
  }

  render() {
    const { nome, idade, nomeInput, idadeInput } = this.state;

    return(
      <div>
        Nome: {nome}
        <br/>
        Idade: {idade}
        <br/>
        <input value={nomeInput} type="text" onChange={this.handleNameFieldChange} />
        <br/>
        <input value={idadeInput} type="text" onChange={this.handleAgeFieldChange} />
        <br/>
        <button onClick={this.handleButtonClick}>Salvar</button>
      </div>
    );
  }

  handleButtonClick = () => {
    const { nomeInput, idadeInput } = this.state;

    this.setState({
      nome: nomeInput,
      idade: idadeInput
    })
  }

  handleNameFieldChange = (arg) => {
    const nomeInput = arg.target.value;

    this.setState({
      nomeInput
    })
  }

  handleAgeFieldChange = (arg) => {
    const idadeInput = arg.target.value;

    this.setState({
      idadeInput
    })
  }
}

export default Nome;
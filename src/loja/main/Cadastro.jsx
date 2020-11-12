import React, { Component } from 'react';
import { Button, TextField } from '@material-ui/core';
import './cadastro.css';

class Cadastro extends Component {

  constructor(props) {
    super(props);

    this.initialState = {
      successMessage: null,
      marca: "",
      modelo: "",
      cor: "",
      ano: "",
      combustivel: "",
      motor: "",
      categoria: "",
      placa: "",
      km: "",
      errors: {
        marca: "",
        modelo: "",
        cor: "",
        ano: "",
        combustivel: "",
        motor: "",
        categoria: "",
        placa: "",
        km: "",
      }
    }

    this.state = { ...this.initialState };
  }

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  }

  handleClearButtonClick = () => {
    this.clearFields();
  }

  clearFields = () => {
    this.setState({
      ...this.initialState
    })
  }

  handleSubmitButtonClick = () => {
    this.registerNewCar();
  }

  registerNewCar = async () => {
    //TODO: Fazer um fetch com POST e cadastrar um novo carro
    // add backdrop visible=true
    const response = await fetch();
    // add backdrop visible=false
    /*
    return fetch("http://localhost:8080/hello", {
      method: 'GET',
      headers: new Headers(this.getHeaders())
    });
    */

    if(response.ok) {
      alert("Cadastro realizado com sucesso!");
      this.clearFields();
      return;
    }
    alert("Erro no cadastro do veículo");
  }

  render() {
    const { marca, modelo, cor, ano, combustivel, motor, categoria, placa, km } = this.state;

    return (
      <div className="cadastro-container">
        <span className="title">Cadastro de veículos</span>
        <div className="input-area">
          <div>
            <TextField name="marca" className="input-md" label="Marca" variant="outlined" value={marca} onChange={this.handleInputChange} />
            <TextField name="modelo" className="input-md" label="Modelo" variant="outlined" value={modelo} onChange={this.handleInputChange} />
            <TextField name="cor" className="input-md" label="Cor" variant="outlined" value={cor} onChange={this.handleInputChange} />
          </div>
          <div>
            <TextField name="ano" className="input-md" label="Ano" variant="outlined" value={ano} onChange={this.handleInputChange} />
            <TextField name="combustivel" className="input-md" label="Combustível" variant="outlined" value={combustivel} onChange={this.handleInputChange} />
            <TextField name="motor" className="input-md" label="Motor" variant="outlined" value={motor} onChange={this.handleInputChange} />
          </div>
          <div>
            <TextField name="categoria" className="input-md" label="Categoria" variant="outlined" value={categoria} onChange={this.handleInputChange} />
            <TextField name="placa" className="input-md" label="Placa" variant="outlined" value={placa} onChange={this.handleInputChange} />
            <TextField name="km" className="input-md" label="Km" variant="outlined" value={km} onChange={this.handleInputChange} />
          </div>
        </div>
        <div className="buttons-area">
          <Button className="button" variant="contained" color="primary" onClick={this.handleSubmitButtonClick}> Cadastrar </Button>
          <Button className="button" variant="contained" onClick={this.handleClearButtonClick}> Limpar </Button>
        </div>
      </div>
    )
  }
}

export default Cadastro;
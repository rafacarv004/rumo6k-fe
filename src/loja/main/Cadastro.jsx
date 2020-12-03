import React, { Component } from 'react';
import { Button, TextField, Backdrop, CircularProgress } from '@material-ui/core';
import { registrarCarro } from './apis/carros';
import './cadastro.css';

class Cadastro extends Component {

  constructor(props) {
    super(props);

    this.initialState = {
      loading: false,
      marca: "",
      modelo: "",
      cor: "",
      ano: "",
      combustivel: "",
      motor: "",
      categoria: "",
      placa: "",
      km: "",
      errors: {}
    }

    this.state = { ...this.initialState };
  }

  handleInputChange = event => {

    const { name, value } = event.target;

    this.setState({ [name]: value, errors: { ...this.state.errors, [name]: null } });
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
    try {
    const { marca, modelo, cor, ano, combustivel, motor, categoria, placa, km } = this.state;

    const carroData = {
      marca,
      modelo,
      cor,
      ano,
      combustivel,
      motor,
      categoria,
      placa,
      km,
    }

    const newErrors = {};

    if (!marca) {
      newErrors.marca = "A marca deve ser preenchida";
    }
    if (!modelo) {
      newErrors.modelo = "O modelo deve ser preenchida";
    }
    if (!cor) {
      newErrors.cor = "A cor deve ser preenchida";
    }
    if (!ano) {
      newErrors.ano = "O ano deve ser preenchida";
    }
    if (!combustivel) {
      newErrors.combustivel = "O combustivel deve ser preenchida";
    }
    if (!categoria) {
      newErrors.categoria = "A categoria deve ser preenchida";
    }
    if (!placa) {
      newErrors.placa = "A placa deve ser preenchida";
    }
    if (!motor) {
      newErrors.motor = "O motor deve ser preenchida";
    }
    if (!km) {
      newErrors.km = "Os km deve ser preenchida";
    }

    const hasErrors = Object.keys(newErrors).length > 0;
    if (hasErrors) {
      this.setState({ errors: newErrors })
      return;
    }

    this.setState({loading: true});
    const response = await registrarCarro(carroData);
    
    if (!response.ok) {
      alert("Erro no cadastro do veículo");
      return;
    }
    alert("Cadastro realizado com sucesso!");
    this.clearFields();
    //const textResponse = await response.text();

    } catch (error) {
      console.log("Erro no cadastro de carros", error);
      alert("Erro no cadastro do veículo");
    } finally {
      this.setState({loading: false});
    }
  }

  render() {
    const { marca, modelo, cor, ano, combustivel, motor, categoria, placa, km, errors, loading } = this.state;

    return (
      <div className="cadastro-container">
        <span className="title">Cadastro de veículos</span>
        <div className="input-area">
          <div>
            <TextField name="marca" className="input-md" label="Marca" variant="outlined" value={marca} onChange={this.handleInputChange} error={!!errors.marca} helperText={errors.marca} />
            <TextField name="modelo" className="input-md" label="Modelo" variant="outlined" value={modelo} onChange={this.handleInputChange} error={!!errors.modelo} helperText={errors.modelo} />
            <TextField name="cor" className="input-md" label="Cor" variant="outlined" value={cor} onChange={this.handleInputChange} error={!!errors.cor} helperText={errors.cor} />
          </div>
          <div>
            <TextField name="ano" className="input-md" label="Ano" variant="outlined" value={ano} onChange={this.handleInputChange} error={!!errors.ano} helperText={errors.ano} />
            <TextField name="combustivel" className="input-md" label="Combustível" variant="outlined" value={combustivel} onChange={this.handleInputChange} error={!!errors.combustivel} helperText={errors.combustivel} />
            <TextField name="motor" className="input-md" label="Motor" variant="outlined" value={motor} onChange={this.handleInputChange} error={!!errors.motor} helperText={errors.motor} />
          </div>
          <div>
            <TextField name="categoria" className="input-md" label="Categoria" variant="outlined" value={categoria} onChange={this.handleInputChange} error={!!errors.categoria} helperText={errors.categoria} />
            <TextField name="placa" className="input-md" label="Placa" variant="outlined" value={placa} onChange={this.handleInputChange} error={!!errors.placa} helperText={errors.placa} />
            <TextField name="km" className="input-md" label="Km" variant="outlined" value={km} onChange={this.handleInputChange} error={!!errors.km} helperText={errors.km} />
          </div>
        </div>
        <div className="buttons-area">
          <Button className="button" variant="contained" color="primary" onClick={this.handleSubmitButtonClick}> Cadastrar </Button>
          <Button className="button" variant="contained" onClick={this.handleClearButtonClick}> Limpar </Button>
        </div>
        <Backdrop className="backdrop" open={loading} >
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>
    )
  }
}

export default Cadastro;

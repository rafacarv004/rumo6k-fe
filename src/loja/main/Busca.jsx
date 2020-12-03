import React, { Component } from 'react';
import { Button, TextField, Backdrop, CircularProgress } from '@material-ui/core';
import { buscarCarros } from './apis/carros';
import './busca.css';

class Busca extends Component {

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

  handleSearchButtonClick = () => {
    this.runSearch();
  }

  runSearch = async () => {

    try {
      const { marca, modelo, cor, ano, combustivel, motor, categoria, placa, km } = this.state;

      const filters = {}

      if (marca) {
        filters.marca = marca;
      }
      if (modelo) {
        filters.modelo = modelo;
      }
      if (cor) {
        filters.cor = cor;
      }
      if (ano) {
        filters.ano = ano;
      }
      if (combustivel) {
        filters.combustivel = combustivel;
      }
      if (categoria) {
        filters.categoria = categoria;
      }
      if (placa) {
        filters.placa = placa;
      }
      if (motor) {
        filters.motor = motor;
      }
      if (km) {
        filters.km = km;
      }

      this.setState({ loading: true });
      const response = await buscarCarros(filters);
    } catch (error) {

    } finally {
      this.setState({ loading: false });
    }
  }

  render() {

    const { marca, modelo, cor, ano, combustivel, motor, categoria, placa, km, loading } = this.state;

    return (
      <div className="busca-container">
        <span className="title">Busca de veículos</span>
        <div className="filter-area">
          <TextField name="marca" className="input-md" label="Marca" variant="outlined" value={marca} onChange={this.handleInputChange} />
          <TextField name="modelo" className="input-md" label="Modelo" variant="outlined" value={modelo} onChange={this.handleInputChange} />
          <TextField name="cor" className="input-md" label="Cor" variant="outlined" value={cor} onChange={this.handleInputChange} />
          <TextField name="ano" className="input-md" label="Ano" variant="outlined" value={ano} onChange={this.handleInputChange} />
          <TextField name="combustivel" className="input-md" label="Combustível" variant="outlined" value={combustivel} onChange={this.handleInputChange} />
          <TextField name="motor" className="input-md" label="Motor" variant="outlined" value={motor} onChange={this.handleInputChange} />
          <TextField name="categoria" className="input-md" label="Categoria" variant="outlined" value={categoria} onChange={this.handleInputChange} />
          <TextField name="placa" className="input-md" label="Placa" variant="outlined" value={placa} onChange={this.handleInputChange} />
          <TextField name="km" className="input-md" label="Km" variant="outlined" value={km} onChange={this.handleInputChange} />
        </div>
        <div className="buttons-area">
          <Button className="button" variant="contained" color="primary" onClick={this.handleSearchButtonClick}> Buscar </Button>
          <Button className="button" variant="contained" onClick={this.handleClearButtonClick}> Limpar </Button>
        </div>
        <Backdrop className="backdrop" open={loading} >
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>
    )
  }
}

export default Busca;
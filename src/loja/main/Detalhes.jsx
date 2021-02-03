import React, { Component } from 'react';
import { Button, TextField, Backdrop, CircularProgress } from '@material-ui/core';
//import { DataGrid } from '@material-ui/data-grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';
import { buscarCarro, updateCarro } from './apis/carros';
import './detalhes.css';
import { isEqual } from 'lodash';

class Detalhes extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      carroInfo: {
        marca: "",
        modelo: "",
        cor: "",
        ano: "",
        combustivel: "",
        motor: "",
        categoria: "",
        placa: "",
        km: "",
      },
      loading: false,

    }

    this.state = { ...this.initialState };
  }


  componentDidMount() {
    this.runFetch();
  }

  runFetch = async () => {
    const { match } = this.props;
    const { id } = match.params;

    try {
      this.setState({ loading: true });

      const response = await buscarCarro(id);
      if(!response.ok) {
        throw new Error();
      }

      const result = await response.json();

      this.setState({ carroInfo: result.payload, initialCarroInfo: result.payload });
    } catch (error) {
      alert("deu pau, seu lixo!");
    } finally {
      this.setState({ loading: false });
    }
    
  }

  handleInputChange = (event) => {
    const { carroInfo } = this.state;
    const { name, value } = event.target;

    this.setState({ carroInfo: { ...carroInfo, [name]: value } });
  }

  isUpdateButtonDisabled = () => {
    const { carroInfo, initialCarroInfo } = this.state;    

    return isEqual(carroInfo, initialCarroInfo);
  }

  handleResetButtonClick = () => {
    const { initialCarroInfo } = this.state;

    this.setState({ carroInfo: { ...initialCarroInfo } });
  }

  handleUpdateButtonClick = async() => {
    const { carroInfo } = this.state;

    this.setState({ loading: true });

    try {
      const response = await updateCarro(carroInfo);

      if(!response.ok) {
        throw new Error();
      }
      alert("Carro alterado com sucesso!");
    } catch (error) {
      alert("deu pau, seu lixo!");
    } finally {
      this.setState({ loading: false });
    }
    



  }

  render() {
    const { carroInfo, loading } = this.state;

    return (
      <div className="details-container">
        <span className="title">Busca de veículos</span>
        <div className="details-area">
          <div className="input-md">Id: {carroInfo.id}</div>
          <div className="input-md">Criado em: {carroInfo.timestamp}</div>
          <TextField name="marca" className="input-md" label="Marca" variant="outlined" value={carroInfo.marca} onChange={this.handleInputChange} />
          <TextField name="modelo" className="input-md" label="Modelo" variant="outlined" value={carroInfo.modelo} onChange={this.handleInputChange} />
          <TextField name="cor" className="input-md" label="Cor" variant="outlined" value={carroInfo.cor} onChange={this.handleInputChange} />
          <TextField name="ano" className="input-md" label="Ano" variant="outlined" value={carroInfo.ano} onChange={this.handleInputChange} />
          <TextField name="combustivel" className="input-md" label="Combustível" variant="outlined" value={carroInfo.combustivel} onChange={this.handleInputChange} />
          <TextField name="motor" className="input-md" label="Motor" variant="outlined" value={carroInfo.motor} onChange={this.handleInputChange} />
          <TextField name="categoria" className="input-md" label="Categoria" variant="outlined" value={carroInfo.categoria} onChange={this.handleInputChange} />
          <TextField name="placa" className="input-md" label="Placa" variant="outlined" value={carroInfo.placa} onChange={this.handleInputChange} />
          <TextField name="km" className="input-md" label="Km" variant="outlined" value={carroInfo.km} onChange={this.handleInputChange} />
        </div>
        <div className="buttons-area">
          <Button className="button" variant="contained" color="primary" onClick={this.handleUpdateButtonClick} disabled={this.isUpdateButtonDisabled()}> Alterar </Button>
          <Button className="button" variant="contained" onClick={this.handleResetButtonClick}> Resetar </Button>
        </div>
        <Backdrop className="backdrop" open={loading} >
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>
    )
  }
}

/*
ano: "2077"
categoria: "Maomeno"
combustivel: "Agua"
cor: "Amarelo Calcinha"
id: "5fd16c7d973f98a7a13364e4"
km: "100"
marca: "Ferrari"
modelo: "Chevette"
motor: "0.2"
placa: "CAP-0667"
timestamp: 1606953899999
*/
export default Detalhes;
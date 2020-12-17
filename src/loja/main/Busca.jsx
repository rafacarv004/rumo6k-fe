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
import { buscarCarros } from './apis/carros';
import './busca.css';

class Busca extends Component {

  constructor(props) {
    super(props);

    this.initialState = {
      searchResults: [],
      resultsPagination: {},
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
      const result = await response.json();
      const { searchResults, pagination } = result;
      this.setState({ searchResults, resultsPagination: pagination });

      //console.log("result", result);
    } catch (error) {

    } finally {
      this.setState({ loading: false });
    }
  }

  componentDidMount() {
    this.runSearch();
  }

  render() {
    const { searchResults, resultsPagination, marca, modelo, cor, ano, combustivel, motor, categoria, placa, km, loading } = this.state;

    const columns = [
      { title: 'ID' },
      { title: 'Marca' },
      { title: 'Modelo' },
      { title: 'Cor' },
      { title: 'Ano' },
      { title: 'Combustivel' },
      { title: 'Motor' },
      { title: 'Categoria' },
      { title: 'Placa' },
      { title: 'Km' }
    ];

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
        <div className="table-area" style={{ height: 400, width: '100%' }}>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  {
                    columns.map(column => {
                      return <TableCell>{column.title}</TableCell>
                    })
                  }
                </TableRow>
              </TableHead>
              <TableBody>
                {searchResults.map((result) => (
                  <TableRow key={result.id}>
                    <TableCell component="th" scope="row">{result.id}</TableCell>
                    <TableCell>{result.marca}</TableCell>
                    <TableCell>{result.modelo}</TableCell>
                    <TableCell>{result.cor}</TableCell>
                    <TableCell>{result.ano}</TableCell>
                    <TableCell>{result.combustivel}</TableCell>
                    <TableCell>{result.motor}</TableCell>
                    <TableCell>{result.categoria}</TableCell>
                    <TableCell>{result.placa}</TableCell>
                    <TableCell>{result.km}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 30, 50]}
            component="div"
            count={resultsPagination.totalResultsCount}
            rowsPerPage={Number(resultsPagination.maxResultsPerPage)}
            page={resultsPagination.currentPageNumber}
            onChangePage={() => {}}
            onChangeRowsPerPage={() => {}}
            // count={rows.length}
            // rowsPerPage={rowsPerPage}
            // page={page}
            // onChangePage={handleChangePage}
            // onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </div>
        <Backdrop className="backdrop" open={loading} >
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>
    )
  }
}

export default Busca;
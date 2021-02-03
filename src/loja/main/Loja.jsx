import React, { Component } from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import Home from './Home';
import Cadastro from './Cadastro';
import Busca from './Busca';
import Detalhes from './Detalhes';
import './loja.css';

class Loja extends Component {

  render() {
    return (
      <div className="loja-container">
        <div className="topNav"> 
          Xablau da Silva
        </div>
        <div className="bottom"> 
          <div className="leftNav"> 
            <Link className="link" to="/">Home</Link>
            <div className="topic">Veículos</div>
            <Link className="link" to="/veiculos/cadastro">Cadastro</Link>
            <Link className="link" to="/veiculos/busca">Busca</Link>
            <div className="topic">Usuários</div>
            <Link className="link" to="/usuarios/cadastro">Cadastro</Link>
          </div>
          <div className="content"> 
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/veiculos/cadastro" component={Cadastro} />
            <Route exact path="/veiculos/busca" component={Busca} />
            <Route exact path="/veiculos/:id" component={Detalhes} />
            <Route render={() => <Redirect to="/"/>} />
          </Switch>
          </div>
        </div>
      </div>
    )
  }
}

export default Loja;
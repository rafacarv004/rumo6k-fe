import React, { Component } from 'react';
import ChildComponent1 from './childComponents/ChildComponent1';

//callbacks, async, await, promises
class Exercicio3 extends Component {
  constructor(props){
    super(props);

    this.meuArg = 2;

    this.state = {
      meuTexto: ""
    }
  }

  componentDidMount() {
    this.minhaFuncaoAssincrona1();
    //this.minhaFuncaoSincrona2();
  }

  minhaFuncaoAssincrona1 = async () => {

    this.getEndereco("13272-315").then((endereco) => {
      this.getMoradores(endereco).then((listaMoradores) => {
        this.getIdadeFromMoradores(listaMoradores).then((idadeDosMoradores) => {
          //codigo
        }).catch((erro) => {

        })
      }).catch((erro) => {

      })
    }).catch((erro)=> {
      console.log("ih, deu errado, o cep deve estar inválido. Erro retornado pelo servidor: " + erro);
    })

    try{
      const endereco = this.getEndereco("13272-316");
      //console.log("getEndereco passou sem erros!");
      const moradores = await this.getMoradores(endereco);
      //console.log("getMoradores passou sem erros!")
      const idadeDosMoradores = await this.getIdadeFromMoradores(moradores);
      //console.log("getIdadeFromMoradores passou sem erros!")

      console.log("Todas as chamadas foram feitas com sucesso!")
    } catch (meuErro) {
      console.log("ih, deu errado, o cep deve estar inválido. Erro retornado pelo servidor: " + meuErro);
    }
    
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


  getEndereco = (cep) => {
    return new Promise((resolve, reject) => {
      if(cep === "13272-315") {
        resolve("Rua João Previtale");
        return;
      }
      reject("I don't know this CEP!");
    });
  }
}

export default Exercicio3;
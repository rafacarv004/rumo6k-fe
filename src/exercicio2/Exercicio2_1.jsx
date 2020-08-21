import React, { Component } from 'react';

//Pure Component or Class Component
class Exercicio2_1 extends Component {

  render() {
    return <div>oi</div>
  }

  componentDidMount() {
    try {
      console.log("teste1")
      this.myFunc();
      console.log("teste2")
    } catch (err) {
      console.log(err)
    } finally {
      console.log("rodou o finally!!! ooooooooo");
    }
  }

  myFunc = parametro => {
    try {
      if(!parametro) {
        throw {
          message: "Impossível logar Usuário: Xablau, Senha do Xablau: 12345",
          errorCode: 1
        };
      }
      console.log(parametro);
    } catch (erro) {
      // erro já foi tratado aqui. Está tudo bem agora :)
      console.log(erro.message)
      //ops, outra exceção!
      throw "Impossível logar.";
    } finally {
      console.log("rodou o finally!!! eeeeeee");
    }
  }
}

export default Exercicio2_1;

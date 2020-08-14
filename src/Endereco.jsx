import React, { Component } from 'react';

//Pure Component or Class Component
class Endereco extends Component {

  render() {

    const { valor } = this.props;

    return(
      <div> Eu moro na {valor} </div>
    );
  }

}

export default Endereco;
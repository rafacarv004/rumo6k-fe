import React, { Component } from 'react';

class Page extends Component {

  render() {
    const { match } = this.props;
    const { variavel } = match.params;

    return `Bem vindo à ${variavel}`;
  }
}

export default Page;
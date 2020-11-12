import React, { Component } from 'react';

//callbacks, async, await, promises
class ChildComponent1 extends Component {

  render() {
    const { minhaCallback, meuTexto } = this.props;

    return(
      <input value={meuTexto} onChange={minhaCallback} type="text"/>
    )
  }
}

export default ChildComponent1;
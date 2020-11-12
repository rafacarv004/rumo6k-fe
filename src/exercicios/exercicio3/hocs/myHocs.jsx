import React, { Component } from 'react';

export const hoc1 = (MyComponent) => {

  class HOCz extends Component {
    render() {
      return <MyComponent injected="xablau" age="12"/>
    }
  }
  return HOCz;
}
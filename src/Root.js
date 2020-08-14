import React from 'react';
import logo from './logo.svg';
import './App.css';

//Functional Component or Stateless Component
export const Root = (props) => {

  const { nome, idade } = props;

return (
    <>
      <div>oi meu nome é {nome}</div>
      <div>eu tenho {idade} anos</div>
      <Root2 />
    </>
  )
}

const Root2 = (props) => {

  const { nome, idade } = props;

return (
    <>
      <div>oi meu nome é {nome}</div>
      <div>eu tenho {idade} anos</div>
    </>
  )
}


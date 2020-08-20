import React from 'react';
import logo from './logo.svg';
import './Root.css';
import Exercicio1 from './exercicio1/Exercicio1';

//Functional Component or Stateless Component
const Root = (props) => {

  const { nome, idade } = props;

return (
    <>
      <Exercicio1 />
    </>
  )
}

export default Root;

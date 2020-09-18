import React from 'react';
import './Root.css';

import App from './App';
import { BrowserRouter } from 'react-router-dom';

//Functional Component or Stateless Component
const Root = (props) => {

return (
      <BrowserRouter>
        <App />
      </BrowserRouter>
  )
}

export default Root;

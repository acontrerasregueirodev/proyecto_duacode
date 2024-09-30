import React from 'react';
import EmpleadoManager from './components/EmpleadoManager';
import ReactDOM from 'react-dom';
import './indice.css';
import Aplicacion from './Aplicacion';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Aplicacion />
  </BrowserRouter>,
  document.getElementById("raiz")
);

const App = () => {
  return (
    <div>
      <EmpleadoManager />
    </div>
  );
};

export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import EmpleadoManager from './components/EmpleadoManager';
import Marketing from './components/Marketing';
import Proyectos from './components/Proyectos';
import './styles/menu.css';
import './styles/index.css';
const App = () => {
  return (
    <Router>
      <div>
        <Menu />
        <Routes>
          <Route path="/empleados" element={<EmpleadoManager />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/proyectos" element={<Proyectos />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

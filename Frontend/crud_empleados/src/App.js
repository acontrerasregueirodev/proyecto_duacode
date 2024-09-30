import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import EmpleadoManager from './components/EmpleadoManager';
import Marketing from './components/Markenting';
import Proyectos from './components/Proyectos';

const App = () => {
  return (
    <Router>
      <div>
        <Menu />
        <Routes>

          <Route path="/services" element={<EmpleadoManager />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/proyectos" element={<Proyectos />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

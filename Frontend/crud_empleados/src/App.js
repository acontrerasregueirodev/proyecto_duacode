import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Menu from './components/Menu';

import './styles/menu.css';
import './styles/index.css';
import './styles/empleados.css'
const App = () => {
  return (
    <Router>
      <div>
        <Menu />
        {/* <Routes>
          <Route path="/empleados" element={<EmpleadoManager />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/proyectos" element={<Proyectos />} />
          {/* <Route path="/test" element={<Test />} /> */}
        {/* </Routes> */}
      </div>
    </Router>
  );
};

export default App;

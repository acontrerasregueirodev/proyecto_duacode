import React, { useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import EmpleadoManager from './EmpleadoManager';
import Proyectos from './Proyectos';
import Marketing from './Marketing';

const Menu = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleMenu = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="container">
            <div className={`menu-button ${isSidebarOpen ? 'active' : ''}`} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div className={`sidebar ${isSidebarOpen ? 'active' : ''}`}>
                <ul>
                    <li><Link to="/empleados" onClick={toggleMenu}>Empleados</Link></li>
                    <li><Link to="/marketing" onClick={toggleMenu}>Marketing</Link></li>
                    <li><Link to="/proyectos" onClick={toggleMenu}>Proyectos</Link></li>
                </ul>
            </div>

            <div className={`main ${isSidebarOpen ? 'active' : ''}`}>
                <header className={`header ${isSidebarOpen ? 'active' : ''}`}>
                    <h1>duacode<span>.</span></h1>
                </header>

                <div className="content">
                    <Routes>
                        <Route path="/empleados" element={<EmpleadoManager />} />
                        <Route path="/marketing" element={<Marketing />} />
                        <Route path="/proyectos" element={<Proyectos />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default Menu;

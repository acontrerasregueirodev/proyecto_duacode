import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/services">Gestión de Empleados</Link>
                </li>
                <li>
                    <Link to="/marketing">Marketing</Link>
                </li>
                <li>
                    <Link to="/proyectos">Proyectos</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;
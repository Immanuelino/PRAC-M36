import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
    <nav role="navigation" aria-label="Menú principal">
        <ul>
            <li><Link to="/home" aria-label="Ir a la página de inicio">Home</Link></li>
            <li><Link to="/contact" aria-label="Ir a la página de contacto">Contacto</Link></li>
            <li><Link to="/products" aria-label="Ir a la página de productos">Productos</Link></li>
        </ul>
    </nav>
);

export default Nav;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Nav from './Nav';
import Home from './Home';
import Contact from './Contact';
import Products from './Products';
import '../index.css'; // Asegúrate de que esta ruta sea correcta y esté en la ubicación adecuada


const App = () => (
    <Router>
        <div>
            <Header />
            <Nav />
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/products" element={<Products />} />
            </Routes>
        </div>
    </Router>
);

export default App;

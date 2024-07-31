import React from 'react';

const Products = () => (
    <main role="main">
        <h2>Productos</h2>
        <section role="region" aria-label="Lista de productos">
            <article role="article" aria-labelledby="producto1">
                <h3 id="producto1">Monitor extendido 26 pulgadas</h3>
                <p>Descripción del producto 1.</p>
            </article>
            <article role="article" aria-labelledby="producto2">
                <h3 id="producto2">Teclado mecanico con LEDs</h3>
                <p>Descripción del producto 2.</p>
            </article>
            <article role="article" aria-labelledby="producto3">
                <h3 id="producto3">Mouse gamer</h3>
                <p>Descripción del producto 3.</p>
            </article>
        </section>
    </main>
);

export default Products;

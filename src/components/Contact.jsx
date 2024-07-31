import React from 'react';

const Contact = () => (
    <main role="main">
        <h2>Contacto</h2>
        <form aria-label="Formulario de contacto">
            <div>
                <label htmlFor="nombre">Nombre:</label>
                <hr></hr>
                <input type="text" id="nombre" name="nombre" aria-describedby="nombreError" />
                <span id="nombreError" role="alert">El nombre es obligatorio.</span>
                <hr></hr>

            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <hr></hr>

                <input type="email" id="email" name="email" aria-label="Dirección de correo electrónico" />
                <hr></hr>

            </div>
            <button type="submit" aria-label="Enviar formulario de contacto">Enviar</button>
            
        </form>
    </main>
);

export default Contact;

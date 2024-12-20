import React, { useState } from 'react';

const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [mensaje, setMensaje] = useState('');

  const manejarEnvio = (e) => {
    e.preventDefault();
    alert(`Informacion recibida gracias, ${nombre}, por tu aporte`);
    setNombre('');
    setMensaje('');
  };

  return (
    <form onSubmit={manejarEnvio} className="formulario">
      <input
        type="text"
        placeholder="Tu nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <textarea
        placeholder="Escribe tu aporte de informacion"
        value={mensaje}
        onChange={(e) => setMensaje(e.target.value)}
      ></textarea>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Formulario;


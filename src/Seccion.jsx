import React from 'react';

const Seccion = ({ titulo, contenido, imagen }) => {
  return (
    <section className="seccion">
      <h1>{titulo}</h1>
      <p>{contenido}</p>
      {imagen && <img src={imagen} alt={titulo} className="seccion-imagen" />}
    </section>
  );
};

export default Seccion;

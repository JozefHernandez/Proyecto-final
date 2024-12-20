import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Seccion from './Seccion';
import Formulario from './Formulario';
import './App.css';

function App() {
  return (
    <Router>
      <div className="persona5-app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <Seccion
                  titulo="¿Que son los phantom thieves?"
                  contenido="Son un grupo de ladrones que de formas misteriosas consigue cambiar el corazon de sus victimas para que confiesen delitos o remordimientos de formas no conocidas por el publico"
                  imagen="/images/descargar (2).png"
                />
              }
            />
            <Route
              path="/about"
              element={
                <Seccion
                  titulo="JOKER"
                  contenido="JOKER jefe y unico miembro conocido de los phantom thieves que ha sido capturado e interrogado puesto en libertad condicional por falta de evidencias que demuestren sus delitos"
                  imagen="/images/maxresdefault.png"
                />
              }
            />
            <Route
              path="/contact"
              element={
                <Seccion
                  titulo="Metaverso"
                  contenido="Gracias a la interrogacion hecha al jefe de los phantom thieves JOKER presuntamente utilizan una especie de mundo cognitivo llamado metaverso donde se manifestan contraparte de las personas del mundo real de esta forma pueden llevar a cabo sus metas"
                  imagen="/images/2Q.png"
                />
              }
            />
          </Routes>
        </main>
        <Footer />
        <Formulario /> {}
      </div>
    </Router>
  );
}

export default App;


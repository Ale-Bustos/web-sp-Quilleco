import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './componentes/Home';
import Nosotros from './componentes/Nosotros';
import IniciativasProyectos from './componentes/IniciativasProyectos';
import FondosConcursables from './componentes/FondosConcursables';
import OrganizacionesSociales from './componentes/OrganizacionesSociales';
import Contacto from './componentes/Contacto';
import Header from './componentes/Header';
import Footer from './componentes/Footer';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/iniciativas-proyectos" element={<IniciativasProyectos />} />
            <Route path="/fondos-concursables" element={<FondosConcursables />} />
            <Route path="/organizaciones-sociales" element={<OrganizacionesSociales />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

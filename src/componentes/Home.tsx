import React, { useState } from 'react';
import Nosotros from './Nosotros';
import IniciativasProyectos from './IniciativasProyectos';
import FondosConcursables from './FondosConcursables';
import OrganizacionesSociales from './OrganizacionesSociales';
import Contacto from './Contacto';

const Home: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="p-4 dark:bg-gray-900 dark:text-white transition duration-500">
        <button
          className="bg-gray-800 text-white p-2 rounded mb-4"
          onClick={toggleDarkMode}
        >
          {darkMode ? 'Modo Claro' : 'Modo Oscuro'}
        </button>
        <section id="nosotros" className="mb-8">
          <Nosotros />
        </section>
        <section id="proyectos" className="mb-8">
          <IniciativasProyectos />
        </section>
        <section id="fondos" className="mb-8">
          <FondosConcursables />
        </section>
        <section id="organizaciones" className="mb-8">
          <OrganizacionesSociales />
        </section>
        <section id="contacto" className="mb-8">
          <Contacto />
        </section>
      </div>
    </div>
  );
};

export default Home;

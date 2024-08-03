import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">Servicio País Quilleco</div>
        <nav>
          <ul className="flex space-x-4">
            <li><Link className="text-white" to="/">Home</Link></li>
            <li><Link className="text-white" to="/nosotros">Nosotros</Link></li>
            <li><Link className="text-white" to="/iniciativas-proyectos">Proyectos</Link></li>
            <li><Link className="text-white" to="/fondos-concursables">Fondos Concursables</Link></li>
            <li><Link className="text-white" to="/organizaciones-sociales">Organizaciones Sociales</Link></li>
            <li><Link className="text-white" to="/contacto">Contacto</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

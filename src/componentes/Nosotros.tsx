import React from 'react';
import nosotrosImage from '../images/nosotros.jpg'; // Ruta correcta

const Nosotros: React.FC = () => {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Nosotros</h2>
      <img src={nosotrosImage} alt="Nosotros" className="w-full h-auto mb-4" />
      <p>Servicio País Quilleco es una organización dedicada a mejorar la calidad de vida de los habitantes de Quilleco a través de diversas iniciativas y proyectos comunitarios.</p>
      <h3 className="text-xl font-semibold mb-2">Nuestro Equipo</h3>
      <p>Conoce a los miembros de nuestro equipo y colaboradores.</p>
    </div>
  );
};

export default Nosotros;

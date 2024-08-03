import React from 'react';
import fondosImage from '../images/fondos.jpg'; // Ruta correcta

const FondosConcursables: React.FC = () => {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Fondos Concursables</h2>
      <img src={fondosImage} alt="Fondos Concursables" className="w-full h-auto mb-4" />
      <div className="mb-4">
        <h3 className="text-xl font-semibold">Fondo FOSIS</h3>
        <p>Descripción: El Fondo de Solidaridad e Inversión Social (FOSIS) financia proyectos que...</p>
        <p>Requisitos: Para aplicar, los postulantes deben...</p>
        <p>Proceso de Aplicación: Los pasos para aplicar son...</p>
        <p>Contacto: Para más información, comuníquese con...</p>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-semibold">Fondo FNDR</h3>
        <p>Descripción: El Fondo Nacional de Desarrollo Regional (FNDR) apoya iniciativas que...</p>
        <p>Requisitos: Para aplicar, los postulantes deben...</p>
        <p>Proceso de Aplicación: Los pasos para aplicar son...</p>
        <p>Contacto: Para más información, comuníquese con...</p>
      </div>
      {/* Agregar más fondos aquí */}
    </div>
  );
};

export default FondosConcursables;

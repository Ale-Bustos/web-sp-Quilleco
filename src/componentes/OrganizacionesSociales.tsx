import React from 'react';
import organizacionesImage from '../images/organizaciones.jpg'; // Ruta correcta

const OrganizacionesSociales: React.FC = () => {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Organizaciones Sociales</h2>
      <img src={organizacionesImage} alt="Organizaciones Sociales" className="w-full h-auto mb-4" />
      <div className="mb-4">
        <h3 className="text-xl font-semibold">Consejo de la Salud</h3>
        <p>Descripción: El Consejo de la Salud trabaja en...</p>
        <p>Colaboraciones: Participa en proyectos como...</p>
        <p>Impacto: Ha mejorado la salud comunitaria a través de...</p>
        <p>Contacto: Para más información, comuníquese con...</p>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-semibold">UCAM</h3>
        <p>Descripción: La UCAM (Unión Comunal de Adultos Mayores) se enfoca en...</p>
        <p>Colaboraciones: Ha trabajado en proyectos como...</p>
        <p>Impacto: Ha logrado mejorar la calidad de vida de los adultos mayores mediante...</p>
        <p>Contacto: Para más información, comuníquese con...</p>
      </div>
      {/* Agregar más organizaciones aquí */}
    </div>
  );
};

export default OrganizacionesSociales;

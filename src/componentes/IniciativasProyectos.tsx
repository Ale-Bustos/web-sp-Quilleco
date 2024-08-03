import React from 'react';
import proyectosImage from '../images/proyectos.jpg'; // Ruta correcta

const IniciativasProyectos: React.FC = () => {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Iniciativas y Proyectos</h2>
      <img src={proyectosImage} alt="Proyectos" className="w-full h-auto mb-4" />
      <div className="mb-4">
        <h3 className="text-xl font-semibold">Proyecto FOSIS</h3>
        <p>Este proyecto tiene como objetivo...</p>
        <ul>
          <li>Objetivo 1</li>
          <li>Objetivo 2</li>
          <li>Objetivo 3</li>
        </ul>
        <p>El impacto esperado incluye...</p>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-semibold">Sistema de Cultivo Hidropónico</h3>
        <p>Este sistema tiene como objetivo proporcionar alimentos al comedor solidario del Club de Ancianos de Villa Mercedes mediante el trabajo asociativo.</p>
        <ul>
          <li>Implementación de tecnología hidropónica.</li>
          <li>Capacitación de voluntarios.</li>
          <li>Producción de alimentos sostenibles.</li>
        </ul>
        <p>Impacto: Mejorar la seguridad alimentaria y fomentar prácticas agrícolas sostenibles.</p>
      </div>
      {/* Agregar más proyectos aquí */}
    </div>
  );
};

export default IniciativasProyectos;

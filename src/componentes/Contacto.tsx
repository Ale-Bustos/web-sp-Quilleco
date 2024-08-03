import React from 'react';

const Contacto: React.FC = () => {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Contacto</h2>
      <form className="max-w-md mx-auto">
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Nombre</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Email</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Mensaje</label>
          <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contacto;

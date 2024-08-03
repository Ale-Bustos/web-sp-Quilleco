import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 p-4 mt-8">
      <div className="container mx-auto text-center text-white">
        <p>&copy; 2024 Servicio País Quilleco. Todos los derechos reservados.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="https://www.facebook.com" className="text-white">Facebook</a>
          <a href="https://www.twitter.com" className="text-white">Twitter</a>
          <a href="https://www.instagram.com" className="text-white">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

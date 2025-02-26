import React from 'react';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa'; // Iconos de redes sociales

export default function Contactos() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-16" id='contactos'>
      <div className="max-w-screen-lg mx-auto px-6 flex flex-col items-center">
        {/* Texto de propiedad */}
        <div className="text-center mb-4">
          <p className="text-lg font-semibold">© 2025 WebBost. Todos los derechos reservados.</p>
        </div>

        {/* Enlaces a redes sociales */}
        <div className="flex space-x-6 mb-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-2xl hover:text-blue-600 transition" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-2xl hover:text-pink-600 transition" />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
            <FaTiktok className="text-2xl hover:text-black transition" />
          </a>
        </div>

        {/* Texto de contacto */}
        <div className="text-center mb-4">
          <p className="text-sm">Para más información, contáctanos a través de nuestras redes sociales o por correo electrónico: <a href="mailto:joaquintorresv2005@gmail.com" className="text-green-500 hover:underline">joaquintorresv2005@gmail.com</a></p>
        </div>
      </div>
    </footer>
  );
}

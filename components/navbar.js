'use client';  // Asegúrate de que esta línea esté en la parte superior de tu archivo

import Link from "next/link";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Iconos para el menú móvil

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Cierra el menú si se hace clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && !event.target.closest('.menu')) {
        setMenuOpen(false);
      }
    };

    // Agregar el evento de clic cuando el menú está abierto
    document.addEventListener('click', handleClickOutside);

    // Limpiar el evento cuando el componente se desmonte
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <nav className="flex items-center justify-between p-6 bg-white shadow-md font-sans relative">
      {/* Logo */}
      <div className="text-xl font-bold">
        <img src="/webbost.png" className="h-10 md:h-12" alt="Logo" />
      </div>

      {/* Menú en pantallas grandes */}
      <div className="hidden md:flex space-x-6 text-lg">
        <a href="#home" className="hover:text-gray-600 transition">Home</a>
        <a href="#servicios" className="hover:text-gray-600 transition">Servicios</a>
        <a href="#contactos" className="hover:text-gray-600 transition">Contactos</a>
      </div>

      {/* Botón de compra (siempre visible) */}
      <a href="#contacto">
        <button className="bg-green-500 text-white px-5 py-2 rounded-lg font-semibold shadow-lg hover:bg-green-600 transition">
          Agenda Aqui
        </button>
      </a>

      {/* Botón de menú hamburguesa en móviles */}
      <button 
        className="md:hidden text-2xl ml-4" 
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Menú desplegable en móviles */}
      {menuOpen && (
        <div 
          className="absolute top-0 left-0 w-full h-full bg-white shadow-md p-4 flex flex-col items-center space-y-4 text-lg md:hidden z-50 menu"
        >
          <a href="#home" className="hover:text-gray-600 transition">Home</a>
          <a href="#servicios" className="hover:text-gray-600 transition">Servicios</a>
          <a href="#contactos" className="hover:text-gray-600 transition">Contactos</a>
          <button
            className="absolute top-4 right-4 text-xl text-gray-700"
            onClick={() => setMenuOpen(false)}  // Botón de cerrar dentro del menú
          >
            <FiX />
          </button>
        </div>
      )}
    </nav>
  );
}

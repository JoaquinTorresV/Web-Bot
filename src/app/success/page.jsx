import React from "react";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-100 text-center px-4">
      {/* Botón de regreso a la página principal */}
      <div className="absolute top-4 left-4">
        <Link href="/">
          <button className="flex items-center gap-2 bg-white text-green-600 px-3 py-2 rounded-lg shadow-md hover:bg-green-50 transition">
            <FaArrowLeft /> Inicio
          </button>
        </Link>
      </div>
      
      {/* Contenido principal */}
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-lg">
        <h1 className="text-3xl font-bold text-green-600">🎉 ¡Gracias por tu compra! 🎉</h1>
        <p className="mt-4 text-gray-700 text-lg">
          Tu pedido ha sido procesado con éxito. En breve recibirás un correo con los detalles de tu compra.
        </p>
        <img src="/felicidades.webp" alt="Compra exitosa" className="w-40 mx-auto mt-6" />
        
        <Link href="/">
          <button className="mt-6 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-green-600 transition">
            Volver al inicio
          </button>
        </Link>
      </div>
    </div>
  );
}

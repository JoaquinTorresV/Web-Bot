'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contacto() {
  const [email, setEmail] = useState('');
  const [savedEmail, setSavedEmail] = useState(null);
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState('');

  // Obtener las claves desde variables de entorno
  const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID_CLIENT = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_CLIENT;
  const TEMPLATE_ID_ADMIN = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ADMIN;
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSaveEmail = () => {
    if (email) {
      setSavedEmail(email);
      alert('Correo guardado exitosamente');
    } else {
      alert('Por favor, ingrese un correo válido');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    if (!savedEmail) {
      alert('Por favor, guarda tu correo primero.');
      setLoading(false);
      return;
    }

    // Enviar correo al cliente
    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID_CLIENT,
        { to_email: savedEmail, from_email: 'joaquintorresv2005@gmail.com', date },
        PUBLIC_KEY
      )
      .then(() => {
        console.log('Correo al cliente enviado correctamente');
      })
      .catch((error) => {
        console.error('Error al enviar correo al cliente', error);
        alert('Error al enviar correo al cliente.');
      });

    // Enviar correo al administrador
    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID_ADMIN,
        { to_email: 'joaquintorresv2005@gmail.com', from_email: savedEmail, date },
        PUBLIC_KEY
      )
      .then(() => {
        console.log('Correo al administrador enviado correctamente');
        setLoading(false);
        alert('¡Reunión agendada exitosamente! Te confirmaremos por correo.');
      })
      .catch((error) => {
        console.error('Error al enviar correo al administrador', error);
        setLoading(false);
        alert('Hubo un error al enviar el correo.');
      });
  };

  return (
    <div className="max-w-xl mx-auto p-4" id="contacto">
      <h2 className="text-3xl font-bold text-center mb-4">Agendar Reunión</h2>

      {/* Formulario de correo */}
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Ingresa tu correo electrónico:
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={handleEmailChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
          placeholder="Correo electrónico"
        />
      </div>

      {/* Botón para guardar el correo */}
      <button
        onClick={handleSaveEmail}
        className="w-full bg-blue-500 text-white py-2 rounded-md mb-4"
      >
        Guardar Correo
      </button>

      {/* Selector de fecha */}
      <div className="mb-4">
        <label htmlFor="date" className="block text-sm font-medium mb-2">
          Selecciona una fecha para la reunión:
        </label>
        <input
          id="date"
          type="datetime-local"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* Botón para agendar la reunión */}
      <button
        onClick={handleSubmit}
        disabled={loading}
        className={`w-full ${loading ? 'bg-gray-400' : 'bg-green-500'} text-white py-2 rounded-md`}
      >
        {loading ? 'Agendando...' : 'Agendar Reunión'}
      </button>
    </div>
  );
}

'use client'; // Este es el uso para habilitar la ejecución del código del cliente

import { useState } from 'react';
import emailjs from '@emailjs/browser'; // Esto es correcto
// Importar la librería de EmailJS

export default function Contacto() {
  // Estados para manejar el correo, fecha y el estado de carga
  const [email, setEmail] = useState(''); // Correo del cliente ingresado
  const [savedEmail, setSavedEmail] = useState(null); // Correo guardado
  const [loading, setLoading] = useState(false); // Estado de carga
  const [date, setDate] = useState(''); // Fecha seleccionada para la reunión

  // Función para manejar el cambio de correo
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Función para guardar el correo
  const handleSaveEmail = () => {
    if (email) {
      setSavedEmail(email); // Guardar el correo en el estado
      alert('Correo guardado exitosamente');
    } else {
      alert('Por favor, ingrese un correo válido');
    }
  };

  // Función para manejar el envío de los correos
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Activar el estado de carga

    // Validar que el correo ha sido guardado
    if (!savedEmail) {
      alert('Por favor, guarda tu correo primero.');
      setLoading(false);
      return;
    }

    // Enviar el correo al cliente (confirmación)
    emailjs
      .send(
        'service_sfqizso', // Service ID de EmailJS
        'template_uvq2eya', // Template ID para el cliente
        {
          to_email: savedEmail, // Correo del cliente
          from_email: 'joaquintorresv2005@gmail.com', // Correo del administrador
          date: date, // Fecha seleccionada para la reunión
        },
        'KBx7VrI_K1DE2JP0s' // Public Key (User ID de EmailJS)
      )
      .then(
        (result) => {
          console.log('Correo al cliente enviado correctamente', result);
        },
        (error) => {
          console.log('Error al enviar correo al cliente', error.text);
          alert('Error al enviar correo al cliente: ' + error.text);
        }
      );

    // Enviar el correo al administrador (notificación)
    emailjs
      .send(
        'service_sfqizso', // Service ID de EmailJS
        'template_ggxbjf6', // Template ID para el administrador
        {
          to_email: 'joaquintorresv2005@gmail.com', // Correo del administrador
          from_email: savedEmail, // Correo del cliente (para confirmación)
          date: date, // Fecha seleccionada
        },
        'KBx7VrI_K1DE2JP0s' // Public Key (User ID de EmailJS)
      )
      .then(
        (result) => {
          console.log('Correo al administrador enviado correctamente', result);
          setLoading(false); // Desactivar el estado de carga
          alert('¡Reunión agendada exitosamente! Te confirmaremos por correo.');
        },
        (error) => {
          console.log('Error al enviar correo al administrador', error.text);
          setLoading(false); // Desactivar el estado de carga
          alert('Hubo un error al enviar el correo. Por favor, inténtalo de nuevo.');
        }
      );
  };

  return (
    <div className="max-w-xl mx-auto p-4" id='contacto'>
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

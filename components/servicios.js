import Link from "next/link";

export default function Servicios() {
  return (
    <div className="py-16 bg-gray-100" id="servicios">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900">Nuestros Servicios</h2>
        <p className="mt-4 text-lg text-gray-700">
          Ofrecemos tres opciones de bots para adaptarnos a las necesidades de tu negocio.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {/* Servicio 1: Bot Básico */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <img src="/bot1.jpg" alt="Bot Básico" className="w-full h-48 object-cover rounded-lg" />
          <h3 className="text-xl font-semibold text-gray-900 mt-4">Bot Básico</h3>
          <p className="mt-4 text-gray-600">
            Un bot sencillo con un embudo de ventas básico. Ideal para negocios 
          </p>
          <div className="mt-6">
            <p className="text-2xl font-semibold text-green-500">Pago único</p>
            <Link href="/pricing">
              <button className="mt-4 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-green-600 transition">
                ¡Adquiere ahora!
              </button>
            </Link>
          </div>
        </div>

        {/* Servicio 2: Bot con Agendamiento */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <img src="/bot2.jpg" alt="Bot con Agendamiento" className="w-full h-48 object-cover rounded-lg" />
          <h3 className="text-xl font-semibold text-gray-900 mt-4">Bot con Agendamiento</h3>
          <p className="mt-4 text-gray-600">
            Bot avanzado con agendamiento de reuniones, embudo de ventas con IA y base de datos en Excel. Ideal para negocios medianos.
          </p>
          <div className="mt-6">
            <p className="text-2xl font-semibold text-green-500">Instalación + Mantenimiento mensual</p>
            <Link href="/pricing">
              <button className="mt-4 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-green-600 transition">
                ¡Adquiere ahora!
              </button>
            </Link>
          </div>
        </div>

        {/* Servicio 3: Bot Optimizado */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <img src="/bot3.jpg" alt="Bot Optimizado" className="w-full h-48 object-cover rounded-lg" />
          <h3 className="text-xl font-semibold text-gray-900 mt-4">Bot Optimizado</h3>
          <p className="mt-4 text-gray-600">
            Bot completamente optimizado según las necesidades del cliente. El pago varía según la cantidad de pedidos, con opción de pago único o mensual.
          </p>
          <div className="mt-6">
            <p className="text-2xl font-semibold text-green-500">Pago único o mensual</p>
            <Link href="/pricing">
              <button className="mt-4 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-green-600 transition">
                ¡Adquiere ahora!
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

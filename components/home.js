import Link from "next/link";
export default function HomePage() {
    return (
      <div
        className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center px-6"
        style={{ backgroundImage: "url('/fondo.webp')" }} id="home"
      >
        <div className="max-w-4xl w-full text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
            Automatiza tu WhatsApp con nuestro bot
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Ahorra tiempo y mejora la atención a tus clientes con un bot eficiente y fácil de usar.
          </p>
          <div className="mt-6">
            <Link href="/pricing">
            <button className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-green-600 transition">
              ¡Compra Ahora!
            </button>
            </Link>
            
          </div>
        </div>
  
        {/* Menú móvil */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex items-center justify-center md:hidden">
          {/* Aquí irá tu menú de navegación móvil */}
        </div>
      </div>
    );
  }
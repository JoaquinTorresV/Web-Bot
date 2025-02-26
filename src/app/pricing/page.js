import { Stripe } from "stripe";
import ButtonCheckout from "../../../components/ButtonCheckout";
import Link from "next/link";

async function LoadPrices() {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const prices = await stripe.prices.list();

  // Obtener el nombre del producto para cada precio
  const pricesWithProduct = await Promise.all(
    prices.data.map(async (price) => {
      const product = await stripe.products.retrieve(price.product);
      return {
        id: price.id,
        unit_amount: price.unit_amount / 100, // Convertir centavos a dólares
        currency: price.currency.toUpperCase(),
        product_name: product.name,
        product_description: product.description || "Sin descripción disponible.",
      };
    })
  );

  // Filtrar productos con precios menores a 15 dólares y evitar exactamente 15
  return pricesWithProduct.filter((price) => price.unit_amount > 15);
}

async function PricingPage() {
  const prices = await LoadPrices();

  return (
    <div className="flex flex-col items-center min-h-screen bg-green-100 py-10">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-black">Planes de Bots de WhatsApp</h1>
        <p className="text-gray-700 mt-2 text-lg">
          Elige el plan que mejor se adapte a tu negocio. Pago 100% seguro con Stripe.
        </p>
      </header>

      {/* Contenedor de productos centrado */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
        {prices.map((price) => (
          <div
            key={price.id}
            className="bg-white shadow-lg rounded-xl p-6 w-80 text-center transform transition-all hover:scale-105"
          >
            <h3 className="text-2xl font-semibold text-black">{price.product_name}</h3>
            <p className="text-gray-600 text-sm my-2">{price.product_description}</p>
            <h2 className="text-3xl font-bold text-black my-4">
              ${price.unit_amount} {price.currency}
            </h2>
            <ButtonCheckout
              priceId={price.id}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md transition hover:bg-blue-700 font-semibold text-lg"
            />
          </div>
        ))}
      </div>

      {/* Botón para regresar a la homepage */}
      <div className="mt-10">
        <Link href="/">
          <button className="bg-gray-800 text-white px-6 py-3 rounded-lg shadow-md transition hover:bg-gray-900 text-lg font-semibold">
            ← Volver a la página principal
          </button>
        </Link>
      </div>
    </div>
  );
}

export default PricingPage;

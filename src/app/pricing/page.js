import { Stripe } from "stripe";
import ButtonCheckout from "../../../components/ButtonCheckout";
import Link from "next/link";

// Función para cargar los precios de Stripe
async function LoadPrices() {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const prices = await stripe.prices.list();

  const pricesWithProduct = await Promise.all(
    prices.data.map(async (price) => {
      const product = await stripe.products.retrieve(price.product);
      return {
        id: price.id,
        unit_amount: price.unit_amount,
        currency: price.currency,
        product_name: product.name,
        product_description: product.description,
      };
    })
  );

  // Ordena los precios de menor a mayor
  pricesWithProduct.sort((a, b) => a.unit_amount - b.unit_amount);
  return pricesWithProduct;
}

// Usar getServerSideProps para cargar los datos del lado del servidor
export async function getServerSideProps() {
  const prices = await LoadPrices();
  return {
    props: {
      prices,
    },
  };
}

function PricingPage({ prices }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-8 bg-gray-50 text-black">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-semibold text-green-700">Precios</h1>
      </header>
      <div className="flex flex-wrap justify-center gap-6">
        {prices.map((price) => (
          <div key={price.id} className="bg-white text-black shadow-lg rounded-lg p-8 w-72 text-center hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold text-green-800 mb-4">{price.product_name}</h3>
            <p className="text-lg text-gray-600 mb-6">{price.product_description}</p>
            <p className="text-lg font-medium text-gray-800 mb-6">
              {price.unit_amount / 100} {price.currency.toUpperCase()}
            </p>
            <ButtonCheckout priceId={price.id} className="px-10 py-5 bg-green-600 text-white text-xl font-bold rounded-lg shadow-xl hover:bg-green-800 transition duration-300 transform hover:scale-110 border-2 border-green-700" />
          </div>
        ))}
      </div>
      <Link href="/">
        <button className="mt-6 px-6 py-3 bg-green-500 text-white text-lg font-bold rounded-lg shadow-md hover:bg-green-600 transition duration-300 transform hover:scale-105">
          Volver al inicio
        </button>
      </Link>
    </div>
  );
}

export default PricingPage;

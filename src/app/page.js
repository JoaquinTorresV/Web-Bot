import Image from "next/image";
import Navbar from "../../components/navbar";
import HomePage from "../../components/home";
import Servicios from "../../components/servicios";
import Contacto from "../../components/contacto";
import Contactos from "../../components/contactos";



export default function Home() {
  return (
    <>
    <Navbar />
    <HomePage />
    <Servicios />
    <Contacto />
    <Contactos />
    </>
  );
}

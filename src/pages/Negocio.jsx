// src/pages/Negocio.jsx

import { Link } from 'react-router-dom';
import GraficaAhorro from '../components/GraficaAhorro';
import ImpactoCarrusel from '../components/ImpactoCarrusel';
import heroImage from '../assets/negocio-hero.jpg';

// Datos específicos para la página de Negocio
const datos = {
  testimonios: [
    { nombre: "Director, Planta Industrial GDL", texto: "Nuestros costos operativos bajaron un 70%. La inversión se pagó sola en 3 años." },
    { nombre: "Gerente, Cadena de Tiendas", texto: "Ahora tenemos energía estable sin preocuparnos por los apagones de la CFE." },
    { nombre: "CEO, Parque Tecnológico", texto: "Ser una empresa 100% sustentable nos ha dado una ventaja competitiva enorme." }
  ]
};

function Negocio() {
  return (
    <div className="bg-black text-white">
      
      {/* --- HERO --- */}
      <section className="relative h-screen -mt-24 flex items-center justify-center text-center" style={{ backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Transforma tu Negocio: Reduce Costos, Asegura tu Energía y Lidera el Mercado Sustentable.</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">Con Solarkapital, la energía solar no es un gasto, es la inversión más rentable para el futuro de tu empresa.</p>
          <Link to="/#cotizador" className="bg-yellow-400 text-black font-bold py-3 px-6 rounded-lg hover:bg-yellow-500 transition-colors">Solicitar Estudio Gratuito</Link>
        </div>
      </section>

      {/* --- SECCIÓN AHORRO --- */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Convierte tu Techo en tu Activo <span className="text-yellow-400">Más Rentable</span></h2>
            <p className="text-gray-400 mb-6">Reduce drásticamente tus costos operativos fijos y obtén beneficios fiscales. La energía solar es una inversión inteligente con retornos visibles desde el primer día.</p>
            <Link to="/#cotizador" className="bg-yellow-400 text-black font-bold py-3 px-6 rounded-lg hover:bg-yellow-500 transition-colors">Simula el ROI de tu empresa</Link>
          </div>
          <div>
            {/* Reutilizamos la misma gráfica animada */}
            <GraficaAhorro />
          </div>
        </div>
      </section>
      
      {/* --- IMPACTO EN NÚMEROS --- */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Nuestra Experiencia es tu <span className="text-yellow-400">Garantía</span></h2>
          {/* Reutilizamos el mismo carrusel animado */}
          <ImpactoCarrusel />
        </div>
      </section>

      {/* --- HISTORIAS DE ÉXITO DE NEGOCIOS--- */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Empresas que ya <span className="text-yellow-400">confían en nosotros</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {datos.testimonios.map((testimonio, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-lg">
                <p className="text-gray-300 italic mb-4">"{testimonio.texto}"</p>
                <p className="font-bold text-yellow-400">{testimonio.nombre}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

export default Negocio;
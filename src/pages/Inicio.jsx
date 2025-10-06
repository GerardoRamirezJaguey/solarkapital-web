// src/pages/Inicio.jsx

import { Link } from 'react-router-dom';
import heroBackground from '../assets/hero-background.jpg'; // Reutilizamos la misma imagen de fondo

function Inicio() {
  return (
    <>
      {/* --- Sección Hero Principal --- */}
      <section 
        className="h-screen -mt-24 flex items-center justify-center text-center bg-cover bg-center relative"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 text-white">
            La Revolución Solar <span className="text-yellow-400">en México</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Soluciones de energía limpia para tu hogar, negocio e industria. Empieza a ahorrar hoy.
          </p>
        </div>
      </section>

      {/* --- Sección para dirigir a los usuarios --- */}
      <section id="segmentos" className="py-20 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-2">Encuentra tu Solución Ideal</h2>
          <p className="text-gray-400 mb-12">Selecciona el sector que mejor te representa.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Tarjeta Hogar */}
            <Link to="/hogar" className="bg-gray-900 p-8 rounded-lg hover:bg-gray-800 hover:scale-105 transition-transform duration-300">
              <div className="text-5xl mb-4">🏠</div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-2">Hogar</h3>
              <p className="text-gray-400">Reduce tu recibo de luz y aumenta el valor de tu propiedad con energía limpia.</p>
            </Link>

            {/* Tarjeta Negocio */}
            <Link to="/negocio" className="bg-gray-900 p-8 rounded-lg hover:bg-gray-800 hover:scale-105 transition-transform duration-300">
              <div className="text-5xl mb-4">🏢</div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-2">Negocio</h3>
              <p className="text-gray-400">Disminuye costos operativos y proyecta una imagen de sustentabilidad.</p>
            </Link>

            {/* Tarjeta Industria */}
            <Link to="/industria" className="bg-gray-900 p-8 rounded-lg hover:bg-gray-800 hover:scale-105 transition-transform duration-300">
              <div className="text-5xl mb-4">🏭</div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-2">Industria</h3>
              <p className="text-gray-400">Optimiza el consumo energético de tu producción con sistemas de alta capacidad.</p>
            </Link>

          </div>
        </div>
      </section>
    </>
  );
}

export default Inicio;
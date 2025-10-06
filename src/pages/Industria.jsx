// src/pages/Industria.jsx

import { Link } from 'react-router-dom';
import GraficaAhorro from '../components/GraficaAhorro';
import ImpactoCarrusel from '../components/ImpactoCarrusel';
import heroImage from '../assets/industria-hero.jpg';

// Datos específicos para la página de Industria
const datos = {
  testimonios: [
    { nombre: "Jefe de Operaciones, Planta de Manufactura", texto: "La estabilidad energética es crucial. Con los paneles, eliminamos el riesgo de paros por apagones y bajamos el costo por unidad producida." },
    { nombre: "Director Financiero, Grupo Industrial", texto: "El retorno de inversión fue más rápido de lo proyectado. Es el proyecto de capital más rentable que hemos ejecutado en la última década." },
    { nombre: "Gerente de Sostenibilidad, Agroindustria", texto: "Cumplimos nuestras metas ESG antes de tiempo y ahora operamos con una de las huellas de carbono más bajas del sector." }
  ]
};

function Industria() {
  return (
    <div className="bg-black text-white">
      
      {/* --- HERO --- */}
      <section className="relative h-screen -mt-24 flex items-center justify-center text-center" style={{ backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Máxima Productividad, Mínimo Gasto: La Solución Energética Definitiva para la Industria.</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">Genera energía a gran escala en sitio, blinda tu operación contra apagones y transforma tu gasto energético en una ventaja competitiva.</p>
          <Link to="/#cotizador" className="bg-yellow-400 text-black font-bold py-3 px-6 rounded-lg hover:bg-yellow-500 transition-colors">Analizar mi Viabilidad</Link>
        </div>
      </section>

      {/* --- SECCIÓN AHORRO / RENTABILIDAD --- */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Energía Predecible para una Producción <span className="text-yellow-400">Sin Interrupciones</span></h2>
            <p className="text-gray-400 mb-6">Fija tus costos energéticos por los próximos 25 años y olvídate de la volatilidad de las tarifas eléctricas. Asegura la continuidad de tu operación y maximiza tu rentabilidad.</p>
            <Link to="/#cotizador" className="bg-yellow-400 text-black font-bold py-3 px-6 rounded-lg hover:bg-yellow-500 transition-colors">Calcular ROI Industrial</Link>
          </div>
          <div>
            <GraficaAhorro />
          </div>
        </div>
      </section>
      
      {/* --- IMPACTO EN NÚMEROS --- */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Ingeniería y Experiencia <span className="text-yellow-400">a Gran Escala</span></h2>
          <ImpactoCarrusel />
        </div>
      </section>

      {/* --- HISTORIAS DE ÉXITO INDUSTRIALES --- */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Líderes de la Industria <span className="text-yellow-400">que ya generan su energía</span></h2>
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

export default Industria;
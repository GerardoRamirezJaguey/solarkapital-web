// src/pages/Hogar.jsx

import { Link } from 'react-router-dom';
import GraficaAhorro from '../components/GraficaAhorro';
import GraficaMedioAmbiente from '../components/GraficaMedioAmbiente';
import heroImage from '../assets/hogar-hero.jpg';
import NumeroAnimado from '../components/NumeroAnimado';
import ImpactoCarrusel from '../components/ImpactoCarrusel';


// Datos de tu JSON
const datos = {
  impacto: [
    { valor: "+25000", texto: "Kilowatts instalados" },
    { valor: "+450K", texto: "Toneladas de CO2 reducidas" },
    { valor: "25", texto: "Años de garantía" },
    { valor: "24/7", texto: "Soporte técnico" }
  ],
  testimonios: [
    { nombre: "Familia Guerrero", texto: "Bajamos 95% el costo de luz con Solarkapital." },
    { nombre: "Empresa Sidergi", texto: "Amortizamos la inversión en menos de 2 años." },
    { nombre: "Arq. Laura Pérez", texto: "Ahorro, sustentabilidad y valor agregado a mi vivienda." }
  ]
};

function Hogar() {
  return (
    <div className="bg-black text-white">
      
      {/* --- HERO --- */}
      <section className="relative h-screen -mt-24 flex items-center justify-center text-center" style={{ backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Energía solar al alcance de tu mano</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">Ahorra hasta un 99% en tu recibo de luz y contribuye al medio ambiente con Solarkapital México.</p>
          <Link to="/#cotizador" className="bg-yellow-400 text-black font-bold py-3 px-6 rounded-lg hover:bg-yellow-500 transition-colors">Calcula tu ahorro</Link>
        </div>
      </section>

      {/* --- SECCIÓN AHORRO --- */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ahorra, evita apagones y opera tu coche eléctrico <span className="text-yellow-400">sin costo</span></h2>
            <p className="text-gray-400 mb-6">Instala paneles solares y reduce drásticamente tus gastos eléctricos. Convierte la energía solar en independencia y estabilidad energética.</p>
            <Link to="/#cotizador" className="bg-yellow-400 text-black font-bold py-3 px-6 rounded-lg hover:bg-yellow-500 transition-colors">Simula tu ahorro</Link>
          </div>
          <div>
            <GraficaAhorro />
          </div>
        </div>
      </section>
      
{/* --- IMPACTO EN NÚMEROS (AHORA CON CARRUSEL) --- */}
     <section className="py-20 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Solarkapital en <span className="text-yellow-400">números</span>
          </h2>
          <ImpactoCarrusel />
        </div>
      </section>

      {/* --- HISTORIAS DE ÉXITO --- */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Historias de <span className="text-yellow-400">éxito</span></h2>
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

      {/* --- SECCIÓN MEDIO AMBIENTE --- */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ayuda al planeta <span className="text-yellow-400">mientras ahorras</span></h2>
            <p className="text-gray-400">Cada panel solar instalado reduce las emisiones de CO₂ y contribuye a un futuro más limpio para todos.</p>
          </div>
          <div>
            <GraficaMedioAmbiente />
          </div>
        </div>
      </section>

    </div>
  );
}

export default Hogar;
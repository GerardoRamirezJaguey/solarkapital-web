import { useState } from 'react';
import { Link } from 'react-router-dom'; // Cambiado de HashLink a Link
import GraficaAhorro from '../components/GraficaAhorro';
import GraficaMedioAmbiente from '../components/GraficaMedioAmbiente';
import ImpactoCarrusel from '../components/ImpactoCarrusel';
import heroImage from '../assets/hogar-hero.jpg';

function Hogar() {
  // ... (La lógica de useState y handleCalcular no cambia)
  const [gastoMensual, setGastoMensual] = useState('');
  const [numeroPaneles, setNumeroPaneles] = useState(0);
  const [ahorroEstimado, setAhorroEstimado] = useState(0);
  const [calculoRealizado, setCalculoRealizado] = useState(false);

  const handleCalcular = (e) => {
    e.preventDefault();
    const costoPromedioKWH = 5.5;
    const produccionMensualPanel = 41;
    const gastoNumerico = parseInt(gastoMensual);
    if (isNaN(gastoNumerico) || gastoNumerico <= 0) {
      alert("Por favor, introduce un monto válido.");
      return;
    }
    const consumoMensualKWH = gastoNumerico / costoPromedioKWH;
    const panelesNecesarios = Math.ceil(consumoMensualKWH / produccionMensualPanel);
    const ahorroCalculado = gastoNumerico * 0.95;
    setNumeroPaneles(panelesNecesarios);
    setAhorroEstimado(ahorroCalculado.toFixed(2));
    setCalculoRealizado(true);
  };
  
  return (
    <div className="bg-black text-white">
      {/* --- HERO --- */}
      <section className="relative h-screen -mt-24 flex items-center justify-center text-center" style={{ backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Energía solar al alcance de tu mano</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">Ahorra hasta un 99% en tu recibo de luz y contribuye al medio ambiente con Solarkapital México.</p>
          {/* BOTÓN ACTUALIZADO */}
          <Link to="/simulador" className="bg-yellow-400 text-black font-bold py-3 px-6 rounded-lg hover:bg-yellow-500 transition-colors">Calcula tu ahorro</Link>
        </div>
      </section>

      {/* --- SECCIÓN AHORRO --- */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ahorra, evita apagones y opera tu coche eléctrico <span className="text-yellow-400">sin costo</span></h2>
            <p className="text-gray-400 mb-6">Instala paneles solares y reduce drásticamente tus gastos eléctricos. Convierte la energía solar en independencia y estabilidad energética.</p>
            {/* BOTÓN ACTUALIZADO */}
            <Link to="/simulador" className="bg-yellow-400 text-black font-bold py-3 px-6 rounded-lg hover:bg-yellow-500 transition-colors">Simula tu ahorro</Link>
          </div>
          <div>
            <GraficaAhorro />
          </div>
        </div>
      </section>
      
      {/* --- IMPACTO EN NÚMEROS --- */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Solarkapital en <span className="text-yellow-400">números</span></h2>
          <ImpactoCarrusel />
        </div>
      </section>
      
      {/* El resto de las secciones (Testimonios, Medio Ambiente, etc.) no cambian */}
    </div>
  );
}

export default Hogar;
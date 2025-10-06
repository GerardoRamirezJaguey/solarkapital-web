// src/pages/Simulador.jsx

import { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

// --- Sub-componente para el formulario (CON MEJORAS RESPONSIVAS) ---
function FormularioSimulador({ sector, setSector, pagoMensual, setPagoMensual, onCalcular }) {
  const rangos = {
    Residencial: { min: 2500, max: 50000, step: 500 },
    Comercial: { min: 2500, max: 100000, step: 1000 },
    Industrial: { min: 9000, max: 200000, step: 2000 },
  };

  useEffect(() => {
    const { min, max } = rangos[sector];
    if (pagoMensual < min) setPagoMensual(min);
    if (pagoMensual > max) setPagoMensual(max);
  }, [sector]);
  
  return (
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-2xl font-bold mb-8">1. Selecciona tu sector</h2>
      {/* --- AJUSTE RESPONSIVO: Menos espacio y tamaño en móvil --- */}
      <div className="flex justify-center gap-4 md:gap-8 mb-12">
        {['Residencial', 'Comercial', 'Industrial'].map(s => (
          <div key={s} onClick={() => setSector(s)} className={`p-4 md:p-6 rounded-full cursor-pointer transition-all ${sector === s ? 'bg-yellow-400 text-black shadow-lg shadow-yellow-400/30' : 'bg-gray-800'}`}>
            <span className="text-3xl md:text-4xl">{s === 'Residencial' ? '🏠' : s === 'Comercial' ? '🏢' : '🏭'}</span>
            <p className="font-bold mt-2 text-sm md:text-base">{s}</p>
          </div>
        ))}
      </div>
      
      <h2 className="text-2xl font-bold mb-4">2. Selecciona tu pago mensual actual</h2>
      
      {/* --- GRAN CAMBIO: El valor ahora está grande y centrado arriba --- */}
      <div className="text-yellow-400 text-4xl font-bold my-6">
        ${new Intl.NumberFormat('es-MX').format(pagoMensual)}
      </div>

      {/* --- El slider ahora tiene más espacio en los lados en móvil --- */}
      <div className="px-6 md:px-4">
        <input 
          type="range" 
          min={rangos[sector].min} 
          max={rangos[sector].max}
          step={rangos[sector].step}
          value={pagoMensual}
          onChange={(e) => setPagoMensual(Number(e.target.value))}
          className="w-full h-3 bg-gray-700 rounded-lg appearance-none cursor-pointer range-lg"
        />
        {/* --- Ahora solo mostramos el mínimo y el máximo en los extremos --- */}
        <div className="flex justify-between text-sm font-bold mt-2 text-gray-400">
          <span>${new Intl.NumberFormat('es-MX').format(rangos[sector].min)}</span>
          <span>${new Intl.NumberFormat('es-MX').format(rangos[sector].max)}</span>
        </div>
      </div>
      
      <button onClick={onCalcular} className="bg-yellow-400 text-black font-bold text-xl py-3 px-12 rounded-lg hover:bg-yellow-500 transition-colors mt-16">
        Calcular
      </button>
    </div>
  );
}


// --- El resto del archivo (ResultadosSimulador y Simulador) no necesita cambios ---
// ... (pega aquí el resto del código de Simulador.jsx que ya tenías)
function ResultadosSimulador({ sector, pagoMensual, proyeccion, onEditar }) {
    /* ...código sin cambios... */
}
function Simulador() {
    /* ...código sin cambios... */
}
export default Simulador;
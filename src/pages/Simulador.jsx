import { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

// --- Sub-componente para el formulario ---
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
  }, [sector, setPagoMensual, pagoMensual]);
  
  return (
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-2xl font-bold mb-8">1. Selecciona tu sector</h2>
      <div className="flex justify-center gap-8 mb-12">
        {['Residencial', 'Comercial', 'Industrial'].map(s => (
          <div key={s} onClick={() => setSector(s)} className={`p-6 rounded-full cursor-pointer transition-all ${sector === s ? 'bg-yellow-400 text-black' : 'bg-gray-800'}`}>
            <span className="text-4xl">{s === 'Residencial' ? '🏠' : s === 'Comercial' ? '🏢' : '🏭'}</span>
            <p className="font-bold mt-2">{s}</p>
          </div>
        ))}
      </div>
      <h2 className="text-2xl font-bold mb-4">2. Selecciona tu pago mensual actual</h2>
      <div className="px-4">
        <input 
          type="range" 
          min={rangos[sector].min} 
          max={rangos[sector].max}
          step={rangos[sector].step}
          value={pagoMensual}
          onChange={(e) => setPagoMensual(Number(e.target.value))}
          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer range-lg"
        />
        <div className="flex justify-between text-lg font-bold mt-2">
          <span>${new Intl.NumberFormat('es-MX').format(rangos[sector].min)}</span>
          <span className="text-yellow-400 text-2xl">${new Intl.NumberFormat('es-MX').format(pagoMensual)}</span>
          <span>${new Intl.NumberFormat('es-MX').format(rangos[sector].max)}</span>
        </div>
      </div>
      <button onClick={onCalcular} className="bg-yellow-400 text-black font-bold text-xl py-3 px-12 rounded-lg hover:bg-yellow-500 transition-colors mt-12">
        Calcular
      </button>
    </div>
  );
}

// --- Sub-componente para los resultados ---
function ResultadosSimulador({ sector, pagoMensual, proyeccion, onEditar }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div ref={ref} className="max-w-5xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">Proyección de Ahorro</h2>
      <div className="flex justify-center items-center gap-4 mb-10">
        <span className="text-gray-400">Sector: <strong>{sector}</strong></span>
        <span className="text-gray-400">Pago mensual: <strong>${new Intl.NumberFormat('es-MX').format(pagoMensual)}</strong></span>
        <button onClick={onEditar} className="bg-gray-700 text-white py-1 px-3 rounded-full hover:bg-gray-600 transition-colors">✏️ Editar selección</button>
      </div>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="bg-gray-900 p-6 rounded-lg">
          {proyeccion.tabla.map(item => (
            <div key={item.periodo} className="flex justify-between items-center py-3 border-b border-gray-700 last:border-b-0">
              <span className="font-bold">{item.periodo} años</span>
              <span className="text-yellow-400 text-xl font-semibold">
                {inView && <CountUp start={0} end={item.ahorro} duration={2.5} prefix="$" separator="," />}
              </span>
            </div>
          ))}
        </div>
        <div style={{ width: '100%', height: 300 }}>
          <ResponsiveContainer>
            <LineChart data={proyeccion.grafica} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#4A5568" />
              <XAxis dataKey="name" stroke="#A0AEC0" />
              <YAxis stroke="#A0AEC0" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="Costo CFE" stroke="#F56565" strokeWidth={2} animationDuration={2000} />
              <Line type="monotone" dataKey="Costo Solar" stroke="#48BB78" strokeWidth={2} animationDuration={2000} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

// --- Componente Principal de la Página ---
function Simulador() {
  const [step, setStep] = useState(1);
  const [sector, setSector] = useState('Residencial');
  const [pagoMensual, setPagoMensual] = useState(2500);
  const [proyeccion, setProyeccion] = useState(null);

  const handleCalcular = () => {
    let costoCFEAnual = pagoMensual * 12;
    const costoSistema = costoCFEAnual * 3.5;
    const pagoAnualFijo = costoSistema / 5;
    
    let proyeccionTabla = [];
    let proyeccionGrafica = [];
    let acumuladoCFE = 0;
    let acumuladoSolar = 0;
    let ahorroTotal = 0;

    for (let anio = 1; anio <= 20; anio++) {
      acumuladoCFE += costoCFEAnual;
      acumuladoSolar += (anio <= 5) ? pagoAnualFijo : 0;
      
      proyeccionGrafica.push({ name: `Año ${anio}`, "Costo CFE": Math.round(acumuladoCFE), "Costo Solar": Math.round(acumuladoSolar) });
      costoCFEAnual *= 1.12;
      
      if (anio % 5 === 0) {
        ahorroTotal = acumuladoCFE - acumuladoSolar;
        proyeccionTabla.push({ periodo: anio, ahorro: Math.round(ahorroTotal) });
      }
    }

    setProyeccion({ tabla: proyeccionTabla, grafica: proyeccionGrafica });
    setStep(2);
  };

  return (
    <div className="py-20 px-4">
      {step === 1 ? (
        <FormularioSimulador 
          sector={sector}
          setSector={setSector}
          pagoMensual={pagoMensual}
          setPagoMensual={setPagoMensual}
          onCalcular={handleCalcular}
        />
      ) : (
        proyeccion && <ResultadosSimulador 
          sector={sector}
          pagoMensual={pagoMensual}
          proyeccion={proyeccion}
          onEditar={() => setStep(1)}
        />
      )}
    </div>
  );
}

export default Simulador;
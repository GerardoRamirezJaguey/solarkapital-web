import { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// import CountUp from 'react-countup'; // Eliminado: Causa error de compilación
import { useInView } from 'react-intersection-observer';
/* Eliminado 'react-icons/fa' porque causa error de compilación.
  Reemplazaremos los iconos con Emojis.
*/

// --- Constantes de Contacto ---
const CONTACT_EMAIL = 'ventas@rkapitalmexico.com';
const CONTACT_PHONE_RAW = '524421794354';
const WHATSAPP_LINK = `https://wa.me/${CONTACT_PHONE_RAW}?text=Hola,%20vi%20el%20dashboard%20de%20ahorro%20en%20el%20simulador%20y%20me%20gustaría%20una%20cotización%20personalizada.`;

// --- Componente: Formulario (Iconos reemplazados con Emojis) ---
function FormularioSimulador({ sector, setSector, pagoMensual, setPagoMensual, onCalcular }) {
  const rangos = {
    // Iconos de 'react-icons/fa' reemplazados por emojis
    Residencial: { min: 2500, max: 50000, step: 500, icon: '🏠' },
    Comercial: { min: 2500, max: 100000, step: 1000, icon: '🏢' },
    Industrial: { min: 9000, max: 200000, step: 2000, icon: '🏭' },
  };

  useEffect(() => {
    const { min, max } = rangos[sector];
    if (pagoMensual < min) setPagoMensual(min);
    if (pagoMensual > max) setPagoMensual(max);
  }, [sector, pagoMensual, setPagoMensual, rangos]);
  
  // Lógica para etiqueta de pago (mensual vs bimestral)
  const etiquetaPago = (sector === 'Residencial') ? "¿Cuánto pagas de luz bimestral?" : "¿Cuánto pagas de luz al mes?";

  return (
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Calcula tu Ahorro Solar</h1>
      <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">Descubre en 3 pasos cuánto podrías ahorrar generando tu propia energía.</p>
      
      <h2 className="text-xl md:text-2xl font-bold text-amber-400 mb-6">1. Selecciona tu sector</h2>
      <div className="flex justify-center gap-4 md:gap-8 mb-12">
        {Object.entries(rangos).map(([key, value]) => {
          // const Icono = value.icon; // Ya no es un componente
          return (
            <div 
              key={key} 
              onClick={() => setSector(key)} 
              className={`flex flex-col items-center justify-center p-4 md:p-6 rounded-2xl w-28 h-28 md:w-36 md:h-36 cursor-pointer transition-all duration-300
                         ${sector === key ? 'bg-amber-400 text-black shadow-lg shadow-amber-400/30 scale-105' : 'bg-gray-800 text-white hover:bg-gray-700'}`}
            >
              {/* <Icono className="text-3xl md:text-4xl mb-2" /> -> Reemplazado por <span> */}
              <span className="text-3xl md:text-4xl mb-2">{value.icon}</span>
              <p className="font-bold text-sm md:text-base">{key}</p>
            </div>
          );
        })}
      </div>
      
      <h2 className="text-xl md:text-2xl font-bold text-amber-400 mb-4">{etiquetaPago}</h2>
      <div className="text-amber-400 text-4xl md:text-5xl font-bold my-6">
        ${new Intl.NumberFormat('es-MX').format(pagoMensual)} MXN
      </div>
      <div className="px-6 md:px-4">
        <input 
          type="range" 
          min={rangos[sector].min} 
          max={rangos[sector].max}
          step={rangos[sector].step}
          value={pagoMensual}
          onChange={(e) => setPagoMensual(Number(e.target.value))}
          className="w-full h-3 bg-gray-700 rounded-lg appearance-none cursor-pointer range-lg accent-amber-400"
        />
        <div className="flex justify-between text-sm font-bold mt-2 text-gray-400">
          <span>${new Intl.NumberFormat('es-MX').format(rangos[sector].min)}</span>
          <span>${new Intl.NumberFormat('es-MX').format(rangos[sector].max)}</span>
        </div>
      </div>
      
      <h2 className="text-xl md:text-2xl font-bold text-amber-400 mt-16 mb-4">3. ¡Descubre tu ahorro!</h2>
      <button onClick={onCalcular} className="bg-amber-400 text-black font-bold text-xl py-4 px-12 rounded-full hover:bg-amber-300 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
        GENERAR ANÁLISIS DE AHORRO
      </button>
    </div>
  );
}

// --- Componente: Tarjeta de KPI (NUEVO) ---
function KpiCard({ title, value, unit = '', icon, color = 'text-amber-400', inView }) {
  // const Icon = icon; // 'icon' es ahora un string (emoji)
  // Determina si el valor es numérico para usar CountUp
  const numericValue = typeof value === 'number' ? value : parseFloat(value.replace(/[^0-9.]/g, ''));
  const isNumeric = !isNaN(numericValue);

  return (
    <div className="bg-gray-800 p-5 rounded-2xl shadow-lg flex flex-col justify-between h-full">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-semibold text-gray-400 uppercase">{title}</span>
        {/* <Icon className={`text-2xl ${color}`} /> -> Reemplazado por <span> */}
        <span className={`text-2xl ${color}`}>{icon}</span>
      </div>
      <div className={`text-3xl lg:text-4xl font-extrabold text-white`}>
        {/* <CountUp ... /> Reemplazado por formato de número simple */}
        {isNumeric ? (
          `${unit === '$' ? '$' : ''}${new Intl.NumberFormat('es-MX', { maximumFractionDigits: title.includes('ROI') ? 1 : 0 }).format(numericValue)}`
        ) : (
          value
        )}
        {unit && unit !== '$' && <span className="text-xl lg:text-2xl ml-1">{unit}</span>}
      </div>
    </div>
  );
}

// --- Componente: Resultados (ESTILO POWER BI) ---
function ResultadosSimulador({ sector, proyeccion, onEditar }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  // Lógica para etiqueta de pago (mensual vs bimestral)
  const etiquetaPago = (proyeccion.sector === 'Residencial') ? "Pago Bimestral Actual" : "Pago Mensual Actual";

  return (
    <div ref={ref} className="max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Tu Dashboard de Ahorro</h2>
          <p className="text-lg text-gray-400">Un análisis de tu inversión solar a 20 años.</p>
        </div>
        <button onClick={onEditar} className="inline-flex items-center gap-2 bg-gray-700 text-white py-2 px-4 rounded-full hover:bg-gray-600 transition-colors text-sm self-start sm:self-center">
          {/* <FaEdit /> -> Reemplazado por emoji */}
          <span>✏️</span> Modificar Datos
        </button>
      </div>

      {/* --- FILA 1: KPIs Principales --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <KpiCard
          title="Inversión Estimada"
          value={proyeccion.inversionEstimada}
          unit="$"
          icon="💲" // Reemplazado
          inView={inView}
          color="text-gray-400" // Modificado a gris
        />
        <KpiCard
          title="ROI (Años)"
          value={proyeccion.retornoDeInversion.toFixed(1)}
          unit="Años"
          icon="📅" // Reemplazado
          inView={inView}
          color="text-gray-400" // Modificado a gris
        />
        <KpiCard
          title="Ahorro Total (20 Años)"
          value={proyeccion.ahorroTotal20Anos}
          unit="$"
          icon="📈" // Reemplazado
          inView={inView}
          color="text-gray-400" // Modificado a gris
        />
        <KpiCard
          title="Paneles Estimados"
          value={proyeccion.panelesEstimados}
          unit="Paneles"
          icon="☀️" // Reemplazado
          inView={inView}
          color="text-gray-400" // Modificado a gris
        />
      </div>

      {/* --- FILA 2: Comparativa de Pagos y Gráfico (DISEÑO CORREGIDO) --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        
        {/* Columna de Gráfico Principal (Ahora 2/4 de la fila) */}
        <div className="md:col-span-2 lg:col-span-2 bg-gray-800 p-6 rounded-2xl shadow-lg">
          <h3 className="text-xl font-bold text-white mb-4">Flujo de Efectivo Acumulado</h3>
          <p className="text-gray-400 text-sm mb-4 -mt-2">
            Compara tu gasto total pagando a CFE (rojo) contra la inversión y pago mínimo solar (verde).
          </p>
          <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
              <LineChart data={proyeccion.grafica} margin={{ top: 5, right: 10, left: -20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#4A5568" />
                <XAxis dataKey="name" stroke="#A0AEC0" />
                <YAxis stroke="#A0AEC0" tickFormatter={(val) => `$${Intl.NumberFormat('en-US', { notation: 'compact' }).format(val)}`} />
                <Tooltip formatter={(val) => `$${Intl.NumberFormat().format(val)}`} />
                <Legend />
                <Line type="monotone" dataKey="Gasto sin Paneles" stroke="#F56565" strokeWidth={3} dot={false} />
                <Line type="monotone" dataKey="Gasto con Paneles" stroke="#48BB78" strokeWidth={3} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Columna de Comparativa de Pagos (Ahora 1/4 de la fila) */}
        <div className="md:col-span-1 lg:col-span-1 bg-gray-800 p-6 rounded-2xl shadow-lg text-center flex flex-col justify-center">
          <h3 className="text-sm font-semibold text-gray-400 uppercase mb-2">{etiquetaPago}</h3>
          {/* <FaMoneyBillWave ... /> -> Reemplazado por <span> */}
          <span className="text-4xl text-gray-400 mx-auto mb-3">💸</span>
          <div className="text-4xl font-extrabold text-red-400">
            {/* <CountUp ... /> -> Reemplazado por formato simple */}
            ${new Intl.NumberFormat('es-MX').format(proyeccion.pagoMensual)}
          </div>
        </div>
        
        {/* Widget: Nuevo Pago (Ahora 1/4 de la fila) */}
        <div className="md:col-span-1 lg:col-span-1 bg-gray-800 p-6 rounded-2xl shadow-lg text-center flex flex-col justify-center">
          <h3 className="text-sm font-semibold text-gray-400 uppercase mb-2">Nuevo Pago Mínimo</h3>
          {/* <FaArrowDown ... /> -> Reemplazado por <span> */}
          <span className="text-4xl text-gray-400 mx-auto mb-3">⬇️</span>
          <div className="text-4xl font-extrabold text-green-400">
            {/* <CountUp ... /> -> Reemplazado por formato simple */}
            ${new Intl.NumberFormat('es-MX', { maximumFractionDigits: 0 }).format(proyeccion.nuevoPagoMinimo)}
          </div>
        </div>
      </div>

      {/* --- FILA 3: Tabla de Ahorro --- */}
      <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
        <h3 className="text-xl font-bold text-white mb-4">Ahorro Neto Acumulado (Ganancia)</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="py-3 text-sm font-semibold text-gray-400 uppercase">Período</th>
                <th className="py-3 text-sm font-semibold text-gray-400 uppercase text-right">Ahorro Neto</th>
              </tr>
            </thead>
            <tbody>
              {proyeccion.tabla.map(item => (
                <tr key={item.periodo} className="border-b border-gray-700 last:border-b-0">
                  <td className="py-4 font-bold text-lg text-white">{item.periodo} Años</td>
                  <td className="py-4 text-amber-400 text-xl font-semibold text-right">
                    {/* <CountUp ... /> -> Reemplazado por formato simple */}
                    ${new Intl.NumberFormat('es-MX').format(item.ahorro)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* --- Call to Action Final --- */}
      <div className="mt-16 pt-10 border-t border-gray-700 text-center">
        <h3 className="text-3xl md:text-4xl font-bold text-amber-400">Tu Ahorro Comienza Aquí</h3>
        <p className="text-gray-300 max-w-2xl mx-auto mt-4 mb-8 text-lg">
          Este dashboard es una proyección. El siguiente paso es un **estudio personalizado gratuito** para darte cifras exactas.
        </p>
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-green-500 text-white font-bold text-xl py-4 px-10 rounded-full hover:bg-green-600 transition-transform hover:scale-105 shadow-lg">
          {/* <FaWhatsapp ... /> -> Reemplazado por emoji */}
          <span className="text-2xl">💬</span>
          Agendar mi estudio gratuito
        </a>
        <div className="flex justify-center gap-6 mt-8">
          <a href={`tel:${CONTACT_PHONE_RAW}`} aria-label="Llamar por teléfono" className="bg-gray-800 p-4 rounded-full text-white hover:bg-amber-400 hover:text-black transition-colors">
            {/* <FaPhoneAlt ... /> -> Reemplazado por emoji */}
            <span className="text-xl">📞</span>
          </a>
          <a href={`mailto:${CONTACT_EMAIL}`} aria-label="Enviar correo electrónico" className="bg-gray-800 p-4 rounded-full text-white hover:bg-amber-400 hover:text-black transition-colors">
            {/* <FaEnvelope ... /> -> Reemplazado por emoji */}
            <span className="text-xl">✉️</span>
          </a>
        </div>
      </div>
    </div>
  );
}

// --- Componente Principal (LÓGICA MEJORADA PARA KPIs) ---
function Simulador() {
  const [step, setStep] = useState(1);
  const [sector, setSector] = useState('Residencial');
  const [pagoMensual, setPagoMensual] = useState(2500);
  const [proyeccion, setProyeccion] = useState(null);

  /**
   * LÓGICA DE CÁLCULO MEJORADA (ENFOCADA EN ROI y KPIs)
   */
  const handleCalcular = () => {
    // 1. Estimaciones Iniciales
    // CORRECCIÓN: Lógica para pago bimensual (Residencial) vs mensual
    let pagoCFE_Anual;
    if (sector === 'Residencial') {
      pagoCFE_Anual = pagoMensual * 6; // 6 pagos bimestrales al año
    } else {
      pagoCFE_Anual = pagoMensual * 12; // 12 pagos mensuales al año
    }

    const costoSistema = pagoCFE_Anual * 3; // Inversión = 3 años de pago (ROI de ~3-4 años)
    
    // CORRECCIÓN: Cambiado de 'const' a 'let' para permitir la reasignación en el bucle
    let pagoMinimoCFE_Anual = (pagoCFE_Anual / 12) * 0.05 * 12; // Pago mínimo del 5% (calculado sobre base anual)
    
    const inflacion = 1.08; // Inflación energética/costos del 8%

    // 2. CÁLCULO DE KPIs
    const nuevoPagoMinimo = pagoMensual * 0.05; // El nuevo pago mínimo por período (bimestral o mensual)
    const ahorroAnualInicial = pagoCFE_Anual - pagoMinimoCFE_Anual;
    const retornoDeInversion = costoSistema / ahorroAnualInicial; // ROI en años
    const panelesEstimados = Math.ceil((pagoMensual / 2500) * 10); // 10 paneles por cada $2,500
    
    // 3. CÁLCULO DE GRÁFICA Y TABLA (Loop de 20 años)
    let proyeccionTabla = [];
    let proyeccionGrafica = [];
    let acumuladoSinPaneles = 0;
    let acumuladoConPaneles = costoSistema; // Empezamos con la inversión
    let ahorroTotal = 0;

    proyeccionGrafica.push({ 
      name: 'Hoy', 
      "Gasto sin Paneles": 0, 
      "Gasto con Paneles": costoSistema 
    });

    for (let anio = 1; anio <= 20; anio++) {
      acumuladoSinPaneles += pagoCFE_Anual;
      acumuladoConPaneles += pagoMinimoCFE_Anual;
      ahorroTotal = acumuladoSinPaneles - acumuladoConPaneles;

      proyeccionGrafica.push({ 
        name: `Año ${anio}`, 
        "Gasto sin Paneles": Math.round(acumuladoSinPaneles), 
        "Gasto con Paneles": Math.round(acumuladoConPaneles) 
      });

      pagoCFE_Anual *= inflacion;
      pagoMinimoCFE_Anual *= inflacion; // Esta línea causaba el error

      if (anio === 5 || anio === 10 || anio === 15 || anio === 20) {
        proyeccionTabla.push({ periodo: anio, ahorro: Math.round(ahorroTotal) });
      }
    }
    
    const ahorroTotal20Anos = ahorroTotal; // Ahorro total al final del período

    // 4. GUARDAR RESULTADOS
    setProyeccion({
      // KPIs
      inversionEstimada: costoSistema,
      retornoDeInversion: retornoDeInversion,
      ahorroTotal20Anos: ahorroTotal20Anos,
      panelesEstimados: panelesEstimados,
      pagoMensual: pagoMensual,
      nuevoPagoMinimo: nuevoPagoMinimo,
      sector: sector, // <-- AÑADIDO: Pasamos el sector a los resultados
      // Datos de Gráficos
      tabla: proyeccionTabla,
      grafica: proyeccionGrafica,
    });
    
    setStep(2);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="py-20 px-4 bg-gray-950 text-white min-h-screen">
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
          sector={sector} // Lo pasamos por si lo queremos mostrar
          proyeccion={proyeccion} // Pasamos todo el objeto de proyección
          onEditar={() => {
            setStep(1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      )}
    </div>
  );
}

export default Simulador;
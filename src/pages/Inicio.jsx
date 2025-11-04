import { Link } from 'react-router-dom';
import heroBackground from '../assets/hero-background.jpg'; 

// --- ¡Importaciones de Íconos CORREGIDAS! ---
// Consolidamos FaNetworkWired en la línea principal de "fa"
import { FaSolarPanel, FaPiggyBank, FaNetworkWired } from 'react-icons/fa';
import { HiOutlineSwitchHorizontal } from 'react-icons/hi';
import { FaLightbulb } from 'react-icons/fa6';
import { ImMeter } from 'react-icons/im';
// (Quitamos la línea de TbTransmissionTower)
// ----------------------------------------------------

function Inicio() {
  return (
    <>
      {/* --- 1. Sección Hero Principal (con Beneficios integrados) --- */}
      <section 
        className="h-screen -mt-24 flex items-center justify-center bg-cover bg-center relative"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        {/* Capa de superposición oscura/transparente */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-0"></div>
        
        {/* Contenido principal del hero (título y soluciones) */}
        <div className="container mx-auto px-8 relative z-10 flex flex-col md:flex-row items-center justify-between h-full pt-24">
          
          {/* Columna Izquierda: Título y CTA */}
          <div className="text-left max-w-lg md:mr-12 mb-12 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-white">
              LA REVOLUCIÓN SOLAR
              <br />EMPIEZA CONTIGO
            </h2>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Genera tu propia energía limpia y <span className="font-bold text-amber-400">reduce tu recibo</span> desde el primer día.
            </p>
            <Link 
              to="/contacto" 
              className="inline-block bg-amber-500 text-gray-900 font-bold py-3 px-8 rounded-full text-lg hover:bg-amber-400 transition-colors duration-300 shadow-lg"
            >
              CONTÁCTANOS
            </Link>
          </div>

          {/* Columna Derecha: 4 Soluciones */}
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 bg-white/30 backdrop-blur-sm rounded-full p-4">
            <Link to="/hogar" className="flex flex-col items-center group w-28">
              <div className="w-20 h-20 rounded-full border-4 border-amber-400 flex items-center justify-center bg-white/20 group-hover:bg-white/40 transition-colors duration-300">
                <span className="text-4xl text-white">🏠</span>
              </div>
              <p className="text-white text-xs font-semibold mt-2 text-center">SOLUCIONES<br/>RESIDENCIALES</p>
            </Link>
            <Link to="/negocio" className="flex flex-col items-center group w-28">
              <div className="w-20 h-20 rounded-full border-4 border-amber-400 flex items-center justify-center bg-white/20 group-hover:bg-white/40 transition-colors duration-300">
                <span className="text-4xl text-white">🏢</span>
              </div>
              <p className="text-white text-xs font-semibold mt-2 text-center">SOLUCIONES<br/>COMERCIALES</p>
            </Link>
            <Link to="/industria" className="flex flex-col items-center group w-28">
              <div className="w-20 h-20 rounded-full border-4 border-amber-400 flex items-center justify-center bg-white/20 group-hover:bg-white/40 transition-colors duration-300">
                <span className="text-4xl text-white">🏭</span>
              </div>
              <p className="text-white text-xs font-semibold mt-2 text-center">SOLUCIONES<br/>INDUSTRIALES</p>
            </Link>
            <Link to="/corporativo" className="flex flex-col items-center group w-28">
              <div className="w-20 h-20 rounded-full border-4 border-amber-400 flex items-center justify-center bg-white/20 group-hover:bg-white/40 transition-colors duration-300">
                <span className="text-4xl text-white">💼</span>
              </div>
              <p className="text-white text-xs font-semibold mt-2 text-center">SOLUCIONES<br/>CORPORATIVAS</p>
            </Link>
          </div>
        </div>

        {/* --- 2. Sección de Beneficios (Integrada en el Hero) --- */}
        <div className="absolute bottom-0 left-0 w-full z-20">
          <div className="container mx-auto px-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-t-lg shadow-xl py-6 px-4 md:flex justify-around items-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-4 justify-center md:justify-start">
                <span className="text-5xl text-amber-500">💰</span>
                <div className="text-left">
                  <h3 className="text-lg font-bold text-gray-900">AHORRO GARANTIZADO</h3>
                  <p className="text-gray-700 text-sm">Reduce tu recibo hasta en un 99%.</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 justify-center md:justify-start">
                <span className="text-5xl text-amber-500">📈</span>
                <div className="text-left">
                  <h3 className="text-lg font-bold text-gray-900">AUMENTO DE PLUSVALÍA</h3>
                  <p className="text-gray-700 text-sm">Incrementa el valor de tu propiedad.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. Sección: ¿Cómo Funciona la Energía Solar? (¡CON ÍCONOS!) --- */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-gray-800 text-center">¿CÓMO FUNCIONA LA ENERGÍA SOLAR?</h2>
          
          <div className="overflow-x-auto pb-4">
            <div className="flex flex-row flex-nowrap gap-6">

              {/* Tarjeta 1: Captación */}
              <div className="flex-shrink-0 w-72 p-6 bg-white rounded-lg shadow-md border-t-4 border-amber-500 text-center">
                <FaSolarPanel className="text-5xl text-amber-500 mb-4 mx-auto" />
                <h3 className="text-2xl font-semibold text-amber-600 mb-2">1. Captación Solar</h3>
                <p className="text-gray-700">Los paneles absorben la luz del sol, generando energía en corriente continua.</p>
              </div>
              
              {/* Tarjeta 2: Conversión */}
              <div className="flex-shrink-0 w-72 p-6 bg-white rounded-lg shadow-md border-t-4 border-amber-500 text-center">
                <HiOutlineSwitchHorizontal className="text-5xl text-amber-500 mb-4 mx-auto" />
                <h3 className="text-2xl font-semibold text-amber-600 mb-2">2. Conversión a CA</h3>
                <p className="text-gray-700">Un inversor convierte la corriente continua en corriente alterna para tus electrodomésticos.</p>
              </div>
              
              {/* Tarjeta 3: Consumo */}
              <div className="flex-shrink-0 w-72 p-6 bg-white rounded-lg shadow-md border-t-4 border-amber-500 text-center">
                <FaLightbulb className="text-5xl text-amber-500 mb-4 mx-auto" />
                <h3 className="text-2xl font-semibold text-amber-600 mb-2">3. Consumo</h3>
                <p className="text-gray-700">La energía generada se utiliza directamente para cubrir el consumo de tu hogar o negocio.</p>
              </div>
              
              {/* --- Tarjeta 4: Excedente (¡CORREGIDA!) --- */}
              <div className="flex-shrink-0 w-72 p-6 bg-white rounded-lg shadow-md border-t-4 border-amber-500 text-center">
                {/* --- ESTE ES EL ÍCONO QUE CAMBIAMOS --- */}
                <FaNetworkWired className="text-5xl text-amber-500 mb-4 mx-auto" />
                <h3 className="text-2xl font-semibold text-amber-600 mb-2">4. Excedente a Red</h3>
                <p className="text-gray-700">Si produces más de lo que consumes, el excedente se inyecta a la red de CFE.</p>
              </div>
              
              {/* Tarjeta 5: Medición */}
              <div className="flex-shrink-0 w-72 p-6 bg-white rounded-lg shadow-md border-t-4 border-amber-500 text-center">
                <ImMeter className="text-5xl text-amber-500 mb-4 mx-auto" />
                <h3 className="text-2xl font-semibold text-amber-600 mb-2">5. Medición</h3>
                <p className="text-gray-700">Un medidor bidireccional registra la energía que tomas y la que aportas a la red.</p>
              </div>
              
              {/* Tarjeta 6: Ahorro */}
              <div className="flex-shrink-0 w-72 p-6 bg-white rounded-lg shadow-md border-t-4 border-amber-500 text-center">
                <FaPiggyBank className="text-5xl text-amber-500 mb-4 mx-auto" />
                <h3 className="text-2xl font-semibold text-amber-600 mb-2">6. Ahorro</h3>
                <p className="text-gray-700">CFE solo te cobrará la diferencia, resultando en un ahorro significativo en tu recibo.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Aquí puedes agregar más secciones en el futuro --- */}
    </>
  );
}

export default Inicio;
import { Link } from 'react-router-dom';
import heroBackground from '../assets/hero-background.jpg';

import { FaSolarPanel, FaPiggyBank, FaNetworkWired } from 'react-icons/fa';
import { HiOutlineSwitchHorizontal } from 'react-icons/hi';
import { FaLightbulb } from 'react-icons/fa6';
import { ImMeter } from 'react-icons/im';

const CONTACT_EMAIL = 'edagr.ramirez@rkapitalmexico.com';

function Inicio() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section
        className="relative pt-24 pb-16 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        {/* Capa oscura */}
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Grid responsive: una columna en móvil, dos en pantallas grandes */}
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-center min-h-[60vh] lg:min-h-[70vh]">

            {/* ----- Columna izquierda: texto + botones ----- */}
            <div className="text-center lg:text-left space-y-6">
              <h1 className="font-extrabold text-white leading-tight
                             text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">
                LA REVOLUCIÓN SOLAR
                <br />EMPIEZA CONTIGO
              </h1>

              <p className="text-gray-200
                            text-base sm:text-lg lg:text-xl max-w-xl mx-auto lg:mx-0">
                Genera tu propia energía limpia y{' '}
                <span className="font-bold text-amber-400">reduce tu recibo</span> desde el primer día.
              </p>

              {/* Botones responsivos: apilados en móvil, lado a lado en pantallas grandes */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=Quiero%20cotizar%20un%20sistema%20solar`}
                  className="w-full sm:w-auto text-center bg-amber-500 text-gray-900 font-bold 
                             py-3 px-8 rounded-full text-base sm:text-lg
                             hover:bg-amber-400 transition-colors duration-300 shadow-lg"
                >
                  CONTÁCTANOS
                </a>

                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=Simulador%20de%20ahorro%20solar`}
                  className="w-full sm:w-auto text-center border border-amber-400 text-amber-300 font-semibold
                             py-3 px-8 rounded-full text-base sm:text-lg
                             hover:bg-amber-400 hover:text-gray-900 transition-colors duration-300"
                >
                  SIMULADOR
                </a>
              </div>
            </div>

            {/* ----- Columna derecha: píldora de SOLUCIONES ----- */}
            <div className="flex justify-center lg:justify-end">
              <div
                className="bg-white/25 backdrop-blur-md rounded-full
                           px-3 py-3 sm:px-4 sm:py-4
                           flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4
                           max-w-full"
              >
                {/* Residenciales */}
                <Link
                  to="/hogar"
                  className="flex flex-col items-center group
                             min-w-[70px] sm:min-w-[90px]"
                >
                  <div
                    className="flex items-center justify-center rounded-full border border-amber-400
                               bg-white/20 group-hover:bg-white/40 transition-all
                               w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16"
                  >
                    <span className="text-xl sm:text-2xl lg:text-3xl text-white">🏠</span>
                  </div>
                  <p className="mt-2 text-white font-semibold text-[9px] sm:text-[10px] lg:text-xs text-center leading-tight">
                    SOLUCIONES
                    <br />
                    RESIDENCIALES
                  </p>
                </Link>

                {/* Comerciales */}
                <Link
                  to="/negocio"
                  className="flex flex-col items-center group
                             min-w-[70px] sm:min-w-[90px]"
                >
                  <div
                    className="flex items-center justify-center rounded-full border border-amber-400
                               bg-white/20 group-hover:bg-white/40 transition-all
                               w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16"
                  >
                    <span className="text-xl sm:text-2xl lg:text-3xl text-white">🏢</span>
                  </div>
                  <p className="mt-2 text-white font-semibold text-[9px] sm:text-[10px] lg:text-xs text-center leading-tight">
                    SOLUCIONES
                    <br />
                    COMERCIALES
                  </p>
                </Link>

                {/* Industriales */}
                <Link
                  to="/industria"
                  className="flex flex-col items-center group
                             min-w-[70px] sm:min-w-[90px]"
                >
                  <div
                    className="flex items-center justify-center rounded-full border border-amber-400
                               bg-white/20 group-hover:bg-white/40 transition-all
                               w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16"
                  >
                    <span className="text-xl sm:text-2xl lg:text-3xl text-white">🏭</span>
                  </div>
                  <p className="mt-2 text-white font-semibold text-[9px] sm:text-[10px] lg:text-xs text-center leading-tight">
                    SOLUCIONES
                    <br />
                    INDUSTRIALES
                  </p>
                </Link>

                {/* Corporativas */}
                <Link
                  to="/corporativo"
                  className="flex flex-col items-center group
                             min-w-[70px] sm:min-w-[90px]"
                >
                  <div
                    className="flex items-center justify-center rounded-full border border-amber-400
                               bg-white/20 group-hover:bg-white/40 transition-all
                               w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16"
                  >
                    <span className="text-xl sm:text-2xl lg:text-3xl text-white">💼</span>
                  </div>
                  <p className="mt-2 text-white font-semibold text-[9px] sm:text-[10px] lg:text-xs text-center leading-tight">
                    SOLUCIONES
                    <br />
                    CORPORATIVAS
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BENEFICIOS (AHORRO / PLUSVALÍA) ================= */}
      {/* Sección aparte: se adapta a todo y en desktop se “monta” un poco sobre el hero */}
      <section className="-mt-4 sm:-mt-8 lg:-mt-12 relative z-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl
                       flex flex-col sm:flex-row items-center justify-between
                       gap-6 sm:gap-8
                       py-6 sm:py-8 px-4 sm:px-6 lg:px-8"
          >
            <div className="flex items-center gap-4">
              <span className="text-4xl sm:text-5xl text-amber-500">💰</span>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900">
                  AHORRO GARANTIZADO
                </h3>
                <p className="text-gray-700 text-xs sm:text-sm">
                  Reduce tu recibo hasta en un 99%.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-4xl sm:text-5xl text-amber-500">📈</span>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900">
                  AUMENTO DE PLUSVALÍA
                </h3>
                <p className="text-gray-700 text-xs sm:text-sm">
                  Incrementa el valor de tu propiedad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ¿CÓMO FUNCIONA LA ENERGÍA SOLAR? ================= */}
      <section className="py-16 sm:py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-10 sm:mb-12 text-gray-800 text-center">
            ¿CÓMO FUNCIONA LA ENERGÍA SOLAR?
          </h2>

          {/* Carrusel horizontal que funciona igual en todas las pantallas */}
          <div className="overflow-x-auto pb-4">
            <div className="flex flex-row flex-nowrap gap-4 sm:gap-6">
              {/* 1 */}
              <div className="flex-shrink-0 w-60 sm:w-72 p-6 bg-white rounded-lg shadow-md border-t-4 border-amber-500 text-center">
                <FaSolarPanel className="text-4xl sm:text-5xl text-amber-500 mb-4 mx-auto" />
                <h3 className="text-lg sm:text-2xl font-semibold text-amber-600 mb-2">
                  1. Captación Solar
                </h3>
                <p className="text-gray-700 text-sm">
                  Los paneles absorben la luz del sol...
                </p>
              </div>

              {/* 2 */}
              <div className="flex-shrink-0 w-60 sm:w-72 p-6 bg-white rounded-lg shadow-md border-t-4 border-amber-500 text-center">
                <HiOutlineSwitchHorizontal className="text-4xl sm:text-5xl text-amber-500 mb-4 mx-auto" />
                <h3 className="text-lg sm:text-2xl font-semibold text-amber-600 mb-2">
                  2. Conversión a CA
                </h3>
                <p className="text-gray-700 text-sm">
                  Un inversor convierte la corriente...
                </p>
              </div>

              {/* 3 */}
              <div className="flex-shrink-0 w-60 sm:w-72 p-6 bg-white rounded-lg shadow-md border-t-4 border-amber-500 text-center">
                <FaLightbulb className="text-4xl sm:text-5xl text-amber-500 mb-4 mx-auto" />
                <h3 className="text-lg sm:text-2xl font-semibold text-amber-600 mb-2">
                  3. Consumo
                </h3>
                <p className="text-gray-700 text-sm">
                  La energía generada se utiliza...
                </p>
              </div>

              {/* 4 */}
              <div className="flex-shrink-0 w-60 sm:w-72 p-6 bg-white rounded-lg shadow-md border-t-4 border-amber-500 text-center">
                <FaNetworkWired className="text-4xl sm:text-5xl text-amber-500 mb-4 mx-auto" />
                <h3 className="text-lg sm:text-2xl font-semibold text-amber-600 mb-2">
                  4. Excedente a Red
                </h3>
                <p className="text-gray-700 text-sm">
                  Si produces más de lo que consumes...
                </p>
              </div>

              {/* 5 */}
              <div className="flex-shrink-0 w-60 sm:w-72 p-6 bg-white rounded-lg shadow-md border-t-4 border-amber-500 text-center">
                <ImMeter className="text-4xl sm:text-5xl text-amber-500 mb-4 mx-auto" />
                <h3 className="text-lg sm:text-2xl font-semibold text-amber-600 mb-2">
                  5. Medición
                </h3>
                <p className="text-gray-700 text-sm">
                  Un medidor bidireccional registra...
                </p>
              </div>

              {/* 6 */}
              <div className="flex-shrink-0 w-60 sm:w-72 p-6 bg-white rounded-lg shadow-md border-t-4 border-amber-500 text-center">
                <FaPiggyBank className="text-4xl sm:text-5xl text-amber-500 mb-4 mx-auto" />
                <h3 className="text-lg sm:text-2xl font-semibold text-amber-600 mb-2">
                  6. Ahorro
                </h3>
                <p className="text-gray-700 text-sm">
                  CFE solo te cobrará la diferencia...
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Inicio;

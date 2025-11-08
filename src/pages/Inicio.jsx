import { Link } from 'react-router-dom';
import heroBackground from '../assets/hero-background.jpg';

import { FaSolarPanel, FaPiggyBank, FaNetworkWired } from 'react-icons/fa';
import { HiOutlineSwitchHorizontal } from 'react-icons/hi';
import { FaLightbulb } from 'react-icons/fa6';
import { ImMeter } from 'react-icons/im';
import { motion } from "framer-motion";


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
          {/* Grid responsive */}
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-center min-h-[60vh] lg:min-h-[70vh]">

            {/* ----- Columna izquierda ----- */}
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

              {/* Botones */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                {/* CONTÁCTANOS -> correo */}
                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=Quiero%20cotizar%20un%20sistema%20solar`}
                  className="w-full sm:w-auto text-center bg-amber-500 text-gray-900 font-bold 
                             py-3 px-8 rounded-full text-base sm:text-lg
                             hover:bg-amber-400 transition-colors duration-300 shadow-lg"
                >
                  CONTÁCTANOS
                </a>

                {/* SIMULADOR SOLO EN MÓVIL -> página /simulador */}
                <Link
                  to="/simulador"
                  className="w-full sm:w-auto text-center border border-amber-400 text-amber-300 font-semibold
                             py-3 px-8 rounded-full text-base sm:text-lg
                             hover:bg-amber-400 hover:text-gray-900 transition-colors duration-300
                             md:hidden"
                >
                  SIMULADOR
                </Link>
              </div>
            </div>

            {/* ----- Columna derecha: píldora SOLUCIONES ----- */}
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

      {/* ================= BENEFICIOS ================= */}
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
      <section className="relative py-24 bg-gradient-to-b from-amber-50 via-white to-yellow-100 overflow-hidden">
        {/* Fondo solar dinámico */}
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,223,100,0.25),transparent_70%)]"
          animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.05, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Halo giratorio */}
        <motion.div
          className="absolute -top-20 -left-20 w-[800px] h-[800px] bg-gradient-to-br from-yellow-300/30 via-amber-300/10 to-transparent rotate-45 blur-3xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-10 sm:mb-14 bg-gradient-to-r from-yellow-400 via-orange-500 to-amber-700 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(255,200,0,0.4)]"
          >
            ¿CÓMO FUNCIONA LA ENERGÍA SOLAR?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-gray-700 text-lg sm:text-xl max-w-2xl mx-auto mb-16"
          >
            Cada rayo del sol se transforma en energía limpia y ahorro real.{" "}
            <span className="text-amber-500 font-semibold">Conoce el proceso.</span>
          </motion.p>

          {/* Tarjetas adaptadas sin scroll */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {[
              { icon: "☀️", title: "1. Captación Solar", text: "Los paneles fotovoltaicos absorben la luz solar y la convierten en energía eléctrica.", color: "from-yellow-300 to-amber-500" },
              { icon: "⚡", title: "2. Conversión a CA", text: "El inversor convierte la energía directa (DC) en corriente alterna (CA).", color: "from-amber-400 to-orange-500" },
              { icon: "💡", title: "3. Consumo Inteligente", text: "La energía generada alimenta tus aparatos eléctricos reduciendo tu dependencia de CFE.", color: "from-orange-500 to-yellow-400" },
              { icon: "🌐", title: "4. Excedente a Red", text: "La energía sobrante se inyecta a la red eléctrica, generando crédito a tu favor.", color: "from-yellow-400 to-green-400" },
              { icon: "📊", title: "5. Medición Inteligente", text: "Un medidor bidireccional registra tanto el consumo como la energía que entregas.", color: "from-green-400 to-emerald-500" },
              { icon: "💰", title: "6. Ahorro Garantizado", text: "Pagas menos en tu recibo: más energía limpia, más dinero para ti.", color: "from-amber-500 to-yellow-300" },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                className={`relative bg-white/95 backdrop-blur-md border-t-4 border-amber-400 rounded-2xl shadow-lg hover:shadow-[0_0_35px_rgba(255,204,0,0.4)] p-8 w-full sm:w-[90%] md:w-[80%] lg:w-[90%] transition-all duration-500 group`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-15 blur-2xl transition-all duration-700`}></div>

                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className={`text-6xl mb-4 bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                    {step.icon}
                  </div>
                  <h3 className={`text-xl font-bold mb-2 bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                    {step.title}
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base">{step.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Inicio;

import React from 'react';
import { Link } from 'react-router-dom';
import { HiChevronDown } from 'react-icons/hi'; // Importamos un icono limpio (ruta corregida)

// --- DATOS DE LAS PREGUNTAS (ORGANIZADOS POR CATEGORÍA) ---

const faqsGenerales = [
  {
    question: '¿Por qué vale la pena instalar paneles solares?',
    answer: [
      'Con un sistema fotovoltaico puedes “congelar” buena parte de lo que pagas hoy de luz por más de 20 años.',
      'Los paneles requieren mantenimiento básico y te protegen contra los incrementos de tarifa de CFE, haciendo tu gasto de energía mucho más predecible.'
    ],
  },
  {
    question: '¿Cómo funcionan los paneles solares en mi casa o negocio?',
    answer: [
      'Los módulos convierten la radiación del sol en electricidad de corriente directa (CD).',
      'Esa energía pasa a través de un inversor que la transforma en corriente alterna (CA), que es la que usan tus aparatos. Después se distribuye por el mismo centro de carga y cableado que ya tienes instalado.'
    ],
  },
  {
    question: '¿Qué pasa en días nublados o por la noche?',
    answer: [
      'En días nublados o con lluvia los paneles siguen generando energía, pero con menor intensidad que en un día totalmente despejado.',
      'Por la noche los paneles no producen, pero sigues conectado a la red de CFE, que actúa como respaldo para que siempre tengas electricidad.'
    ],
  },
  {
    question: '¿Los paneles resisten granizo?',
    answer: [
      'Los paneles solares certificados están diseñados para soportar impactos de granizo de tamaño estándar sin dañarse.',
      'En condiciones climáticas normales de México es muy poco probable que el granizo alcance dimensiones que superen la resistencia del módulo.'
    ],
  },
];

const faqsTecnicas = [
  {
    question: '¿Cuánto tarda la instalación de un sistema solar?',
    answer: [
      'El tiempo de instalación depende del tamaño del proyecto y de la complejidad del techo o estructura.',
      'Para una vivienda típica la instalación física suele terminarse en uno o dos días, más el tiempo de trámites y programación con CFE.'
    ],
  },
  {
    question: '¿Cuánto espacio necesito en mi techo para instalar los paneles?',
    answer: [
      'El espacio requerido depende de tu consumo y de la capacidad de cada panel.',
      'Con tu recibo de luz podemos estimar cuánta energía necesitas compensar y de ahí calcular el número aproximado de módulos y los metros cuadrados necesarios.'
    ],
  },
  {
    question: '¿Puedo ampliar el sistema más adelante?',
    answer: [
      'Sí. Una de las ventajas de los sistemas conectados a red es que se pueden crecer agregando más paneles e incluso actualizando inversores, siempre que la instalación eléctrica lo permita.',
      'De esta forma puedes iniciar con un tamaño acorde a tu presupuesto y ampliarlo en el futuro si tu consumo aumenta.'
    ],
  },
  {
    question: '¿La energía de los paneles es igual a la que recibo de CFE?',
    answer: [
      'Sí. El inversor sincroniza la energía generada por los paneles con la frecuencia y el voltaje de la red de CFE.',
      'Desde el punto de vista de tus equipos eléctricos, la energía que viene del sistema solar y la que viene de la red es completamente compatible.'
    ],
  },
];

const faqsFinancieras = [
  {
    question: '¿Cómo funciona el medidor bidireccional y la interconexión con CFE?',
    answer: [
      'Al instalar energía solar, CFE sustituye tu medidor por uno bidireccional que registra tanto la energía que consumes como la que inyectas a la red.',
      'Durante las horas de sol, si tus paneles producen más energía de la que estás usando, el excedente se envía a la red y se queda como saldo a tu favor. En el recibo se cobra únicamente la diferencia entre lo que consumiste y lo que generaste.'
    ],
  },
  {
    question: '¿Qué significa que un panel sea de categoría “Tier 1”?',
    answer: [
      'Es una clasificación que se usa para fabricantes con sólida estabilidad financiera y procesos de producción de alta calidad.',
      'Trabajar con paneles de este nivel da más confianza en la durabilidad del producto y facilita que bancos y arrendadoras acepten financiar el sistema.'
    ],
  },
  {
    question: '¿Qué garantías tienen los paneles solares?',
    answer: [
      'Normalmente se manejan dos tipos de garantía: contra defects de fabricación y de producción de energía.',
      'En sistemas de calidad es común encontrar garantías de alrededor de 10 años en el producto y hasta 25 años garantizando un porcentaje mínimo de generación.'
    ],
  },
  {
    question: '¿En cuánto tiempo empezaré a ver ahorro en mi recibo?',
    answer: [
      'El ahorro se ve desde el primer recibo después de la interconexión con CFE.',
      'El tiempo de retorno de inversión varía según la tarifa (doméstica, comercial o industrial) y tu nivel de consumo, pero en general los proyectos bien dimensionados recuperan la inversión en pocos años.'
    ],
  },
  {
    question: '¿Existen beneficios fiscales por invertir en paneles solares?',
    answer: [
      'Para ciertas personas físicas con actividad empresarial y personas morales la legislación fiscal permite deducir una parte importante del valor del sistema en un solo ejercicio.',
      'Tu contador puede ayudarte a aplicar el beneficio en la declaración anual y aprovechar mejor el proyecto desde el punto de vista fiscal.'
    ],
  },
];


// Usamos el email corporativo que definimos en la página de Inicio
const CONTACT_EMAIL = "ventas@rkapitalmexico.com";

// --- COMPONENTE Auxiliar de Acordeón (para reutilizar) ---
const FaqItem = ({ faq }) => (
  <details className="bg-white rounded-xl shadow group p-4 sm:p-5">
    <summary className="list-none cursor-pointer flex justify-between items-center">
      <span className="font-semibold text-gray-900 text-sm sm:text-base">
        {faq.question}
      </span>
      {/* Icono profesional que rota (ICONO CORREGIDO) */}
      <span className="ml-3 text-amber-500 group-open:rotate-180 transition-transform duration-300">
        <HiChevronDown className="w-5 h-5" />
      </span>
    </summary>
    <div className="mt-3 text-sm sm:text-base text-gray-700 space-y-2">
      {faq.answer.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}
    </div>
  </details>
);


// --- COMPONENTE DE LA PÁGINA ---
function FaqPage() {
  return (
    <section className="pt-24 pb-16 bg-gray-100 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center">
          Preguntas frecuentes
        </h1>
        <p className="mt-4 text-center text-gray-700 text-sm sm:text-base max-w-2xl mx-auto">
          Resolvemos las dudas más comunes sobre la energía solar, la
          interconexión con CFE y la inversión en tu sistema fotovoltaico.
        </p>

        {/* --- SECCIÓN 1: PREGUNTAS GENERALES --- */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-amber-600 mb-6">
            Generales y Beneficios
          </h2>
          <div className="space-y-4">
            {faqsGenerales.map((faq, idx) => (
              <FaqItem key={idx} faq={faq} />
            ))}
          </div>
        </div>

        {/* --- SECCIÓN 2: PREGUNTAS TÉCNICAS --- */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-amber-600 mb-6">
            Instalación y Equipo
          </h2>
          <div className="space-y-4">
            {faqsTecnicas.map((faq, idx) => (
              <FaqItem key={idx} faq={faq} />
            ))}
          </div>
        </div>
        
        {/* --- SECCIÓN 3: PREGUNTAS FINANCIERAS --- */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-amber-600 mb-6">
            Ahorro, Trámites y Garantías
          </h2>
          <div className="space-y-4">
            {faqsFinancieras.map((faq, idx) => (
              <FaqItem key={idx} faq={faq} />
            ))}
          </div>
        </div>

        {/* --- Tarjeta de Contacto (CTA MEJORADO) --- */}
        <div className="mt-16 bg-amber-50 border border-amber-200 rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-amber-700 mb-3">
            ¿Listo para ver tu ahorro?
          </h2>
          <p className="text-gray-700 text-sm sm:text-base mb-6 max-w-lg mx-auto">
            Nuestros expertos ya respondieron tus dudas, ahora deja que nuestros números
            te convenzan. Calcula tu proyecto en menos de 1 minuto.
          </p>
          <Link
            to="/simulador"
            className="inline-block bg-amber-500 text-gray-900 font-bold px-8 py-3 rounded-full text-base hover:bg-amber-400 transition-colors shadow-lg"
          >
            CALCULA TU AHORRO AHORA
          </Link>
          <p className="mt-4 text-sm text-gray-600">
            O si prefieres,{' '}
            <a 
              href={`mailto:${CONTACT_EMAIL}?subject=Pregunta%20sobre%20energ%C3%ADa%20solar`}
              className="text-amber-600 font-semibold underline hover:text-amber-700"
            >
              escríbenos tus dudas
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
}

export default FaqPage;
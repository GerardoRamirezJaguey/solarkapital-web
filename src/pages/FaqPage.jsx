import React from 'react';

// --- DATOS DE LAS PREGUNTAS ---
const faqs = [
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
  {
    question: '¿Cómo funciona el medidor bidireccional y la interconexión con CFE?',
    answer: [
      'Al instalar energía solar, CFE sustituye tu medidor por uno bidireccional que registra tanto la energía que consumes como la que inyectas a la red.',
      'Durante las horas de sol, si tus paneles producen más energía de la que estás usando, el excedente se envía a la red y se queda como saldo a tu favor. En el recibo se cobra únicamente la diferencia entre lo que consumiste y lo que generaste.'
    ],
  },
  {
    question: '¿Cuánto tarda la instalación de un sistema solar?',
    answer: [
      'El tiempo de instalación depende del tamaño del proyecto y de la complejidad del techo o estructura.',
      'Para una vivienda típica la instalación física suele terminarse en uno o dos días, más el tiempo de trámites y programación con CFE.'
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
    question: '¿Cuánto espacio necesito en mi techo para instalar los paneles?',
    answer: [
      'El espacio requerido depende de tu consumo y de la capacidad de cada panel.',
      'Con tu recibo de luz podemos estimar cuánta energía necesitas compensar y de ahí calcular el número aproximado de módulos y los metros cuadrados necesarios.'
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

// --- ¡ESTA ES LA CORRECCIÓN! ---
// Definimos el email aquí para poder usarlo en el enlace
const CONTACT_EMAIL = "edgar.ramirez@solarkapitalmexico.com";

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

        {/* Lista de Preguntas */}
        <div className="mt-8 space-y-4">
          {faqs.map((faq, idx) => (
            <details
              key={idx}
              className="bg-white rounded-xl shadow group p-4 sm:p-5"
            >
              <summary className="cursor-pointer flex justify-between items-center">
                <span className="font-semibold text-gray-900 text-sm sm:text-base">
                  {faq.question}
                </span>
                <span className="ml-3 text-amber-500 group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <div className="mt-3 text-sm sm:text-base text-gray-700 space-y-2">
                {faq.answer.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </details>
          ))}
        </div>

        {/* Tarjeta de Contacto */}
        <div className="mt-10 bg-amber-50 border border-amber-200 rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-lg sm:text-xl font-bold text-amber-700 mb-2">
            ¿Tienes alguna otra pregunta?
          </h2>
          <p className="text-gray-700 text-sm sm:text-base mb-4">
            Si no encontraste la respuesta que buscabas, con gusto te asesoramos
            personalmente sobre tu proyecto solar.
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=Pregunta%20sobre%20energ%C3%ADa%20solar`}
            className="inline-block bg-amber-500 text-gray-900 font-semibold px-6 py-3 rounded-full text-sm sm:text-base hover:bg-amber-400 transition-colors shadow"
          >
            Escríbenos tus dudas
          </a>
        </div>
      </div>
    </section>
  );
}

export default FaqPage;
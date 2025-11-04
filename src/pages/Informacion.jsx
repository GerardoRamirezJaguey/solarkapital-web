import { FaBullseye, FaEye } from 'react-icons/fa';

function Informacion() {
  return (
    <div className="bg-black text-white py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Sobre <span className="text-yellow-400">Solar Kapital México</span>
          </h1>
          <p className="text-lg text-gray-400">
            Fundados en 2020 con el propósito de contribuir a la sostenibilidad del planeta y al bienestar de quienes lo habitamos.
          </p>
        </div>

        <div className="bg-gray-900 p-8 md:p-12 rounded-lg shadow-lg">
          <p className="text-lg text-gray-300 mb-6">
            Hemos logrado un excelente posicionamiento en el mercado nacional a través de un compromiso firme con la calidad y la satisfacción total de nuestros clientes.
          </p>
          <p className="text-lg text-gray-300">
            Contamos con un equipo certificado y especializado en la ingeniería, desarrollo e instalación de más de 5,000 sistemas fotovoltaicos. Generamos ahorros cuantiosos para nuestros clientes residenciales, comerciales e industriales, aprovechando al máximo el recurso renovable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mt-16">
          
          <div className="flex items-start gap-6">
            <FaBullseye className="text-yellow-400 text-5xl flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-3xl font-bold mb-3">MISIÓN</h2>
              <p className="text-lg text-gray-300">
                Desarrollar proyectos y servicios sostenibles que otorgan un beneficio directo a la economía de nuestros clientes, ofreciendo la opción más viable para contribuir al cuidado del medio ambiente.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-6">
            <FaEye className="text-yellow-400 text-5xl flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-3xl font-bold mb-3">VISIÓN</h2>
              <p className="text-lg text-gray-300">
                Ser una empresa líder, con solidez financiera dentro de la industria de energía renovable, comercializando soluciones integrales con responsabilidad social, sostenible y tecnología de vanguardia.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Informacion;


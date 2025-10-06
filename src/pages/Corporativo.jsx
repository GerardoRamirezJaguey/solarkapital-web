import { Link } from 'react-router-dom';
import GraficaAhorro from '../components/GraficaAhorro';
import ImpactoCarrusel from '../components/ImpactoCarrusel';
import heroImage from '../assets/corporativo-hero.jpg';

const datos = {
  testimonios: [
    { nombre: "Director de Sostenibilidad (CSO), Corporativo Global", texto: "Solarkapital fue un aliado clave para alcanzar nuestras metas de Net Zero. Su modelo PPA nos permitió adoptar energía limpia sin inversión inicial." },
    { nombre: "CEO, Desarrolladora Inmobiliaria", texto: "Integrar tecnología solar en nuestros nuevos proyectos no solo los hizo más atractivos, sino que creó una nueva fuente de ingresos a largo plazo." },
    { nombre: "Gerente de Proyectos, Fondo de Inversión", texto: "La capacidad técnica y financiera de Solarkapital para ejecutar parques solares a gran escala es de primer nivel." }
  ]
};

function Corporativo() {
  return (
    <div className="bg-black text-white">
      <section className="relative h-screen -mt-24 flex items-center justify-center text-center" style={{ backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Eleva tu Estrategia Corporativa: Proyectos Energéticos a la Medida para Líderes del Futuro.</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">Desarrollamos soluciones energéticas integrales, desde parques solares hasta modelos PPA, alineando tus metas financieras y de ESG.</p>
          {/* BOTÓN ACTUALIZADO */}
          <Link to="/simulador" className="bg-yellow-400 text-black font-bold py-3 px-6 rounded-lg hover:bg-yellow-500 transition-colors">Iniciar Proyección</Link>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">De Gasto Operativo a Activo <span className="text-yellow-400">Generador de Valor</span></h2>
            <p className="text-gray-400 mb-6">Explora nuestros modelos financieros, incluyendo Power Purchase Agreements (PPA), para implementar energía solar a gran escala sin descapitalizar tu empresa.</p>
            {/* BOTÓN ACTUALIZADO */}
            <Link to="/simulador" className="bg-yellow-400 text-black font-bold py-3 px-6 rounded-lg hover:bg-yellow-500 transition-colors">Proyectar Rentabilidad</Link>
          </div>
          <div>
            <GraficaAhorro />
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Capacidad Probada para Proyectos <span className="text-yellow-400">de Gran Envergadura</span></h2>
          <ImpactoCarrusel />
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Alianzas Estratégicas que <span className="text-yellow-400">Transforman el Mercado</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {datos.testimonios.map((testimonio, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-lg">
                <p className="text-gray-300 italic mb-4">"{testimonio.texto}"</p>
                <p className="font-bold text-yellow-400">{testimonio.nombre}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Corporativo;
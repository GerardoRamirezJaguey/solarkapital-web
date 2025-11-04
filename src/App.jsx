import { Outlet, Link } from 'react-router-dom';
import logo from './assets/Logo.png';
// 1. IMPORTA LOS ÍCONOS DE REDES SOCIALES
import { FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa';
import ClientesCarrusel from './components/ClientesCarrusel';

function App() {
  return (
    <div className="bg-black text-white">
      {/* HEADER */}
      <header className="py-4 px-8 sticky top-0 bg-gray-900 bg-opacity-90 backdrop-blur-sm z-20">
        <nav className="container mx-auto flex justify-between items-center">
          <Link to="/">
            <div className="logo-container">
              <img src={logo} alt="Solarkapital México Logo" className="h-12" />
            </div>
          </Link>

          <ul className="hidden md:flex space-x-8">
            {/* 2. AÑADIDO ENLACE "INICIO" */}
            <li>
              <Link to="/" className="hover:text-yellow-400 transition-colors">
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/hogar" className="hover:text-yellow-400 transition-colors">
                Hogar
              </Link>
            </li>
            <li>
              <Link to="/negocio" className="hover:text-yellow-400 transition-colors">
                Negocio
              </Link>
            </li>
            <li>
              <Link to="/industria" className="hover:text-yellow-400 transition-colors">
                Industria
              </Link>
            </li>
            <li>
              <Link to="/corporativo" className="hover:text-yellow-400 transition-colors">
                Corporativo
              </Link>
            </li>
            {/* 3. AÑADIDO ENLACE "INFORMACIÓN" */}
            <li>
              <Link to="/informacion" className="hover:text-yellow-400 transition-colors">
                Información
              </Link>
            </li>
          </ul>

          <Link
            to="/simulador"
            className="hidden md:block bg-yellow-400 text-black font-bold py-2 px-4 rounded hover:bg-yellow-500 transition-colors"
          >
            Simulador
          </Link>
        </nav>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <main>
        {/* Aquí van las páginas según la ruta */}
        <Outlet />

        {/* Carrusel de clientes visible en todas las páginas */}
        <ClientesCarrusel />
      </main>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-400 py-8 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <img src={logo} alt="Solarkapital México Logo" className="h-12 mx-auto mb-4" />
          <p className="mb-4">
            Transformando la energía de México, un panel a la vez.
          </p>
          
          {/* 4. AÑADIDOS ÍCONOS DE REDES SOCIALES */}
          <div className="flex justify-center gap-6 mb-6">
            <a 
              href="https://www.facebook.com/SolarKapitalMexico" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Facebook"
              className="text-gray-400 hover:text-yellow-400 transition-colors"
            >
              <FaFacebook size={28} />
            </a>
            <a 
              href="https://www.instagram.com/solarkapitalmexico_" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Instagram"
              className="text-gray-400 hover:text-yellow-400 transition-colors"
            >
              <FaInstagram size={28} />
            </a>
          </div>

          <p>
            &copy; {new Date().getFullYear()} Solarkapital México. Todos los derechos reservados.
          </p>
        </div>
      </footer>

      {/* BOTÓN FLOTANTE DE WHATSAPP */}
      <a
        href="https://wa.me/524421794354?text=Hola,%20me%20gustaría%20más%20información%20sobre%20los%20paneles%20solares."
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors animate-pulse"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
      >
        <FaWhatsapp size={28} />
      </a>
    </div>
  );
}

export default App;

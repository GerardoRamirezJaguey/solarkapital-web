import { Outlet, Link } from 'react-router-dom';
import logo from './assets/Logo.png'; 
import { FaWhatsapp } from 'react-icons/fa';

function App() {
  return (
    <div className="bg-black text-white">
      {/* --- INICIO DEL HEADER COMPLETO --- */}
      <header className="py-4 px-8 sticky top-0 bg-gray-900 bg-opacity-90 backdrop-blur-sm z-20">
        <nav className="container mx-auto flex justify-between items-center">
          
          <Link to="/">
            <div className="logo-container">
              <img src={logo} alt="Solarkapital México Logo" className="h-12" />
            </div>
          </Link>

          <ul className="hidden md:flex space-x-8">
            <li><Link to="/hogar" className="hover:text-yellow-400 transition-colors">Hogar</Link></li>
            <li><Link to="/negocio" className="hover:text-yellow-400 transition-colors">Negocio</Link></li>
            <li><Link to="/industria" className="hover:text-yellow-400 transition-colors">Industria</Link></li>
            <li><Link to="/corporativo" className="hover:text-yellow-400 transition-colors">Corporativo</Link></li>
          </ul>
          
          <Link to="/simulador" className="hidden md:block bg-yellow-400 text-black font-bold py-2 px-4 rounded hover:bg-yellow-500 transition-colors">
            Simulador
          </Link>
        </nav>
      </header>
      {/* --- FIN DEL HEADER --- */}

      <main>
        <Outlet />
      </main>

      {/* --- INICIO DEL FOOTER COMPLETO --- */}
      <footer className="bg-gray-900 text-gray-400 py-8 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <img src={logo} alt="Solarkapital México Logo" className="h-12 mx-auto mb-4" />
          <p className="mb-4">Transformando la energía de México, un panel a la vez.</p>
          <p>&copy; {new Date().getFullYear()} Solarkapital México. Todos los derechos reservados.</p>
        </div>
      </footer>
      {/* --- FIN DEL FOOTER --- */}

      {/* --- BOTÓN FLOTANTE DE WHATSAPP --- */}
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
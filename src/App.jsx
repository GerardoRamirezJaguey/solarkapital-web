import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import logo from './assets/Logo.png';
// Íconos redes
import { FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa';
import ClientesCarrusel from './components/ClientesCarrusel';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-black text-white">
      {/* HEADER */}
      <header className="py-4 px-4 sm:px-8 sticky top-0 bg-gray-900 bg-opacity-90 backdrop-blur-sm z-20">
        <nav className="container mx-auto flex justify-between items-center">
          {/* LOGO */}
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            <div className="logo-container">
              <img src={logo} alt="Solarkapital México Logo" className="h-10 sm:h-12" />
            </div>
          </Link>

          {/* MENÚ DESKTOP */}
          <ul className="hidden md:flex space-x-8 text-sm lg:text-base">
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
            <li>
              <Link to="/informacion" className="hover:text-yellow-400 transition-colors">
                Información
              </Link>
            </li>
            {/* NUEVO: FAQ */}
            <li>
              <Link to="/faq" className="hover:text-yellow-400 transition-colors">
                FAQ
              </Link>
            </li>
          </ul>

          {/* BOTÓN SIMULADOR (solo desktop) */}
          <Link
            to="/simulador"
            className="hidden md:block bg-yellow-400 text-black font-bold py-2 px-4 rounded hover:bg-yellow-500 transition-colors"
          >
            Simulador
          </Link>

          {/* BOTÓN HAMBURGUESA (solo móvil) */}
          <button
            className="md:hidden text-white focus:outline-none ml-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Abrir menú"
          >
            <svg
              className="w-7 h-7"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* MENÚ MÓVIL DESPLEGABLE */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900 bg-opacity-95 border-t border-gray-800">
            <div className="container mx-auto px-4 py-3 space-y-2 text-sm">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="block py-1 hover:text-yellow-400"
              >
                Inicio
              </Link>
              <Link
                to="/hogar"
                onClick={() => setIsMenuOpen(false)}
                className="block py-1 hover:text-yellow-400"
              >
                Hogar
              </Link>
              <Link
                to="/negocio"
                onClick={() => setIsMenuOpen(false)}
                className="block py-1 hover:text-yellow-400"
              >
                Negocio
              </Link>
              <Link
                to="/industria"
                onClick={() => setIsMenuOpen(false)}
                className="block py-1 hover:text-yellow-400"
              >
                Industria
              </Link>
              <Link
                to="/corporativo"
                onClick={() => setIsMenuOpen(false)}
                className="block py-1 hover:text-yellow-400"
              >
                Corporativo
              </Link>
              <Link
                to="/informacion"
                onClick={() => setIsMenuOpen(false)}
                className="block py-1 hover:text-yellow-400"
              >
                Información
              </Link>
              <Link
                to="/faq"
                onClick={() => setIsMenuOpen(false)}
                className="block py-1 hover:text-yellow-400"
              >
                FAQ
              </Link>

              {/* Simulador también disponible en el menú móvil */}
              <Link
                to="/simulador"
                onClick={() => setIsMenuOpen(false)}
                className="block mt-2 text-center bg-yellow-400 text-black font-semibold py-2 rounded hover:bg-yellow-500 transition-colors"
              >
                Simulador
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <main>
        <Outlet />
        <ClientesCarrusel />
      </main>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-400 py-8 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <img src={logo} alt="Solarkapital México Logo" className="h-12 mx-auto mb-4" />
          <p className="mb-4">
            Transformando la energía de México, un panel a la vez.
          </p>

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

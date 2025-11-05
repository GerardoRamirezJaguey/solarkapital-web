import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // ajusta la ruta
const CONTACT_EMAIL = 'edagr.ramirez@rkapitalmexico.com';

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-slate-900/95 backdrop-blur-sm">
      <nav className="container mx-auto px-4 md:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Solar Kapital" className="h-10" />
        </Link>

        {/* Menú escritorio */}
        <div className="hidden md:flex items-center gap-6 text-white text-sm font-medium">
          <Link to="/" className="hover:text-amber-400">Inicio</Link>
          <Link to="/hogar" className="hover:text-amber-400">Hogar</Link>
          <Link to="/negocio" className="hover:text-amber-400">Negocio</Link>
          <Link to="/industria" className="hover:text-amber-400">Industria</Link>
          <Link to="/corporativo" className="hover:text-amber-400">Corporativo</Link>
          <Link to="/informacion" className="hover:text-amber-400">Información</Link>
        </div>

        {/* Botón Simulador (escritorio) -> envía correo */}
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="hidden md:inline-flex bg-amber-500 text-gray-900 font-semibold text-sm px-4 py-2 rounded-full
                     hover:bg-amber-400 transition-colors duration-200 shadow"
        >
          Simulador
        </a>

        {/* Botón hamburguesa (móvil) */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white focus:outline-none"
          aria-label="Abrir menú"
        >
          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            {open ? (
              <path strokeWidth="2" strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeWidth="2" strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Menú móvil desplegable */}
      {open && (
        <div className="md:hidden bg-slate-900/95 border-t border-slate-700">
          <div className="container mx-auto px-4 py-3 space-y-2 text-white text-sm">
            <Link onClick={() => setOpen(false)} to="/" className="block py-1">Inicio</Link>
            <Link onClick={() => setOpen(false)} to="/hogar" className="block py-1">Hogar</Link>
            <Link onClick={() => setOpen(false)} to="/negocio" className="block py-1">Negocio</Link>
            <Link onClick={() => setOpen(false)} to="/industria" className="block py-1">Industria</Link>
            <Link onClick={() => setOpen(false)} to="/corporativo" className="block py-1">Corporativo</Link>
            <Link onClick={() => setOpen(false)} to="/informacion" className="block py-1">Información</Link>

            {/* Simulador en móvil -> también correo */}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="block w-full mt-2 text-center bg-amber-500 text-gray-900 font-semibold px-4 py-2 rounded-full
                         hover:bg-amber-400 transition-colors duration-200"
            >
              Simulador (correo)
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;

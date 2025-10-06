import { Outlet, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logo from './assets/Logo.png'; 

function App() {
  return (
    <div className="bg-black text-white">
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

      <main>
        <Outlet />
      </main>

      <footer className="bg-gray-900 text-gray-400 py-8 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <img src={logo} alt="Solarkapital México Logo" className="h-12 mx-auto mb-4" />
          <p className="mb-4">Transformando la energía de México, un panel a la vez.</p>
          <p>&copy; {new Date().getFullYear()} Solarkapital México. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Importación del Layout Principal
import App from './App.jsx';

// Importación de TODAS las páginas
import Inicio from './pages/Inicio.jsx';
import Hogar from './pages/Hogar.jsx';
import Negocio from './pages/Negocio.jsx';
import Industria from './pages/Industria.jsx';
import Corporativo from './pages/Corporativo.jsx';
import Simulador from './pages/Simulador.jsx';
import Informacion from './pages/Informacion.jsx';
import FaqPage from './pages/FaqPage.jsx'; // <-- 1. AÑADIDO: Importa la página FAQ

// Importación de los estilos globales
import './index.css';

// Creación del router con todas las rutas definidas
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Inicio />,
      },
      {
        path: "hogar",
        element: <Hogar />,
      },
      { 
        path: "negocio", 
        element: <Negocio /> 
      },
      { 
        path: "industria", 
        element: <Industria /> 
      },
      { 
        path: "corporativo", 
        element: <Corporativo /> 
      },
      {
        path: "informacion",
        element: <Informacion />
      },
      {
        path: "simulador",
        element: <Simulador />
      },
      {
        path: "faq", // <-- 2. AÑADIDO: Define la nueva ruta
        element: <FaqPage />
      }
      // NOTA: Tu ruta catch-all anterior (path="*") 
      // no se maneja así en createBrowserRouter. 
      // React Router mostrará su propia página 404 por defecto,
      // lo cual está bien.
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
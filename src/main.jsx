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
        path: "simulador",
        element: <Simulador />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
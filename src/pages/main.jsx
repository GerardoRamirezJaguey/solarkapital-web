// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App.jsx';
import Inicio from './pages/Inicio.jsx';
import Hogar from './pages/Hogar.jsx';
import Negocio from './pages/Negocio.jsx';
import Industria from './pages/Industria.jsx';
import Corporativo from './pages/Corporativo.jsx';
import Informacion from './pages/Informacion.jsx';
import Simulador from './pages/Simulador.jsx';
import FaqPage from './pages/FaqPage.jsx';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Layout principal con header/footer y <Outlet /> */}
        <Route path="/" element={<App />}>
          {/* Página de inicio */}
          <Route index element={<Inicio />} />

          {/* Otras secciones */}
          <Route path="hogar" element={<Hogar />} />
          <Route path="negocio" element={<Negocio />} />
          <Route path="industria" element={<Industria />} />
          <Route path="corporativo" element={<Corporativo />} />
          <Route path="informacion" element={<Informacion />} />
          <Route path="simulador" element={<Simulador />} />

          {/* 👇 NUEVA RUTA FAQ */}
          <Route path="faq" element={<FaqPage />} />

          {/* Catch-all: cualquier ruta rara manda al inicio */}
          <Route path="*" element={<Inicio />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

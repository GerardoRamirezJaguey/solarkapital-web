// src/components/ClientesCarrusel.jsx

import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

// 1. Esta función "mágica" de Vite importa TODOS los archivos
// que se encuentren en la carpeta /src/assets/clientes/
const logoModules = import.meta.glob('/src/assets/clientes/*');

function ClientesCarrusel() {
  const [logos, setLogos] = useState([]);

  useEffect(() => {
    // 2. Cargamos los logos de forma asíncrona
    const cargarLogos = async () => {
      const promesas = Object.values(logoModules).map(importer => importer());
      const logosCargados = await Promise.all(promesas);
      setLogos(logosCargados.map(mod => mod.default));
    };
    cargarLogos();
  }, []);

  if (logos.length === 0) {
    return null; // No muestra nada si la carpeta está vacía
  }

  return (
    <div className="py-16 bg-gray-900 border-t border-b border-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12 text-white">
          Empresas que <span className="text-yellow-400">confían en nosotros</span>
        </h2>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={50} // Espacio entre logos
          slidesPerView={2} // logos visibles en móvil
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            // Configuración responsiva
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
          className="w-full"
        >
          {logos.map((logoUrl, index) => (
            <SwiperSlide key={index} className="flex items-center justify-center">
              {/* 3. Mostramos cada logo */}
              <img 
                src={logoUrl} 
                alt={`Logo Cliente ${index + 1}`} 
                className="h-16 w-auto object-contain"
                // 4. Efecto para que todos se vean uniformes (blanco y negro)
                style={{ filter: 'grayscale(100%) brightness(1.5) contrast(1.2)' }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default ClientesCarrusel;
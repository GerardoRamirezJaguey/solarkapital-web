// src/components/ClientesCarrusel.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const logoModules = import.meta.glob('../assets/clientes/*', { eager: true });
const logos = Object.values(logoModules).map(mod => mod.default);

function ClientesCarrusel() {
  if (logos.length === 0) {
    console.error("No se encontraron logos. Revisa la carpeta /src/assets/clientes/");
    return null;
  }

  return (
    <div className="py-16 bg-gray-900 border-t border-b border-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12 text-white">
          Empresas que <span className="text-yellow-400">confían en nosotros</span>
        </h2>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={50}
          slidesPerView={2}
          loop={logos.length > 2} // solo hace loop si hay suficientes logos
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
          className="w-full"
        >
          {logos.map((logoUrl, index) => (
            <SwiperSlide key={index} className="flex items-center justify-center">
              <img
                src={logoUrl}
                alt={`Logo Cliente ${index + 1}`}
                className="h-16 w-auto object-contain"
                style={{
                  filter: 'brightness(0) invert(1) grayscale(100%) brightness(2)',
                  opacity: 0.7,
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default ClientesCarrusel;

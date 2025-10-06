// src/components/ImpactoCarrusel.jsx

// 1. AÑADIMOS TODOS LOS ESTILOS NECESARIOS DE SWIPER
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation'; // Estilos para las flechas de navegación

// 2. IMPORTAMOS EL COMPONENTE DE NÚMERO ANIMADO QUE YA TENÍAMOS
import NumeroAnimado from './NumeroAnimado'; 

const datos = [
  { valor: 25000, texto: "Kilowatts instalados", prefix: "+" },
  { valor: 450, texto: "Toneladas de CO2 reducidas", prefix: "+", suffix: "K" },
  { valor: 25, texto: "Años de garantía" },
  { valor: 247, texto: "Soporte técnico" } // Usamos 247 para poder animarlo
];

function ImpactoCarrusel() {
  return (
    <div className="text-center relative">
      <Swiper
        modules={[Autoplay, Navigation]}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation={true} // Habilita las flechas de navegación
        // 3. CONFIGURACIÓN RESPONSIVA
        breakpoints={{
          // Cuando la pantalla es >= 640px, muestra 2 slides
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // Cuando la pantalla es >= 1024px, muestra 4 slides
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        className="w-full"
      >
        {datos.map((item, index) => (
          <SwiperSlide key={index}>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-yellow-400 h-16">
                {/* 4. USAMOS EL COMPONENTE DE NÚMERO ANIMADO DENTRO DEL CARRUSEL */}
                {item.valor === 247 ? (
                  <span>24/7</span> // Dejamos 24/7 como texto estático
                ) : (
                  <NumeroAnimado 
                    end={item.valor} 
                    prefix={item.prefix} 
                    suffix={item.suffix} 
                  />
                )}
              </p>
              <p className="text-gray-400 mt-2">{item.texto}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ImpactoCarrusel;
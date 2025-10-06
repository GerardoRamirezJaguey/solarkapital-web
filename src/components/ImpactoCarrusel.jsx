import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import NumeroAnimado from './NumeroAnimado'; 

const datos = [
  { valor: 25000, texto: "Kilowatts instalados", prefix: "+" },
  { valor: 450, texto: "Toneladas de CO2 reducidas", prefix: "+", suffix: "K" },
  { valor: 25, texto: "Años de garantía" },
  { valor: 247, texto: "Soporte técnico" }
];

function ImpactoCarrusel() {
  return (
    <div className="text-center relative">
      <Swiper
        modules={[Autoplay, Navigation]}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        navigation={true}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 4, spaceBetween: 30 },
        }}
        className="w-full"
      >
        {datos.map((item, index) => (
          <SwiperSlide key={index}>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-yellow-400 h-16">
                {item.valor === 247 ? (
                  <span>24/7</span>
                ) : (
                  <NumeroAnimado end={item.valor} prefix={item.prefix} suffix={item.suffix} />
                )}
              </div>
              <p className="text-gray-400 mt-2">{item.texto}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ImpactoCarrusel;
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Works from '../../assets/mocks/Works';
import Study from '../../assets/mocks/Study';

import Card from '../../components/Card';

export default function Career() {
  return (
    <div className="flex mt-16 flex-col">
      <Card text="💼 Carreira" />
      <h1 className="mt-4 font-extrabold text-white text-2xl">Trajetória </h1>
      <h1 className="font-extrabold text-white text-2xl">até aqui</h1>

      <div>
        <h1 className="mt-6 font-extrabold text-white text-base">Área</h1>
        <h1 className="font-extrabold text-white text-base">Profissional</h1>
        <span className="text-white opacity-50 font-normal flex mt-2">2021 · Atualmente</span>

        <Swiper
          slidesPerView={1}
          className="w-full mt-6"
          loop
          navigation
          pagination={{
            clickable: true,
          }}
          modules={[Navigation, Pagination]}
          spaceBetween={30}
        >
          {Works.map((item) => (
            <SwiperSlide>
              <div className="text-white border-2 rounded-lg border-border p-4">
                <h1 className="font-bold">{item.title}</h1>
                <span className="font-medium text-sm opacity-50 flex my-2">
                  {item.description}
                </span>
                <div className="flex flex-row justify-between text-text">
                  <h1 className="font-bold">{item.time}</h1>
                  <h1>{item.date}</h1>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div>
        <h1 className="mt-6 font-extrabold text-white text-base">Área</h1>
        <h1 className="font-extrabold text-white text-base">Acadêmica</h1>
        <span className="text-white opacity-50 font-normal flex mt-2">2021 · Atualmente</span>

        <Swiper
          slidesPerView={1}
          className="w-full mt-6"
          loop
          navigation
          pagination={{
            clickable: true,
          }}
          modules={[Navigation, Pagination]}
          spaceBetween={30}
        >
          {Study.map((item) => (
            <SwiperSlide>
              <div className="text-white border-2 rounded-lg border-border p-4">
                <h1 className="font-bold">{item.title}</h1>
                <span className="font-medium text-sm opacity-50 flex my-2">
                  {item.description}
                </span>
                <div className="flex flex-row justify-between text-text">
                  <h1 className="font-bold">{item.time}</h1>
                  <h1>{item.date}</h1>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

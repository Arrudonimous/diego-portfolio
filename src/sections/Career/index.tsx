import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Works from '../../assets/mocks/Works';
import Study from '../../assets/mocks/Study';

import CardWork from '../../components/CardWork';

export default function Career() {
  return (
    <div className="flex mt-16 flex-col">
      <div className="md:flex md:items-center md:justify-center md:flex-col  md:mb-16">
        <CardWork text="💼 Carreira" />
        <h1 className="mt-4 font-extrabold text-white text-2xl md:hidden">Trajetória </h1>
        <h1 className="font-extrabold text-white text-2xl md:hidden">até aqui</h1>
        <h1 className="mt-4 font-extrabold text-white text-2xl hidden md:flex">Trajetória até aqui</h1>
      </div>

      <div className="md:flex md:flex-row md:justify-between">
        <div className="md:flex md:items-center md:justify-center md:flex-col md:gap-2">
          <h1 className="mt-6 font-extrabold text-white text-base md:hidden 16">Área</h1>
          <h1 className="font-extrabold text-white text-base md:hidden">Profissional</h1>
          <h1 className="font-extrabold text-white text-3xl hidden md:flex mb-2">Área Profissional</h1>
          <span className="text-white opacity-50 font-normal flex mt-2 md:text-2xl md:mb-16">2021 · Atualmente</span>
          <Swiper
            slidesPerView={1}
            className="w-full mt-6 md:hidden"
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
                <div className="text-white border-2 rounded-lg border-border p-4 md:hidden">
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

          {Works.map((item) => (
            <div className="text-white border-2 rounded-lg border-border p-4 hidden md:flex md:flex-col md:w-full">
              <h1 className="font-bold">{item.title}</h1>
              <span className="font-medium text-sm opacity-50 flex my-2">
                {item.description}
              </span>
              <div className="flex flex-row justify-between text-text">
                <h1 className="font-bold">{item.time}</h1>
                <h1>{item.date}</h1>
              </div>
            </div>
          ))}

        </div>
        <div className="md:flex md:items-center md:justify-center md:flex-col md:gap-2">
          <h1 className="mt-6 font-extrabold text-white text-base md:hidden">Área</h1>
          <h1 className="font-extrabold text-white text-base md:hidden">Acadêmica</h1>
          <h1 className="font-extrabold text-white text-3xl hidden md:flex mb-2">Área Acadêmica</h1>
          <span className="text-white opacity-50 font-normal flex mt-2 md:text-2xl md:mb-16">2021 · Atualmente</span>

          <Swiper
            slidesPerView={1}
            className="w-full mt-6 md:hidden"
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

          {Study.map((item) => (
            <div className="text-white border-2 rounded-lg border-border p-4 hidden md:flex md:flex-col md:w-full">
              <h1 className="font-bold">{item.title}</h1>
              <span className="font-medium text-sm opacity-50 flex my-2">
                {item.description}
              </span>
              <div className="flex flex-row justify-between text-text">
                <h1 className="font-bold">{item.time}</h1>
                <h1>{item.date}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

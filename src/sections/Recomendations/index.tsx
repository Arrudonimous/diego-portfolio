import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { MdFormatQuote } from 'react-icons/md';
import Card from '../../components/Card';
import RecomendationsMock from '../../assets/mocks/Recomendations';

export default function Recomendations() {
  return (
    <div className="mt-16">
      <Card text="💬 Recomendações" />
      <h1 className="mt-4 font-extrabold text-white text-2xl md:hidden">Em </h1>
      <h1 className="font-extrabold text-white text-2xl md:hidden">depoimento</h1>
      <h1 className="font-extrabold text-white text-2xl hidden md:flex md:text-5xl md:mt-6">Em depoimento</h1>

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
        {RecomendationsMock.map((item) => (
          <SwiperSlide>
            <div className="border-2 rounded-lg border-border p-4 flex flex-col">
              <MdFormatQuote size={30} color="#D3301C" />
              <span className="text-white opacity-50 text-sm">
                {item.description}
              </span>
              <div className="flex flex-row font-bold mt-6 gap-2">
                <img src={item.image} alt="" className="w-12 h-12 rounded-[6.25rem]" />
                <div className="flex flex-col">
                  <h1 className="text-white">{item.name}</h1>
                  <span className="text-text opacity-50">{item.role}</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="hidden md:flex md: flex-row md:gap-10">
        {RecomendationsMock.map((item) => (
          <div className="border-2 rounded-lg border-border p-4 flex flex-col md:w-[30rem] md:mt-16">
            <MdFormatQuote size={30} color="#D3301C" />
            <span className="text-white opacity-50 text-sm">
              {item.description}
            </span>
            <div className="flex flex-row font-bold mt-6 gap-2">
              <img src={item.image} alt="" className="w-12 h-12 rounded-[6.25rem]" />
              <div className="flex flex-col">
                <h1 className="text-white">{item.name}</h1>
                <span className="text-text opacity-50">{item.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import Card from '../../components/Card';
import 'swiper/css';
import 'swiper/css/pagination';
import Projects from '../../assets/mocks/Projects';

export default function Potfólio() {
  return (
    <div className="flex mt-24 flex-col">
      <Card text="🔗 Portfólio" />
      <h1 className="mt-4 font-extrabold text-white text-2xl">Trabalhos </h1>
      <h1 className="font-extrabold text-white text-2xl">e Projetos</h1>

      <Swiper
        slidesPerView={1}
        className="w-full"
        loop
        navigation
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination]}
        spaceBetween={30}
      >
        {Projects.map((item) => (
          <SwiperSlide>
            <div className="border-2 rounded-lg border-border py-7 px-6 text-white mt-7 hover:scale-[1.01]">
              <a href={item.link}>
                <h1 className="font-bold ">{item.title}</h1>
                <span className="font-medium text-sm opacity-50 flex my-2">
                  {item.description}
                </span>
                <div className="flex flex-row gap-1 mb-4">
                  {item.cards.map((value) => (
                    <Card text={value.name} />
                  ))}
                </div>
                <img src={item.image} alt="" className="w-full rounded-lg" />
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
}

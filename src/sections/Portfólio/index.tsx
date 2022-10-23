import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import Card from '../../components/Card';
import 'swiper/css';
import 'swiper/css/pagination';
import Projects from '../../assets/mocks/Projects';
import CardWork from '../../components/CardWork';

export default function Potfólio() {
  return (
    <div className="flex mt-24 flex-col md:mt-32">
      <Card text="🔗 Portfólio" />
      <h1 className="mt-4 font-extrabold text-white text-2xl md:hidden">Trabalhos </h1>
      <h1 className="font-extrabold text-white text-2xl md:hidden">e Projetos</h1>

      <h1 className="font-extrabold text-white text-5xl mt-6 mb-24 hidden md:flex">Trabalhos e Projetos</h1>

      <Swiper
        slidesPerView={1}
        className="w-full md:hidden"
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

      <div className=" md:grid hidden grid-cols-4 gap-16">
        {Projects.map((item) => (
          <div className="border-2 rounded-lg border-border py-6 px-8 text-white mt-7 hover:scale-[1.01] hidden md:flex">
            <a href={item.link}>
              <h1 className="font-bold text-xl mb-2">{item.title}</h1>
              <span className="font-medium text-base opacity-50 flex mb-20">
                {item.description}
              </span>
              <div className="flex flex-row gap-3 mb-5">
                {item.cards.map((value) => (
                  <CardWork text={value.name} />
                ))}
              </div>
              <img src={item.image} alt="" className="w-full rounded-lg" />
            </a>
          </div>
        ))}
      </div>

    </div>
  );
}

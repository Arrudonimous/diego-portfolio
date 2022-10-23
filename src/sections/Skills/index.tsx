import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination } from 'swiper';
import {
  SiReact, SiJavascript, SiTypescript, SiTailwindcss, SiCss3, SiHtml5, SiGithub,
  SiInsomnia, SiFigma, SiDocker, SiMongodb,
} from 'react-icons/si';
import { IoLogoNodejs } from 'react-icons/io5';
import { GrMysql } from 'react-icons/gr';

import 'swiper/css';
import 'swiper/css/pagination';

import Card from '../../components/Card';

export default function Skills() {
  return (
    <div className="mt-16 text-white">
      <Card text="🧑‍💻 Skills " />
      <h1 className="font-extrabold text-2xl mt-4">Teclogias</h1>
      <h1 className="font-extrabold text-2xl">e habilidades</h1>

      <span className="flex text-sm opacity-50 mt-8 mb-6">Techs que uso no dia a dia</span>
      <Swiper
        slidesPerView={5}
        className="w-full text-border"
        loop
        spaceBetween={50}
      >
        <SwiperSlide>
          <SiReact size={50} />
        </SwiperSlide>
        <SwiperSlide>
          <SiJavascript size={50} className="rounded-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <SiTypescript size={50} className="rounded-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <IoLogoNodejs size={55} />
        </SwiperSlide>
        <SwiperSlide>
          <SiTailwindcss size={50} />
        </SwiperSlide>
        <SwiperSlide>
          <SiCss3 size={50} />
        </SwiperSlide>
        <SwiperSlide>
          <SiHtml5 size={50} />
        </SwiperSlide>
        <SwiperSlide>
          <SiGithub size={50} />
        </SwiperSlide>
        <SwiperSlide>
          <SiInsomnia size={50} />
        </SwiperSlide>
      </Swiper>

      <span className="flex text-sm opacity-50 mt-8 mb-6">Outras techs com que já realizei projetos</span>
      <Swiper
        slidesPerView={5}
        className="w-full text-border"
        spaceBetween={50}
      >
        <SwiperSlide>
          <SiFigma size={50} />
        </SwiperSlide>
        <SwiperSlide>
          <SiDocker size={50} />
        </SwiperSlide>
        <SwiperSlide>
          <GrMysql size={50} />
        </SwiperSlide>
        <SwiperSlide>
          <SiMongodb size={50} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

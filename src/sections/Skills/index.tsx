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
import CardWork from '../../components/CardWork';

export default function Skills() {
  return (
    <div className="mt-16 text-white md:mt-36 md:flex md:flex-col md:justify-center md:items-center md:w-full">
      <div className="md:hidden">
        <Card text="🧑‍💻 Skills " />
      </div>

      <div className="hidden md:flex">
        <CardWork text="🧑‍💻 Skills · Experiências" />
      </div>

      <h1 className="font-extrabold text-2xl mt-4 md:hidden">Teclogias</h1>
      <h1 className="font-extrabold text-2xl md:hidden">e habilidades</h1>
      <h1 className="font-extrabold text-5xl mt-6 hidden md:flex md:mb-24">Tecnologias e habilidades</h1>

      <span className="flex text-sm md:text-2xl md:mb-10 opacity-50 mt-8 mb-6">Techs que uso no dia a dia</span>
      <Swiper
        slidesPerView={5}
        className="w-full text-border md:hidden"
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
      <div className="hidden md:flex text-text opacity-50 gap-4">
        <SiReact size={70} />
        <SiJavascript size={70} className="rounded-lg" />
        <SiTypescript size={70} className="rounded-lg" />
        <IoLogoNodejs size={75} />
        <SiTailwindcss size={70} />
        <SiCss3 size={70} />
        <SiHtml5 size={70} />
        <SiGithub size={70} />
        <SiInsomnia size={70} />
      </div>

      <span className="flex text-sm md:text-2xl opacity-50 mt-8 mb-6 md:mb-10">Outras techs com que já realizei projetos</span>
      <Swiper
        slidesPerView={5}
        className="w-full text-border md:hidden"
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

      <div className="hidden md:flex  text-text opacity-50 gap-4">
        <SiFigma size={70} />
        <SiDocker size={70} />
        <GrMysql size={70} />
        <SiMongodb size={70} />

      </div>
    </div>
  );
}

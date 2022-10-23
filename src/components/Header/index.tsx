import { BiArrowToBottom } from 'react-icons/bi';
import SocialMedias from '../SocialMedias';
import Avatar from '../../assets/images/AvatarAndIcons.svg';
import Card from '../Card';
import LinkInstagram from '../LinkInstagram';

export default function Header() {
  return (
    <div className="flex items-center justify-center flex-col" id="Header">
      <div className="md:hidden">
        <SocialMedias />
      </div>
      <nav className="bg-footer w-full items-center py-3 rounded-2xl justify-center hidden md:flex ">
        <ul className="flex flex-row gap-10 text-white opacity-50 text-lg">
          <li className="text-text font-bold">Home</li>
          <li>Sobre Mim</li>
          <li>Portfólio</li>
          <li>Skills</li>
          <li>Recomendações</li>
          <li>Contatos</li>
        </ul>
      </nav>

      <div className="md:flex md:flex-row md:w-full md:justify-between md:mt-24 md:mb-44">
        <div className="-mt-5 ml-5 hover:scale-[1.01]">
          <img src={Avatar} alt="" className="md:hidden" />
        </div>
        <div className="md:flex w-full mt-9 md:w-1/3 md:mt-0 md:flex-col md:justify-center">
          <Card text="👋 Olá" />
          <h1 className="text-white font-extrabold text-5xl md:text-[3.25rem] mt-4">Diego</h1>
          <h1 className="text-white font-extrabold text-5xl mb-1">Arruda</h1>
          <span className="text-white opacity-50 text-lg md:text-xl md:mt-4 md:mb-6">FullStack Developer</span>
          <div className="hidden md:flex">
            <SocialMedias />
          </div>
        </div>
        <div className="-mt-5 ml-5 md:ml-0 hover:scale-[1.01] md:mt-0 ">
          <img src={Avatar} alt="" className="md:w-[35rem] md:h-[35rem] hidden md:flex" />
        </div>
        <div className="flex w-full mt-10 flex-row items-center md:items-end text-text opacity-50 md:mt-0 md:justify-center md:w-1/3 md:flex-col md:gap-2">
          <div className="flex flex-row">
            <a href="/" className="font-semibold text-base">Baixar CV</a>
            <BiArrowToBottom size={25} className="flex mr-4" />
          </div>
          <LinkInstagram />
        </div>
      </div>
    </div>
  );
}

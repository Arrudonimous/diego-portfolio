import { BiArrowToBottom } from 'react-icons/bi';
import { AiOutlineInstagram } from 'react-icons/ai';
import SocialMedias from '../SocialMedias';
import Avatar from '../../assets/images/AvatarAndIcons.svg';

export default function Header() {
  return (
    <div className="flex items-center justify-center flex-col">
      <SocialMedias />
      <div className="-mt-5 ml-5 hover:scale-[1.01]">
        <img src={Avatar} alt="" />
      </div>
      <div className="w-full mt-9">
        <div className="flex bg-footer rounded-lg text-[#D3301C] font-bold text-sm items-center justify-center w-[7rem] py-1">
          <h1>👋Olá</h1>
        </div>
        <h1 className="text-white font-extrabold text-5xl mt-4">Diego</h1>
        <h1 className="text-white font-extrabold text-5xl mb-1">Arruda</h1>
        <span className="text-white opacity-50 text-lg">FullStack Developer</span>
      </div>
      <div className="flex w-full mt-5 flex-row items-center text-[#D3301C] opacity-50">
        <a href="/" className="font-semibold text-base">Baixar CV</a>
        <BiArrowToBottom size={25} />
        <a href="https://www.instagram.com/arrudonimous.js/" className="border-[#D3301C] border-2 rounded-lg py-3 px-2 ml-4 font-semibold text-base flex flex-row gap-2">
          <AiOutlineInstagram size={25} />
          <h1>Vamos Conversar</h1>
        </a>
      </div>
    </div>
  );
}

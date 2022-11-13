import { BsLaptop, BsCodeSlash } from 'react-icons/bs';
import { MdOutlineScience } from 'react-icons/md';

export default function Experience() {
  return (
    <div className="md:flex md:flex-row md:items-center md:justify-center md:gap-20">
      <div className="flex flex-col mt-16 border-2 border-border rounded-lg px-5 pb-8 pt-14 text-white items-center justify-center md:w-1/4 md:h-[20rem] md:hover:bg-footer md:hover:border-0 transition-all duration-200 ease-in">
        <BsLaptop size={100} color="#D3301C" />
        <span className="font-medium mt-2 ">3 anos de</span>
        <h1 className="font-bold text-2xl md:text-3xl">Dev. de Sistemas</h1>
      </div>
      <div className="flex flex-col mt-16 border-2 border-border rounded-lg px-5 pb-8 pt-14 text-white items-center justify-center md:w-1/4 md:h-[20rem] md:hover:bg-footer md:hover:border-0 transition-all duration-200 ease-in">
        <BsCodeSlash size={100} color="#D3301C" />
        <span className="font-medium mt-2">1 ano como</span>
        <h1 className="font-bold text-2xl md:text-3xl">Desenvolvedor</h1>
      </div>
      <div className="flex flex-col mt-16 border-2 border-border rounded-lg px-5 pb-8 pt-14 text-white items-center justify-center md:w-1/4 md:h-[20rem] md:hover:bg-footer md:hover:border-0 transition-all duration-200 ease-in">
        <MdOutlineScience size={100} color="#D3301C" />
        <span className="font-medium mt-2">Futuro estudante de</span>
        <h1 className="font-bold text-2xl md:text-3xl">Ciência da Computação</h1>
      </div>
    </div>
  );
}

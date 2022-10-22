import { BsLaptop, BsCodeSlash } from 'react-icons/bs';
import { MdOutlineScience } from 'react-icons/md';

export default function Experience() {
  return (
    <div>
      <div className="flex flex-col mt-16 border-2 border-border rounded-lg px-5 pb-8 pt-14 text-white items-center justify-center">
        <BsLaptop size={100} color="#D3301C" />
        <span className="font-medium mt-2">3 anos de</span>
        <h1 className="font-bold text-2xl">Dev. de Sistemas</h1>
      </div>
      <div className="flex flex-col mt-16 border-2 border-border rounded-lg px-5 pb-8 pt-14 text-white items-center justify-center">
        <BsCodeSlash size={100} color="#D3301C" />
        <span className="font-medium mt-2">1 ano como</span>
        <h1 className="font-bold text-2xl">Desenvolvedor</h1>
      </div>
      <div className="flex flex-col mt-16 border-2 border-border rounded-lg px-5 pb-8 pt-14 text-white items-center justify-center">
        <MdOutlineScience size={100} color="#D3301C" />
        <span className="font-medium mt-2">Futuro estudante de</span>
        <h1 className="font-bold text-2xl">Ciência da Computação</h1>
      </div>
    </div>
  );
}

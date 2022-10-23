import { CopyToClipboard } from 'react-copy-to-clipboard';
import { IoCopy } from 'react-icons/io5';
import { TbArrowTopBar } from 'react-icons/tb';
import { Link } from 'react-scroll';
import Card from '../../components/Card';
import LinkInstagram from '../../components/LinkInstagram';

export default function Contact() {
  return (
    <div className="mt-16">
      <Card text="📬 Contatos" />
      <h1 className="mt-4 font-extrabold text-white text-2xl">Entre </h1>
      <h1 className="font-extrabold text-white text-2xl">em contato</h1>

      <div className="w-[11.6rem] mt-6 opacity-50">
        <LinkInstagram />
      </div>

      <h1 className="text-text mt-4 mb-1 font-medium">E-mail:</h1>
      <div className="flex flex-row items-center gap-2">
        <span className="text-white opacity-50">diegoarrudacontato@gmail.com</span>
        <CopyToClipboard text="diegoarrudacontato@gmail.com">
          <IoCopy size={20} color="#D3301C" />
        </CopyToClipboard>
      </div>

      <Link to="Header" smooth offset={-128} spy className="flex flex-row items-center text-text font-semibold my-16 hover:cursor-pointer">
        <h1>Voltar ao topo</h1>
        <TbArrowTopBar size={20} className="flex" />
      </Link>
    </div>
  );
}

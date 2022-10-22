import ProfilePic from '../../assets/images/ProfilePic.svg';
import Card from '../../components/Card';

export default function AboutMe() {
  return (
    <div className="flex flex-col mt-20 items-center justify-center">
      <img src={ProfilePic} alt="" className="w-80 mb-8 hover:scale-[1.01]" />
      <div className="w-full">
        <Card text="🧐 Sobre mim" />
        <h1 className="text-white font-extrabold text-2xl mt-16 mb-3">Diego Arruda</h1>
        <div className="flex flex-col font-medium text-white opacity-50 gap-3">
          <span className="block">
            👱🏻‍♂️Pode me chamar apenas de Diego! Sempre fui apaixonado por tecnologia e
            suas vertentes, em 2020 entrei no curso de Desenvolvimento de Sistemas,
            juntamente com o ensino médio, pela Etec de Santana de Parnaíba.
          </span>
          <span className="block">
            ✍🏼Há mais ou menos 1 ano comecei estudar a fundo NodeJS, JavaScript
            e TypeScript para o desenvolvimento do meu TCC, que será finalizado no ano de 2022.
          </span>
          <span className="block">
            💻Na metade de 2022 comecei a me interessar no desenvolvimento Front-End , assim
            me aprofundando em ReactJS e superficialmente em ReactNative, me tornando um dev
            FullStack júnior.
          </span>
          <span className="block mt-8">
            🔥Buscando conhecimento dia após dia🔥
          </span>

        </div>
      </div>
    </div>
  );
}

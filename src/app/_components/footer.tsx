import { ButtonNewsLetter } from './button-newsletter'

export default function Footer() {
  return (
    <div className="mt-12">
      <div className="bg-blue-700 text-white mx-auto flex flex-col justify-center items-center space-y-8 py-10">
        <h2 className="text-4xl max-w-[680px] font-bold text-center">
          Receba conteúdo exclusivo sobre <br></br>
          Desenvolvimento Web
        </h2>
        <p className="text-xl max-w-[680px] text-center">
          Receba semanalmente novidades e artigos sobre com tudo o que está
          acontecendo no mundo dos desenvolvedores Web.
        </p>
        <div className="max-w-[680px]">
          <ButtonNewsLetter />
        </div>
      </div>
      <a href="" className="">
        <div className=" p-4 text-gray-500 text-base">
          <div className="max-w-screen-xl mx-auto flex justify-center items-center sm:px-0 md:px-8 ">
            <p>Criado com NextJS por Everton Figueiredo</p>
          </div>
        </div>
      </a>
    </div>
  )
}

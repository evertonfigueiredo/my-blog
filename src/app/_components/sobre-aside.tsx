import logo from '@/images/dev.png'
import Image from 'next/image'
import { ButtonNewsLetter } from './button-newsletter'

export function SobreAside() {
  return (
    <div className="space-y-5">
      <div className="flex space-x-4 py-2">
        <Image src={logo} width={80} height={80} alt="logo" />
        <div className="w-[80%]">
          <h3 className="font-extrabold text-xl ">Everton Figueiredo</h3>
          <p className="text-justify">
            Venha aprender o básico da programação.
          </p>
        </div>
      </div>
      <div>
        <p className="text-justify">
          Inscreva-se agora para ter acesso à biblioteca de edições exclusivas
          para membros.
        </p>
      </div>
      <ButtonNewsLetter />
    </div>
  )
}

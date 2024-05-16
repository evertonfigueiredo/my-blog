import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import logo from '@/images/dev.png'
import { EnvelopeOpenIcon } from '@radix-ui/react-icons'
import Image from 'next/image'

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
        <div className="flex w-full items-center py-4 space-x-2">
          <Input type="email" placeholder="Email" />
          <Button type="submit">
            <EnvelopeOpenIcon className="w-3 h-3 mr-1" />
            Inscreva-se
          </Button>
        </div>
      </div>
    </div>
  )
}

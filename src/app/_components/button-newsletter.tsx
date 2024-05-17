import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { EnvelopeOpenIcon } from '@radix-ui/react-icons'

export function ButtonNewsLetter() {
  return (
    <div className="flex w-full items-center py-4 space-x-2">
      <Input type="email" placeholder="Email" />
      <Button type="submit">
        <EnvelopeOpenIcon className="w-3 h-3 mr-1" />
        Inscreva-se
      </Button>
    </div>
  )
}

/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react'

import { cn } from '@/lib/utils'
import useMediaQuery from '@custom-react-hooks/use-media-query'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import { EnvelopeClosedIcon } from '@radix-ui/react-icons'
import { toast } from '@/components/ui/use-toast'

export function InscrevaDialog() {
  const [open, setOpen] = React.useState(false)
  const isDesktop = useMediaQuery('(min-width: 768px)')

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button>
            <EnvelopeClosedIcon className="w-3 h-3 mr-3" /> Inscreva-se
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>NewsLetter Everton Figueiredo</DialogTitle>
            <DialogDescription>
              Venha fazer parte dessa comunidade.
            </DialogDescription>
          </DialogHeader>
          <ProfileForm />
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button>
          <EnvelopeClosedIcon className="w-3 h-3 mr-3" /> Inscreva-se
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>NewsLetter Everton Figueiredo</DrawerTitle>
          <DrawerDescription>
            Venha fazer parte dessa comunidade.
          </DrawerDescription>
        </DrawerHeader>
        <ProfileForm className="px-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancelar</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

function ProfileForm({ className }: React.ComponentProps<'form'>) {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [fone, setFone] = React.useState('null')

  const handleSubmit = (e: any) => {
    e.preventDefault()
    async function fetchData() {
      console.log({ name, email, fone })

      const response = await fetch(
        `https://amused-tick-coat.cyclic.app/lead/`,
        {
          method: 'POST',
          body: JSON.stringify({ name, email, fone }),
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        },
      )
      const data = await response.json()
      if (data.statusCode === 201) {
        toast({
          title: 'Sucesso!',
          description: 'Parabéns, seu e-mail foi cadastrado com sucesso!',
        })
      } else {
        toast({
          title: 'Error!',
          description: 'Por favor, tente novamente mais tarde.',
        })
      }
      setName('')
      setEmail('')
    }
    fetchData()
  }
  return (
    <form
      className={cn('grid items-start gap-4', className)}
      onSubmit={handleSubmit}
    >
      <div className="grid gap-2">
        <Label htmlFor="username">Seu nome</Label>
        <Input
          id="username"
          value={name}
          placeholder="Seu nome..."
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="email">Seu E-mail</Label>
        <Input
          type="email"
          id="email"
          value={email}
          placeholder="Seu email..."
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <Button type="submit">Inscrever-se</Button>
    </form>
  )
}

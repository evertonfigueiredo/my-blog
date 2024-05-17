'use client'
import * as React from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { toast } from '@/components/ui/use-toast'
import { EnvelopeOpenIcon } from '@radix-ui/react-icons'

export function ButtonNewsLetter() {
  const [name, setName] = React.useState('null')
  const [email, setEmail] = React.useState('')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [fone, setFone] = React.useState('null')

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
    <form onSubmit={handleSubmit}>
      <div className="flex w-full items-center py-4 space-x-2">
        <Input
          type="email"
          value={email}
          placeholder="Email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <Button type="submit">
          <EnvelopeOpenIcon className="w-3 h-3 mr-1" />
          Inscreva-se
        </Button>
      </div>
    </form>
  )
}

import * as React from 'react'

import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { InscrevaDialog } from './inscreva'
import Image from 'next/image'

import logo from '@/images/dev.png'

export function MenuMobile() {
  return (
    <div className="p-9 py-6 max-w-screen-xl mx-auto flex justify-between items-center">
      <Image src={logo} width={50} height={50} alt="logo" />
      <Drawer direction="right">
        <DrawerTrigger asChild>
          <Button variant="outline">Menu</Button>
        </DrawerTrigger>
        <DrawerContent className="h-full">
          <div className="mx-auto w-full max-w-sm flex justify-center ">
            <div className="w-full">
              <DrawerHeader>
                <div className="flex items-center justify-between ">
                  <DrawerTitle>Menu</DrawerTitle>
                  <DrawerClose asChild>
                    <Button variant="outline">X</Button>
                  </DrawerClose>
                </div>
              </DrawerHeader>
              <div className="p-4 pb-0">
                <div className="flex items-center justify-center flex-col space-y-5">
                  <a href="">Everton Figueiredo</a>
                  <a href="">Instagram</a>
                  <a href="">Youtube</a>
                  <a href="">Discord</a>
                  <a href="">Sobre</a>
                  <InscrevaDialog />
                </div>
              </div>
            </div>

            <DrawerFooter className="absolute bottom-10 w-full">
              <DrawerClose asChild>
                <Button variant="outline">Fechar</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  )
}

import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'
import { DiscordLogoIcon } from '@radix-ui/react-icons'
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from '@radix-ui/react-navigation-menu'

import { InscrevaDialog } from './inscreva'

import logo from '@/images/dev.png'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { cn } from '@/lib/utils'

export default function MenuDesktop() {
  return (
    <div className="p-9 py-6 max-w-screen-xl mx-auto flex justify-between items-center">
      <div className="flex space-x-10">
        <Image src={logo} width={50} height={50} alt="logo" />
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Everton Figueiredo
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Redes Sociais</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <DiscordLogoIcon className="h-10 w-10" />
                        <div className="mb-2 mt-4 text-lg font-medium">
                          Discord
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Nossa comunidade do Discord para conversar e tirar
                          duvidas.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="" title="Instagram">
                    Acompanhe um pouco do meu dia a dia.
                  </ListItem>
                  <ListItem href="/docs/installation" title="Youtube">
                    Venha estudar com a gente no nosso canal do Youtube
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/portfolio" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Portfolio
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <InscrevaDialog />
    </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = 'ListItem'

import React from 'react'
import { SobreAside } from './sobre-aside'
import { Topicos } from './topicos'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function TwoSidedComponent({
  children,
  title,
}: {
  children: React.ReactNode
  title: string
}) {
  return (
    <div className="dm:px-9 px-2 max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-8 gap-8">
      <section className="col-span-1 md:col-span-5">
        <div className="flex items-center">
          <div className="w-auto">
            <p className="pr-2">{title}</p>
          </div>
          <hr className="border-gray-300 my-auto flex-grow" />
        </div>
        {children}
      </section>
      <aside className="col-span-1 md:col-span-3">
        <div className="flex items-center">
          <div className="w-auto">
            <p className="pr-2">Sobre</p>
          </div>
          <hr className="border-gray-300 my-auto flex-grow" />
        </div>
        <SobreAside />
        <div className="flex items-center">
          <div className="w-auto">
            <p className="pr-2">Tópicos</p>
          </div>
          <hr className="border-gray-300 my-auto flex-grow" />
        </div>
        <Topicos />
      </aside>
    </div>
  )
}

export default TwoSidedComponent

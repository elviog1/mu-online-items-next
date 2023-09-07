import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
      <nav className='bg-transparent hover:bg-slate-800 hover:bg-opacity-40 duration-200 w-full fixed'>
        <div className='flex justify-between items-center container mx-auto py-4'>
          <Link href="/">
            <h2 className='font-bold text-3xl hover:text-slate-500 text-slate-100 duration-300'>Mu Items</h2>
          </Link>
            <ul className='flex gap-5 '>
              <Link href="/"> 
                <li className='font-bold text-lg hover:text-slate-500 text-slate-100 duration-300'>Inicio</li>
              </Link>
              <Link href="/items">
                <li className='font-bold text-lg hover:text-slate-500 text-slate-100 duration-300'>Items</li>
              </Link>
              <Link href="/crear">
                <li className='font-bold text-lg hover:text-slate-500 text-slate-100 duration-300'>Crear</li>
              </Link>
            </ul>
        </div>
      </nav>

  )
}

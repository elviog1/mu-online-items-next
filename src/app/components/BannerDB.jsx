import Link from 'next/link'
import React from 'react'

export default function BannerDB() {
  return (
    <section className='flex justify-center pb-10'>
      <Link href='/items' className='text-slate-100 text-center p-4 text-2xl rounded-md border-8 bg-gradient-to-tr from-neutral-800 to-neutral-950 border-double border-neutral-950 hover:scale-105 duration-300 hover:from-neutral-950 hover:to-neutral-800' >Conoce las diferentes armaduras con las que podras equiparte</Link>
    </section>
  )
}

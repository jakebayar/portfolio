"use client"

import Image from 'next/image'
import * as React from "react"

import Currently from "@/components/Currently"
import Projects from "@/components/Projects"
import Photography from "@/components/Photography"

// const arrowIcon = <Image src={'/arrow-icon.svg'} width={'6'} height={'6'} className=' opacity-80' alt='arrow icon' />

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col justify-between gap-10 p-8 md:p-20 pt-16">

      <header className='flex flex-row items-left'>
        <Image src='/jake-logo.svg' width={60} height={60} alt='personal logo' />
      </header>

      <section className='flex flex-col text-primary max-w-md text-sm gap-4'>
        <h2 className='font-semibold'>Welcome!</h2>
        <p>Im Jake, a software engineer with a passion for blah blah and something about photography teehee 🙂 </p>
      </section>

      <section>
        <Currently />
      </section>

      <section>
        <Projects />
      </section>

      <section>
        <Photography />
      </section>

      <div className='flex flex-col gap-4 text-primary text-xs'>
        <p>This website is a constant work in progress. If you have any feedback please let me know.</p>
      </div>
    </main >
  )
}




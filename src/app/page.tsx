"use client"

import Image from 'next/image'
import * as React from "react"

import Currently from "@/components/Currently"
import Projects from "@/components/Projects"
import Photography from "@/components/Photography"

const arrowIcon = <Image src={'/arrow-icon.svg'} width={'6'} height={'6'} className=' opacity-80' alt='arrow icon' />

import { PlayIcon, PauseIcon } from '@heroicons/react/24/solid';
import { FaSpotify } from 'react-icons/fa';


export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-left justify-between gap-10 p-8 md:p-20 pt-16">

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

      <div className="flex flex-row gap-0.5">
        <button
          // onClick={togglePlayback}
          className="bg-green-500 hover:bg-green-600 text-white font-bold p-2"
        >
          {<PlayIcon className='w-4 h-4' />}
        </button>
        <a
          // href={spotifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row items-center justify-center gap-1 bg-slate-900 hover:bg-slate-800 text-white px-2"
        >
          <FaSpotify classname='w-2 h-2' />
          <span className='text-[10px] '>
            Listen in Spotify
          </span>
        </a>
      </div>

      <div className='flex flex-col gap-4 text-primary text-xs'>
        <p>This website is a constant work in progress. If you have any feedback please let me know :)</p>
      </div>
    </main >
  )
}




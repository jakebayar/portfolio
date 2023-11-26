"use client"

import Image from 'next/image'
import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import Currently from "@/components/Currently"
import Projects from "@/components/Projects"
import Photography from "@/components/Photography"

import { FaLinkedin, FaCar } from "react-icons/fa";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const arrowIcon = <Image src={'/arrow-icon.svg'} width={'6'} height={'6'} className=' opacity-80' alt='arrow icon' />


export default function Home() {

  const { setTheme } = useTheme()

  return (
    <main className="flex min-h-screen flex-col items-left justify-between gap-10 p-8 md:p-20 pt-16">

      <header className='flex flex-row items-left'>
        <Image src='/jake-logo.svg' width={60} height={60} alt='personal logo' />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>

      <section className='flex flex-col text-primary max-w-md text-sm gap-4'>
        <h2 className='font-semibold'>Welcome!</h2>
        <p>Im Jake, a software engineer with a passion for blah blah and something about photography teehee 🙂 </p>
        <div className="flex flex-row gap-2 text-xs">
          <Button variant="ghost" size='sm' className='flex font-light h-6 -ml-2 text-xs gap-1.5 items-center justify-center'>
            Learn More {arrowIcon}
          </Button>
        </div>
      </section>

      <Currently />

      <Projects />

      <Photography />
      {/* <div className='flex flex-col gap-4 w-full'>
        <div className='flex flex-col gap-2'>
          <p className='font-Inter text-xs font-medium tracking-normal text-slate-400 sm:text-md '>Photography</p>
          <p className='text-primary text-xs'>Over the past couple years I’ve built up my photography  skills and have worked on a number of projects. You can check out more by visiting my portfolio below.</p>

          <div className="flex flex-row gap-1 text-xs">
            <Button variant="link" size='sm' className='flex font-light h-6 -ml-2 text-xs gap-1.5 items-center justify-center'>
              Visit Portfolio {arrowIcon}
            </Button>
          </div>
        </div>
        <div className='flex overflow-y-auto rounded-lg bg-slate-300/80 p-1'>
          <div className='flex no-scrollbar flex-row rounded-md gap-1 overflow-y-auto '>
            <Image src={'/DSC04397.jpg'} alt='photo' width={'280'} height={'50'} className='rounded' />
            <Image src={'/DSC04397.jpg'} alt='photo' width={'280'} height={'50'} className='rounded' />
            <Image src={'/DSC04397.jpg'} alt='photo' width={'280'} height={'50'} className='rounded' />
          </div>
        </div>
      </div> */}

      <div className='flex flex-col gap-4 text-primary text-xs'>
        <p>This website is a constant work in progress. If you have any feedback please let me know :)</p>
        <p>PS: Last Updated: 11/20/23</p>
      </div>
    </main >
  )
}




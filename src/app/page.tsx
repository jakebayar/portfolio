"use client"

import Image from 'next/image'
import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const projects = [
  {
    key: 1,
    name: 'Sage',
    href: '#',
    intro: 'is a job application tracking platform.',
    stack: '',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a specimen book.',
  },
  {
    key: 2,
    name: 'Flexcache',
    href: '#',
    intro: 'is a configurable caching library',
    stack: '',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a specimen book.',
  },
  {
    key: 3,
    name: 'Tangerine',
    href: '#',
    intro: 'is a HR Task Automation platform.',
    stack: '',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a specimen book.',
  },
];


export default function Home() {

  const { setTheme } = useTheme()

  return (
    <main className="flex min-h-screen flex-col items-left justify-between p-8 pt-16">

      <header className='items-left'>
        <Image src='/jake-logo.svg' width={64} height={64} alt='personal logo' />
      </header>

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

      <section className='text-black mt-20'>
        <h2 className='my-4 font-semibold'>Welcome!</h2>
        <p>Im Jake, a software engineer with a passion for blah blah and something about photography teehee 🙂 </p>
        <button className='border border-slate-300 rounded-md my-4 p-2 text-sm font-sm text-slate-400'>Learn more</button>
      </section>
      <div className='mx-auto mt-12 max-w-7xl  sm:mt-40 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:mx-0 lg:max-w-none'>
          <p className='text-sm font-md tracking-tight text-slate-300 sm:text-4xl'>Projects</p>
        </div>
        <div className='mx-auto mt-8 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8'>
          {projects.map((project) => (
            <article key={project.key} className='relative isolate flex flex-col '>
              <div className='flex flex-col gap-y-1 overflow-hidden text-sm leading-6 text-gray-700'>
                <p><strong>{project.name}</strong> {project.intro}</p>
                <p>{project.description}</p>
                <p>Stack: </p>
              </div>
              <div className="flex flex-row">
                <button className='border border-slate-500 rounded-md p-2 text-black'>Code</button>
                <button className='border border-slate-500 rounded-md p-2 text-black'>Visit</button>
              </div>

            </article>
          ))}
        </div>

      </div>
    </main>
  )
}




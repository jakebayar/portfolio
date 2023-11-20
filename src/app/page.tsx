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
    intro: '- job application tracking platform.',
    stack: '',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a specimen book.',
  },
  {
    key: 2,
    name: 'Flexcache',
    href: '#',
    intro: '- configurable caching library',
    stack: '',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a specimen book.',
  },
  {
    key: 3,
    name: 'Tangerine',
    href: '#',
    intro: '- HR Task Automation platform.',
    stack: '',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a specimen book.',
  },
];





export default function Home() {

  const { setTheme } = useTheme()

  return (
    <main className="flex min-h-screen flex-col items-left justify-between p-8 pt-16">

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


      <section className='flex flex-col text-primary mt-20 text-sm gap-4'>
        <h2 className='font-semibold'>Welcome!</h2>
        <p>Im Jake, a software engineer with a passion for blah blah and something about photography teehee 🙂 </p>
        <Button variant="outline" className='w-24 h-8 text-xs gap-1.5 text-slate-500'>
          Learn More <Image src={'/arrow-icon.svg'} width={'20'} height={'10'} className='' alt='arrow icon' />
        </Button>
      </section>
      <div className='mx-auto mt-12 w-full sm:mt-40 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:mx-0 lg:max-w-none'>
          <p className='text-md font-medium tracking-tight text-primary sm:text-4xl'>Projects</p>
        </div>
        <div className='mx-auto mt-4'>
          {projects.map((project) => (
            <article key={project.key} className='flex flex-col gap-4 my-4'>
              <p className='text-sm'><strong>{project.name}</strong> {project.intro}</p>
              <p className='text-xs tracking-normal	'>{project.description}</p>
              <p className='text-xs'>Stack: </p>
              <div className="flex flex-row gap-2 text-xs">
                <Button variant="outline" className='w-16 h-6 text-xs gap-1.5'>
                  Code <Image src={'/arrow-icon.svg'} width={'20'} height={'10'} className='' alt='arrow icon' />
                </Button>
                <Button variant="outline" className='w-16 h-6 text-xs gap-1.5'>
                  Visit <Image src={'/arrow-icon.svg'} width={'20'} height={'10'} className='' alt='arrow icon' />
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>


      <div className='flex flex-col gap-4 my-10 w-full'>
        <div className='flex flex-col gap-4'>
          <p className='text-md font-medium tracking-tight text-primary '>Photography</p>
          <p className='text-primary text-xs'>Over the past couple years I’ve built up my photography  skills and have worked on a number of projects. You can check out more by visiting my portfolio below.</p>
          <p className='text-primary text-xs'>Visit Portfolio</p>
        </div>
        <div className='flex overflow-y-auto rounded-lg bg-slate-300/80 p-1'>
          <div className='flex flex-row  gap-1'>
            <Image src={'/DSC04397.jpg'} alt='photo' width={'280'} height={'50'} className='rounded' />
            <Image src={'/DSC04397.jpg'} alt='photo' width={'280'} height={'50'} className='rounded' />
            <Image src={'/DSC04397.jpg'} alt='photo' width={'280'} height={'50'} className='rounded' />
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-4 text-primary text-xs'>
        <p>This website is a constant work in progress. If you have any feedback please let me know :)</p>
        <p>PS: Last Updated: 11/20/23</p>
      </div>
    </main >
  )
}




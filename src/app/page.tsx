"use client"

import Image from 'next/image'
import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { HomeIcon } from '@heroicons/react/24/solid'

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

const arrowIcon = <Image src={'/arrow-icon.svg'} width={'8'} height={'8'} className=' opacity-80' alt='arrow icon' />




export default function Home() {

  const { setTheme } = useTheme()

  return (
    <main className="flex min-h-screen flex-col items-left justify-between gap-16 p-8 md:p-20 pt-16">

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

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-slate-200">
        <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
        <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
      </svg>


      <section className='flex flex-col text-primary max-w-md text-sm gap-4'>
        <h2 className='font-semibold'>Welcome!</h2>
        <p>Im Jake, a software engineer with a passion for blah blah and something about photography teehee 🙂 </p>
        <div className="flex flex-row gap-2 text-xs">
          <Button variant="outline" className='flex font-light h-6 text-xs gap-1.5 items-center justify-center'>
            Learn More {arrowIcon}
          </Button>
        </div>
      </section>


      <section className='flex flex-col text-primary  text-sm gap-4'>
        <p className='text-sm font-normal tracking-tight text-slate-400 sm:text-md'>Currently</p>
        <p>Listening to OK THEN by Jordeaux</p>
      </section>



      <div className='mx-auto w-full'>
        <div className='mx-auto max-w-2xl lg:mx-0 lg:max-w-none'>
          <p className='text-sm font-normal tracking-tight text-slate-400 sm:text-md'>Projects</p>
        </div>
        <div className='mx-auto mt-4'>

          {projects.map((project) => (

            <article key={project.key} className='flex flex-col gap-4 my-4'>
              <p className='text-sm'><strong className='font-bold'>{project.name}</strong> {project.intro}</p>
              <p className='text-xs tracking-normal'>{project.description}</p>
              <p className='text-xs'>Stack: </p>
              <div className="flex flex-row gap-1 text-xs">
                <Button variant="outline" size='sm' className='flex font-light h-6 text-xs gap-1.5 items-center justify-center'>
                  Code {arrowIcon}
                </Button>
                <Button variant="outline" className='flex font-light h-6 text-xs gap-1.5 items-center justify-center'>
                  Visit {arrowIcon}
                </Button>
              </div>

            </article>

          ))}
        </div>
      </div>


      {/* <p className='text-background'>background</p>
      <p className='text-foreground'>foreground</p>

      <p className='text-card'>card</p>
      <p className='text-card-foreground'>Over the past couple years.</p>

      <p className='text-popover'>popover</p>
      <p className='text-popover-foreground'>Over the past couple years.</p>

      <p className='text-primary'>primary</p>
      <p className='text-primary-foreground'>Over the past couple years.</p>

      <p className='text-secondary'>secondary</p>
      <p className='text-secondary-foreground'>Over the past couple years.</p>

      <p className='text-muted'>muted</p>
      <p className='text-muted-foreground'>Over the past couple years.</p>

      <p className='text-accent'>accent</p>
      <p className='text-accent-foreground'>Over the past couple years.</p>

      <p className='text-destructive'>destructive</p>
      <p className='text-destructive-foreground'>Over the past couple years.</p>

      <p className='text-border'>border</p>
      <p className='text-input'>input</p>
      <p className='text-ring'>ring</p>
      <p className='text-radius'>radius</p> */}


      <div className='flex flex-col gap-4 w-full'>
        <div className='flex flex-col gap-4'>
          <p className='text-sm font-normal tracking-tight text-slate-400 '>Photography</p>
          <p className='text-primary text-xs'>Over the past couple years I’ve built up my photography  skills and have worked on a number of projects. You can check out more by visiting my portfolio below.</p>

          <div className="flex flex-row gap-1 text-xs">
            <Button variant="outline" className='flex h-6 text-xs font-light gap-1.5 items-center justify-center'>
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
      </div>

      <div className='flex flex-col gap-4 text-primary text-xs'>
        <p>This website is a constant work in progress. If you have any feedback please let me know :)</p>
        <p>PS: Last Updated: 11/20/23</p>
      </div>
    </main >
  )
}




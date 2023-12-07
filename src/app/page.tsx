"use client"

import Image from 'next/image'
import * as React from "react"
// import { Moon, Sun } from "lucide-react"
// import { useTheme } from "next-themes"

// import { Button } from "@/components/ui/button"
import Currently from "@/components/Currently"
import Projects from "@/components/Projects"
import Photography from "@/components/Photography"



// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"


const arrowIcon = <Image src={'/arrow-icon.svg'} width={'6'} height={'6'} className=' opacity-80' alt='arrow icon' />


export default function Home() {

  // const { theme, setTheme } = useTheme();
  // console.log("Current theme:", theme);


  return (
    <main className="flex min-h-screen flex-col items-left justify-between gap-10 p-8 md:p-20 pt-16">

      <header className='flex flex-row items-left'>
        <Image src='/jake-logo.svg' width={60} height={60} alt='personal logo' />
        {/* <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => {
              console.log("Setting theme to light");
              setTheme("light");
            }}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => {
              console.log("Setting theme to dark");
              setTheme("dark");
            }}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => {
              console.log("Setting theme to system");
              setTheme("system");
            }}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu> */}
      </header>

      <section className='flex flex-col text-primary max-w-md text-sm gap-4'>
        <h2 className='font-semibold'>Welcome!</h2>
        <p>Im Jake, a software engineer with a passion for blah blah and something about photography teehee 🙂 </p>
        {/* <div className="flex flex-row gap-2 text-xs">
          <Button variant="ghost" size='sm' className='flex font-light h-6 -ml-2 text-xs gap-1.5 items-center justify-center'>
            Learn More {arrowIcon}
          </Button>
        </div> */}
      </section>

      <Currently />

      <Projects />

      <Photography />

      <div className='flex flex-col gap-4 text-primary text-xs'>
        <p>This website is a constant work in progress. If you have any feedback please let me know :)</p>
        <p>PS: Last Updated: 11/20/23</p>
      </div>
    </main >
  )
}




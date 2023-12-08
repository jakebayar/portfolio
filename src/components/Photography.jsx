import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"

export default function Photography() {

    const arrowIcon = <Image src={'/arrow-icon.svg'} width={'6'} height={'6'} className=' opacity-80' alt='arrow icon' />

    return (
        <div className='flex flex-col gap-4 w-full'>
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
                    <Image src={'/DSC04397.jpg'} alt='photo' width={'280'} height={'50'} quality={80} className='rounded' />
                    <Image src={'/DSC04397.jpg'} alt='photo' width={'280'} height={'50'} quality={80} className='rounded' />
                    <Image src={'/DSC04397.jpg'} alt='photo' width={'280'} height={'50'} quality={80} className='rounded' />
                </div>
            </div>
        </div>

    )
}

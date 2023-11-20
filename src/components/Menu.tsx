import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'


export default function Menu() {
    return (
        <div className='flex flex-row overflow-x-auto w-full rounded-2xl bg-slate-300/80 p-1 z-50'>
            <div className='flex flex-row gap-1'>

                <Button variant="outline" className='w-12 h-12 rounded-xl text-xs gap-1.5'>
                    <Image src={'/arrow-icon.svg'} width={'30'} height={'30'} alt='arrow icon' />
                </Button>
                <Button variant="outline" className='w-12 h-12 rounded-xl text-xs gap-1.5'>
                    <Image src={'/arrow-icon.svg'} width={'30'} height={'30'} alt='arrow icon' />
                </Button>
                <Button variant="outline" className='w-12 h-12 rounded-xl text-xs gap-1.5'>
                    <Image src={'/arrow-icon.svg'} width={'30'} height={'30'} alt='arrow icon' />
                </Button>
                <Button variant="outline" className='w-12 h-12 rounded-xl text-xs gap-1.5'>
                    <Image src={'/arrow-icon.svg'} width={'30'} height={'30'} alt='arrow icon' />
                </Button>
                <Button variant="outline" className='w-12 h-12 rounded-xl text-xs gap-1.5'>
                    <Image src={'/arrow-icon.svg'} width={'30'} height={'30'} alt='arrow icon' />
                </Button>
                <Button variant="outline" className='w-12 h-12 rounded-xl text-xs gap-1.5'>
                    <Image src={'/arrow-icon.svg'} width={'30'} height={'30'} alt='arrow icon' />
                </Button>
                <Button variant="outline" className='w-12 h-12 rounded-xl text-xs gap-1.5'>
                    <Image src={'/arrow-icon.svg'} width={'30'} height={'30'} alt='arrow icon' />
                </Button>
                <Button variant="outline" className='w-12 h-12 rounded-xl text-xs gap-1.5'>
                    <Image src={'/arrow-icon.svg'} width={'30'} height={'30'} alt='arrow icon' />
                </Button>
                <Button variant="outline" className='w-12 h-12 rounded-xl text-xs gap-1.5'>
                    <Image src={'/arrow-icon.svg'} width={'30'} height={'30'} alt='arrow icon' />
                </Button>
                <Button variant="outline" className='w-12 h-12 rounded-xl text-xs gap-1.5'>
                    <Image src={'/arrow-icon.svg'} width={'30'} height={'30'} alt='arrow icon' />
                </Button>
                <Button variant="outline" className='w-12 h-12 rounded-xl text-xs gap-1.5'>
                    <Image src={'/arrow-icon.svg'} width={'30'} height={'30'} alt='arrow icon' />
                </Button>
                <Button variant="outline" className='w-12 h-12 rounded-xl text-xs gap-1.5'>
                    <Image src={'/arrow-icon.svg'} width={'30'} height={'30'} alt='arrow icon' />
                </Button>

            </div>
        </div>
    )
}

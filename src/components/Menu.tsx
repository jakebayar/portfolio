import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'


export default function Menu() {

    const renderButtons = () => {
        const buttons = [];
        for (let i = 0; i < 8; i++) {
            buttons.push(
                <Button key={i} variant="outline" className='w-11 h-11 rounded-2xl text-xs gap-1.5'>
                    <Image src={'/arrow-icon.svg'} width={30} height={30} alt='arrow icon' />
                </Button>
            );
        }
        return buttons;
    };

    return (
        <div className="flex flex-row overflow-x-auto no-scrollbar backdrop-blur shadow-lg rounded-3xl bg-slate-300/80 p-2 mx-16 my-4 md:my-8">

            <div className='flex flex-row rounded-2xl gap-1 overflow-x-auto no-scrollbar'>
                <div className='flex flex-row gap-1'>
                    {renderButtons()}
                </div>
            </div>
        </div>
    )
}

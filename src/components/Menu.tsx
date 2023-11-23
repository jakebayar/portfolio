import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'
import { HomeIcon, CommandLineIcon, CameraIcon } from '@heroicons/react/24/solid'


const options = [
    {
        route: 'home',
        icon: HomeIcon,
        alt: 'home icon',
    },
    {
        route: 'projects',
        icon: CommandLineIcon,
        alt: 'terminal icon',
    },
    {
        route: 'photography',
        icon: CameraIcon,
        alt: 'camera icon',
    },
    {
        route: 'home',
        icon: HomeIcon,
        alt: 'home icon',
    },
    {
        route: 'home',
        icon: HomeIcon,
        alt: 'home icon',
    },

];

export default function Menu() {
    const renderButtons = () => {
        return options.map((item, index) => (
            <Button key={item.route} variant="outline" className='w-11 h-11 rounded-2xl text-xs'>
                <item.icon className="h-6 w-6 text-slate-500" aria-label={item.alt} />
            </Button>
        ));
    };

    return (
        <div className="flex flex-row overflow-x-auto no-scrollbar backdrop-blur shadow-xl rounded-3xl bg-slate-300/80 p-2 mx-16 my-4 md:my-8">

            <div className='flex flex-row rounded-3xl overflow-x-auto no-scrollbar'>
                <div className='flex flex-row gap-2'>
                    {renderButtons()}
                </div>
            </div>
        </div>
    )
}

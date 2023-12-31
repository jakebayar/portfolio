import React from 'react'
import Image from 'next/image'

import { Button } from "@/components/ui/button"

export default function Projects() {


    const arrowIcon = <Image src={'/arrow-icon.svg'} width={'6'} height={'6'} className=' opacity-80' alt='arrow icon' />

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


    return (
        <div className='mx-auto w-full flex flex-col gap-2 '>
            <div className='mx-auto max-w-2xl lg:mx-0 lg:max-w-none'>
                <p className='mb-4 font-Inter text-xs font-medium tracking-normal text-slate-400 sm:text-md'>Projects</p>
            </div>
            <div className='mx-auto flex flex-col gap-4'>

                {projects.map((project) => (

                    <article key={project.key} className='flex flex-col gap-4'>
                        <p className='text-sm'><strong className='font-bold'>{project.name}</strong> {project.intro}</p>
                        <p className='text-xs tracking-normal'>{project.description}</p>
                        <p className='text-xs'>Stack: </p>
                        <div className="flex flex-row gap-1 text-xs -m-2">
                            <Button variant="outline" size='sm' className='flex font-light w-20 min-w-20 h-6 text-xs gap-1.5 items-center justify-center'>
                                Code {arrowIcon}
                            </Button>
                            <Button variant="outline" size='sm' className='flex font-light w-20 min-w-20 h-6 text-xs gap-1.5 items-center justify-center'>
                                Visit {arrowIcon}
                            </Button>
                        </div>

                    </article>

                ))}
            </div>
        </div>)
}

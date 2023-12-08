"use client"
import Link from 'next/link';
import { useTheme } from "next-themes"

import { useEffect, useState } from 'react';


// ICONS
import { HomeIcon, CommandLineIcon, CameraIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { FaLinkedin, FaInstagram, FaGithub, } from "react-icons/fa";
import { Moon, Sun } from "lucide-react"

// COMPONENTS
import { Button } from './ui/button'

const options = [
    {
        route: '/',
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
        route: 'https://github.com/jakebayar',
        icon: FaGithub,
        alt: 'github icon',
    },
    {
        route: 'https://www.instagram.com/jam.bay/',
        icon: FaInstagram,
        alt: 'instagram icon',
    },
    {
        route: 'linkedin',
        icon: FaLinkedin,
        alt: 'linkedin icon',
    },
    {
        route: 'contact',
        icon: EnvelopeIcon,
        alt: 'contact icon',
    },
];


export default function Menu() {

    const { theme, setTheme } = useTheme();
    const [isMounted, setIsMounted] = useState(false);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    };

    useEffect(() => {
        // ComponentDidMount lifecycle
        setIsMounted(true);
    }, []);

    return (
        <div className="flex flex-row overflow-x-auto no-scrollbar backdrop-blur-sm shadow-xl rounded-3xl bg-slate-600/30 p-2 mx-16 mb-4 md:mb-8">
            <div className='flex flex-row rounded-2xl overflow-x-auto no-scrollbar'>
                <div className='flex flex-row gap-1 text-primary justify-center items-center'>
                    {
                        options.map((item) => {
                            return (
                                <Link key={item.route} href={item.route} passHref>

                                    <Button key={item.route} variant="outline" className='w-11 h-11 rounded-2xl text-xs '>
                                        <item.icon className="h-6 w-6 text-slate-500" aria-label={item.alt} />
                                    </Button>

                                </Link>
                            );
                        })
                    }

                    <Button variant="outline" size="icon" onClick={toggleTheme} className='w-11 h-11 rounded-2xl text-slate-500'>
                        {isMounted && (theme === 'dark' ? (

                            <Moon className="h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />

                        ) : (
                            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        )
                        )}
                        <span className="sr-only">Toggle theme</span>
                    </Button>
                </div>
            </div>
        </div>
    );
}


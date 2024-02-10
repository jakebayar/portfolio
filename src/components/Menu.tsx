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

const mainMenuItems = [
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
];

const socialMenuItems = [
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
    // {
    //     route: 'linkedin',
    //     icon: FaLinkedin,
    //     alt: 'linkedin icon',
    // },
    {
        route: 'mailto:contact@jakebayar.com',
        icon: EnvelopeIcon,
        alt: 'contact icon',
    },

]
const Divider = () => <div className="h-6 w-px bg-primary/20 mx-1"></div>;

export default function Menu() {

    const { theme, resolvedTheme, setTheme } = useTheme();
    const [isMounted, setIsMounted] = useState(false);

    const toggleTheme = () => {
        const currentTheme = resolvedTheme || theme;
        setTheme(theme === 'light' ? 'dark' : 'light')
    };

    useEffect(() => {
        setIsMounted(true);
    }, []);



    // const renderThemeToggleIcon = () => {
    //     setTheme(currentTheme === 'dark' ? 'light' : 'dark');
    // };

    const themeIcon = resolvedTheme === 'dark' || (resolvedTheme === 'system' && theme === 'dark') ? <Sun className='h-5 w-5' /> : <Moon className="h-5 w-5" />;

    if (!isMounted) {
        // renderThemeToggleIcon()
        return null; // or a loader/placeholder
    }

    return (
        <div className="flex flex-row overflow-x-auto no-scrollbar backdrop-blur-sm shadow-xl border border-slate-600/20 rounded-3xl bg-slate-600/30 p-2 mx-12 mb-6 md:mb-8">
            <div className='flex flex-row rounded-2xl overflow-x-auto no-scrollbar'>
                <div className='flex flex-row gap-1.5 text-primary justify-center items-center'>
                    {
                        mainMenuItems.map((item) => {
                            return (
                                <Link key={item.route} href={item.route} passHref>
                                    <Button key={item.route} variant="outline" className='w-11 h-11 rounded-2xl text-xs '>
                                        <item.icon className="h-6 w-6 text-slate-500" aria-label={item.alt} />
                                    </Button>
                                </Link>
                            );
                        })
                    }
                    {
                        socialMenuItems.map((item) => {
                            return (
                                <Link key={item.route} href={item.route} passHref>
                                    <Button key={item.route} variant="outline" className='w-11 h-11 rounded-2xl text-xs '>
                                        <item.icon className="h-6 w-6 text-slate-500" aria-label={item.alt} />
                                    </Button>
                                </Link>
                            );
                        })
                    }
                    <Divider />
                    <Button variant="outline" size="icon" onClick={toggleTheme} className='w-11 h-11 rounded-2xl text-slate-500'>
                        {/* {currentTheme === 'dark' ? <Sun className='h-5 w-5' /> : <Moon className="h-5 w-5" />} */}
                        {themeIcon}
                    </Button>

                </div>
            </div>
        </div>
    );
}


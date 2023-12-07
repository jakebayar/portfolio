"use client"
import Link from 'next/link';
import { useTheme } from "next-themes"

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

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    };

    return (
        <div className="flex flex-row overflow-x-auto no-scrollbar backdrop-blur-sm shadow-xl rounded-3xl bg-slate-600/30 p-2 mx-16 mb-4 md:mb-8">
            <div className='flex flex-row rounded-2xl overflow-x-auto no-scrollbar'>
                <div className='flex flex-row gap-1 text-primary"'>
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

                    <Button variant="outline" size="icon" onClick={toggleTheme}>
                        {theme === 'light' ? (
                            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 transition-all dark:-rotate-90 dark:scale-0" />
                        ) : (
                            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />)
                        }
                        <span className="sr-only">Toggle theme</span>
                    </Button>
                </div>
            </div>
        </div>
    );
}


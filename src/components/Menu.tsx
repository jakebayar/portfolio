import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'
import { HomeIcon, CommandLineIcon, CameraIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { LinkedinIcon, GithubIcon, InstagramIcon, } from 'lucide-react'

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
        route: 'github',
        icon: GithubIcon,
        alt: 'github icon',
    },
    {
        route: 'instagram',
        icon: InstagramIcon,
        alt: 'instagram icon',
    },
    {
        route: 'linkedin',
        icon: LinkedinIcon,
        alt: 'home icon',
    },
    {
        route: 'email',
        icon: EnvelopeIcon,
        alt: 'home icon',
    },
];

export default function Menu() {
    const renderButtons = () => {
        return options.map((item, index) => {
            const isCustomSVG = item.hasOwnProperty('iconPath');
            return (
                <Button key={item.route} variant="outline" className='w-11 h-11 rounded-2xl text-xs text-slate-700'>
                    {isCustomSVG ? (
                        // Render custom SVG from the public folder

                        <Image
                            src={item.iconPath}
                            alt={item.alt}
                            width={24}
                            height={24}
                            className="text-slate-300"
                        />
                    ) : (
                        // Render Heroicon
                        <item.icon className="h-6 w-6 text-slate-500" aria-label={item.alt} />
                    )}
                </Button>

            );
        });
    };

    return (
        <div className="flex flex-row overflow-x-auto no-scrollbar backdrop-blur shadow-xl rounded-3xl bg-slate-300/80 p-2 mx-16 my-4 md:my-8">
            <div className='flex flex-row rounded-2xl overflow-x-auto no-scrollbar'>
                <div className='flex flex-row gap-2'>
                    {renderButtons()}
                </div>
            </div>
        </div>
    );
}

// return (
//     <div>
//         {options.map((option, index) => {
//             const isCustomSVG = option.hasOwnProperty('iconPath');

//             return (
//                 <Button key={index}>
//                     {isCustomSVG ? (
//                         // Render custom SVG from the public folder
//                         <Image
//                             src={item.iconPath}
//                             alt={item.alt}
//                             width={24}
//                             height={24}
//                         />
//                     ) : (
//                         // Render Heroicon
//                         <item.icon className="h-6 w-6" aria-label={option.alt} />
//                     )}
//                 </Button>
//             );
//         })}
//     </div>
// );

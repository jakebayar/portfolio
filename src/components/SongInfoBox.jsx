import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import { PlayIcon, PauseIcon } from '@heroicons/react/24/solid';
import { FaSpotify } from 'react-icons/fa';

const SongInfoBox = ({ song, artist, imageUrl, previewUrl, spotifyUrl }) => {
    const [audio, setAudio] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        // Create the audio object once when the component mounts
        const audioObj = new Audio(previewUrl);
        setAudio(audioObj);

        return () => {
            // Pause and clean up on unmount
            audioObj.pause();
        };
    }, [previewUrl]);

    const togglePlayback = () => {
        if (audio) {
            if (isPlaying) {
                audio.pause();
            } else {
                audio.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className="flex flex-col shadow-lg rounded-sm gap-2" style={{ width: '150px' }}>
            <div className="relative">
                <Image
                    src={imageUrl}
                    width={'160'}
                    height={'160'}
                    alt={`Image of ${artist}`}
                    className='rounded-sm border'
                />
            </div>

            <div className="text-left ">
                <div className="font-bold text-md">{song}</div>
                <p className="text-gray-500 text-xs">{artist}</p>
            </div>

            <div className="flex flex-row gap-1">

                <button
                    onClick={togglePlayback}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold p-2"
                >
                    {isPlaying ? <PauseIcon className='w-4 h-4' /> : <PlayIcon className='w-4 h-4' />}
                </button>


                <a
                    href={spotifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-row items-center justify-center bg-slate-900 hover:bg-slate-800 text-[10px] text-white px-2 gap-2"
                >
                    <FaSpotify classname='w-2 h-2' />
                    <span className=''>
                        Listen in Spotify
                    </span>
                </a>
            </div>
        </div>
    );
};

export default SongInfoBox;

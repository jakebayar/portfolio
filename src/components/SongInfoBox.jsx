import React, { useState, useEffect } from 'react';
import Image from 'next/image';

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
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white text-center p-4">
            <div className="relative w-full h-64">
                <Image
                    src={imageUrl}
                    width={'160'}
                    height={'160'}
                    alt={`Image of ${artist}`}
                />
            </div>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{song}</div>
                <p className="text-gray-700 text-base">{artist}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <button
                    onClick={togglePlayback}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                    {isPlaying ? 'Pause' : 'Play'}
                </button>
                <a
                    href={spotifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded block mt-4"
                >
                    Open in Spotify
                </a>
            </div>
        </div>
    );
};

export default SongInfoBox;

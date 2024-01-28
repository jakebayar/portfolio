import React, { useState, useEffect } from 'react'
import SongInfoBox from "@/components/SongInfoBox.jsx"

export default function Currently() {
    const [song, setSong] = useState(null);
    const [showInfoBox, setShowInfoBox] = useState(false);

    useEffect(() => {
        const fetchCurrentlyPlaying = async () => {

            try {
                const response = await fetch('/api/getSpotifyCurrent');
                if (!response.ok) {
                    console.error("Failed to fetch currently playing song");
                    return;
                }
                const data = await response.json();
                setSong(data);

            } catch (error) {
                console.error('Error fetching song: ', error);
            }
        };

        fetchCurrentlyPlaying();
    }, []);

    if (!song) {
        return <div>Loading...</div>;
    }

    const { name, artists, external_urls, preview_url, album } = song;
    const imageUrl = album.images.find(image => image.height === 300)?.url || album.images[0].url;

    const handleMouseEnter = () => {
        setShowInfoBox(true);
    }

    const handleMouseLeave = () => {
        setTimeout(() => {
            setShowInfoBox(false);
        }, 400)
    }

    return (
        <section className='flex flex-col text-primary text-sm gap-2'>
            <p className='font-Inter text-xs font-medium tracking-normal text-slate-400 sm:text-md'>
                Currently
            </p>

            <div className="absolute z-10 backdrop-blur-sm shadow-xl p-1 bg-slate-600/30 rounded-sm w-max border border-green"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <SongInfoBox
                    song={name}
                    artist={artists.map(artist => artist.name).join(", ")}
                    imageUrl={imageUrl}
                    previewUrl={preview_url}
                    spotifyUrl={external_urls.spotify}
                />
            </div>

            <div className="relative inline-block" onMouseLeave={handleMouseLeave}>
                Listening to{' '}
                <span
                    className='underline decoration-accent-foreground bg-accent/25 decoration-1 px-1 underline-offset-2 cursor-pointer'
                    onMouseEnter={handleMouseEnter}
                >
                    {name}
                </span>{' '}
                by <span className='underline decoration-accent-foreground decoration-1 underline-offset-1'>
                    {artists.map(artist => artist.name).join(", ")}
                </span>
                {/* {showInfoBox && (
                    <div className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-1 bg-white shadow-lg p-4 rounded-lg w-max"
                        onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                    >
                        <SongInfoBox
                            song={name}
                            artist={artists.map(artist => artist.name).join(", ")}
                            imageUrl={imageUrl}
                            previewUrl={preview_url}
                            spotifyUrl={external_urls.spotify}
                        />
                    </div>
                )} */}
            </div>
        </section>
    );
}

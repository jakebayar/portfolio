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
            <p className='font-Inter text-xs font-medium tracking-normal text-slate-400 sm:text-md'>Currently</p>

            <div className="relative inline-block" onMouseLeave={handleMouseLeave}>
                <p>
                    Listening to{' '}
                    <span
                        className='underline decoration-accent-foreground bg-accent/25 decoration-1 px-1 underline-offset-2 cursor-pointer'
                        onMouseEnter={handleMouseEnter}
                    >
                        {song.name}
                    </span>{' '}
                    by <span className='underline decoration-accent-foreground decoration-1 underline-offset-1'>
                        {song.artists[0].name}
                    </span>
                    {showInfoBox && (
                        <div className="absolute z-10  mt-1 bg-white shadow-lg p-4 rounded-lg"
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
                    )}
                </p>
            </div>
        </section>
    );
}

// const trackInfo = song;

// const songName = trackInfo.name;
// const artistsName = trackInfo.artists[0].name
// const spotifyUrl = trackInfo.external_urls.spotify;
// const previewUrl = trackInfo.preview_url;
// const imageUrl = trackInfo.album.images.filter(item => item.height === 300)[0].url;

// const {
//     name: songName,
//     artists,
//     external_urls: { spotify: spotifyUrl },
//     preview_url: previewUrl,
//     album: { images }
// } = song;

// console.log("Song Name:", songName);
// console.log("Artists:", artistsName);
// console.log("Spotify URL:", spotifyUrl);
// console.log("Preview URL:", previewUrl);
// console.log("Image URL:", imageUrl);

// const songo = <span className='underline decoration-accent-foreground bg-accent/25 decoration-1 px-1 underline-offset-2'> {song.name}</span>
// const artist = <span className='underline decoration-accent-foreground decoration-1 underline-offset-1'>{song.artists[0].name}</span>
// const artistsName = artists.map(artist => artist.name).join(", ");
// const imageUrl = images.find(image => image.height === 300)?.url || images[0].url; // Fallback to the first image if 300px one is not found
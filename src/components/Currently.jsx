import React from 'react'

export default function Currently() {

    const song = <span className='underline decoration-accent-foreground bg-accent/25 decoration-1 px-1 underline-offset-1'> OK THEN</span>

    const artist = <span className='underline decoration-accent-foreground decoration-1 underline-offset-1'>Jordeaux</span>

    const book = <span className='underline decoration-accent-foreground bg-accent/25 decoration-1 px-1 underline-offset-1'> Operating Systems</span>

    const author = <span className='underline decoration-accent-foreground decoration-1 underline-offset-1'>Remzi H Arpaci-Dusseau</span>

    return (
        <section className='flex flex-col text-primary text-sm gap-2'>
            <p className='font-Inter text-xs font-medium tracking-normal text-slate-400 sm:text-md'>Currently</p>
            <p>Listening to {song} by {artist} and reading {book} by {author}</p>
        </section>

    )
}

import React from 'react'
import Image from 'next/image'

export default function arrowIcon() {
    return (
        <span><Image src={'/arrow-icon.svg'} width={'6'} height={'6'} className=' opacity-80' alt='arrow icon' /></span>
    )
}

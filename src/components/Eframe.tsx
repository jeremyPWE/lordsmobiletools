import React from 'react'
import Image from 'next/image';

interface EframeProps {
  children: React.ReactNode;
}

function Eframe({children}) {
  return (
    <div className='border-white border-2 w-24 h-24'><Image src={children} className='flex w-full h-full object-contain' alt={children} fill></Image></div>
  )
}

export default Eframe
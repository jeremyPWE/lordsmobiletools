import React from 'react'
import Image from 'next/image';

interface EframeProps {
  imageName: string;
}

const Eframe: React.FC<EframeProps> = ({ imageName }) => {
  return (
    <div className='w-28 h-28 relative m-4'>
      <Image src={`/images/placeholder/${imageName}`} className='object-contain' alt={imageName} fill></Image>
      
    </div>
  )
}

export default Eframe
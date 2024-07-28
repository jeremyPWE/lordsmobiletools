import React from 'react'
import Image from 'next/image';
import mockData from '@/mockData';

interface EframeProps {
  imageName: string;
  type: string;
  onClick: (type: string) =>  void;
}

const Eframe: React.FC<EframeProps> = ({ imageName, type, onClick }) => {
  const equipment = mockData.equipment.find(eq => eq.type === type);
  return (
    <div className='w-28 h-28 relative m-4' onClick={()=>onClick(type)}>
      <Image src={`/images/placeholder/${imageName}`} className='object-contain' alt={imageName} fill></Image>
      
    </div>
  )
}

export default Eframe
import React from 'react'
import Image from 'next/image';
import mockData from '@/mockData';

interface EquipmentPopupProps {
    type: string;
    onClose: () => void;
  }

const EquipmentPopup: React.FC<EquipmentPopupProps> = ({type, onClose}) =>{
  const filteredEquipment = mockData.equipment.filter(eq => eq.type === type);
  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center' onClick={onClose}>
    <div className='bg-white p-4 rounded w-[600px]'>
      <div className="flex justify-between">
        <h2 className='text-2xl text-red-500'> {type}</h2>
        <button onClick={onClose} className='p-2 bg-red-500 text-white rounded'>Close</button>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-4">
          {filteredEquipment.map((item) => (
            <div key={item.id} className="flex flex-col items-center">
              <Image
                src={`/images/${type}/193732_5122.png`} /* update this. will need to add more entry in the database for item.name */
                alt={item.name}
                width={150}
                height={150}
                className='object-contain'
              />
              <span>{item.name}</span>
            </div>
          ))}
        </div>
    </div>
  </div>
  )
}

export default EquipmentPopup
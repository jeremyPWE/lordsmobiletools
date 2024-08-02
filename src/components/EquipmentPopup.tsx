import React from 'react'

interface EquipmentPopupProps {
    type: string;
    onClose: () => void;
  }

const EquipmentPopup: React.FC<EquipmentPopupProps> = ({type, onClose}) =>{
  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center' onClick={onClose}>
    <div className='bg-white p-4 rounded w-[600px]'>
      <div className="flex justify-between">
        <h2 className='text-2xl text-red-500'> {type}</h2>
        <button onClick={onClose} className='p-2 bg-red-500 text-white rounded'>Close</button>
      </div>
      <div>
        {/* this is where i map the equipment to display it base on type selected*/}
        
      </div>
    </div>
  </div>
  )
}

export default EquipmentPopup
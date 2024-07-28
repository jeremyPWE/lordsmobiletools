import React from 'react'

interface EquipmentPopupProps {
    type: string;
    onClose: () => void;
  }

const EquipmentPopup: React.FC<EquipmentPopupProps> = ({type, onClose}) =>{
  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center' onClick={onClose}>
    <div className='bg-white p-4 rounded'>
      <h2 className='text-2xl text-red-500'> {type}</h2>
      {/* Add your equipment selection logic here */}
      <button onClick={onClose} className='mt-4 p-2 bg-red-500 text-white rounded'>Close</button>
    </div>
  </div>
  )
}

export default EquipmentPopup
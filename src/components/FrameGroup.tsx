'use client'
import React, { useState } from 'react'
import Eframe from './Eframe'
import mockData from '@/mockData'

function FrameGroup() { 
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedType, setSelectedType] = useState(null);

  const handleEframeClick = (type) => {
    setSelectedType(type);
    setIsPopupOpen(true);
  }

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setSelectedType(null);
  }

  return (
    <div className='flex'>
        <div className='flex-col'>
            <Eframe imageName='mh.png' type='mainhand'/>
            <Eframe imageName='helm.png' type='helm'/>
            <Eframe imageName='armor.png' type='armor'/>
            <Eframe imageName='legs.png' type='legs'/>
            
        </div>
        <div className='flex-col'>
            <Eframe imageName='oh.png' type='offhand'/>
            <Eframe imageName='acc.png' type='accessory'/>
            <Eframe imageName='acc.png' type='accessory'/>
            <Eframe imageName='acc.png' type='accessory'/>
        </div>
        
    </div>
  )
}

export default FrameGroup
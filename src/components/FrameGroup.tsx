import React from 'react'
import Eframe from './Eframe'

function FrameGroup() { 

  return (
    <div className='flex'>
        <div className='flex-col'>
            <Eframe imageName='mh.png' type='mainhand' />
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
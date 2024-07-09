import React from 'react'
import Eframe from './Eframe'

function FrameGroup() {
  return (
    <div className='flex'>
        <div className='flex-col'>
            <Eframe imageName='mh.png'/>
            <Eframe imageName='helm.png'/>
            <Eframe imageName='armor.png'/>
            <Eframe imageName='legs.png'/>
            
        </div>
        <div className='flex-col'>
            <Eframe imageName='oh.png'/>
            <Eframe imageName='acc.png'/>
            <Eframe imageName='acc.png'/>
            <Eframe imageName='acc.png'/>
        </div>
        
    </div>
  )
}

export default FrameGroup
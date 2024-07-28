import React from 'react'
import Eframe from './Eframe'

interface FrameGroupProps {
  onEframeClick: (type: string) => void;
}

const FrameGroup: React.FC<FrameGroupProps> = ({onEframeClick}) => { 

  return (
    <div className='flex'>
        <div className='flex-col'>
            <Eframe imageName='mh.png' type='mainhand' onClick={onEframeClick} />
            <Eframe imageName='helm.png' type='helm' onClick={onEframeClick}/>
            <Eframe imageName='armor.png' type='armor' onClick={onEframeClick}/>
            <Eframe imageName='legs.png' type='legs' onClick={onEframeClick}/>
            
        </div>
        <div className='flex-col'>
            <Eframe imageName='oh.png' type='offhand' onClick={onEframeClick}/>
            <Eframe imageName='acc.png' type='accessory' onClick={onEframeClick}/>
            <Eframe imageName='acc.png' type='accessory' onClick={onEframeClick}/>
            <Eframe imageName='acc.png' type='accessory' onClick={onEframeClick}/>
        </div>
        
    </div>
  )
}

export default FrameGroup
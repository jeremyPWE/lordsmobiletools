import React from 'react'
import Eframe from './Eframe'

function FrameGroup() {
  return (
    <div className='flex'>
        <div className='flex-col'>
            <Eframe>mh.png</Eframe>
            <Eframe>Helmet</Eframe>
            <Eframe>Armor</Eframe>
            <Eframe>Legs</Eframe>
        </div>
        <div className='flex-col'>
            <Eframe>Offhand</Eframe>
            <Eframe>Accessories 1</Eframe>
            <Eframe>Accessories 2</Eframe>
            <Eframe>Accessories 3</Eframe>
        </div>
        
    </div>
  )
}

export default FrameGroup
"use client"
import { useState } from "react";
import FrameGroup from "@/components/FrameGroup";
import mockData from "@/mockData";
import EquipmentPopup from "@/components/EquipmentPopup";

export default function Home() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedType, setSelectedType] = useState(null);
  const [selectEq, setSelectEq] = useState<Equipment[]>([])


  const handleEframeClick = (type) => {
    setSelectedType(type);
    setIsPopupOpen(true);
  }

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setSelectedType(null);
  }

  const handleSelectEq = (name) => {
    setSelectEq(name);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full max-w-5xl flex justify-around border-2 border-white">
        <FrameGroup onEframeClick={handleEframeClick}/>
        {isPopupOpen && (
          <EquipmentPopup type={selectedType} onClose={handleClosePopup} name={selectEq}/> /* update here for state to pass on */
        )}
        <div className="p-4">
          <h2 className="text-3xl">Total Boost</h2>
          <div className="border border-white p-4"></div>
        </div>
      </div>
    </main>
  );
}

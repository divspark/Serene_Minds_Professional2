import React from "react";
import { Slidercomp } from "./Slidercomp";

export const AppointmentCard = () => {
  return (
    <div className="w-[321px] h-[313px] border-2 rounded-3xl shadow-blue-400 shadow-md m-6">
      
      <div className="user-details flex py-2 px-3 w-full justify-between">
      <img src="user-logo.png" alt="user-logo" className="w-[73.88px] h-[73.88px]"/>
        <div className="p-2">
        <h3 className="font-bold"> J. Gustavson</h3>
        <p className="text-xs mt-2">23 / Male</p>
        </div>
        <div className="p-2"> 
        <img src="collapse.png" alt="collapse" className="w-[20.14px] h-[20.14px] flex ml-12 mb-4"/>
        <div className="msg flex ">
          <img src="msg-logo.png" alt="msg-logo" className="w-[31.68px] h-[31.68px] mr-2"/>
          <img src="videocall.png" alt="video-call" className="w-[31.68px] h-[31.68px]"/>
        </div>
        </div>
      </div>
      <div className="cont p-4">
        <div className="flex justify-between p-1">
          <p className="text-gray-700 font-bold">Date</p>
          <p>22 Sep 2024</p>
        </div>
        <div className="flex justify-between p-1">
          <p className="text-gray-700 font-bold">Time</p>
          <p>4:05 pm</p>
        </div>
        <div className="flex justify-between p-1">
          <p className="text-gray-700 font-bold">Duration</p>
          <p>45 min</p>
        </div>
        <div className="flex justify-between p-1">
          <p className="text-gray-700 font-bold">Contact</p>
          <p> +91 790772727</p>
        </div>
      </div>
      <div className="px-6">
      <Slidercomp />
      </div>
    </div>
  );
};

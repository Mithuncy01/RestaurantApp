import React from 'react'
import RedLogo from '../../Image/cylogo.png';
import {HiShoppingBag, HiUserCircle} from 'react-icons/hi'
export const Header = () => {
  return (
    <>
        <div className="flex w-full h-[90px]  bg-notblack items-center px-28 justify-center font-[poppins]">
          <div className="w-[110px] min-w-[70px]">
            <img src={RedLogo} alt="logo"></img>
          </div>
            <div className="mx-auto">
              <ul className="flex items-center justify-center gap-[60px]">
                <li className="text-green font-semibold cursor-pointer transition-all duration-75
                hover:text-green">Home</li>
                <li className="text-white font-semibold cursor-pointer transition-all duration-75
                hover:text-green">About Us</li>
                <li className="text-white font-semibold cursor-pointer transition-all duration-75
                hover:text-green">Orders</li>
                <li className="text-white font-semibold cursor-pointer transition-all duration-75
                hover:text-green">Contact</li>
              </ul>
            </div>
            {/* Icon and user section*/}
          <div className="relative">
            <HiShoppingBag className="text-[25px] text-white cursor-pointer transition-all
            duration-150 "></HiShoppingBag>
            <span className="absolute w-6 h-6 bg-green rounded-full text-white
            flex justify-center items-center -top-2 left-3">3</span>
          </div>
          <div>
          <HiUserCircle className="w-[35px] h-[35px] text-green ml-20 cursor-pointer
          hover:text-gray"></HiUserCircle>
          </div>
        </div>
        
    </>
  )
}

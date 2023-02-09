import React from 'react'
import cyLogo from '../../Image/cylogo.png'
import {HiShoppingBag, HiUserCircle} from 'react-icons/hi'
import { motion } from "framer-motion"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import {app} from '../../firebase.config';


export const Header = () => {
  // Google Auth
  const firebaseAuth = getAuth(app)
  const provider = new GoogleAuthProvider();
  const login = async ()=>{
    const response = await signInWithPopup(firebaseAuth, provider);
    console.log(response);
    }
   

  return (
    <div>
        <div className="flex w-full h-[90px] fixed top-0 left-0 z-[999] drop-shadow-sm 
        shadow-white bg-black opacity-90 items-center sm:px-[30px] lg:px-[70px] justify-center md:justify-between 
        sm:justify-between  font-[poppins]">

          <div className="">
            <img className="sm:w-16 lg:w-24" src={cyLogo} alt="logo"></img>
          </div>
            <div className="mx-auto lg:block md:hidden sm:hidden">
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
          <div className="relative sm:ml-12">
            <HiShoppingBag className="text-[25px] text-white cursor-pointer transition-all
            duration-150"/>
            <span className="absolute w-6 h-6 bg-green rounded-full text-white
            flex justify-center items-center -top-2.5 left-3.5">3</span>
          </div>
          <div>
          <HiUserCircle
          onClick={login}
          className="w-[35px] h-[35px] text-green ml-20 cursor-pointer
          hover:text-notblack"/>
         
          </div>
        </div>
        
    </div>
  )
}

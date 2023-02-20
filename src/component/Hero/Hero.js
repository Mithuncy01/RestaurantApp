import React from 'react'
import foodImage1 from '../../Image/food1.png'
import foodImage2 from '../../Image/food2.png'
import foodImage3 from '../../Image/food4.png'
import foodImage4 from '../../Image/food6.png'
import foodbg from '../../Image/v.png'
import deliver from '../../Image/deliver.png'
import {TbTruckDelivery} from 'react-icons/tb'
import { motion, useTime, useTransform} from "framer-motion"
import { ItemsSection } from './ItemsSection'


export const Hero = () => {
  const time = useTime();
  const rotate = useTransform(time, [0, 40000], [0, 360], { clamp: false });
  return (
    <div className=" w-full h-full bg-black font-[poppins] sm:px-[30px] lg:px-[70px] ">
      
    {/* Hero section text */}
      <div className=" lg:flex-row md:flex-col sm:flex-col flex lg:justify-between relative  ">
          <div className="flex flex-col justify-center flex-warp z-20 sm:mt-[120px] lg:my-[120px]">
              {/* <div className="bg-notblack w-32 h-10 py-2 rounded-full relative flex">
                <p>fast delivery</p>
              <img src={deliver} alt='deliver' className="w-16 h-auto absolute ml-4"/>
              </div> */}
              <h2 className="lg:text-[80px] md:text-[40px] sm:text-[30px] lg:-mb-4 sm:-mt-2 font-bold text-green">Order Tasty &</h2>
              <motion.h1  
               className="text-white lg:text-[110px] md:text-[90px] sm:text-[55px] font-extrabold">Fresh Food</motion.h1>
              <h2 className="text-white lg:text-[60px] md:text-[60px] sm:text-[40px] lg:-mt-4 sm:-mt-2 mb-4 font-bold ">Anytime</h2>
              <p className="text-white">Lorem ipsum dolor consectetur adipisicing elit. Accusamus voluptate<br></br> labore suscipit facilis sunt voluptatum dolores, doloremque placeat repudiandae?</p>
              <div className='flex items-center gap-6'>
                <motion.button whileTap={{ scale: 0.9 }} className="flex relative font-[poppins] sm:mt-8 mt-12 lg:py-4 lg:px-12 sm:py-3 sm:px-8
                 text-white font-semibold rounded-full bg-green drop-shadow-lg shadow-notblack
                 ">Order Now
                </motion.button>
              </div>
          </div>
          
          {/* Image Section  */}
         <div className="flex flex-col lg:gap-10 md:gap-10 sm:gap-4 sm:px-[5px] sm:py-[50px] lg:my-[98px] z-10">
            <div className="flex lg:gap-10 sm:gap-4 md:gap-10">
              <motion.img style={{ rotate }} className="lg:w-[300px] md:w-[220px] sm:w-[140px] h-auto object-contain " src={foodImage1} alt="this is img"></motion.img>
              <motion.img style={{ rotate }} className="lg:w-[300px] md:w-[220px] sm:w-[140px] h-auto object-contain " src={foodImage2} alt="this is img"></motion.img>
            </div>
            <div className="flex lg:gap-10 sm:gap-4 md:gap-10">
              <motion.img style={{ rotate }} className="lg:w-[300px] md:w-[220px] sm:w-[140px] h-auto object-contain " src={foodImage3} alt="this is img"></motion.img>
              <motion.img style={{ rotate }} className="lg:w-[300px] md:w-[220px] sm:w-[140px] h-auto object-contain " src={foodImage4} alt="this is img"></motion.img>
            </div>
         </div>
         <img className="fixed w-[1000px] h-auto mx-auto opacity-20 object-scale-down " src={foodbg} alt="background"></img>
      </div>
      <ItemsSection></ItemsSection>
    </div>
  )
}

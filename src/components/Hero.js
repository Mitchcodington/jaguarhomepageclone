import { useState } from "react";
import {carplusb, carsb, controlb, findb, hero, blackclose, blackmenu } from "../assets";


const Hero = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <section id="home" className="md:px-16 px-0 mt-[72px]">
      <img
          src={toggle ? blackclose : blackmenu}
          alt="menu"
          className="w-[50px] h-[150px]  cursor-pointer object-contain fixed top-0 right-0 z-[20] mt-[40px] mr-[30px]"
          onClick={() => setToggle(!toggle)}/>
     
      <div  className={`${
            !toggle ? "hidden" : "flex flex-col"
          } fixed top-0 right-0 z-[10] justify-end mt-[70px] bg-white flex flex-col  sm:w-[23%] w-[60%] `}>
     <div className="py-9">
     
     </div>

     <div id="border-bottom" className='flex  justify-start items-center  flex-row   py-3 px-8 '>
     <p><img src={carsb} alt='' className=" w-[70%]"/></p>
      <p 
      className='text-black font-poppins  hover:underline cursor-pointer font-bold text-[10px] '>
        COMPARE OUR VEHICLES
        </p>
      </div>

      <div id="border-bottom" className='flex justify-start items-center flex-row mt-[15px] py-3  px-8 '>
     <p><img src={carplusb} alt='' className=" w-[70%]"/></p>
      <p 
      className='text-black font-poppins  hover:underline cursor-pointer font-bold text-[10px] '>
        DESIGN YOURS
        </p>
      </div>

      <div id="border-bottom" className='flex justify-start items-center flex-row mt-[15px] py-3  px-8 '>
     <p><img src={findb} alt='' className=" w-[70%]"/></p>
      <p 
      className='text-black font-poppins  hover:underline cursor-pointer font-bold text-[10px] '>
        FIND A RETAILER
        </p>
      </div>

      <div id="border-bottom" className='flex justify-start items-center flex-row mt-[15px] py-3  px-8 mb-[29px]'>
     <p><img src={controlb} alt='' className=" w-[70%]"/></p>
      <p 
      className='text-black font-poppins  hover:underline cursor-pointer font-bold text-[10px] '>
        INCONTROL
        </p>
      </div>

     </div>
     
      <img src={hero} alt="billing" className="w-[100%] h-[100%]  relative z-[5]" />
      <h1 className="font-bold font-poppins tracking-widest text-white  mt-9 md:text-[34px] text-[20px] ml-1">THE 2023 COLLECTION</h1>
    </section>
  );
};

export default Hero;
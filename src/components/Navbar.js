import { useState } from "react";

import { close, logo, menu,location,search} from "../assets";


const Navbar = () => {
  
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="bg-dimGray w-[100%] font-poppins flex  justify-start top-0 z-50  items-center navbar shadow-lg  md:flex  justify-start  items-center fixed  ">
         <div className=" md:hidden flex  justify-end items-center ml-2">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[20px] h-[20px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div 
          className={`${
            !toggle ? "hidden" : "flex flex-col"
          } w-full h-screen bg-dimGray z-[50] absolute top-10 right-0 px-3 my-3 min-w-[140px] rounded-xl sidebar`}
        >
         <ul className="list-none flex flex-col w-full   ">
        
          <li className="font-poppins tracking-wide shadow-2xl py-3  font-bold text-white hover:text-darkLime cursor-pointer text-[14px]  mt-4">
          VEHICLES
          </li>
          <li className="font-poppins tracking-wide shadow-2xl py-3 font-bold text-white hover:text-darkLime cursor-pointer text-[14px] mt-4">
          PURCHASE
          </li>
          <li className="font-poppins tracking-wide shadow-2xl py-3 font-bold text-white hover:text-darkLime cursor-pointer text-[14px] mt-4 ">
          OWNERS
          </li>
          <li className="font-poppins tracking-wide shadow-2xl py-3 font-bold text-white hover:text-darkLime cursor-pointer text-[14px]  mt-4">
          EXPLORE

          </li>
      </ul>
      <div className="list-none max-w-[330px] w-full md:flex  justify-end items-center flex-1">
       
      <p className="flex flex-row shadow-2xl py-3 font-poppins"><img src={search} alt="starbucks logo" className="w-[7%] h-[100%]  cursor-pointer mt-9" /> 
      <span className="text-[13px] font-bold text-white ml-4 mt-9 w-full">SEARCH</span></p>
      <p className="flex flex-row font-poppins"><img src={location} alt="starbucks logo" className="w-[7%] h-[100%]  cursor-pointer mt-9 " />
      <span className="text-[13px]  font-bold text-white ml-4 mt-9">RETAILERS</span></p>
            
      </div>
          
        </div>
      </div>
      <p><img src={logo} alt="starbucks logo" className="w-[100%] h-[100%] max-w-[180px] cursor-pointer" /></p>

      <ul className="list-none max-w-[470px] mt-0.5 md:flex hidden justify-end items-center flex-1">
        
          <li className=" text-white  tracking-widest    cursor-pointer font-semibold text-[12px]  mr-7 hover:bg-lightgray py-6 text-center w-[28%]">
          VEHICLES

          </li>
          <li className="text-white  tracking-widest  cursor-pointer font-semibold text-[12px]  mr-7 hover:bg-lightgray py-6 text-center w-[31%]">
          PURCHASE

          </li>
          <li className="text-white tracking-widest  cursor-pointer font-semibold text-[12px]  mr-7 hover:bg-lightgray py-6 text-center w-[27%]">
          OWNERS

          </li>
          <li className="text-white tracking-widest   cursor-pointer font-semibold text-[12px] hover:bg-lightgray py-6 text-center w-[28%]">
          EXPLORE

          </li>
      </ul>
      
      <div className="list-none   md:flex hidden justify-end items-center flex-1">
       
      <p><img src={search} alt="search icon" className="w-[20%] h-[100%]  cursor-pointer ml-8" /></p>
      <p><img src={location} alt="location icon" className="w-[20%] h-[100%]  cursor-pointer " /></p>
            
      </div>

      
    </nav>
  );
};

export default Navbar;
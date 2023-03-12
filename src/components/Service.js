import { arrow, carplus, cars, control, find } from "../assets";
import styles from "../style";

const Service = () => (
  <section id="service" className={`${styles.flexStart} md:mt-[300px] mt-[190px] `}>
    <div id="border-top" className='flex  items-start flex-wrap w-full  md:flex-row flex-col   py-0 py-9 '>
      <div id="border-right" className="flex md:flex-col flex-row">
     <p><img src={cars} alt='' className="md:w-[15%] w-[80%] mt-0 mt-4"/></p>
     <div className='flex flex-row  mt-[15px] '>
      <p><img src={arrow} alt=''className='w-[30%] mt-[5px]'/></p>
      <p className='text-white font-poppins mt-[2px] hover:underline cursor-pointer font-medium text-[17px] ml-[-25px]'>COMPARE OUR VEHICLES</p>
      </div>
      <p id="tiny" className="text-white text-[13px] mt-[15px] w-[70%] md:visable invisable">Experience Jaguar luxury and performance</p>
     </div>
     <div id="border-right" className="flex md:ml-8 ml-0 md:flex-col flex-row md:mt-[0px] mt-[30px]">
     <p><img src={carplus} alt='' className="md:w-[20%] w-[70%] mt-0 mt-4"/></p>
     <div className='flex flex-row  mt-[15px] '>
      <p><img src={arrow} alt=''className='w-[30%] mt-[5px]'/></p>
      <p className='text-white font-poppins mt-[2px] hover:underline cursor-pointer font-medium text-[17px] ml-[-25px]'>DESIGN YOURS</p>
      </div>
      <p id="tiny" className="text-white text-[13px] mt-[15px] ">Bring your jaguar to life</p>
     </div>
     <div id="border-right" className="flex md:ml-8 ml-0 md:flex-col flex-row md:mt-[0px] mt-[30px]">
     <p><img src={find} alt='' className="md:w-[15%] w-[70%] mt-0 mt-4"/></p>
     <div className='flex flex-row  mt-[15px] '>
      <p><img src={arrow} alt=''className='w-[30%] mt-[5px]'/></p>
      <p className='text-white font-poppins mt-[2px] hover:underline cursor-pointer font-medium text-[17px] ml-[-25px]'>FIND A RETAILER</p>
      </div>
      <p id="tiny" className="text-white text-[13px] mt-[15px] ">Locate authorised Jaguar experts</p>
     </div>
     <div  className="flex md:flex-col flex-row md:mt-[0px] mt-[30px] md:ml-8 ml-0">
     <p><img src={control} alt='' className="md:w-[15%] w-[70%] mt-0 mt-4"/></p>
     <div className='flex flex-row  mt-[15px] '>
      <p><img src={arrow} alt=''className='w-[30%] mt-[5px]'/></p>
      <p className='text-white font-poppins mt-[2px] hover:underline cursor-pointer font-medium text-[17px] ml-[-25px]'>INCONTROL</p>
      </div>
      <p id="tiny" className="text-white text-[13px] mt-[15px] ">Sign into your Jaguar’s connected world</p>
     </div>
    </div>
  </section>
);

export default Service;
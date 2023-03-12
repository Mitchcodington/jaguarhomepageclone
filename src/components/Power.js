import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { slide13, slide14,arrow } from "../assets";

function Power() {
  const slides = [
    {
      url: slide13
    },
    {
      url: slide14
    },

  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='max-w-[1400px] h-[780px] w-full m-auto py-16  relative group sm:px-0 px-0 sm:mt-[250px] mt-[-200px]'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }} 
        className='w-full  bg-center bg-cover duration-500 relative sm:h-full h-[245px]'
      ></div>
      {/* Left Arrow */}
      <div className='arrow'>
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      </div>
      <div className='flex top-4 justify-start ml-3 py-2 '>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-[35px] text-white cursor-pointer '
          >
         
            <RxDotFilled />
            </div>
       
        ))}
      </div>
      <div className='flex flex-row justify-between mt-[30px]  w-[64%] sm:flex-row flex-col ml-[120px] ml-[13px]'>
      <p className='text-white font-poppins mt-[1px] tracking-widest font-medium text-[22px]'>ELECTRIFYING POWER</p>
        <p className='text-white font-poppins mt-[9px] tracking-widest font-normal text-[12px] '>Thrilling to drive. Easy to live with.</p>
      </div>
      <div className='flex items-center mt-[40px] sm:justify-center justify-start'>
      <div className='flex flex-row justify-center items-center py-3 px-9 ml-3 bg-dimGray mt-[60px] absolute cursor-pointer hover:bg-transparent hover:border '>
        <p><img src={arrow} alt=''className='w-[30%] mt-[3px]'/></p>
      <p className='text-white font-poppins mt-[2px] font-semibold text-[12px] ml-[-25px]'>EXPLORE</p>
      </div>
      </div>
    </div>
  );
}

export default Power;
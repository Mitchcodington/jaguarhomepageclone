import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { slide1, slide2, slide3, slide4,forward,arrow } from "../assets";

function Pace() {
  const slides = [
    {
      url: slide1
    },
    {
      url: slide2
    },
    {
      url: slide3
    },
    {
      url: slide4
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
    <div className='max-w-[1400px] h-[780px] w-full m-auto py-16  relative group sm:px-0 px-0'>
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
      <h1 className='text-white font-medium tracking-widest font-poppins ml-4 mt-[60px] text-[25px]'>JAGUAR I-PACE</h1>
      <div className='flex flex-row justify-center items-center py-3 px-9 ml-3 bg-dimGray mt-[60px] absolute cursor-pointer hover:bg-transparent hover:border '>
        <p className='mr-3 mt-[4px] '><img src={forward} alt='' className='w-[50%]'/></p>
        <p className='text-white font-poppins mt-[2px] font-semibold text-[12px] ml-[-25px]'>DESIGN YOURS</p>
      </div>
      <div className='flex flex-row mt-[150px] ml-3 absolute '>
      <p><img src={arrow} alt=''className='w-[30%] mt-[3px]'/></p>
      <p className='text-white font-poppins mt-[2px] hover:underline cursor-pointer font-semibold text-[12px] ml-[-25px] '>EXPLORE</p>
      </div>
    </div>
  );
}

export default Pace;
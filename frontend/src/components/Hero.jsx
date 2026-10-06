import React from 'react';
import img2 from '/assests/heroimg1.jpg';

function Hero() {
  return (
    // hero-container: flex, center align, full height (h-screen), and relative for background image
    <div className="relative flex flex-col items-center justify-center h-screen overflow-hidden text-center px-4">
      
      {/* Background Image */}
      <img 
        src={img2} 
        alt="Hero Background" 
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />
      
      {/* hero-heading: text color, bold, responsive font sizes */}
      <h1 className="m-0 pb-8 font-bold text-white text-[1.8rem] md:text-[2.6rem] lg:text-[3.8rem] xl:text-[4.5rem] 2xl:text-[5rem]">
        Welcome to Financial Tracker Site
      </h1>
      
      {/* hero-subheading: text color, responsive font sizes */}
      <p className="m-0 pb-12 text-slate-50 text-[1rem] md:text-[1.5rem] lg:text-[2rem] xl:text-[3rem] 2xl:text-[3rem]">
        Discover our amazing services and features
      </p>
      
      {/* hero-btn: colors, border, hover effects, and responsive padding/font sizes */}
      <button className="text-gray-950 bg-white border-[3px] border-black rounded-[40px] cursor-pointer transition-colors duration-300 
                         hover:bg-black hover:border-[#000000] hover:text-white
                         text-[1rem] py-2 px-4
                         md:text-[1.25rem] 
                         lg:text-[1.3rem] lg:py-3 lg:px-6 
                         xl:text-[1.5rem] 
                         2xl:text-[2rem] 2xl:py-3 2xl:px-7">
        Get Started
      </button>

    </div>
  );
}

export default Hero;
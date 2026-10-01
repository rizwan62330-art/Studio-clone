import React from 'react';

export default function Hero() {
  return (
    <div id="home" className="relative">
      <img
        src="/images/header-bg.jpg"
        alt=""
        className="block h-[600px] w-full object-cover object-center md:h-[700px] lg:h-[800px]"
      />

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 pt-20 text-center text-white">
        <h2 className="font-['Roboto_Slab'] text-2xl italic sm:text-3xl md:text-4xl">
          Welcome To Our Studio!
        </h2>

        <h1 className="mt-5 max-w-6xl font-['Montserrat'] text-4xl font-bold leading-tight sm:text-5xl md:mt-7 md:text-6xl lg:text-7xl">
          IT'S NICE TO MEET YOU
        </h1>

        <a
          href="#services"
          className="mt-8 inline-block rounded-md bg-[#fed136] px-6 py-4 font-['Montserrat'] text-base font-bold text-[#212529] transition-colors hover:bg-[#ffc800] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:mt-14 md:px-8 md:py-5 md:text-lg"
        >
          TELL ME MORE
        </a>
      </div>
    </div>
  );
};
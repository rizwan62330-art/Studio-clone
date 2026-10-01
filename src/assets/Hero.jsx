import React from 'react'

export default function Hero() {
  return (
    <>
    <div className='relative top-[-44px] left-0'>
        <img src="/images/header-bg.jpg" alt="" />
        <div className='absolute top-2/5  z-10 text-white w-full flex justify-center items-center flex-col'>
          <h2 className="text-4xl font-['Roboto_Slab'] italic">Welcome To our Studio!</h2>
          <h1 className="text-7xl font-bold font-['Montserrat'] mt-7">IT'S NICE TO MEET YOU</h1>
          <button className="font-['Montserrat'] font-bold text-lg bg-[#fed136] px-8 py-5 rounded-md mt-14">TELL ME MORE</button>
        </div>
    </div>
    </>
  )
}

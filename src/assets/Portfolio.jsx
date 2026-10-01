import React from 'react';

export default function Portfolio() {
  return (
    <main
      id="portfolio"
      className="flex w-full flex-col items-center justify-center"
    >
      <div className="my-20 flex flex-col items-center justify-center px-4 text-center">
        <h2 className="font-['Montserrat'] text-[40px] font-bold text-[#212529]">
          PORTFOLIO
        </h2>
        <p className="font-['Roboto_Slab'] text-base font-normal italic text-[#6c757d]">
          Lorem ipsum dolor sit amet consectetur.
        </p>
      </div>

      <div className="grid w-full grid-cols-1 gap-7 px-4 md:grid-cols-2 md:px-8 lg:grid-cols-3 lg:px-14">
        {/* Card 1 */}
        <div className="flex min-w-0 flex-col items-center text-center">
          <img
            src="/Protfolio-images/1.jpg"
            alt="Threads"
            className="block h-auto w-full"
          />
          <h2 className="mt-4 font-['Montserrat'] text-[25px] font-bold text-[#212529]">
            Threads
          </h2>
          <p className="font-['Roboto_Slab'] text-base font-normal italic text-[#6c757d]">
            Illustration
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex min-w-0 flex-col items-center text-center">
          <img
            src="/Protfolio-images/2.jpg"
            alt="Explore"
            className="block h-auto w-full"
          />
          <h2 className="mt-4 font-['Montserrat'] text-[25px] font-bold text-[#212529]">
            Explore
          </h2>
          <p className="font-['Roboto_Slab'] text-base font-normal italic text-[#6c757d]">
            Graphic Design
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex min-w-0 flex-col items-center text-center">
          <img
            src="/Protfolio-images/3.jpg"
            alt="Finish"
            className="block h-auto w-full"
          />
          <h2 className="mt-4 font-['Montserrat'] text-[25px] font-bold text-[#212529]">
            Finish
          </h2>
          <p className="font-['Roboto_Slab'] text-base font-normal italic text-[#6c757d]">
            Identity
          </p>
        </div>

        {/* Card 4 */}
        <div className="flex min-w-0 flex-col items-center text-center">
          <img
            src="/Protfolio-images/4.jpg"
            alt="Lines"
            className="block h-auto w-full"
          />
          <h2 className="mt-4 font-['Montserrat'] text-[25px] font-bold text-[#212529]">
            Lines
          </h2>
          <p className="font-['Roboto_Slab'] text-base font-normal italic text-[#6c757d]">
            Branding
          </p>
        </div>

        {/* Card 5 */}
        <div className="flex min-w-0 flex-col items-center text-center">
          <img
            src="/Protfolio-images/5.jpg"
            alt="Southwest"
            className="block h-auto w-full"
          />
          <h2 className="mt-4 font-['Montserrat'] text-[25px] font-bold text-[#212529]">
            Southwest
          </h2>
          <p className="font-['Roboto_Slab'] text-base font-normal italic text-[#6c757d]">
            Website Design
          </p>
        </div>

        {/* Card 6 */}
        <div className="flex min-w-0 flex-col items-center text-center">
          <img
            src="/Protfolio-images/6.jpg"
            alt="Window"
            className="block h-auto w-full"
          />
          <h2 className="mt-4 font-['Montserrat'] text-[25px] font-bold text-[#212529]">
            Window
          </h2>
          <p className="font-['Roboto_Slab'] text-base font-normal italic text-[#6c757d]">
            Photography
          </p>
        </div>
      </div>
    </main>
  );
}
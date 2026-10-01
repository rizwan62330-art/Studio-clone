import React from 'react'
import { FaShoppingCart, FaLaptop, FaLock } from 'react-icons/fa';

export default function Services() {
    return (
        <>
            <main className="relative flex flex-1 flex-col mb-20">
                <div className="flex justify-center items-center flex-col">
                    <h1 className="font-['Montserrat'] text-[40px] font-bold text-[#212529]">SERVICES</h1>
                    <p className="mt-4 font-['Roboto_Slab'] text-base font-normal italic text-[#6c757d]">Lorem ipsum dolor sit amet consectetur.</p>
                </div>
                <div className="flex mt-10 mx-13">
                    {/* card 1 */}
                    <div className="flex flex-col justify-center items-center gap-y-2.5">
                        <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-[#ffc800]">
                            <FaShoppingCart className="text-[64px] text-white" aria-hidden="true" />
                        </div>
                        <h2 className="font-['Montserrat'] text-[25px] font-bold text-[#212529]">E-Commerce</h2>
                        <p className="mt-4 font-['Roboto_Slab'] text-base font-normal  text-[#6c757d] text-center px-3.5">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                    </div>
                    {/* card 2 */}
                    <div className="flex flex-col justify-center items-center gap-y-2.5 px-3">
                          <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-[#ffc800]">
                            <FaLaptop className="text-[64px] text-white" aria-hidden="true" />
                        </div>
                        <h2 className="font-['Montserrat'] text-[25px] font-bold text-[#212529]">Responsive Design</h2>
                        <p className="mt-4 font-['Roboto_Slab'] text-base font-normal  text-[#6c757d] text-center px-3.5">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                    </div>
                    {/* card 3 */}
                    <div className="flex flex-col justify-center items-center gap-y-2.5">
                           <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-[#ffc800]">
                            <FaLock className="text-[64px] text-white" aria-hidden="true" />
                        </div>
                        <h2 className="font-['Montserrat'] text-[25px] font-bold text-[#212529]">Web Security</h2>
                        <p className="mt-4 font-['Roboto_Slab'] text-base font-normal  text-[#6c757d] text-center px-3.5">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                    </div>
                </div>
            </main>
        </>
    )
}

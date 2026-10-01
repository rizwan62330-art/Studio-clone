import React from 'react';
import { FaShoppingCart, FaLaptop, FaLock } from 'react-icons/fa';

export default function Services() {
    return (
        <section
            id="services"
            className="w-full bg-white px-4 py-16 md:px-8 md:py-20 lg:px-14"
        >
            {/* Heading */}
            <div className="flex flex-col items-center text-center">
                <h2 className="font-['Montserrat'] text-[32px] font-bold text-[#212529] md:text-[40px]">
                    SERVICES
                </h2>

                <p className="mt-4 font-['Roboto_Slab'] text-base font-normal italic text-[#6c757d]">
                    Lorem ipsum dolor sit amet consectetur.
                </p>
            </div>

            {/* Cards */}
            <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-3 md:gap-6">
                {/* Card 1 */}
                <div className="flex min-w-0 flex-col items-center text-center">
                    <div className="flex h-32 w-32 shrink-0 items-center justify-center rounded-full bg-[#ffc800]">
                        <FaShoppingCart
                            className="text-[64px] text-white"
                            aria-hidden="true"
                        />
                    </div>

                    <h3 className="mt-4 font-['Montserrat'] text-2xl font-bold text-[#212529]">
                        E-Commerce
                    </h3>

                    <p className="mt-4 max-w-sm font-['Roboto_Slab'] text-base font-normal leading-7 text-[#6c757d]">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Minima maxime quam architecto quo inventore harum ex magni,
                        dicta impedit.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="flex min-w-0 flex-col items-center text-center">
                    <div className="flex h-32 w-32 shrink-0 items-center justify-center rounded-full bg-[#ffc800]">
                        <FaLaptop
                            className="text-[64px] text-white"
                            aria-hidden="true"
                        />
                    </div>

                    <h3 className="mt-4 font-['Montserrat'] text-2xl font-bold text-[#212529]">
                        Responsive Design
                    </h3>

                    <p className="mt-4 max-w-sm font-['Roboto_Slab'] text-base font-normal leading-7 text-[#6c757d]">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Minima maxime quam architecto quo inventore harum ex magni,
                        dicta impedit.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="flex min-w-0 flex-col items-center text-center">
                    <div className="flex h-32 w-32 shrink-0 items-center justify-center rounded-full bg-[#ffc800]">
                        <FaLock
                            className="text-[64px] text-white"
                            aria-hidden="true"
                        />
                    </div>

                    <h3 className="mt-4 font-['Montserrat'] text-2xl font-bold text-[#212529]">
                        Web Security
                    </h3>

                    <p className="mt-4 max-w-sm font-['Roboto_Slab'] text-base font-normal leading-7 text-[#6c757d]">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Minima maxime quam architecto quo inventore harum ex magni,
                        dicta impedit.
                    </p>
                </div>
            </div>
        </section>
    );
};
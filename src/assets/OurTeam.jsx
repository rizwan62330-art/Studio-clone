import React from 'react';
import { FaTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

export default function OurTeam() {
    return (
        <section id="team" className="bg-[#f8f9fa] px-4 py-20 md:px-8">
            {/* Heading */}
            <div className="mb-16 text-center">
                <h2 className="font-['Montserrat'] text-[32px] font-bold text-[#212529] md:text-[40px]">
                    OUR AMAZING TEAM
                </h2>

                <p className="mt-4 font-['Roboto_Slab'] text-base italic text-[#6c757d]">
                    Lorem ipsum dolor sit amet consectetur.
                </p>
            </div>

            {/* All three cards belong inside this grid */}
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
                {/* Card 1 */}
                <div className="flex min-w-0 flex-col items-center text-center">
                    <img
                        src="/Team-images/1.jpg"
                        alt="Parveen Anand"
                        className="h-56 w-56 rounded-full border-[10px] border-[#e9ecef] object-cover"
                    />

                    <h3 className="mt-6 font-['Montserrat'] text-[25px] font-bold text-[#212529]">
                        Parveen Anand
                    </h3>

                    <p className="font-['Roboto_Slab'] text-base text-[#6c757d]">
                        Lead Designer
                    </p>

                    <div className="mt-7 flex items-center justify-center gap-5">
                        <a
                            href="https://twitter.com/"
                            aria-label="Parveen Anand on Twitter"
                            className="flex h-11 w-11 items-center justify-center rounded-full bg-[#212529] text-white hover:bg-[#424649]"
                        >
                            <FaTwitter className="text-lg" />
                        </a>

                        <a
                            href="https://facebook.com/"
                            aria-label="Parveen Anand on Facebook"
                            className="flex h-11 w-11 items-center justify-center rounded-full bg-[#212529] text-white hover:bg-[#424649]"
                        >
                            <FaFacebookF className="text-lg" />
                        </a>

                        <a
                            href="https://linkedin.com/"
                            aria-label="Parveen Anand on LinkedIn"
                            className="flex h-11 w-11 items-center justify-center rounded-full bg-[#212529] text-white hover:bg-[#424649]"
                        >
                            <FaLinkedinIn className="text-lg" />
                        </a>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="flex min-w-0 flex-col items-center text-center">
                    <img
                        src="/Team-images/2.jpg"
                        alt="Diana Petersen"
                        className="h-56 w-56 rounded-full border-[10px] border-[#e9ecef] object-cover"
                    />

                    <h3 className="mt-6 font-['Montserrat'] text-[25px] font-bold text-[#212529]">
                        Diana Petersen
                    </h3>

                    <p className="font-['Roboto_Slab'] text-base text-[#6c757d]">
                        Lead Marketer
                    </p>

                    <div className="mt-7 flex items-center justify-center gap-5">
                        <a
                            href="https://twitter.com/"
                            aria-label="Diana Petersen on Twitter"
                            className="flex h-11 w-11 items-center justify-center rounded-full bg-[#212529] text-white hover:bg-[#424649]"
                        >
                            <FaTwitter className="text-lg" />
                        </a>

                        <a
                            href="https://facebook.com/"
                            aria-label="Diana Petersen on Facebook"
                            className="flex h-11 w-11 items-center justify-center rounded-full bg-[#212529] text-white hover:bg-[#424649]"
                        >
                            <FaFacebookF className="text-lg" />
                        </a>

                        <a
                            href="https://linkedin.com/"
                            aria-label="Diana Petersen on LinkedIn"
                            className="flex h-11 w-11 items-center justify-center rounded-full bg-[#212529] text-white hover:bg-[#424649]"
                        >
                            <FaLinkedinIn className="text-lg" />
                        </a>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="flex min-w-0 flex-col items-center text-center">
                    <img
                        src="/Team-images/3.jpg"
                        alt="Larry Parker"
                        className="h-56 w-56 rounded-full border-[10px] border-[#e9ecef] object-cover"
                    />

                    <h3 className="mt-6 font-['Montserrat'] text-[25px] font-bold text-[#212529]">
                        Larry Parker
                    </h3>

                    <p className="font-['Roboto_Slab'] text-base text-[#6c757d]">
                        Lead Developer
                    </p>

                    <div className="mt-7 flex items-center justify-center gap-5">
                        <a
                            href="https://twitter.com/"
                            aria-label="Larry Parker on Twitter"
                            className="flex h-11 w-11 items-center justify-center rounded-full bg-[#212529] text-white hover:bg-[#424649]"
                        >
                            <FaTwitter className="text-lg" />
                        </a>

                        <a
                            href="https://facebook.com/"
                            aria-label="Larry Parker on Facebook"
                            className="flex h-11 w-11 items-center justify-center rounded-full bg-[#212529] text-white hover:bg-[#424649]"
                        >
                            <FaFacebookF className="text-lg" />
                        </a>

                        <a
                            href="https://linkedin.com/"
                            aria-label="Larry Parker on LinkedIn"
                            className="flex h-11 w-11 items-center justify-center rounded-full bg-[#212529] text-white hover:bg-[#424649]"
                        >
                            <FaLinkedinIn className="text-lg" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Paragraph below all cards */}
            <p className="mx-auto mt-12 max-w-3xl text-center font-['Roboto_Slab'] text-base leading-7 text-[#6c757d]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque,
                laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea,
                alias ut unde.
            </p>
        </section>
    );
}
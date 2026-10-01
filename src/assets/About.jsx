import React from 'react';

export default function About() {
    const description =
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!';

    return (
        <main id="about" className="bg-white px-4 py-20">

            {/* Heading */}
            <div className="mb-16 text-center">
                <h2 className="font-['Montserrat'] text-[40px] font-bold text-[#212529]">
                    ABOUT
                </h2>

                <p className="mt-4 font-['Roboto_Slab'] text-base italic text-[#6c757d]">
                    Lorem ipsum dolor sit amet consectetur.
                </p>
            </div>

            {/* Timeline */}
            <div className="relative mx-auto max-w-6xl">
                {/* Vertical line */}
                <div
                    aria-hidden="true"
                    className="absolute bottom-10 left-10 top-0 w-[2px] -translate-x-1/2 bg-[#e9ecef] md:bottom-20 md:left-1/2"
                />

                <ol className="relative m-0 list-none p-0">
                    {/* Entry 1: text on the left on desktop */}
                    <li className="grid grid-cols-[80px_minmax(0,1fr)] items-start gap-5 pb-20 md:grid-cols-[minmax(0,1fr)_160px_minmax(0,1fr)] md:gap-8 md:pb-28">
                        <img
                            src="/About-images/1.jpg"
                            alt="1st"
                            className="col-start-1 row-start-1 h-20 w-20 rounded-full border-[6px] border-[#e9ecef] object-cover md:col-start-2 md:h-40 md:w-40"
                        />

                        <div className="col-start-2 row-start-1 min-w-0 md:col-start-1 md:text-right">
                            <h3 className="font-['Montserrat'] text-xl font-bold text-[#212529] md:text-2xl">
                                <span className="block">2009–2011</span>
                                <span className="mt-1 block">
                                    Our Humble Beginnings
                                </span>
                            </h3>

                            <p className="mt-3 font-['Roboto_Slab'] text-base leading-7 text-[#6c757d]">
                                {description}
                            </p>
                        </div>
                    </li>

                    {/* Entry 2: text on the right */}
                    <li className="grid grid-cols-[80px_minmax(0,1fr)] items-start gap-5 pb-20 md:grid-cols-[minmax(0,1fr)_160px_minmax(0,1fr)] md:gap-8 md:pb-28">
                        <img
                            src="/About-images/2.jpg"
                            alt="Designer working at a computer"
                            className="col-start-1 row-start-1 h-20 w-20 rounded-full border-[6px] border-[#e9ecef] object-cover md:col-start-2 md:h-40 md:w-40"
                        />

                        <div className="col-start-2 row-start-1 min-w-0 md:col-start-3">
                            <h3 className="font-['Montserrat'] text-xl font-bold text-[#212529] md:text-2xl">
                                <span className="block">March 2011</span>
                                <span className="mt-1 block">
                                    An Agency is Born
                                </span>
                            </h3>

                            <p className="mt-3 font-['Roboto_Slab'] text-base leading-7 text-[#6c757d]">
                                {description}
                            </p>
                        </div>
                    </li>

                    {/* Entry 3: text on the left on desktop */}
                    <li className="grid grid-cols-[80px_minmax(0,1fr)] items-start gap-5 pb-20 md:grid-cols-[minmax(0,1fr)_160px_minmax(0,1fr)] md:gap-8 md:pb-28">
                        <img
                            src="/About-images/3.jpg"
                            alt="Team planning a project"
                            className="col-start-1 row-start-1 h-20 w-20 rounded-full border-[6px] border-[#e9ecef] object-cover md:col-start-2 md:h-40 md:w-40"
                        />

                        <div className="col-start-2 row-start-1 min-w-0 md:col-start-1 md:text-right">
                            <h3 className="font-['Montserrat'] text-xl font-bold text-[#212529] md:text-2xl">
                                <span className="block">December 2015</span>
                                <span className="mt-1 block">
                                    Transition to Full Service
                                </span>
                            </h3>

                            <p className="mt-3 font-['Roboto_Slab'] text-base leading-7 text-[#6c757d]">
                                {description}
                            </p>
                        </div>
                    </li>

                    {/* Entry 4: text on the right */}
                    <li className="grid grid-cols-[80px_minmax(0,1fr)] items-start gap-5 pb-20 md:grid-cols-[minmax(0,1fr)_160px_minmax(0,1fr)] md:gap-8 md:pb-28">
                        <img
                            src="/About-images/4.jpg"
                            alt="Expanded office workspace"
                            className="col-start-1 row-start-1 h-20 w-20 rounded-full border-[6px] border-[#e9ecef] object-cover md:col-start-2 md:h-40 md:w-40"
                        />

                        <div className="col-start-2 row-start-1 min-w-0 md:col-start-3">
                            <h3 className="font-['Montserrat'] text-xl font-bold text-[#212529] md:text-2xl">
                                <span className="block">July 2020</span>
                                <span className="mt-1 block">
                                    Phase Two Expansion
                                </span>
                            </h3>

                            <p className="mt-3 font-['Roboto_Slab'] text-base leading-7 text-[#6c757d]">
                                {description}
                            </p>
                        </div>
                    </li>

                    {/* Final circle */}
                    <li className="grid grid-cols-[80px_minmax(0,1fr)] gap-5 md:grid-cols-[minmax(0,1fr)_160px_minmax(0,1fr)] md:gap-8">
                        <div className="col-start-1 flex h-20 
                            w-20 items-center 
                            justify-center rounded-full border-[6px] 
                          border-[#e9ecef] bg-[#ffc800] text-center 
                            font-['Montserrat'] text-[11px] font-bold 
                            leading-tight text-[#212529]
                            md:col-start-2 md:h-40 md:w-40 md:text-xl">Be Part<br /> Of Our<br />Story!
                        </div>
                    </li>
                </ol>
            </div>
        </main>
    );
}
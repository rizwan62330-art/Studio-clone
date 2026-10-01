import React from 'react'

export default function OurTeam() {
    return (
        <section id='OurTeam'>
            <div className="mb-16 text-center">
                <h2 className="font-['Montserrat'] text-[40px] font-bold text-[#212529]">
                    OUR AMAING TEAM
                </h2>

                <p className="mt-4 font-['Roboto_Slab'] text-base italic text-[#6c757d]">
                    Lorem ipsum dolor sit amet consectetur.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                {/* card1 */}
                <div className="flex justify-center items-center flex-col">
                    <img src="/Team-images/1.jpg" alt="" className="rounded-full w-64 border-[10px] border-[#e9ecef]" />
                    <h3 className="mt-6 font-['Montserrat'] text-[25px] font-bold text-[#212529]">
                        Parveen Anand
                    </h3>
                    <p className="font-['Roboto_Slab'] text-base text-[#6c757d]">
                        Lead Designer
                    </p>
                </div>
                {/* card2 */}
                <div className="flex justify-center items-center flex-col">
                    <img src="/Team-images/2.jpg" alt="" className="rounded-full w-64 border-[10px] border-[#e9ecef]" />
                    <h3 className="mt-6 font-['Montserrat'] text-[25px] font-bold text-[#212529]">
                        Diana Petersen
                    </h3>
                    <p className="font-['Roboto_Slab'] text-base text-[#6c757d]">
                        Lead Marketer
                    </p>
                </div>
                {/* card3 */}
                <div className="flex justify-center items-center flex-col">
                    <img src="/Team-images/3.jpg" alt="" className="rounded-full w-64 border-[10px] border-[#e9ecef]" />
                    <h3 className="mt-6 font-['Montserrat'] text-[25px] font-bold text-[#212529]">
                        Larry Parker
                    </h3>
                    <p className="font-['Roboto_Slab'] text-base text-[#6c757d]">
                        Lead Developer
                    </p>
                </div>
            </div>

            <div>
                
            </div>
        </section>
    )
}

import React from 'react';

export default function About({ textColor = 'text-white', buttonColor = 'bg-customOrange' }) {
    return (
        <div className={`flex flex-col gap-y-8 lg:flex-row font-poppins py-24 lg:py-24 items-center pl-4 lg:px-20 ${textColor}`}>
            <div className="flex flex-col gap-y-4 lg:gap-y-4 lg:w-1/2  lg:text-left mb-8 lg:mb-0">
                <div className="text-2xl lg:text-2xl font-semibold">Hi I am</div>
                <div className="text-3xl lg:text-3xl font-semibold text-customOrange">Muhammad Umair</div>
                <div className="font-semibold text-6xl lg:text-6xl">UI & UX</div>
                <div className="font-semibold text-7xl lg:text-8xl pl-36 lg:pl-56">Designer</div>

                <div className="mt-6 lg:mt-6 text-base lg:text-xl font-normal">
                    Lorem ipsum dolor sit amet consectetur. Tristique amet sed <br />
                    massa nibh lectus netus in Aliquet donec morbi convallis <br />
                    pretium Turpis tempus pharetra
                </div>

                <div className={`w-36 mt-4 lg:mt-4 text-center rounded-md py-3 px-2 ${buttonColor} text-white`}>
                    Hire Me
                </div>
            </div>
            <div className="lg:w-1/2 flex justify-center lg:justify-end">
                <img className="w-full lg:w-[540px] h-auto" src="/About.png" alt="About" />
            </div>
        </div>
    );
}

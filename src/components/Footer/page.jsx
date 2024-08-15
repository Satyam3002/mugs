"use client";

import React from 'react';

const images = {
    dark: {
        fb: "/fb.svg",
        x: "/x.svg",
        insta: "/insta.svg",
        ln: "/ln.svg",
    },
    light: {
        fb: "/fb.png",
        x: "/x.png",
        insta: "/insta.png",
        ln: "/ln.png",
    }
};

export default function Footer({ bgColor = 'bg-customBG', textColor = 'text-customBlack', isDarkMode = false }) {
    const imageSet = isDarkMode ? images.dark : images.light;

    return (
        <div className={`flex ${bgColor} flex-col items-center py-10 md:py-20`}>
            <div className={`flex flex-col md:flex-row items-center gap-y-4 md:gap-x-4 font-normal py-6 md:py-10 text-3xl md:text-5xl ${textColor}`}>
                <img src="./Subtract.png" alt="" className="w-12 md:w-auto" />
                <div className="text-center md:text-left">
                    <span className="text-4xl md:text-5xl font-bold">M</span>umair
                </div>
            </div>

            <div className={`flex flex-col md:flex-row py-6 md:py-10 gap-y-4 md:gap-x-10 items-center font-normal text-lg md:text-xl ${textColor}`}>
                <div>Home</div>
                <div>About Me</div>
                <div>Services</div>
                <div>Projects</div>
                <div>Testimonials</div>
                <div>Contacts</div>
            </div>

            <div className={`flex flex-row md:flex-row py-6 md:py-10 gap-x-6 md:gap-x-5 items-center`}>
                <img src={imageSet.fb} alt="Facebook" className="w-8 md:w-auto" />
                <img src={imageSet.x} alt="X" className="w-8 md:w-auto" />
                <img src={imageSet.insta} alt="Instagram" className="w-8 md:w-auto" />
                <img src={imageSet.ln} alt="LinkedIn" className="w-8 md:w-auto" />
            </div>
        </div>
    );
}

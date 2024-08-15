"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Navbar({ textColor = 'text-white', textColor1 ='text-black' , backgroundColor = 'bg-customBlack' }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, [isOpen]);

    return (
        <div className={`font-poppins flex justify-between items-center py-8 px-10 md:px-20 ${backgroundColor}`}>
            {/* Logo and Title */}
            <div className="flex items-center gap-x-4">
                <Image src="/Subtract.png" alt="Logo" width={50} height={50} />
                <div className={`text-5xl font-normal ${textColor}`}>
                    <span className='font-bold'>M</span>umair
                </div>
            </div>

            {/* Desktop Navbar */}
            <div className={`hidden lg:flex gap-x-10 items-center font-normal text-xl ${textColor}`}>
                <div>Home</div>
                <div>About Me</div>
                <div>Services</div>
                <div>Projects</div>
                <div>Testimonials</div>
                <div>Contacts</div>
                <div className={`text-white rounded-md px-4 py-2 bg-customOrange`}>Download CV</div>
            </div>

            {/* Hamburger Menu for Mobile */}
            <div className="lg:hidden flex items-center">
                <button onClick={toggleMenu} className="text-2xl">
                  <img src="./hamburger.svg" alt="Menu" />
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden fixed inset-0 bg-customBG transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
                <div className="relative flex flex-col items-center justify-center h-full gap-y-8">
                    <div onClick={toggleMenu} className="absolute top-4 right-4 text-2xl cursor-pointer">
                        <img src="./cross.png" alt="Close" />
                    </div>
                    <div className={`text-3xl font-normal ${textColor1}`}>Home</div>
                    <div className={`text-3xl font-normal ${textColor1}`}>About Me</div>
                    <div className={`text-3xl font-normal ${textColor1}`}>Services</div>
                    <div className={`text-3xl font-normal ${textColor1}`}>Projects</div>
                    <div className={`text-3xl font-normal ${textColor1}`}>Testimonials</div>
                    <div className={`text-3xl font-normal ${textColor1}`}>Contacts</div>
                    <div className={`text-white rounded-md px-4 py-2 bg-customOrange text-3xl`}>Download CV</div>
                </div>
            </div>
        </div>
    );
}

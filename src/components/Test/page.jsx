"use client";

import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';

export default function Test() {
    const [selectedTestimonial, setSelectedTestimonial] = useState(0);

    const testimonials = [
        {
            image: '/user.png',
            name: 'Name 1',
            role: 'CEO',
            text: 'Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.'
        },
        {
            image: '/user1.png',
            name: 'Name 2',
            role: 'CEO',
            text: 'Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.'
        },
        {
            image: '/user.png',
            name: 'Name 3',
            role: 'CEO',
            text: 'Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.'
        },
        {
            image: '/user1.png',
            name: 'Name 4',
            role: 'CEO',
            text: 'Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.'
        }
    ];

    // Animation setup
    const [props, api] = useSpring(() => ({
        opacity: 0,
        transform: 'translateX(100%)',
        config: { tension: 300, friction: 30 },
    }));

    // Trigger animation on component mount and testimonial change
    useEffect(() => {
        api.start({
            opacity: 1,
            transform: 'translateX(0%)',
            reset: true,
        });
    }, [selectedTestimonial, api]);

    const handleTestimonialChange = (index) => {
        api.start({
            opacity: 0,
            transform: 'translateX(-100%)',
            onRest: () => {
                setSelectedTestimonial(index);
                api.start({
                    opacity: 1,
                    transform: 'translateX(0%)',
                });
            }
        });
    };

    return (
        <div className="font-poppins flex flex-col gap-y-12 py-12 md:py-28">
            <div className='flex items-center flex-col gap-y-6 text-white md:gap-y-10'>
                <p className='font-bold text-4xl md:text-6xl'>Testimonials</p>
                <p className='font-normal text-base md:text-xl text-center'>
                    Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus 
                    <br />netus in. Aliquet donec morbi convallis pretium
                </p>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center gap-y-8 md:gap-x-8 md:gap-y-0">
                <animated.div 
                    style={props} 
                    className="flex flex-col md:flex-row justify-center items-center bg-white shadow-lg p-6 rounded-lg w-full md:w-7/12 transition-transform duration-500"
                >
                    <div className="flex-shrink-0">
                        <animated.img
                            style={props}
                            className="w-full h-auto max-w-xs md:max-w-sm rounded-full"
                            src={testimonials[selectedTestimonial].image}
                            alt=""
                        />
                    </div>

                    <div className="flex flex-col gap-y-4 md:gap-y-5 md:ml-8 mt-4 md:mt-0">
                        <animated.p style={props} className="text-customBlack font-normal text-base md:text-xl">
                            <span className="font-bold text-3xl md:text-4xl text-customOrange">“</span> {testimonials[selectedTestimonial].text} <span className="font-bold text-3xl md:text-4xl text-customOrange">”</span>
                        </animated.p>
                        <div className="gap-y-2 md:gap-y-3">
                            <p className="font-bold text-xl md:text-2xl">{testimonials[selectedTestimonial].name}</p>
                            <p className="font-normal text-base md:text-lg">{testimonials[selectedTestimonial].role}</p>
                        </div>
                    </div>
                </animated.div>
            </div>

            <div className="flex flex-row justify-center items-center gap-x-4">
                {testimonials.map((_, index) => (
                    <div
                        key={index}
                        className={`bg-customBR hover:bg-customOrange rounded-full px-4 py-2 cursor-pointer ${selectedTestimonial === index ? 'bg-customOrange text-white' : ''}`}
                        onClick={() => handleTestimonialChange(index)}
                    >
                        <div className={`w-3 h-3 rounded-full `}></div>
                    </div>
                ))}
            </div>
        </div>
    );
}

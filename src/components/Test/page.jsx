"use client";

import React, { useState } from 'react';

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
            image: '/user.png',
            name: 'Name 4',
            role: 'CEO',
            text: 'Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.'
        }
    ];

    return (
        <div className="font-poppins flex flex-col gap-y-28 py-28">
           
            <div className='flex items-center flex-col gap-y-10'>
                <p className='font-bold text-white text-6xl'>Testimonials</p>
                 <p className='font-normal text-center text-white text-xl'>
                 Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus 
                 <br/>netus in. Aliquet donec morbi convallis pretium
                 </p>
            </div>

            <div className="flex justify-center items-center">
                <div className="flex justify-center items-center gap-x-8 w-7/12 bg-customBG p-6">
                    <div>
                        <img className="w-[350px] h-[220px]" src={testimonials[selectedTestimonial].image} alt="" />
                    </div>

                    <div className="flex flex-col gap-y-5">
                        <p className="text-customBlack font-normal text-xl">
                            <span className="font-bold text-4xl text-customOrange">“</span> {testimonials[selectedTestimonial].text} <span className="font-bold text-4xl text-customOrange">”</span>
                        </p>
                        <div className="gap-y-3">
                            <p className="font-bold text-2xl">{testimonials[selectedTestimonial].name}</p>
                            <p className="font-normal text-lg">{testimonials[selectedTestimonial].role}</p>
                        </div>
                    </div>
                </div>
            </div>

         
            <div className="flex flex-row justify-center items-center gap-x-4">
                {testimonials.map((_, index) => (
                    <div
                        key={index}
                        className="bg-customBR hover:bg-customOrange rounded-lg px-6 py-2 cursor-pointer"
                        onClick={() => setSelectedTestimonial(index)}
                    >
                        
                    </div>
                ))}
            </div>
        </div>
    );
}
"use client";
import React from 'react';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';

const customOrange = '#FD6F00'; 
const thumbColor = '#FFFFFF';

const CustomSlider = styled(Slider)({
    color: customOrange, 
    height: 8,
    '& .MuiSlider-thumb': {
        width: 24,
        height: 24,
        backgroundColor: thumbColor,
        border: `2px solid ${customOrange}`,
    },
    '& .MuiSlider-track': {
        height: 8,
        backgroundColor: customOrange,
    },
    '& .MuiSlider-rail': {
        height: 8,
        backgroundColor: '#ddd', // Rail color if needed
    },
});

export default function Aboutme({ textColor = 'text-white' }) {
    return (
        <div className={`flex flex-col lg:flex-row items-center lg:justify-around py-12 px-4 lg:px-12 ${textColor}`}>
            <div className="flex-1 mb-8 lg:mb-0">
                <img src="/About.png" className='w-full lg:w-[540px] h-auto' alt="About" />
            </div>
            <div className="flex-1 lg:pr-6">
                <p className="text-4xl lg:text-6xl font-bold">About Me</p>
                <div className="mt-6 lg:mt-10 text-base lg:text-xl font-normal">
                    Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa<br />
                    nibh lectus netus in Aliquet donec morbi convallis pretium Turpis<br />
                    tempus pharetra
                </div>

                <div className="flex flex-col mt-8 lg:mt-10 font-bold text-lg lg:text-xl gap-y-4">
                    <div className="flex flex-col">
                        <p>UX</p>
                        <CustomSlider min={0} max={100} defaultValue={50} />
                    </div>
                    <div className="flex flex-col">
                        <p>Website Design</p>
                        <CustomSlider min={0} max={100} defaultValue={50} />
                    </div>
                    <div className="flex flex-col">
                        <p>App Design</p>
                        <CustomSlider min={0} max={100} defaultValue={50} />
                    </div>
                    <div className="flex flex-col">
                        <p>Graphic Design</p>
                        <CustomSlider min={0} max={100} defaultValue={50} />
                    </div>
                </div>
            </div>
        </div>
    );
}

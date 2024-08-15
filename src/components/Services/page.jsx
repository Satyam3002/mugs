import React from 'react';

export default function Services({ textColor = 'text-white', textColor1 = 'text-black' }) {
    return (
        <div className={`flex flex-col items-center font-poppins py-20 px-4 lg:px-0 ${textColor}`}>
            <p className="text-4xl lg:text-6xl font-bold text-center">Services</p>
            <p className="text-center text-lg lg:text-xl font-normal mt-4">
                Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus <br/>
                lectus. Phasellus consequat urna tellus
            </p>

            <div className="flex flex-col lg:flex-row gap-y-8 lg:gap-x-8 mt-10 w-full lg:w-auto">
                {/* Service Card 1 */}
                <div className={`flex flex-col items-center lg:items-start gap-y-6 rounded-2xl bg-customBG p-6 lg:p-8 ${textColor1} text-center lg:text-left`}>
                    <img className="w-24 h-24 lg:w-18 lg:h-20" src="/uiux.png" alt="UI/UX"/>
                    <p className="text-lg lg:text-xl font-semibold">UI/ UX</p>
                    <p className="text-sm lg:text-xl font-normal">
                        Lorem ipsum dolor sit amet<br/> consectetur. Morbi diam nisi
                        <br/> nam diam interdum
                    </p>
                </div>

                {/* Service Card 2 */}
                <div className={`flex flex-col items-center lg:items-start gap-y-6 rounded-2xl bg-customBG p-6 lg:p-8 ${textColor1} text-center lg:text-left`}>
                    <img className="w-24 h-24 lg:w-18 lg:h-20" src="/webd.png" alt="Web Design"/>
                    <p className="text-lg lg:text-xl font-semibold">Web Design</p>
                    <p className="text-sm lg:text-xl font-normal">
                        Lorem ipsum dolor sit amet<br/> consectetur. Morbi diam nisi
                        <br/> nam diam interdum
                    </p>
                </div>

                {/* Service Card 3 */}
                <div className={`flex flex-col items-center lg:items-start gap-y-6 rounded-2xl bg-customBG p-6 lg:p-8 ${textColor1} text-center lg:text-left`}>
                    <img className="w-24 h-24 lg:w-18 lg:h-20" src="/app.png" alt="App Design"/>
                    <p className="text-lg lg:text-xl font-semibold">App Design</p>
                    <p className="text-sm lg:text-xl font-normal">
                        Lorem ipsum dolor sit amet<br/> consectetur. Morbi diam nisi
                        <br/> nam diam interdum
                    </p>
                </div>

                {/* Service Card 4 */}
                <div className={`flex flex-col items-center lg:items-start gap-y-6 rounded-2xl bg-customBG p-6 lg:p-8 ${textColor1} text-center lg:text-left`}>
                    <img className="w-24 h-24 lg:w-18 lg:h-20" src="/graphic.png" alt="Graphic Design"/>
                    <p className="text-lg lg:text-xl font-semibold">Graphic Design</p>
                    <p className="text-sm lg:text-xl font-normal">
                        Lorem ipsum dolor sit amet<br/> consectetur. Morbi diam nisi
                        <br/> nam diam interdum
                    </p>
                </div>
            </div>
        </div>
    );
}

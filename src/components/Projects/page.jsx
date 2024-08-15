export default function Projects({ textColor = 'text-white', textColor1 = 'text-black' }) {
    return (
        <div className={`flex flex-col gap-y-10 items-center py-20 px-4 lg:px-0 ${textColor}`}>
            <p className="text-4xl lg:text-6xl font-bold text-center">My Projects</p>
            <p className="text-center text-lg lg:text-xl font-normal mt-4">
                Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris
                est risus<br /> lectus. Phasellus consequat urna tellus
            </p>

            <div className={`flex flex-col gap-y-10 lg:gap-y-32 ${textColor1}`}>
                <div className="flex flex-wrap gap-4 lg:flex justify-center lg:items-center  mt-10">
                    <div className="p-3 px-4 text-lg lg:text-2xl rounded-xl border border-customBR font-normal bg-customBG hover:bg-customOrange hover:text-white">
                        All
                    </div>
                    <div className="p-3 px-4 text-lg lg:text-2xl rounded-xl border border-customBR font-normal bg-customBG hover:bg-customOrange hover:text-white">
                        UI/ UX
                    </div>
                    <div className="p-3 px-4 text-lg lg:text-2xl rounded-xl border border-customBR font-normal bg-customBG hover:bg-customOrange hover:text-white">
                        Web Design
                    </div>
                    <div className="p-3 px-4 text-lg lg:text-2xl rounded-xl border border-customBR font-normal bg-customBG hover:bg-customOrange hover:text-white">
                        App Design
                    </div>
                    <div className="p-3 px-4 text-lg lg:text-2xl rounded-xl border border-customBR font-normal bg-customBG hover:bg-customOrange hover:text-white">
                        Graphic Design
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-y-4 lg:gap-x-6 w-full lg:w-auto">
                    {/* Project 1 */}
                    <div className="flex flex-col items-center gap-y-6 font-normal">
                        <div className="relative w-[450px] h-[490px]">
                            <img
                                src="/temp1.png"
                                alt="Project 1"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <p className="text-customOrange text-center">Web Design</p>
                        <p className ={`font-bold text-lg lg:text-2xl text-center ${textColor}`}>AirCalling Landing Page Design</p>
                    </div>

                    {/* Project 2 */}
                    <div className="flex flex-col items-center gap-y-6 font-normal">
                        <div className="relative w-[450px] h-[490px]">
                            <img
                                src="/temp2.png"
                                alt="Project 2"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <img
                                src="/temp22.png"
                                alt="Overlay 1"
                                className="absolute top-1/2 left-1/2 w-1/2 h-full object-cover transform -translate-x-1/2 -translate-y-1/2 z-10"
                            />
                            <img
                                src="/temp21.png"
                                alt="Overlay 2"
                                className="absolute bottom-[10px] top-[283px] left-[140px] w-3/5 h-[420px] object-cover transform -translate-x-1/4 -translate-y-1/2 z-20"
                            />
                        </div>
                        <p className="text-customOrange text-center">Web Design</p>
                        <p className={`font-bold text-lg lg:text-2xl text-center ${textColor}`}>Business Landing Page Design</p>
                    </div>

                    {/* Project 3 */}
                    <div className="flex flex-col items-center gap-y-6 font-normal">
                        <div className="relative w-[450px] h-[490px]">
                            <img
                                src="/temp3.png"
                                alt="Project 3"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <img
                                src="/temp32.png"
                                alt="Overlay 1"
                                className="absolute top-1/2 left-1/2 w-1/2 h-full object-cover transform -translate-x-1/2 -translate-y-1/2 z-10"
                            />
                            <img
                                src="/temp31.png"
                                alt="Overlay 2"
                                className="absolute bottom-[10px] top-[278px] left-[140px] w-3/5 h-[430px] object-cover transform -translate-x-1/4 -translate-y-1/2 z-20"
                            />
                        </div>
                        <p className="text-customOrange text-center">Web Design</p>
                        <p className={`font-bold text-lg lg:text-2xl text-center ${textColor}`}>Ecom Web Page Design</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

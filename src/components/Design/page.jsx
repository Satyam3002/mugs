export default function Design({ textColor = 'text-black', backgroundColor = 'bg-white' }) {
    return (
        <div className={`flex flex-col items-center font-poppins gap-y-24 pb-24 px-4 lg:px-0 ${backgroundColor}`}>
            <div className="flex flex-col items-center gap-y-6">
                <p className={`font-bold text-center text-4xl md:text-6xl ${textColor}`}>Lets Design Together</p>
                <p className={`font-normal text-center text-base md:text-lg ${textColor}`}>
                    Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus <br />
                    netus in. Aliquet donec morbi convallis pretium
                </p>
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-y-6 lg:gap-x-12">
                <input
                    className={`rounded-lg border border-black py-3 px-6 ${backgroundColor === 'bg-white' ? 'bg-gray-200' : 'bg-customBG'} w-full lg:w-auto`}
                    placeholder="Enter your Email"
                    type="text"
                    name=""
                    id=""
                />
                <div className={`text-white text-center rounded-md px-4 py-3 bg-customOrange w-full lg:w-auto`}>
                    Download CV
                </div>
            </div>
        </div>
    );
}

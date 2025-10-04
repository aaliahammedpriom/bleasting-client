import React, { useContext } from "react";
import { Parallax } from "react-parallax";
import bgPhoto from "../../assets/exercise3.png";
import jsonData from "../../assets/fake.json"
import { Star } from "lucide-react";
import RandomWave from "./RandomWave";
import { AuthContext } from "../../provider/AuthProvider";
const Section2 = () => {
    const {logo} = useContext(AuthContext)
    return (
        <div className="bg-[#f5f9fc] m-auto">

            {/* Parallax Section */}
            <Parallax
                blur={{ min: 0, max: 4 }}
                bgImage={bgPhoto}
                bgImageAlt="fitness retreat"
                strength={200}
            >
               <RandomWave curves={100} width={1440} height={20}  fill="#305b62" />


                {/* Logo / Header */}
                <div className="w-[80%] mx-auto flex items-center gap-3 mb-4">
                    <div>
                        <img className="w-28" src={logo} alt="" />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row bg-white/40 gap-2 md:w-[80%] mx-auto">

                    {/* Left Side */}
                    <div className="md:w-[50%] bg-transparent shadow-sm p-8 flex flex-col justify-center font-semibold ">

                        {/* Intro Text */}
                        <p className="text-[#305b62] mb-4">
                            Welcome to Bleasting Body Transformation Retreat in Phuket, Thailand.
                            We specialise in building bespoke body transformation plans, tailored
                            specifically to your unique goals and needs.
                        </p>

                        {/* Button */}
                        <button className="btn bg-[#305b62] text-white px-6 py-3 rounded-full font-semibold  ">
                            View Sample Client Plan
                        </button>

                        {/* Bullet Points */}
                        <ul className="mt-6 space-y-2 text-gray-700 list-disc list-inside">
                            <li>All Inclusive Retreat Package</li>
                            <li>2 - 12 Week Fitness Retreat In Phuket</li>
                            <li>Personalised Training Plans</li>
                            <li>Customised Meal Plans</li>
                            <li>Planned Weight Loss Outcomes</li>
                            <li>Hi-Tech Measurement Tools</li>
                            <li>Individual Plans Built Just For You</li>
                            <li>Lose Weight, Gain Muscle, Achieve Your Goals!</li>
                        </ul>

                        {/* CTA */}
                        <p className="mt-6 font-semibold text-gray-800">
                            LET US BUILD YOUR PERSONALISED PLAN FREE OF CHARGE.
                            CONTACT ONE OF OUR RETREAT EXPERTS
                        </p>

                        <button className="mt-4 btn bg-[#305b62] text-white px-5 py-2 rounded-full flex items-center justify-center gap-2 ">
                            💬 Chat To Us
                        </button>
                    </div>


                    {/* Right Side */}
                    <div className="md:w-[50%]  bg-transparent shadow-sm ">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[500px]  overflow-y-auto pr-2">
                            {jsonData.map((item) => (
                                <div key={item.id} className="max-sm:m-5 border rounded-2xl  p-4 shadow-sm bg-white hover:shadow-lg  ">

                                    {/* avatar */}
                                    <div className="flex items-center gap-3 mb-2">
                                        <img
                                            src={item.avatar}
                                            alt={item.name}
                                            className="w-10 h-10 rounded-full object-cover"
                                        />
                                        <div>
                                            <p className="font-semibold text-sm text-gray-800">{item.name}</p>
                                            <p className="text-xs text-gray-500">{item.date}</p>
                                        </div>
                                    </div>

                                    {/* Stars */}
                                    <div className="flex text-yellow-500 mb-2">
                                        {Array.from({ length: item.rating }, (_, i) => (
                                            <Star key={i} size={16} fill="currentColor" stroke="none" />
                                        ))}
                                    </div>

                                    {/* Title */}
                                    <div>
                                        <h3 className="font-bold text-sm mb-1">{item.title}</h3>
                                    </div>

                                    {/* Review text */}
                                    <p className="text-xs text-[[#305b62]] line-clamp-3">{item.testimonial}</p>
                                    <button className="text-xs text-gray-500 mt-1 hover:underline">
                                        Read more
                                    </button>

                                    {/* Platform logo */}
                                    <div className="flex items-center gap-2 mt-3">
                                        <img src={item.platformLogo} alt="platform" className="w-5 h-5" />
                                        <span className="text-sm font-semibold text-gray-700">{item.platformName}</span>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </Parallax>
        </div>
    );
};

export default Section2;

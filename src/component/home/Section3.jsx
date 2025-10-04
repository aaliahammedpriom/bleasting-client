// Section3.jsx
import React, { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Section3 = () => {
    const{logo} = useContext(AuthContext)
    return (
        <div className="relative w-full md:h-[372px]  md:rounded-t-[40%] overflow-hidden mt-5 py-5 ">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center  "
                style={{
                    backgroundImage:
                        "url('https://static.wixstatic.com/media/11062b_13eb4134e847475e8dad19ee8b34212c~mv2_d_7062_4713_s_4_2.jpg')",
                }}
            ></div>

            {/* Semi-transparent overlay for opacity */}
            <div className="absolute inset-0 bg-white/90"></div> {/* 10% opacity */}

            {/* Content */}
            <div className="max-sm:m-5 relative z-10 flex flex-col items-center justify-center gap-6">
                <h4 className="text-xl md:text-[48px] text-center font-bold text-[#000000] tracking-tight">
                    BEING YOUR TRANSFORMATION
                </h4>

                {/* Logo Images */}
                <div className="flex flex-wrap justify-center items-center gap-8">
                    <div className="flex flex-col gap-4">
                        <img
                            src="https://static.wixstatic.com/media/6f7529_c573ce9c27974011804c84d0e78a2bfe~mv2.jpg"
                            alt="Logo 1"
                            className="w-44 h-44 object-cover rounded-full border-8  border-[#000000] "
                        />
                        <div className="btn md:btn-xl rounded-full bg-[#000000] text-white ">PRICING</div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <img
                            src={logo}
                            alt="Logo 2"
                            className="w-44 h-44 object-cover rounded-full border-8  border-[#000000] "
                        />
                        <div className="btn md:btn-xl rounded-full bg-[#000000] text-white ">SAMPLE PLAN</div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <img
                            src="https://static.wixstatic.com/media/453a0f_57934ae89681465486e9b388e9c8c01d~mv2.jpg"
                            alt="Logo 3"
                            className="w-44 h-44 object-cover rounded-full border-8  border-[#000000] "
                        />
                        <div className="btn md:btn-xl rounded-full bg-[#000000] text-white ">FITNESS PLAN</div>
                    </div>

                </div>


            </div>
        </div>
    );
};

export default Section3;

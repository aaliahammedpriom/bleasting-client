import React, { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
const Section6 = () => {
    const{logo}= useContext(AuthContext)
    return (
        <div className="relative w-full min-h-screen overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-fixed bg-center"
                style={{
                    backgroundImage:
                        "url('https://static.wixstatic.com/media/11062b_13eb4134e847475e8dad19ee8b34212c~mv2_d_7062_4713_s_4_2.jpg')",
                }}
            ></div>

            {/* Semi-transparent overlay */}
            <div className="absolute inset-0 border-t-2 bg-white/90"></div>

            {/* Content */}
            <div className="relative z-10  ">
                <div className="absolute z-1 pt-16 md:flex  justify-between md:w-[70vw]  md:mx-[15vw] ">
                    {/* left content */}
                    <div className="md:w-1/2 text-[#305b62] flex flex-col justify-center-safe gap-5  uppercase p-5">
                        <div className="text-5xl font-bold ">
                            PREVIOUS <br></br> CLIENTS
                        </div>
                        <div className="text-2xl font-bold ">
                            Join our community <br></br> of achievers and <br></br> let us be your <br></br> partner in your <br></br> journey towards a <br></br> healthier and <br></br> happier you.
                        </div>
                        <div>
                            <button className="btn bg-[#305b62] text-white px-10 py-5 rounded-full">
                                FITNESS PLANS
                            </button>
                        </div>
                    </div>
                    {/* right content */}
                    <div className="md:w-1/2">
                        <img src={logo} alt="" />
                    </div>
                </div>
                <svg
                    id="wave"
                    style={{ transform: "rotate(180deg)", transition: "0.3s" }}
                    viewBox="0 0 1440 450"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        style={{ transform: "translate(0, 0px)", opacity: 1 }}
                        fill="#305b62"
                        d="M0,245L1440,441L2880,98L4320,294L5760,343L7200,147L8640,49L10080,49L11520,98L12960,98L14400,147L15840,441L17280,343L18720,441L20160,392L21600,0L23040,196L24480,392L25920,392L27360,196L28800,98L30240,147L31680,49L33120,147L34560,441L34560,490L33120,490L31680,490L30240,490L28800,490L27360,490L25920,490L24480,490L23040,490L21600,490L20160,490L18720,490L17280,490L15840,490L14400,490L12960,490L11520,490L10080,490L8640,490L7200,490L5760,490L4320,490L2880,490L1440,490L0,490Z"
                    ></path>
                </svg>

            </div>
        </div>
    );
};

export default Section6;

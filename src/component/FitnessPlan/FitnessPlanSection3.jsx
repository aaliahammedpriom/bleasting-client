import React from 'react';

const FitnessPlanSection3 = () => {
    const data = [
        {
            "title": "Goal Setting",
            "description": "Each week begins anew with a reevaluation of your goals, ensuring they remain aligned with your expectations following weekly measurements."
        },
        {
            "title": "Issuing Plans",
            "description": "With fresh insights from your progress, we adjust your meal and training plans, optimising them for continued growth and success."
        },
        {
            "title": "Implementing Plans",
            "description": "Dive back into your regime with renewed focus and determination, building upon the foundation laid in previous weeks."
        },
        {
            "title": "Rest and Recover",
            "description": "Your body adapts and grows during rest periods. It’s important to plan adequate rest to allow the body to recharge. We encourage you to use this time to take in the beaches and scenic views of Phuket."
        },
        {
            "title": "Review and Measurements",
            "description": "As the cycle completes, we assess your progress, celebrate your achievements, and recalibrate your plan for the next week's journey."
        }
    ]

    return (
        <div className="relative w-full min-h-screen">
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
            <div className="">
                <div className="relative lg:absolute z-1 w-[90vw] mx-[5vw] md:flex justify-between  gap-5">
                    {/* left content */}
                    <div className="md:w-3/5 text-[#305b62]   flex flex-col gap-5 pt-15">
                        <div className="text-4xl font-bold uppercase">
                            Bleasting <br></br> methadology
                        </div>
                        <div className="text-sm font-bold">
                            Our methodology revolves around a dynamic process that repeats weekly, adapting to your progress and feedback, ensuring sustained momentum throughout your stay with us in Phuket.
                        </div>
                        <ol className='grid grid-cols-1 md:grid-cols-2 gap-5 px-5 md:font-bold text-sm'>
                            {data.map((item, idx) => {
                                return (
                                    <li className='list-disc'>
                                        {item.title} : {item.description}
                                    </li>
                                )
                            })}
                        </ol>
                        <div className=' md:absolute md:left-[30vw] md:bottom-0 md:w-40'>
                            <h2 className='py-2'>
                                Please follow the journey of one of our previous clients below
                            </h2>
                            <button className='btn bg-[#305b62] rounded-full text-white'>CHAT WITH US</button>
                        </div>
                    </div>
                    {/* right content */}
                    <div className="md:w-2/5 md:pt-40">
                        <img className='h-[70vh]' src="https://static.wixstatic.com/media/2c0265_65a87c39607d452e93f882271c23cf05~mv2.png/v1/fill/w_474,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2c0265_65a87c39607d452e93f882271c23cf05~mv2.png" alt="" />
                    </div>
                </div>
                <svg
                className='max-lg:hidden'
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

export default FitnessPlanSection3;
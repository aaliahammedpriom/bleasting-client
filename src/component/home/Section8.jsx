import React from 'react';

const Section8 = () => {
    return (
        <div className='relative min-h-screen w-full'>
            {/* left section */}
            <div className='md:absolute z-10  min-h-screen md:w-1/2 '>
                <img className='w-full max-h-screen' src="https://static.wixstatic.com/media/6f7529_faba3ba3af6f4384b62aea09894d6b62~mv2.jpg/v1/fill/w_716,h_986,al_c,q_85,enc_avif,quality_auto/6f7529_faba3ba3af6f4384b62aea09894d6b62~mv2.jpg" alt="" />
            </div>
            {/* right rection */}
            <div className='md:absolute z-10 left-[50%] bg-fixed min-h-screen md:w-1/2 '
                style={{
                    backgroundImage:
                        "url('https://static.wixstatic.com/media/6f7529_c10c8b99c52b4abab5af72a1979b5fc4~mv2.jpg/v1/fill/w_533,h_734,al_c,q_85,enc_avif,quality_auto/6f7529_c10c8b99c52b4abab5af72a1979b5fc4~mv2.jpg')",
                }}>
                <div>
                    <div className="absolute inset-0 md:bg-white/80 "></div>

                    {/* Text Content */}
                    <div className="relative z-10 overflow-y-auto max-h-screen  text-[#000000] max-sm:bg-white/80 md:p-16 px-10">
                        <h1 className="text-xl md:text-4xl font-extrabold  drop-shadow-lg uppercase">
                            What makes Bleasting in PHUKET unique?
                        </h1>

                        <div className="max-w-3xl mx-auto py-10  leading-relaxed">
                            <p className="text-base ">
                                At <span className="font-bold text-lg ">Bleasting</span>, we understand that
                                wellness is not a one-size-fits-all journey. That's why our fitness
                                retreat in Phuket offers a truly bespoke experience, meticulously
                                tailored to meet the unique needs and aspirations of each client.
                            </p>

                            <h2 className="mt-8 text-xl font-bold ">
                                Tailored Training & Nutrition Plans
                            </h2>
                            <p className="mt-3">
                                Our approach begins with a comprehensive assessment of your fitness
                                goals, health history, and dietary preferences. With this information in
                                hand, our expert coaches create personalised training and meal plans
                                designed to optimise your progress and enhance your well-being. These
                                plans are not static; they evolve weekly to ensure ongoing adaptation and
                                maximum results.
                            </p>

                            <h2 className="mt-8 text-xl font-bold ">
                                Comprehensive Measurement Controls
                            </h2>
                            <p className="mt-3">
                                Tracking progress is key to staying motivated and ensuring that you're on
                                the right path to success. Our weekly body composition measurements,
                                conducted by experienced fitness experts, provide valuable insights into
                                your progress and allow us to fine-tune your program as needed.
                            </p>

                            <h2 className="mt-8 text-xl font-bold ">
                                Post-Retreat Support
                            </h2>
                            <p className="mt-3">
                                Our commitment to your success doesn't end when the retreat does. After
                                completing your program, you'll receive a complimentary four-week online
                                coaching package to help you stay on track and continue your wellness
                                journey from wherever life takes you.
                            </p>
                            <button className='btn bg-[#000000] text-white text-2xl w-full rounded-full md:py-8 md:mt-10 mt-5'>FITNESS PLANS</button>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default Section8;
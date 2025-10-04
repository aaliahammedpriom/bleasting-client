import React from 'react';
import RandomWave from '../home/RandomWave';

const ClientExperiensesSectin4 = () => {
    return (
        <div className=' bg-fixed text-[#305b62]'
            style={{
                backgroundImage:
                    "url('https://static.wixstatic.com/media/6f7529_10f37979c7ab4e49bf0793b05413af67~mv2.jpeg/v1/fill/w_1202,h_549,al_c,q_85,enc_avif,quality_auto/6f7529_10f37979c7ab4e49bf0793b05413af67~mv2.jpeg')",
            }} >
            <div className='bg-white/90 '>
                {/* top section */}
                <div className='w-[80vw] m-auto md:flex gap-24 py-10 items-stretch '>
                    {/* left section */}
                    <div className='md:w-1/2 p-5 bg-white/60 rounded-2xl card shadow-2xl flex flex-col gap-5'>

                        <h1 className='text-4xl font-bold uppercase'>Meet Denis</h1>

                        <div className='flex flex-col gap-2'>
                            <p className="font-semibold">Q: What results did you achieve at the retreat?</p>
                            <p>A: I lost 15.5kg, however most importantly I improved my fitness & strength significantly.</p>
                        </div>

                        <div className='flex flex-col gap-2'>
                            <p className="font-semibold">Q: What was your favourite training experience?</p>
                            <p>A: Hiking to the top of Black Rock was something I didn’t think I would be able to do. The view from the top was amazing.</p>
                        </div>

                        <div className='flex flex-col gap-2'>
                            <p className="font-semibold">Q: What was your favourite experience outside of the retreat activities?</p>
                            <p>A: We went to James Bond Island on our day off which was really fun.</p>
                        </div>

                        <div className='flex flex-col gap-2'>
                            <p className="font-semibold">Q: What was your favourite meal?</p>
                            <p>A: I really enjoyed all of the lunchtime wraps.</p>
                        </div>

                        <div className='flex flex-col gap-2'>
                            <p className="font-semibold">Q: What are you most proud of achieving during the retreat?</p>
                            <p>A: I was able to do much more than I thought I could, and I feel like I have the confidence when I go home to get back into the gym and continue my progress.</p>
                        </div>
                    </div>

                    {/* right section */}
                    <div className='md:w-1/2 max-sm:pt-5 md:flex items-center justify-center'>
                        <img
                            src="https://static.wixstatic.com/media/2c0265_e804f3cb1b2b4da3af42b9fcf2717208~mv2.png/v1/fill/w_600,h_800,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_0609%202_HEIC.png"
                            alt="Denis"
                            className="w-full h-full object-cover rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* bottom section */}
                <div className="w-[80vw] m-auto md:flex gap-5 pb-10 items-stretch  ">
                    {/* left section */}
                    <div className="md:w-1/2 max-sm:pb-5 md:grid grid-cols-2 gap-5 ">
                        {[
                            "https://static.wixstatic.com/media/2c0265_42667efc0fe34b70b40a35c0d70dd143~mv2.jpeg/v1/fill/w_293,h_256,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Image%2013-05-2025%20at%2023_05%20(1).jpeg",
                            "https://static.wixstatic.com/media/2c0265_a571f95adc424bda992508483f99759a~mv2.jpeg/v1/fill/w_288,h_253,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Image%2013-05-2025%20at%2023_15.jpeg",
                            "https://static.wixstatic.com/media/2c0265_dc1e782786eb461ba9334f450ec15f43~mv2.jpeg/v1/fill/w_600,h_253,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Image%2013-05-2025%20at%2023_05.jpeg",
                        ].map((src, i, arr) => (
                            <div
                                key={i}
                                className={`max-sm:pt-5 md:h-[300px] w-full overflow-hidden rounded-lg shadow-md transition duration-300 hover:opacity-80 ${arr.length === 3 && i === 2 ? "col-span-2" : ""
                                    }`}
                            >
                                <img
                                    src={src}
                                    alt={`left-${i}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>

                    {/* right section */}
                    <div className="md:w-1/2 flex flex-col gap-5 py-20  bg-white ">
                        {[
                            "https://static.wixstatic.com/media/2c0265_e0970fb038944a54bf899a1fef5e88d7~mv2.jpeg/v1/fill/w_600,h_517,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Image%2013-05-2025%20at%2023_06.jpeg"
                        ].map((src, i) => (
                            <div
                                key={i}
                                className="flex-1 overflow-hidden"
                            >
                                <img
                                    src={src}
                                    alt={`right-${i}`}
                                    className=""
                                />
                            </div>
                        ))}
                    </div>

                </div>

                <RandomWave curves={100} width={1440} height={30} rotation={true} fill="#305b62" />

            </div>
        </div>
    );
};

export default ClientExperiensesSectin4;
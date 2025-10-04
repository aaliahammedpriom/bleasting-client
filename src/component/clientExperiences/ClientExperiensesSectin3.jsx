import React from 'react';
import RandomWave from '../home/RandomWave';

const ClientExperiensesSectin3 = () => {
    return (
        <div className=' bg-fixed text-[#305b62]'
            style={{
                backgroundImage:
                    "url('https://static.wixstatic.com/media/6f7529_10f37979c7ab4e49bf0793b05413af67~mv2.jpeg/v1/fill/w_1202,h_549,al_c,q_85,enc_avif,quality_auto/6f7529_10f37979c7ab4e49bf0793b05413af67~mv2.jpeg')",
            }} >
            <div className='bg-white/90 '>
                {/* top section */}
                <div className='w-[80vw] m-auto md:flex gap-24 py-10 items-stretch'>
                    {/* left section */}
                    <div className='md:w-1/2 p-5 bg-white/60 rounded-2xl card shadow-2xl flex flex-col gap-5'>

                        <h1 className='text-4xl font-bold uppercase'>Meet Peter</h1>

                        <div className='flex flex-col gap-2'>
                            <p className="font-semibold">Q: What results did you achieve at the retreat?</p>
                            <p>A: I lost 1.9kg of body fat and gained 0.2kg in muscle!</p>
                        </div>

                        <div className='flex flex-col gap-2'>
                            <p className="font-semibold">Q: What was your favourite training experience?</p>
                            <p>A: The beach workouts were the best! Such a great feeling getting in the ocean after a gruelling workout.</p>
                        </div>

                        <div className='flex flex-col gap-2'>
                            <p className="font-semibold">Q: What was your favourite experience outside of the retreat activities?</p>
                            <p>A: Taking our scooters around the island, exploring the different beaches and landmarks.</p>
                        </div>

                        <div className='flex flex-col gap-2'>
                            <p className="font-semibold">Q: What was your favourite meal?</p>
                            <p>A: Chicken Panang with brown rice was really tasty.</p>
                        </div>

                        <div className='flex flex-col gap-2'>
                            <p className="font-semibold">Q: What are you most proud of achieving during the retreat?</p>
                            <p>A: I increased my fitness a lot! I also got my sleep pattern under control and managed to stay off alcohol and junk food.</p>
                        </div>
                    </div>

                    {/* right section */}
                    <div className='md:w-1/2 max-sm:pt-5 flex items-center justify-center'>
                        <img
                            src="https://static.wixstatic.com/media/2c0265_484e5c24640b463c8bb44521ba74b673~mv2.png/v1/fill/w_548,h_731,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_4350_HEIC.png"
                            alt="Peter"
                            className="w-full h-full object-cover rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* bottom section */}
                <div className="w-[80vw] m-auto md:flex gap-5 pb-10">
                    {/* left section */}
                    <div className="md:w-1/2 grid grid-cols-2 gap-5">
                        {[
                            "https://static.wixstatic.com/media/2c0265_cc78703ad37e4dd5b1430fc8def6dfb0~mv2.png/v1/fill/w_411,h_426,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2c0265_cc78703ad37e4dd5b1430fc8def6dfb0~mv2.png",
                            "https://static.wixstatic.com/media/2c0265_527b9c84105f42aeb84aa821d99ce33a~mv2.png/v1/fill/w_320,h_426,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2c0265_527b9c84105f42aeb84aa821d99ce33a~mv2.png",
                            "https://static.wixstatic.com/media/2c0265_527b9c84105f42aeb84aa821d99ce33a~mv2.png/v1/fill/w_320,h_426,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2c0265_527b9c84105f42aeb84aa821d99ce33a~mv2.png",
                            "https://static.wixstatic.com/media/2c0265_0e07bdc55759432c9c9f4e895ccb91e7~mv2.png/v1/fill/w_320,h_426,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2c0265_0e07bdc55759432c9c9f4e895ccb91e7~mv2.png"
                        ].map((src, i) => (
                            <div
                                key={i}
                                className="md:h-[300px] w-full overflow-hidden rounded-lg shadow-md transition duration-300 hover:opacity-80"
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
                    <div className="md:w-1/2 max-sm:pt-5 flex flex-col gap-5">
                        {[
                            "https://static.wixstatic.com/media/2c0265_dbd194c428da4c4692757154ab99e5f0~mv2.jpg/v1/fill/w_548,h_266,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_4244.jpg",
                            "https://static.wixstatic.com/media/2c0265_6f5e420f260a498c9c5637877bf4be00~mv2.jpg/v1/fill/w_548,h_266,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_4245.jpg"
                        ].map((src, i) => (
                            <div
                                key={i}
                                className="flex-1 overflow-hidden rounded-lg shadow-md transition duration-300 hover:opacity-80"
                            >
                                <img
                                    src={src}
                                    alt={`right-${i}`}
                                    className="w-full h-full object-cover"
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

export default ClientExperiensesSectin3;
import React from 'react';
import RandomWave from '../home/RandomWave';

const clientExperiencesSection1 = () => {
    return (
        <div className=' bg-fixed text-[#305b62]'
            style={{
                backgroundImage:
                    "url('https://static.wixstatic.com/media/6f7529_10f37979c7ab4e49bf0793b05413af67~mv2.jpeg/v1/fill/w_1202,h_549,al_c,q_85,enc_avif,quality_auto/6f7529_10f37979c7ab4e49bf0793b05413af67~mv2.jpeg')",
            }} >
            <div className='bg-white/90 '>
                {/* top section */}
                <div className='w-[80vw] m-auto md:flex gap-24 py-10 '>
                    {/* left section */}
                    <div className='md:w-1/2 p-5 bg-white/60 rounded-2xl card shadow-2xl flex flex-col gap-5 '>

                        <h1 className='text-4xl font-bold uppercase'>Meet jason</h1>
                        <div className='flex flex-col gap-2'>
                            <p>Q: What results did you achieve at the retreat?</p>
                            <p>A: I lost 7.4kg in body weight in my 7 week stay at Bleasting, and my body fat % dropped by 8.6%.</p>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <p> Q: What was your favourite training experience?</p>
                            <p>A: I really enjoyed the beach workouts. They were tough, but the group environment helps to motivate you, and the scenery is beautiful.
                            </p>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <p>Q: What was your favourite experience outside of the retreat activities</p>
                            <p>A: Sleeping Lol... Not really... I enjoyed the vibe of the street. Meeting new people, sitting in the cafes chatting to friends and watching the world go by..</p>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <p>Q: What was your favourite meal?</p>
                            <p>A: I had 2... Chicken Panang, and the chicken Caesar wrap</p>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <p>Q: What are you most proud of achieving during the retreat?</p>
                            <p> A: I'm over the moon with my weight loss. I was sceptical if I would lose as much weight as the guys proposed, but we delivered!</p>
                        </div>
                    </div>
                    {/* right section */}
                    <div className='max-sm:pt-5'>
                        <img src="https://static.wixstatic.com/media/2c0265_cc78703ad37e4dd5b1430fc8def6dfb0~mv2.png/v1/fill/w_411,h_426,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2c0265_cc78703ad37e4dd5b1430fc8def6dfb0~mv2.png" alt="" />
                    </div>
                </div>
                {/* bottom section */}
                <div className="w-[80vw] m-auto md:flex gap-5 pb-10">
                    {/* left section */}
                    <div className="md:w-1/2 grid grid-cols-2 md:grid-cols-2 gap-5">
                        {[
                            "https://static.wixstatic.com/media/2c0265_cc78703ad37e4dd5b1430fc8def6dfb0~mv2.png/v1/fill/w_411,h_426,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2c0265_cc78703ad37e4dd5b1430fc8def6dfb0~mv2.png",
                            "https://static.wixstatic.com/media/2c0265_fa8279195b60411782cb8fdaab868263~mv2.png/v1/fill/w_320,h_426,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2c0265_fa8279195b60411782cb8fdaab868263~mv2.png",
                            "https://static.wixstatic.com/media/2c0265_cb42117540cb4e02a6d410c349472009~mv2.png/v1/fill/w_320,h_426,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2c0265_cb42117540cb4e02a6d410c349472009~mv2.png",
                            "https://static.wixstatic.com/media/2c0265_cc78703ad37e4dd5b1430fc8def6dfb0~mv2.png/v1/fill/w_411,h_426,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2c0265_cc78703ad37e4dd5b1430fc8def6dfb0~mv2.png"
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
                    <div className="md:w-1/2 flex flex-col max-sm:pt-5 gap-5">
                        {[
                            "https://static.wixstatic.com/media/2c0265_53be008d94714c008368cb8dd7cce8cc~mv2.jpg/v1/fill/w_548,h_266,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/2c0265_53be008d94714c008368cb8dd7cce8cc~mv2.jpg",
                            "https://static.wixstatic.com/media/2c0265_2fe4c09471b34f60852bc194deb3194e~mv2.jpg/v1/fill/w_548,h_266,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/2c0265_2fe4c09471b34f60852bc194deb3194e~mv2.jpg"
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

export default clientExperiencesSection1;
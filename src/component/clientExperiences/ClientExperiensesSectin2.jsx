import React from 'react';
import RandomWave from '../home/RandomWave';

const ClientExperiensesSectin2 = () => {
    return (
        <div style={{
            backgroundImage:
                "url('https://static.wixstatic.com/media/6f7529_10f37979c7ab4e49bf0793b05413af67~mv2.jpeg/v1/fill/w_1202,h_549,al_c,q_85,enc_avif,quality_auto/6f7529_10f37979c7ab4e49bf0793b05413af67~mv2.jpeg')",
        }} >
            <div className='bg-white/90'>

                {/* top section */}
                <div className='md:w-[80vw] m-auto md:flex gap-24 py-10 items-stretch bg-fixed text-[#000000]'>
                    {/* left section */}
                    <div className='md:w-1/2 p-5 bg-white/60 rounded-2xl card shadow-2xl flex flex-col gap-5'>
                        <h1 className='text-4xl font-bold uppercase'>Meet Brain</h1>

                        <div className='flex flex-col gap-2'>
                            <p className="font-semibold">Q: What results did you achieve at the retreat?</p>
                            <p>A: I lost 7.4kg in body weight in my 7 week stay at Bleasting, and my body fat % dropped by 8.6%.</p>
                        </div>

                        <div className='flex flex-col gap-2'>
                            <p className="font-semibold">Q: What was your favourite training experience?</p>
                            <p>A: I really enjoyed the beach workouts. They were tough, but the group environment helps to motivate you, and the scenery is beautiful.</p>
                        </div>

                        <div className='flex flex-col gap-2'>
                            <p className="font-semibold">Q: What was your favourite experience outside of the retreat activities?</p>
                            <p>A: Sleeping Lol... Not really... I enjoyed the vibe of the street. Meeting new people, sitting in the cafes chatting to friends and watching the world go by..</p>
                        </div>

                        <div className='flex flex-col gap-2'>
                            <p className="font-semibold">Q: What was your favourite meal?</p>
                            <p>A: I had 2... Chicken Panang, and the chicken Caesar wrap</p>
                        </div>

                        <div className='flex flex-col gap-2'>
                            <p className="font-semibold">Q: What are you most proud of achieving during the retreat?</p>
                            <p>A: I'm over the moon with my weight loss. I was sceptical if I would lose as much weight as the guys proposed, but we delivered!</p>
                        </div>
                    </div>

                    {/* right section */}
                    <div className="md:w-1/2  max-sm:pt-5">
                        <iframe
                            src="https://www.instagram.com/primereviveretreat/embed"
                            className="w-full h-full max-sm:h-screen rounded-2xl shadow-xl flex-1"
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>

                {/* bottom section */}
                <div className="w-[80vw] m-auto grid md:grid-cols-2 gap-5 shadow-2xl ">
                    <div className="h-full w-full overflow-hidden rounded-lg shadow-md transition duration-300 hover:opacity-80" >
                        <img
                            src="https://static.wixstatic.com/media/2c0265_6312aa567b27432e8ff77518bfe51f7e~mv2.jpeg/v1/fill/w_534,h_540,al_c,q_80,enc_avif,quality_auto/Image%2012-05-2025%20at%2021_24.jpeg"
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="h-full w-full overflow-hidden rounded-lg shadow-md transition duration-300 hover:opacity-80" >
                        <img
                            src="https://static.wixstatic.com/media/2c0265_8fc45ad52f5d42d8ba6e8d6d4ac0130b~mv2.jpeg/v1/fill/w_558,h_540,al_c,lg_1,q_80,enc_avif,quality_auto/Image%2012-05-2025%20at%2021_23.jpeg"
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                <RandomWave curves={100} width={1440} height={30} rotation={true} fill="#000000" />

            </div>
        </div>
    );
};

export default ClientExperiensesSectin2;
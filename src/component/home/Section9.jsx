import React from 'react';
import data from '../../assets/review.json'
import { Star } from 'lucide-react';
import { PiQuotesFill } from 'react-icons/pi';

const Section9 = () => {
    return (
        <div className='bg-fixed '
            style={{
                backgroundImage:
                    "url('https://static.wixstatic.com/media/6f7529_10f37979c7ab4e49bf0793b05413af67~mv2.jpeg/v1/fill/w_1202,h_549,al_c,q_85,enc_avif,quality_auto/6f7529_10f37979c7ab4e49bf0793b05413af67~mv2.jpeg')",
            }}>
            <div className=' bg-white/90  '>
                <div className='grid grid-cols-1 md:grid-cols-3 justify-around gap-5  pt-10 w-[70vw] m-auto'>
                    {
                        data.map((item, idx) =>
                            <div key={idx} className="max-w-sm  bg-white shadow-md rounded-2xl p-6 text-center">
                                {/* Profile Image */}
                                <div className="w-36 h-36 mx-auto rounded-full overflow-hidden border-4 border-[#305b62] shadow-md">
                                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                </div>
                                <div className='w-full m-auto flex items-center justify-around'>
                                    <p className='text-[#305b62] text-5xl'><PiQuotesFill /></p>
                                </div>
                                {/* Quote Section */}
                                <div className="mt-4 text-[#305b62]  italic">

                                    <p>
                                        <span className="font-bold">{item.weightStart}kg</span> when I started and with the help and support{" "}
                                        <span className="font-bold">{item.weightLost} KG LOST</span> while having an amazing time at{" "}
                                        <span className="font-bold">Bleasting</span> the support and knowledge...
                                    </p>
                                </div>

                                {/* User Info */}
                                <div className="mt-4">
                                    <p className="font-medium text-gray-800">{item.name}, {item.age} ({item.location})</p>
                                </div>

                                {/* Review Rating */}
                                <div className="flex flex-col justify-center items-center gap-1 mt-3 text-green-600">
                                    <div className='flex'>
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={20} className="fill-green-500 text-green-500" />
                                    ))}
                                    </div>
                                    <span className="ml-2 text-gray-700">5 star rated on {item.reviewSource}</span>
                                </div>

                                {/* Button */}
                                <button className="mt-5 px-6 py-2 bg-[#305b62] text-white rounded-full shadow hover:bg-[#3e3e3e] transition">
                                    READ MORE
                                </button>
                            </div>
                        )
                    }
                </div>
            </div>


        </div>
    );
};

export default Section9;
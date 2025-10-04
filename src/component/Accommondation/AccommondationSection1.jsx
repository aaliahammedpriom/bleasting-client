import React, { useContext } from 'react';
import { Parallax } from 'react-parallax';
import { AuthContext } from '../../provider/AuthProvider';

const AccommondationSection1 = () => {
    const {logo}= useContext(AuthContext)
    return (
        <div>
            {/* top section */}
            <div className="md:flex flex-wrap bg-white ">
                {/* left */}
                <div
                    className="md:w-1/2 bg-fixed bg-contain bg-no-repeat flex flex-col"
                    style={{
                        backgroundImage: `url(${logo})`,
                    }}
                >
                    <div className=" bg-white/90 flex flex-col justify-between">
                        <div className="max-sm:hidden flex justify-center pt-10 md:px-40">
                            <img className='w-30'
                                src={logo}
                            />
                        </div>

                        <div className="flex flex-col gap-5 justify-around text-[#000000] px-10 py-10">
                            <h1 className="text-2xl md:text-4xl font-bold text-center md:px-32 uppercase">
                                Bleasting ACCOMMODATION
                            </h1>
                            <div>
                                <img src="https://static.wixstatic.com/media/2c0265_54e50ab820e34345a3f6ba782634166e~mv2.png/v1/fill/w_600,h_290,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/29519A84-EC8B-4EA8-9A08-E4C016A69137.png" alt="" />
                            </div>

                            <div className='flex flex-col gap-5 md:px-16'>
                                <p><span className='font-bold'>Unmatched Comfort and Luxury:</span> Our commitment to your comfort is unparalleled. Each Room features air-conditioning, cosy living spaces, and comfy mattresses to ensure a wonderful night's sleep after a hard day's training and exercise. Modern amenities such as hot water showers, storage pantries, refrigerators, cable TV, wireless internet, safety boxes and coffee and tea facilities are at your disposal. Step onto your private balcony and immerse yourself in the tropical ambience of Phuket.</p>
                                <p><span className='font-bold'>Swimming Pools:</span> Refresh and revitalise in our retreat's tranquil pools, surrounded by the soothing sounds of nature and swaying palm trees. Lounge by the water and discover true relaxation.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* right */}
                <div className="max-sm:hidden md:w-1/2 flex">
                    <Parallax
                        className="w-full"
                        blur={{ min: 0, max: 0 }}
                        bgImage={
                            "https://static.wixstatic.com/media/2c0265_8b559c8948104c1ca0f6a063b7757247~mv2.jpg/v1/fill/w_493,h_848,al_c,q_85,enc_avif,quality_auto/2c0265_8b559c8948104c1ca0f6a063b7757247~mv2.jpg"
                        }
                        bgImageAlt="fitness retreat"
                        strength={200}
                    >
                        {/* height auto-matches left side */}
                        <div className="h-full" />
                    </Parallax>
                </div>
            </div>
            {/* bottom section */}
            <div className="w-full md:flex">
                {/* left image */}
                <div className="md:w-1/2 h-[400px]">
                    <img
                        src="https://static.wixstatic.com/media/6f7529_e8a5a4080b5c45e780f8796c669e5b95~mv2.jpg/v1/fill/w_600,h_398,al_c,lg_1,q_80,enc_avif,quality_auto/6f7529_e8a5a4080b5c45e780f8796c669e5b95~mv2.jpg"
                        alt=""
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* right image */}
                <div className="md:w-1/2 h-[400px]">
                    <img
                        src="https://static.wixstatic.com/media/6f7529_a3e57a8ee46e4844a72e2171f157c300~mv2.jpg/v1/fill/w_676,h_448,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/6f7529_a3e57a8ee46e4844a72e2171f157c300~mv2.jpg"
                        alt=""
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

        </div>
    );
};

export default AccommondationSection1;

import React from 'react';

const FitnessPlanSection7 = () => {
    return (
        <div className='bg-fixed bg-cover bg-no-repeat'
            style={{
                backgroundImage:
                    "url('https://static.wixstatic.com/media/11062b_13eb4134e847475e8dad19ee8b34212c~mv2_d_7062_4713_s_4_2.jpg')",
            }}>
            <div className='bg-white/80'>
                {/* top section */}
                <div className='md:flex py-5'>
                    {/* left side */}
                    <div>
                        <img src="https://static.wixstatic.com/media/2c0265_fa04bbe657bf4332b1b0369ef5d37328~mv2.png/v1/fill/w_600,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2c0265_fa04bbe657bf4332b1b0369ef5d37328~mv2.png" alt="" />
                    </div>
                    {/* right side */}
                    <div>
                        <img src="https://static.wixstatic.com/media/2c0265_8f59b2b4dfd44fc29a7accfa144748bf~mv2.png/v1/fill/w_423,h_113,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2c0265_8f59b2b4dfd44fc29a7accfa144748bf~mv2.png" alt="" />
                        <img src="https://static.wixstatic.com/media/2c0265_05fb7de0c78b4db0b8cd5d2438b45ddc~mv2.png/v1/fill/w_600,h_417,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2c0265_05fb7de0c78b4db0b8cd5d2438b45ddc~mv2.png" alt="" />
                    </div>

                </div>

                {/* bottom section */}
                <div className=' w-[80vw] m-auto flex-wrap-reverse flex items-center'>
                    {/* left side */}
                    <div className='md:w-1/2 flex flex-col gap-5'>
                        <img src="https://static.wixstatic.com/media/2c0265_1f4324cd8f994776a2c1147cd18ef0da~mv2.png/v1/fill/w_412,h_109,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2c0265_1f4324cd8f994776a2c1147cd18ef0da~mv2.png" alt="" />
                        <div className='text-[#305b62]'>
                            <p>"Following my stay with Bleasting, my biggest fear was that I would not be able to continue my weight lose journey, and keep up the disciplines I had learned on my stay. I found the 4 week complimentary online coaching really helpful when I returned home, as it enabled me to keep getting direction and support from my coaches. Since then i've felt comfortable to go it alone, and today my weight is 85kg! Thanks for everyone involved with Bleasting on helping me improve my life!"</p>
                        </div>
                        <div className='flex justify-center'><button className='btn rounded-full text-white p-5 bg-[#305b62]'>CHAT TO US</button></div>

                    </div>
                    {/* right side */}
                    <div className='md:w-1/2'>
                        <img src="https://static.wixstatic.com/media/2c0265_fa04bbe657bf4332b1b0369ef5d37328~mv2.png/v1/fill/w_600,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2c0265_fa04bbe657bf4332b1b0369ef5d37328~mv2.png" alt="" />
                    </div>


                </div>

            </div>
        </div>
    );
};

export default FitnessPlanSection7;
import React from 'react';

const FitnessPlanSection5 = () => {
    return (
        <div className='bg-fixed bg-cover bg-no-repeat'
            style={{
                backgroundImage:
                    "url('https://static.wixstatic.com/media/11062b_13eb4134e847475e8dad19ee8b34212c~mv2_d_7062_4713_s_4_2.jpg')",
            }}>
            <div className='bg-white/80'>
                <div className=' w-[70vw] m-auto flex flex-col gap-5  pt-10'>

                    {/* left side */}
                    <h1 className='text-[#000000] text-2xl md:text-5xl text-center font-bold uppercase'>Nicks training plan</h1>
                    {/* right side */}
                    <img src="https://static.wixstatic.com/media/2c0265_d595c467aab94e70b9de41f2089edc91~mv2.png/v1/fill/w_788,h_422,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2c0265_d595c467aab94e70b9de41f2089edc91~mv2.png" alt="" />

                </div>
            </div>
        </div>
    );
};

export default FitnessPlanSection5;
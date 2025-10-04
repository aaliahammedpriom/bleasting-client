import React from 'react';
import { BsChatLeftDots } from 'react-icons/bs';

const PricingSection3 = () => {
    return (
        <div>
            <div className='flex justify-center pt-10' >
                <img src="https://static.wixstatic.com/media/2c0265_7563d9933f9547f192e700abd70b00a1~mv2.png/v1/fill/w_491,h_413,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/23359_edited.png" alt="" />
            </div>
            <div>
                <h2 className='md:text-3xl text-[#305b62] uppercase font-bold md:px-20 pb-5 md:text-center'>for full understanding of what is included in your package, view our sample client pack or explore our retreat</h2>
            </div>
            <div className='flex flex-wrap max-sm:gap-1 justify-around text-white md:p-10'>
                <button className='btn bg-[#305b62] text-white rounded-full p-5 md:text-2xl '>VIEW SAMPLE CLIENT PLAN</button>
                <button className='btn bg-[#305b62] text-white rounded-full p-5 md:text-2xl '>CHAT TO US <BsChatLeftDots /></button>
                <button className='btn bg-[#305b62] text-white rounded-full p-5 md:text-2xl '>FITNESS PLAN</button>
            </div>
        </div>
    );
};

export default PricingSection3;
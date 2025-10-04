import React from 'react';

const MealPlanSection3 = () => {
    return (
        <div className="md:flex pt-10 bg-white text-[#305b62]">


            {/* left */}
            <div className="md:w-3/5 h-full  bg-[#305b62] ">
                <img src="https://static.wixstatic.com/media/2c0265_5beccbcffe3546ebb8ee5ce2cdfa4076~mv2.jpg/v1/fill/w_1704,h_960,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Image%2025-04-2025%20at%2012_28.jpg" alt="" />
            </div>

            {/* right */}
            <div className='md:w-2/5 p-5 md:p-10'>
                <div className='flex flex-col gap-2 text-[#305b62]'>
                    <h1 className='text-3xl md:text-4xl font-bold uppercase ' >whats included</h1>
                    <h1 className='font-bold' >Included Within The Meal Plan:</h1>
                    <ol className=' list-disc px-10 '>
                        <li>2 x Daily meals</li>
                        <li>1 x Daily snack</li>
                        <li>1 x Daily protein shake</li>
                    </ol>
                    <h1 className='font-bold'>Not Included:</h1>
                    <ol className=' list-disc px-10 '>
                        <li>Daily evening meal</li>
                    </ol>
                    <h1 className='font-bold'>Guidance For Evening Meal:</h1>
                    <ol className=' list-disc px-5 md:px-10 '>
                        <li>We provide our guests with the remaining calories they have for their evening meals.</li>
                        <li>We also provide our guests with the remaining protein targets they have for their evening meal.</li>
                        <li>We give specific restaurant and meal reccomendations during the orientation, to ensure our guests can clearly follow their plan</li>
                    </ol>
                </div>

            </div>

        </div>
    );
};

export default MealPlanSection3;
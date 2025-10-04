import React from 'react';
const data = [
    {
        "topic": "meals_included",
        "description": "During your fitness retreat, breakfast, lunch, snacks, and nutritional drinks are included in the package."
    },
    {
        "topic": "partnership",
        "description": "We've partnered with Pure PreP PHUKET, the area's most popular health food outlet, which offers a diverse menu showcasing delicious options for all dietary preferences."
    },
    {
        "topic": "transparency",
        "description": "What sets Pure PreP PHUKET apart is its transparency, providing comprehensive food composition and calorie information for every dish."
    },
    {
        "topic": "personalised_meal_plan",
        "description": "Before you even arrive in Phuket, Thailand, our trainers will take your preferences and fitness goals into account, providing you with a personalised meal plan that is changed weekly."
    },
    {
        "topic": "meal_collection_and_delivery",
        "description": "Upon arrival, you will be able to visit Pure PreP PHUKET, located in close proximity to your hotel, where you can conveniently collect your orders daily, or if you prefer, you can have your meals delivered to your hotel."
    }
]
const FitnessPlanSection9 = () => {
    return (
        <div className='bg-fixed bg-cover min-h-screen bg-no-repeat'
            style={{
                backgroundImage:
                    "url('https://static.wixstatic.com/media/11062b_13eb4134e847475e8dad19ee8b34212c~mv2_d_7062_4713_s_4_2.jpg')",
            }}>
            <div className='min-h-screen  bg-white/80'>
                <div className=' relative '>
                    <div className=' md:w-[70vw] m-auto text-[#305b62] max-sm:m-5 md:pr-[30vw] '>


                        <h1 className='text-[#305b62] text-2xl md:text-4xl font-bold uppercase py-10'>WHAT WILL YOU BE EATING?</h1>
                        <div className='flex flex-col gap-5'>
                        {
                            data.map((item, idx) => {
                                return (
                                    <li className='font-semibold list-disc'>{item.description}</li>

                                )
                            })
                        }
                        </div>

                    </div>
                    <img className='md:absolute border-6 border-[#305b62] top-[1vh] right-[11vw] max-sm:w-full rounded-full' src="https://static.wixstatic.com/media/6f7529_3ec53088eebc406fb7e505a9b9eab84b~mv2.jpg/v1/crop/x_172,y_0,w_741,h_741/fill/w_201,h_201,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/6f7529_3ec53088eebc406fb7e505a9b9eab84b~mv2.jpg" alt="" />

                    <img className='md:absolute border-6 border-[#305b62] top-[15vh] right-[25vw] max-sm:w-full rounded-full' src="https://static.wixstatic.com/media/6f7529_6b94fe049d354b978d2cac1f7c479625~mv2.jpg/v1/crop/x_480,y_3,w_958,h_957/fill/w_253,h_253,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/6f7529_6b94fe049d354b978d2cac1f7c479625~mv2.jpg" alt="" />

                    <img className='md:absolute border-6 border-[#305b62] top-[30vh] right-[1vw] max-sm:w-full rounded-full' src="https://static.wixstatic.com/media/6f7529_d4edc3985d8c4545bc533378da4a6287~mv2.webp/v1/fill/w_168,h_168,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/fruit.webp" alt="" />

                    <img className='md:absolute border-6 border-[#305b62] top-[57vh] right-[22vw] max-sm:w-full rounded-full' src="https://static.wixstatic.com/media/11062b_0cd1fa2ed3f74a82ba1226c3993ddd49~mv2_d_6016_4016_s_4_2.jpg/v1/crop/x_1000,y_0,w_4016,h_4016/fill/w_156,h_156,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Smoothie%20Bowl.jpg" alt="" />

                    <img className='md:absolute border-6 border-[#305b62] top-[63vh] right-[1vw] max-sm:w-full rounded-full' src="https://static.wixstatic.com/media/6f7529_a2858eb0720547f4aeb39df558eae1d4~mv2.jpg/v1/crop/x_198,y_0,w_512,h_512/fill/w_211,h_211,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/home%201.jpg" alt="" />
                </div> 
            </div>
        </div>
    );
};

export default FitnessPlanSection9;
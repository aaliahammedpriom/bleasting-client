import React from 'react';
const data = [
    {
        "topic": "calorie_burn",
        "description": "Each client's fitness routine is carefully curated to meet a daily target calorie burn according to the client's target goal."
    },
    {
        "topic": "calorie_intake",
        "description": "Meal plans are designed to provide clients the nutrition and energy they require, while placing them in a safe calorie deficit."
    },
    {
        "topic": "daily_macros",
        "description": "Daily macros are calculated depending on the goals and training schedule of the client.",
        "example": "A client with muscle gain goals will have a higher amount of protein in their diet."
    },
    {
        "topic": "weekly_reviews",
        "description": "All plans are reviewed and adjusted weekly, after the weekly debrief and measurements have taken place, to ensure the desired goals are being met."
    }
]


const FitnessPlanSection6 = () => {
    return (
        <div className='bg-fixed bg-cover bg-no-repeat'
            style={{
                backgroundImage:
                    "url('https://static.wixstatic.com/media/11062b_13eb4134e847475e8dad19ee8b34212c~mv2_d_7062_4713_s_4_2.jpg')",
            }}>
            <div className='bg-[#000000]/80'>
                <div className='py-10'>
                    <h1 className='text-white text-2xl md:text-5xl text-center font-bold uppercase'>Nicks training plan</h1>
                    <div className='md:w-[80vw] m-auto md:flex gap-10 max-sm:px-5 pt-10'>
                        {/* left side */}
                        <div className='md:w-2/5 text-[#000000] font-bold shadow-2xl rounded-2xl p-5 md:p-10 bg-white'>
                            <h2 className='text-2xl md:text-4xl text-center pb-10'>MEAL PLAN</h2>
                            {
                                data.map((item, idx) => {
                                    return (
                                        <div className='py-1'>
                                            <h3 className='text-center uppercase '>{item.topic}</h3>
                                            <li className='font-semibold list-disc'>{item.description}</li>
                                        </div>)
                                })
                            }
                        </div>
                        {/* right side */}
                        <div className='md:w-3/5'>
                            <img src="https://static.wixstatic.com/media/2c0265_18cb19067fb44910a355b12761276b5d~mv2.png/v1/fill/w_600,h_628,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/newsitemp2.png" alt="" />

                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default FitnessPlanSection6;
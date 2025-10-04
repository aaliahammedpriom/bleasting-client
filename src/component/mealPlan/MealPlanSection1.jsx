import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const MealPlanSection1 = () => {
    const { logo } = useContext(AuthContext)
    return (
        <div className="min-h-screen md:flex  bg-white">
            {/* left */}
            <div className='md:w-1/2 bg-fixed bg-contain bg-no-repeat '
                style={{
                    backgroundImage: `url(${logo})`,
                }}>

                <div className='h-full w-full bg-white/90'>
                    <div className='md:py-5'>
                        <div className='max-sm:hidden flex h-24 md:h-40 justify-center py-5 '>
                            <img src={logo} alt="" />
                        </div>
                        <div className='flex flex-col gap-5 text-[#305b62] px-5 md:px-32'>
                            <h1 className='text-4xl font-bold uppercase ' >Meal Plans designed just for you</h1>
                            <p>
                                At <span className='font-bold'>Bleasting</span>, we understand that you can't out-train a bad diet. The most important factor in achieving the body transformation of your dreams is having a well-designed meal plan.
                            </p>



                            <p className='flex flex-col gap-4 font-bold '>
                                <span>To achieve this, we provide each guest with a unique meal plan that aligns with their specific fitness goals. All meal plans are calorie & macro-counted to align perfectly with your transformation goals.</span>
                                <span>We have a huge variety of meals to choose from, ensuring we can cater for all tastes.</span>
                                <span>In addition, we are able to cater for all dietary requirements, whether it be halal, vegetarian, non-dairy, etc... Just make your requirements clear on application, and we will take care of the rest</span>
                            </p>
                            <h1 className='text-2xl font-bold uppercase ' >
                                learn everything you need to know by watching our educational video
                            </h1>
                        </div>
                    </div>
                </div>

            </div>

            {/* right */}
            <div className="md:w-1/2 md:px-10 bg-[#305b62] ">
                <iframe
                    src="https://www-prime-revive-com.filesusr.com/html/2c0265_b1a0f7d79ae5a7a5c02319ee969d7889.html"
                    className="w-full h-full max-sm:h-screen"
                ></iframe>
            </div>
        </div>
    );
};

export default MealPlanSection1;

import React, { useContext } from 'react';
import ContactFaqForm from '../../component/Pricing/PricingFaqForm';
import { AuthContext } from '../../provider/AuthProvider';


const FitnessPlanSection8 = () => {
    const {logo, logo2 }= useContext(AuthContext)
    return (
        <div className="relative w-full min-h-screen overflow-hidden">
            {/* Background Image */}
            <div
                className=" bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://static.wixstatic.com/media/11062b_13eb4134e847475e8dad19ee8b34212c~mv2_d_7062_4713_s_4_2.jpg')",
                }}
            >
                {/* Semi-transparent overlay */}
                <div className="bg-[#305b62]/90">
                    {/* Content */}
                    <div className=" md:w-[80vw] m-auto  md:p-10">
                        <div className=" md:pt-10 flex max-sm:flex-wrap items-center justify-between gap-10  ">
                            {/* left content */}
                            <div className='min-w-1/3 flex flex-col items-center gap-5 '>
                                <div>
                                    <img className='w-[250px]' src={logo2} alt="" />
                                </div>
                                <div className='flex flex-col items-center gap-2'>
                                    <img className='w-[150px] rounded-full' src={logo} alt="" />
                                    <div>
                                        <button className='btn p-5 rounded-full'> CHAT WITH US</button>

                                    </div>
                                </div>
                                <div>
                                    <img src="https://static.wixstatic.com/media/2c0265_070675cfcad145dda9768e632cc149e5~mv2.png/v1/fill/w_372,h_238,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2c0265_070675cfcad145dda9768e632cc149e5~mv2.png" alt="" />
                                </div>
                                <div>
                                    <img src="https://static.wixstatic.com/media/2c0265_fa04bbe657bf4332b1b0369ef5d37328~mv2.png/v1/fill/w_600,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2c0265_fa04bbe657bf4332b1b0369ef5d37328~mv2.png" alt="" />
                                </div>

                            </div>
                            {/* right content */}
                            <div className='md:min-w-1/2 flex flex-col gap-5'>
                                <p className=' md:text-2xl text-white uppercase font-bold text-center '>
                                    To Receive personalised pricing, Complete the short form below. We'll provide you with a free, detailed retreat plan and pricing within 24 hours.
                                </p>
                                {/* contact form */}
                                <ContactFaqForm />

                            </div>
                        </div>


                    </div>
                </div>
            </div>




        </div>
    );
};

export default FitnessPlanSection8;
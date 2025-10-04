import React, { useContext } from 'react';
import ContactFormTable from '../ContactFormTable ';
import { AuthContext } from '../../provider/AuthProvider';

const Section7 = () => {
    const  { logo, logo2} = useContext(AuthContext)
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
                    <div className=" md:w-[80vw] m-auto p-5 md:p-10">
                        <div className=" pt-10 md:flex  items-center justify-between gap-10  ">
                            {/* left content */}
                            <div className='md:min-w-1/3 flex flex-col items-center gap-5 pb-5'>
                                <div>
                                    <img className='w-[250px]' src={logo} alt="" />
                                </div>
                                <div className='flex flex-col items-center gap-2'>
                                    <img className='w-[150px] rounded-full' src={logo2} alt="" />
                                    <div>
                                        <button className='btn p-5 rounded-full'> SAMPLE PLAN</button>

                                    </div>
                                </div>
                                <div className='flex flex-col items-center gap-2'>
                                    <img className='w-[150px] rounded-full' src="https://static.wixstatic.com/media/453a0f_57934ae89681465486e9b388e9c8c01d~mv2.jpg/v1/crop/x_890,y_0,w_2658,h_2496/fill/w_248,h_230,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/google%20pic%201.jpg" alt="" />
                                    <div>
                                        <button className='btn p-5 rounded-full'>FITNESS PLAN</button>

                                    </div>
                                </div>

                            </div>
                            {/* right content */}
                            <div className='min-w-1/2 flex flex-col gap-5'>
                                <p className=' text-2xl text-white uppercase font-bold text-center '>
                                    contact a retreat expert to understand how we can build your transformation plan
                                </p>
                                {/* contact form */}
                                <div className='bg-[#305b62]'>
                                    <ContactFormTable></ContactFormTable>
                                </div>

                            </div>
                        </div>


                    </div>
                </div>
            </div>




        </div>
    );
};

export default Section7;
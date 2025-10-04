import React, { useContext } from 'react';
import { BsChatLeftDots } from 'react-icons/bs';
import { FaInstagram } from 'react-icons/fa';
import { FaSquareFacebook } from 'react-icons/fa6';
import { AuthContext } from '../../provider/AuthProvider';

const Footer = () => {
    const {logo , logo2}= useContext(AuthContext)
    return (
        <div className=" bg-[#000000] flex justify-around items-center py-4">
            {/* left part */}
            <div  className='max-sm:hidden w-1/3'></div>
            {/* center part */}
            <div className='flex gap-2 items-center h-[40px] md:w-1/3'>
                <div>
                    <div className='flex gap-2 items-center '>
                        <div>
                            <img src={logo2} className=' h-[50px]' alt="" />
                        </div>
                    </div>
                </div>
                <div className='flex items-center gap-2' >

                    {/* instagram */}
                    <div>
                        <button className='text-white text-[40px]'><FaInstagram /></button>
                    </div>
                    {/* facebook */}
                    <div>
                        <button className='text-white text-[40px]'><FaSquareFacebook /></button>
                    </div>
                </div>
            </div>
            {/* right part */}
            <div className='max-sm:hidden w-1/3 flex justify-center'>
                <button className=' flex btn btn-xl font-bold font-transparent text-3xl text-[#000000] rounded-full bg-[#e8d0a8] p-4 '><p><BsChatLeftDots /></p><p>Let's Chat !</p></button>
            </div>
        </div>
    );
};

export default Footer;
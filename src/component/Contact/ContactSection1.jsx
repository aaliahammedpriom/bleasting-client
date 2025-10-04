import React from 'react';
import RandomWave from '../../component/home/RandomWave'
import ContactFormGrid from '../../component/ContactFormTable '

const ContactSection1 = () => {
    return (
        <div className='  bg-cover bg-center bg-no-repeat '
            style={{
                backgroundImage:
                    "url('https://static.wixstatic.com/media/6f7529_c10c8b99c52b4abab5af72a1979b5fc4~mv2.jpg/v1/fill/w_533,h_734,al_c,q_85,enc_avif,quality_auto/6f7529_c10c8b99c52b4abab5af72a1979b5fc4~mv2.jpg')",
            }}>
            <div className='h-full w-full bg-white/80'>
                <RandomWave curves={100} width={1440} height={30} fill="#305b62" />

                <div className='md:w-[70vw] max-sm:px-5  m-auto flex flex-col  gap-10  py-10'>
                    <div className='max-md:hidden w-2/5 h-30  m-auto flex justify-center '>
                        <img className='h-30' src="https://static.wixstatic.com/media/6f7529_69f789932bd441a9a1aec5d4293cc3ed~mv2.png/v1/fill/w_164,h_224,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/prime_revive_logo_edited.png" alt="" />
                        <img src="https://static.wixstatic.com/media/6f7529_0a8df8c57e944ce6b9d36aadf4b1264c~mv2.png/v1/fill/w_810,h_224,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/prime_revive_logo_edited.png" alt="" />
                        <img className='h-30' src="https://static.wixstatic.com/media/6f7529_69f789932bd441a9a1aec5d4293cc3ed~mv2.png/v1/fill/w_164,h_224,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/prime_revive_logo_edited.png" alt="" />
                    </div>
                    <h1 className='md:text-xl font-bold text-[#305b62] text-center ' >Our Bleasting body transformation experts are here to help, contact us today with any queries you may have. Alternatively send us a message on Whatsapp +66629327367. </h1>
                    <div className='md:w-1/2 m-auto'>
                        <ContactFormGrid></ContactFormGrid>
                    </div>
                </div>
                <RandomWave curves={100} width={1440} rotation={true} height={30} fill="#305b62" />

            </div>

        </div>
    );
};

export default ContactSection1;
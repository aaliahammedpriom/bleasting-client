import React from 'react';
import ContactFaqForm from '../../component/Pricing/PricingFaqForm';
import ContactSection1 from '../../component/Pricing/PricingSection1';
import ContactSection3 from '../../component/Pricing/PricingSection3';

const Pricing = () => {
    return (
        <div
            className="bg-white"
            style={{
                backgroundImage: "url('https://static.wixstatic.com/media/6f7529_40f831cec4a748118e773a38c1c6b685~mv2.jpg/v1/fill/w_1351,h_1950,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/6f7529_40f831cec4a748118e773a38c1c6b685~mv2.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className='bg-white/80'>
                <div className="w-[70vw] m-auto ">
                    <ContactSection1 />
                    <ContactFaqForm />
                    <ContactSection3 />
                </div>
            </div>
        </div>
    );
};

export default Pricing;
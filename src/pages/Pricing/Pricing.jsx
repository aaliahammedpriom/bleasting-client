import React, { useContext } from 'react';
import ContactFaqForm from '../../component/Pricing/PricingFaqForm';
import ContactSection1 from '../../component/Pricing/PricingSection1';
import ContactSection3 from '../../component/Pricing/PricingSection3';
import { AuthContext } from '../../provider/AuthProvider';

const Pricing = () => {
    const{logo}=useContext(AuthContext)
    return (
        <div
            className="bg-white"
            style={{
                backgroundImage: `url(${logo})`,
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
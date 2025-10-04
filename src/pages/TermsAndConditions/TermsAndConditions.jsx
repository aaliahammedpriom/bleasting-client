import React from 'react';
import TermsAndConditionsSection1 from "../../component/TermsAndConditions/TermsAndConditionsSection1";


const TermsAndConditions = () => {
    return (
        <div className='bg-white text-[#000000]'>
            <div
                className="min-h-screen bg-cover bg-center bg-fixed bg-no-repeat"
                style={{
                    backgroundImage: "url('https://static.wixstatic.com/media/6f7529_69f789932bd441a9a1aec5d4293cc3ed~mv2.png/v1/fill/w_589,h_480,al_c,q_85,enc_avif,quality_auto/6f7529_69f789932bd441a9a1aec5d4293cc3ed~mv2.png')",
                }}
            >
                <div className='bg-[#e8d0a8]/80'>
                    <TermsAndConditionsSection1 />
                </div>
            </div>
        </div>
    );
};

export default TermsAndConditions;

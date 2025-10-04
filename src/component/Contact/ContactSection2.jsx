import React from 'react';

const ContactSection2 = () => {
    return (
        <div
            className="relative m-auto bg-fixed rounded-[50%] bg-cover bg-no-repeat mt-10"
            style={{
                backgroundImage:
                    "url('https://static.wixstatic.com/media/6f7529_10f37979c7ab4e49bf0793b05413af67~mv2.jpeg/v1/fill/w_1202,h_549,al_c,q_85,enc_avif,quality_auto/6f7529_10f37979c7ab4e49bf0793b05413af67~mv2.jpeg')",
            }}
        >
            {/* Gradient Top Overlay */}
            <div
                className="absolute top-0 left-0 w-full h-30 z-10 rounded-t-[100%]"
                style={{ background: 'linear-gradient(to bottom, #305b62, transparent)' }}
            ></div>

            {/* Gradient Bottom Overlay */}
            <div
                className="absolute bottom-0 left-0 w-full h-30 z-10 rounded-b-[100%]"
                style={{ background: 'linear-gradient(to top, #305b62, transparent)' }}
            ></div>

            <div className=" md:w-4/5 md:h-[500px] m-auto p-16 md:p-30" >
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7904.788711105537!2d98.339909!3d7.853730999999999!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30502fa2304437e5%3A0x36db976020fcc867!2sChanakan%20Delight%20Chalong!5e0!3m2!1sen!2sth!4v1755939918436!5m2!1sen!2sth"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map"
                ></iframe>
            </div>
        </div>
    );
};

export default ContactSection2;

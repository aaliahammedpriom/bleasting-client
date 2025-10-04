import React from 'react';
import ContactSection1 from '../../component/Contact/ContactSection1'
import ContactSection2 from '../../component/Contact/ContactSection2'
import ContactSection3 from '../../component/Contact/ContactSection3'


const Contact = () => {
    return (
       <div className=' bg-[#000000]'>
        <ContactSection1></ContactSection1>
        <ContactSection2></ContactSection2>
        <ContactSection3></ContactSection3>
       </div>
    );
};

export default Contact;

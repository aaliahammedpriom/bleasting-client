import React from 'react';
import ClientExperiensesSectin1 from '../../component/clientExperiences/ClientExperiencesSection1'
import ClientExperiensesSectin2 from '../../component/clientExperiences/ClientExperiensesSectin2';
import ClientExperiensesSectin3 from '../../component/clientExperiences/ClientExperiensesSectin3';
import ClientExperiensesSectin4 from '../../component/clientExperiences/ClientExperiensesSectin4';
const ClientExperienses = () => {
    return (
        <div className='bg-white'>
           <ClientExperiensesSectin1></ClientExperiensesSectin1>
           <ClientExperiensesSectin2></ClientExperiensesSectin2>
           <ClientExperiensesSectin3></ClientExperiensesSectin3>
           <ClientExperiensesSectin4></ClientExperiensesSectin4>
        </div>
    );
};

export default ClientExperienses;
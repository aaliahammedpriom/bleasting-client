import React from 'react';
import { Outlet } from 'react-router-dom';
import UserAccountHeader from '../component/UserAccount/UserAccountHeader';

const UserAccount = () => {
    return (
        <div className='md:w-[70vw] m-auto'>
            <UserAccountHeader></UserAccountHeader>
            <Outlet></Outlet>
        </div>
    );
};

export default UserAccount;
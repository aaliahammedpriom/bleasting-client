import React from 'react';
import { NavLink } from 'react-router-dom';

const MyAddressesSection1 = () => {
    return (
        <div className=" text-[#e6c9a8] px-8 py-10">
            {/* Wallet Header */}
            <h2 className="text-2xl font-extrabold uppercase tracking-widest">
                My Addresses
            </h2>
            <p className="text-sm text-gray-200 mt-1">
                Add and manage the addresses you use often.
            </p>
            <hr className="border border-[#e6c9a8] mt-4" />

            {/* Empty Wallet Message */}
            <div className="flex flex-col items-center justify-center text-center mt-20">
                <p className="text-lg font-semibold text-[#e6c9a8]">
                    You haven't saved any addresses yet.
                </p>
                <button className="text-sm btn bg-[#e6c9a8] text-black mt-2 max-w-md">
                    Add New Address
                </button>
            </div>
        </div>
    );
};

export default MyAddressesSection1;
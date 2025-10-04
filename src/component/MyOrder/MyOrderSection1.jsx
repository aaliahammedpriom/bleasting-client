import React from 'react';
import { NavLink } from 'react-router-dom';

const MyOrderSection1 = () => {
    return (
        <div className=" text-[#e6c9a8] px-8 py-10">
            {/* Order Header */}
            <h2 className="text-2xl font-extrabold uppercase tracking-widest">
                My Orders
            </h2>
            <p className="text-sm text-gray-200 mt-1">
                View your order history or check the status of a recent order.
            </p>
            <hr className="border border-[#e6c9a8] mt-4" />

            {/* Empty Order Message */}
            <div className="flex flex-col items-center justify-center text-center mt-20">
                <p className="text-lg font-semibold text-[#e6c9a8]">
                    You haven't placed any orders yet.
                </p>
                <NavLink to={'/'} className="text-sm underline text-gray-300 mt-2 max-w-md">
                    Start Browsing
                </NavLink>
            </div>
        </div>
    );
};

export default MyOrderSection1;
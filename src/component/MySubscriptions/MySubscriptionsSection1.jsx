import React from 'react';
import { NavLink } from 'react-router-dom';

const MySubscriptionsSection1 = () => {
    return (
        <div className=" text-[#e6c9a8] px-8 py-10">
            {/* Wallet Header */}
            <h2 className="text-2xl font-extrabold uppercase tracking-widest">
                Subscriptions
            </h2>
            <p className="text-sm text-gray-200 mt-1">
                View and manage the subscriptions you've purchased.
            </p>
            <hr className="border border-[#e6c9a8] mt-4" />

            {/* Empty Wallet Message */}
            <div className="flex flex-col items-center justify-center text-center mt-20">
                <p className="text-lg font-semibold text-[#e6c9a8]">
                    No purchased subscriptions
                </p>
                <p className="text-sm text-gray-300 mt-2 max-w-md">
                    When you purchase a subscription, it'll appear here.
                </p>
                <NavLink to={'/'} className="text-sm underline text-gray-300 mt-2 max-w-md">
                    View Plans & Pricing
                </NavLink>
            </div>
        </div>
    );
};

export default MySubscriptionsSection1;
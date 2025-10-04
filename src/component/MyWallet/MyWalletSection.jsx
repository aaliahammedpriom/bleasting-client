import React from 'react';

const MyWalletSection = () => {
    return (
        <div className=" text-[#e6c9a8] px-8 py-10">
            {/* Wallet Header */}
            <h2 className="text-2xl font-extrabold uppercase tracking-widest">
                Wallet
            </h2>
            <p className="text-sm text-gray-200 mt-1">
                Save your payment details for faster checkout.
            </p>
            <hr className="border border-[#e6c9a8] mt-4" />

            {/* Empty Wallet Message */}
            <div className="flex flex-col items-center justify-center text-center mt-20">
                <p className="text-lg font-semibold text-[#e6c9a8]">
                    You haven’t saved any payment methods yet
                </p>
                <p className="text-sm text-gray-300 mt-2 max-w-md">
                    Securely save your payment details for faster checkout whenever you
                    place an order.
                </p>
            </div>
        </div>
    );
};

export default MyWalletSection;
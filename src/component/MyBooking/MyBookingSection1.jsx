import React from 'react';

const MyBookingSection1 = () => {
    return (
        <div className=" text-[#e6c9a8] px-8 py-10">
            {/* Wallet Header */}
            <h2 className="text-2xl font-extrabold uppercase tracking-widest">
                My Booking
            </h2>
            <p className="text-sm text-gray-200 mt-1">
                View your booking history or check the status of a recent booking.
            </p>
            <hr className="border border-[#e6c9a8] mt-4" />

            {/* Empty Wallet Message */}
            <div className="flex flex-col items-center justify-center text-center mt-20">
                <p className="text-lg font-semibold text-[#e6c9a8]">
                    You haven't any booking yet.
                </p>
                <p className="text-sm underline text-gray-300 mt-2 max-w-md">
                    Start Booking.
                </p>
            </div>
        </div>
    );
};

export default MyBookingSection1;
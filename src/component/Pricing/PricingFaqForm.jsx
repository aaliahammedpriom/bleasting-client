import React from 'react';

const PricingFaqForm = () => {
    return (
        <div className="w-full flex justify-center items-center max-sm:pt-5">
            <form className="w-full max-w-lg bg-[#305b62] p-2 md:p-8  text-white">
                <h2 className="text-2xl font-bold mb-6 ">
                    Receive Your Retreat Plan
                </h2>

                {/* Full Name */}
                <div className="mb-4">
                    <label className="block mb-1 text-sm">Full Name</label>
                    <input
                        type="text"
                        placeholder="Enter your full name"
                        className="w-full border-b border-white bg-transparent py-2 text-white focus:outline-none placeholder-white placeholder-opacity-70"
                    />
                </div>

                {/* Email */}
                <div className="mb-4">
                    <label className="block mb-1 text-sm">Email *</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full border-b border-white bg-transparent py-2 text-white focus:outline-none placeholder-white placeholder-opacity-70"
                        required
                    />
                </div>

                {/* Age & Gender */}
                <div className="mb-4">
                    <label className="block mb-1 text-sm">Age & Gender</label>
                    <input
                        type="text"
                        placeholder="e.g., 28, Male"
                        className="w-full border-b border-white bg-transparent py-2 text-white focus:outline-none placeholder-white placeholder-opacity-70"
                    />
                </div>

                {/* Current Weight & Height */}
                <div className="mb-4">
                    <label className="block mb-1 text-sm">Current Weight & Height</label>
                    <input
                        type="text"
                        placeholder="e.g., 70kg, 175cm"
                        className="w-full border-b border-white bg-transparent py-2 text-white focus:outline-none placeholder-white placeholder-opacity-70"
                    />
                </div>

                {/* Estimated Length of Stay */}
                <div className="mb-4">
                    <label className="block mb-1 text-sm">Estimated Length Of Stay (Weeks)</label>
                    <input
                        type="number"
                        placeholder="e.g., 2"
                        className="w-full border-b border-white bg-transparent py-2 text-white focus:outline-none placeholder-white placeholder-opacity-70"
                    />
                </div>

                {/* Target Goal */}
                <div className="mb-4">
                    <label className="block mb-1 text-sm">Target Goal (Be Specific)</label>
                    <input
                        type="text"
                        placeholder="e.g., Lose 5kg, improve flexibility"
                        className="w-full border-b border-white bg-transparent py-2 text-white focus:outline-none placeholder-white placeholder-opacity-70"
                    />
                </div>

                {/* Food Preferences */}
                <div className="mb-4">
                    <label className="block mb-1 text-sm">Food Preferences</label>
                    <input
                        type="text"
                        placeholder="e.g., Vegetarian, Gluten-Free"
                        className="w-full border-b border-white bg-transparent py-2 text-white focus:outline-none placeholder-white placeholder-opacity-70"
                    />
                </div>

                {/* Estimated Date/Month of Arrival */}
                <div className="mb-4">
                    <label className="block mb-1 text-sm">Estimated Date/Month of Arrival</label>
                    <input
                        type="text"
                        placeholder="e.g., 15th Oct 2025"
                        className="w-full border-b border-white bg-transparent py-2 text-white focus:outline-none placeholder-white placeholder-opacity-70"
                    />
                </div>

                {/* WhatsApp Number */}
                <div className="mb-4">
                    <label className="block mb-1 text-sm">WhatsApp Number</label>
                    <input
                        type="tel"
                        placeholder="e.g., +8801234567890"
                        className="w-full border-b border-white bg-transparent py-2 text-white focus:outline-none placeholder-white placeholder-opacity-70"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full mt-6 py-2 bg-white text-[#305b62] font-bold rounded-lg hover:bg-gray-200 transition"
                >
                    Submit
                </button>
            </form>
        </div>

    );
};

export default PricingFaqForm;
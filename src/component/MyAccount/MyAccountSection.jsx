// src/components/MyAccountSection.jsx
import React from "react";

const MyAccountSection = () => {
    return (
        <div className=" text-[#e6c9a8] px-8 py-10">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-extrabold uppercase tracking-widest">
                    Account
                </h2>
                <button className="btn btn-outline btn-sm border-[#e6c9a8] text-[#e6c9a8] hover:bg-[#e6c9a8] hover:text-[#2c5b5b]">
                    Update Info
                </button>
            </div>
            <p className="text-sm text-gray-200 mb-8">
                View and edit your personal info below.
            </p>

            {/* Display Info */}
            <div className="border-t border-[#e6c9a8]/40 py-6">
                <h3 className="font-bold text-lg mb-3">Display info</h3>
                <p className="text-sm text-gray-300 mb-4">
                    This information will be visible to all members of this site.
                </p>
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1 space-y-3">
                        <input
                            type="text"
                            placeholder="Display name"
                            defaultValue="A Ali Ahammed Priom"
                            className="input input-bordered w-full bg-white text-black"
                        />
                        <input
                            type="text"
                            placeholder="Title"
                            className="input input-bordered w-full bg-white text-black"
                        />
                    </div>
                    {/* Profile Image */}
                    <div className="flex flex-col items-center">
                        <div className="avatar">
                            <div className="w-20 rounded-full ring ring-[#e6c9a8] ring-offset-base-100 ring-offset-2">
                                <img src="https://via.placeholder.com/150" alt="Profile" />
                            </div>
                        </div>
                        <span className="text-xs text-gray-300 mt-2">Profile Image</span>
                    </div>
                </div>
            </div>

            {/* Personal Info */}
            <div className="border-t border-[#e6c9a8]/40 py-6">
                <h3 className="font-bold text-lg mb-3">Personal info</h3>
                <p className="text-sm text-gray-300 mb-4">
                    Update your personal information.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                    <input
                        type="text"
                        placeholder="First name"
                        defaultValue="A Ali Ahammed"
                        className="input input-bordered w-full bg-white text-black"
                    />
                    <input
                        type="text"
                        placeholder="Last name"
                        defaultValue="Priom"
                        className="input input-bordered w-full bg-white text-black"
                    />
                    <input
                        type="text"
                        placeholder="Phone"
                        className="input input-bordered w-full bg-white text-black md:col-span-2"
                    />
                </div>
                <div className="flex justify-end mt-4">
                    <button className="btn btn-outline btn-sm border-[#e6c9a8] text-[#e6c9a8] hover:bg-[#e6c9a8] hover:text-[#2c5b5b]">
                        Update Info
                    </button>
                </div>
            </div>

            {/* Login Info */}
            <div className="border-t border-[#e6c9a8]/40 py-6">
                <h3 className="font-bold text-lg mb-3">Login info</h3>
                <p className="text-sm text-gray-300 mb-4">
                    View and update your login email and password.
                </p>
                <div className="space-y-3">
                    <p>
                        Login email:{" "}
                        <span className="text-white">aaliahammadpriom66@gmail.com</span>
                    </p>
                    <button className="link text-[#e6c9a8]">Change Email</button>
                    <div>
                        <p>Password: *******</p>
                        <button className="link text-[#e6c9a8]">Change Password</button>
                    </div>
                </div>
                <div className="flex justify-end mt-4">
                    <button className="btn btn-outline btn-sm border-[#e6c9a8] text-[#e6c9a8] hover:bg-[#e6c9a8] hover:text-[#2c5b5b]">
                        Update Info
                    </button>
                </div>
            </div>

            {/* Visibility & Privacy */}
            <div className="border-t py-6">
                <h3 className="font-bold text-lg mb-3">Visibility and privacy</h3>
                <p className="text-sm text-gray-300 mb-2">
                    Update your personal information.
                </p>
                <details className="collapse collapse-arrow ">
                    <summary className="collapse-title font-medium text-[#e6c9a8]">
                        Profile privacy
                    </summary>
                    <div className="collapse-content text-gray-200">
                        <p>Privacy settings content goes here...</p>
                    </div>
                </details>
                <details className="collapse collapse-arrow  mt-3">
                    <summary className="collapse-title font-medium text-[#e6c9a8]">
                        Blocked members
                    </summary>
                    <div className="collapse-content text-gray-200">
                        <p>Blocked members content goes here...</p>
                    </div>
                </details>
            </div>
        </div>
    );
};

export default MyAccountSection;

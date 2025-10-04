import React, { useState } from 'react';
import { BiDownArrow } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';

const UserAccountHeader = () => {
    const [dropdown, setDropdown] = useState('Dashboard Menu')
    return (
        <div className=" text-[#e6c9a8]">
            {/* Profile Section */}
            <div className="flex items-center gap-4 p-6">
                <div className="avatar">
                    <div className="w-20 rounded-full ring ring-[#e6c9a8] ring-offset-base-100 ring-offset-2">
                        <img src="https://lh3.googleusercontent.com/a/ACg8ocLFe1mEy-U340TmeK4NOqyll9svw5nwtX8JxY6hiijCxxXORwUp=s96-c" alt="Profile" />
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl font-bold tracking-wide uppercase">
                        A Ali Ahammed Priom
                    </h2>
                    <p className="text-sm text-gray-200">0 Followers • 0 Following</p>
                </div>
                <div className="ml-auto">
                    <button className="btn btn-ghost btn-circle text-[#e6c9a8]">
                        <span className="text-xl">⋮</span>
                    </button>
                </div>
            </div>

            {/* Tabs */}

            <div className="max-md:hidden bg-white text-[#2c5b5b] font-semibold px-6 py-4 flex justify-around shadow-md">
                <NavLink
                    to="my-wallet"
                    className={({ isActive }) =>
                        isActive ? "text-[#e8d0a8]" : "hover:text-[#e8d0a8]"
                    }
                >
                    My Wallet
                </NavLink>
                <NavLink
                    to="my-orders"
                    className={({ isActive }) =>
                        isActive ? "text-[#e8d0a8]" : "hover:text-[#e8d0a8]"
                    }
                >
                    My Orders
                </NavLink>
                <NavLink
                    to="my-addresses"
                    className={({ isActive }) =>
                        isActive ? "text-[#e8d0a8]" : "hover:text-[#e8d0a8]"
                    }
                >
                    My Addresses
                </NavLink>
                <NavLink
                    to="my-subscriptions"
                    className={({ isActive }) =>
                        isActive ? "text-[#e8d0a8]" : "hover:text-[#e8d0a8]"
                    }
                >
                    My Subscriptions
                </NavLink>
                <NavLink
                    to="my-bookings"
                    className={({ isActive }) =>
                        isActive ? "text-[#e8d0a8]" : "hover:text-[#e8d0a8]"
                    }
                >
                    My Bookings
                </NavLink>
                <NavLink
                    to="my-account"
                    className={({ isActive }) =>
                        isActive ? "text-[#e8d0a8]" : "hover:text-[#e8d0a8]"
                    }
                >
                    My Account
                </NavLink>
            </div>
            {/* mobile screen dropdown */}
            <div className="md:hidden bg-white text-[#2c5b5b] font-semibold px-2 py-4 shadow-md flex justify-center">
                <div className="w-full max-w-md">
                    <div className="collapse collapse-arrow  bg-white">
                        <input type="checkbox" />
                        <div className="collapse-title flex justify-between items-center cursor-pointer">
                            {dropdown}
                        </div>
                        <div className="collapse-content">
                            <ul className="menu text-[#2c5b5b]">
                                <li>
                                    <NavLink
                                        to="my-wallet"
                                        onClick={() => setDropdown("My Wallet")}
                                        className={({ isActive }) =>
                                            isActive ? "text-[#e8d0a8]" : "hover:text-[#e8d0a8]"
                                        }
                                    >
                                        My Wallet
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="my-orders"
                                        onClick={() => setDropdown("My Orders")}
                                        className={({ isActive }) =>
                                            isActive ? "text-[#e8d0a8]" : "hover:text-[#e8d0a8]"
                                        }
                                    >
                                        My Orders
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="my-addresses"
                                        onClick={() => setDropdown("My Addresses")}
                                        className={({ isActive }) =>
                                            isActive ? "text-[#e8d0a8]" : "hover:text-[#e8d0a8]"
                                        }
                                    >
                                        My Addresses
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="my-subscriptions"
                                        onClick={() => setDropdown("My Subscriptions")}
                                        className={({ isActive }) =>
                                            isActive ? "text-[#e8d0a8]" : "hover:text-[#e8d0a8]"
                                        }
                                    >
                                        My Subscriptions
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="my-bookings"
                                        onClick={() => setDropdown("My Bookings")}
                                        className={({ isActive }) =>
                                            isActive ? "text-[#e8d0a8]" : "hover:text-[#e8d0a8]"
                                        }
                                    >
                                        My Bookings
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="my-account"
                                        onClick={() => setDropdown("My Account")}
                                        className={({ isActive }) =>
                                            isActive ? "text-[#e8d0a8]" : "hover:text-[#e8d0a8]"
                                        }
                                    >
                                        My Account
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default UserAccountHeader;
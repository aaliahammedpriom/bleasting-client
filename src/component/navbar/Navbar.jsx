import React, { useContext } from 'react';
import { FaInstagram } from 'react-icons/fa';
import { FaAngleDown, FaSquareFacebook } from 'react-icons/fa6';
import { GiHamburgerMenu } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import Sidebar from "../Sidebar";
const Navbar = () => {
    const { manubar, setMenubar, logo } = useContext(AuthContext)

    return (
        <div className='md:w-[70vw] m-auto text-white md:pb-5' >
            <div className="navbar  items-center ">
                <div className="flex-1">
                    <div className='flex gap-1 items-center'>
                        <NavLink to={'/'}>
                            <img src={logo} className='w-18 max-md:w-12' alt="" />
                        </NavLink>

                    </div>
                </div>

                {/* navbar end */}
                <div className="md:hidden dropdown gap-3 navbar-end ">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-[30px] w-[30px] text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
                            <span className="badge badge-xs indicator-item">8</span>
                        </div>
                    </div>
                    <div
                        tabIndex={0}
                        className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
                        <div className="card-body">
                            <span className="text-lg font-bold">8 Items</span>
                            <span className="text-info">Subtotal: $999</span>
                            <div className="card-actions">
                                <button className="btn btn-primary btn-block">View cart</button>
                            </div>
                        </div>
                    </div>
                    <div onClick={() => setMenubar(true)} role="button" className=" md:hidden btn rounded-full text-xl p-2"><GiHamburgerMenu /></div>
                </div>
                <div className="max-md:hidden flex gap-3 navbar-end ">
                    {/* user logo */}
                    <div className=" dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                    {/* Log is & Log out */}
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className='flex items-center text-[20px] hover:text-[21px] hover:text-[#e8d0a8] '><p>A Ali Ahammed...  </p> <FaAngleDown /></div>
                        <ul tabIndex={0} className="dropdown-content menu bg-[#000000] rounded-box z-1  p-5 shadow-sm font-semibold grid grid-cols-1 gap-5">
                            <NavLink to={'account/my-wallet'}><a>My Wallet</a></NavLink>
                            <NavLink to={'account/my-orders'}><a>My Orders</a></NavLink>
                            <NavLink to={'account/my-addresses'}><a>My Addresses</a></NavLink>
                            <NavLink to={'account/my-subscriptions'}><a>My Subscriptions</a></NavLink>
                            <NavLink to={'account/my-bookings'}><a>My Booking</a></NavLink>
                            <NavLink to={'account/my-account'}><a>My Account</a></NavLink>
                            <hr className=" border-[#e8d0a8]" />
                            <NavLink to={'/'}><a>Log Out</a></NavLink>

                        </ul>
                    </div>
                    {/* user cart */}
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-[30px] w-[30px] text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
                                <span className="badge badge-xs indicator-item">8</span>
                            </div>
                        </div>
                        <div
                            tabIndex={0}
                            className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
                            <div className="card-body">
                                <span className="text-lg font-bold">8 Items</span>
                                <span className="text-info">Subtotal: $999</span>
                                <div className="card-actions">
                                    <button className="btn btn-primary btn-block">View cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* instagram */}
                    <div>
                        <button className='text-white text-[40px]'><FaInstagram /></button>
                    </div>
                    {/* facebook */}
                    <div>
                        <button className='text-white text-[40px]'><FaSquareFacebook /></button>
                    </div>
                </div>
            </div>

            {/* navaigation buttons */}
            <div className='max-md:hidden flex flex-wrap justify-between gap-2 pt-8 text-[12px] font-semibold'>
                <NavLink to='/'>HOME</NavLink>
                <NavLink to={"/fitnessplan"}>FITNESS & PLAN</NavLink>
                <NavLink to={"/mealplan"}>MEAL PLAN</NavLink>
                <NavLink to={"/clientexperienses"}>CLIENT EXPERIENCES</NavLink>
                <NavLink to={"/excurtions"}>EXCURSIONS</NavLink>
                <NavLink to={"/accommodation"}>ACCOMMODATION</NavLink>
                <NavLink to={"/pricing"}>PRICING</NavLink>
                {/* <NavLink to={"/contact"}>CONTACT & FAQ</NavLink> */}
                <div className="dropdown dropdown-hover">
                    <NavLink to={"/contact"}>CONTACT & FAQ</NavLink>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-[#000000] rounded-box z-10 w-52 p-2 shadow-2xl "
                    >
                        <li className='text-[16px] font-semibold'>
                            <NavLink to={"/faq"}>FAQ</NavLink>
                        </li>
                        {/* Add more menu items here */}
                    </ul>
                </div>

            </div>
            {
                manubar === true && <Sidebar></Sidebar>
            }
        </div>
    );
};

export default Navbar;
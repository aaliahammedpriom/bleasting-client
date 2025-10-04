import React, { useContext } from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Sidebar = () => {
    const {manubar , setMenubar} = useContext(AuthContext)

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-[#295d5d] text-[#f0e0c0] flex flex-col justify-between px-6 pt-6 z-50">
            {/* Login Button */}
            <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2 text-white cursor-pointer">
                    <FaRegUserCircle className="text-xl" />
                    <span className="text-sm font-semibold">Log In</span>
                </div>
                <button onClick={()=>setMenubar(false)} className="btn bg-[#e8d0a9] rounded-full p-2 text-white text-2xl">
                    <IoMdClose />
                </button>
            </div>
            {/* Top Section */}
            <div className="w-[60vw] m-auto">
                {/* Logo */}
                <img
                    src="https://static.wixstatic.com/media/6f7529_fa416c6bd691411499ad359c9888fabb~mv2.png/v1/fill/w_368,h_352,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/logo.png"
                    alt="Logo"
                />

                {/* Nav Links */}
                <ul onClick={() => setMenubar(false)} className="flex flex-col gap-1 text-xs font-bold tracking-wide">
                    <NavLink to='/'>HOME</NavLink>
                    <NavLink to={"/fitnessplan"}>FITNESS & PLAN</NavLink>
                    <NavLink to={"/mealplan"}>MEAL PLAN</NavLink>
                    <NavLink to={"/clientexperienses"}>CLIENT EXPERIENCES</NavLink>
                    <NavLink to={"/excurtions"}>EXCURSIONS</NavLink>
                    <NavLink to={"/accommodation"}>ACCOMMODATION</NavLink>
                    <NavLink to={"/pricing"}>PRICING</NavLink>
                    <NavLink to={"/contact"}>CONTACT & FAQ</NavLink>
                    <NavLink to={"/faq"}>FAQ</NavLink>
                </ul>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center gap-6 py-2 text-2xl text-[#f0e0c0]">
                <FaInstagram />
                <FaFacebook />
            </div>
        </div>
    );
};

export default Sidebar;

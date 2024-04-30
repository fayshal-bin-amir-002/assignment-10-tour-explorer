import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { Tooltip } from 'react-tooltip'
import { toast } from "react-toastify";
import { IoSunnyOutline } from "react-icons/io5";
import { GoMoon } from "react-icons/go";




const NavBar = () => {

    const { user, userLogOut } = useContext(AuthContext);

    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    const handleTheme = (e) => {
        if (e.target.checked) {
            setTheme('dark');
        }
        else {
            setTheme('light');
        }
    }

    useEffect(() => {
        localStorage.setItem('theme', theme);
        const localTheme = localStorage.getItem('theme');
        document.querySelector('html').setAttribute('data-theme', localTheme);
    }, [theme]);

    const handleLogout = () => {
        userLogOut()
            .then(() => {
                toast.success("User Logged Out");
            })
            .catch((error) => {
                toast.error(error.message);
            })
    }

    const navLinks = <>
        <li><NavLink to='/' className={({ isActive }) => isActive ? 'text-[#FA7070] border-b-4 pb-1 border-[#FA7070] duration-200' : ''}>Home</NavLink></li>
        <li><NavLink to='/all-spots' className={({ isActive }) => isActive ? 'text-[#FA7070] border-b-4 pb-1 border-[#FA7070] duration-200' : ''}>All Tourists Spot</NavLink></li>
        <li><NavLink to={`/add-spot`} className={({ isActive }) => isActive ? 'text-[#FA7070] border-b-4 pb-1 border-[#FA7070] duration-200' : ''}>Add Tourists Spot</NavLink></li>
        <li><NavLink to='/my-list' className={({ isActive }) => isActive ? 'text-[#FA7070] border-b-4 pb-1 border-[#FA7070] duration-200' : ''}>My List</NavLink></li>
    </>

    return (
        <div className="px-2 bg-[#FEFDED] fixed top-0 w-full z-10 bg-opacity-90">
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn px-2 md:px-4 btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 gap-1 z-[1] p-2 shadow rounded-box bg-[#FEFDED] w-52 font-semibold overflow-hidden">
                            {navLinks}
                            {
                                user ?
                                    <div className="flex gap-2 flex-col md:hidden ">
                                        <div className="flex items-center gap-2">
                                            <img src={user?.photoURL || 'https://i.postimg.cc/xTvwshPT/boy1.png'} className="w-10" />
                                            <div className="text-xs">
                                                <p>{user?.displayName}</p>
                                                <p className=" break-words break-all">{user?.email}</p>
                                            </div>
                                        </div>
                                        <Link><button onClick={handleLogout} className="btn btn-sm md:btn-md bg-[#FA7070] text-white">Log out</button></Link>
                                    </div> :
                                    <div className="block md:hidden space-x-3">
                                        <Link to="/login"><button className="btn btn-sm md:btn-md bg-[#A1C398] text-white ">Login</button></Link>
                                        <Link to="/register"><button className="btn btn-sm md:btn-md bg-[#A1C398] text-white ">Register</button></Link>
                                    </div>
                            }
                        </ul>
                    </div>
                    <a className="btn px-2 md:px-4 btn-ghost text-xl md:text-2xl lg:text-3xl flex gap-0">Tour<span className="text-[#FA7070]">Explorer</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu-horizontal gap-8 text-lg font-semibold">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end gap-2 items-center md:gap-4">
                    <div className="flex">
                        {
                            theme === 'light' ?
                                <button className="text-2xl" onClick={() => setTheme('dark')}><IoSunnyOutline /></button> :
                                <button className="text-2xl" onClick={() => setTheme('light')}><GoMoon /></button>
                        }
                    </div>
                    <div className="hidden md:block">
                        {
                            user ?
                                <div className="flex gap-2 md:gap-4">
                                    <div className="dropdown"
                                        data-tooltip-id="my-tooltip"
                                        data-tooltip-content={user.displayName}
                                        data-tooltip-place="bottom"
                                    >
                                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                            <div className="w-10 rounded-full">
                                                <img alt="Tailwind CSS Navbar component" src={user?.photoURL || 'https://i.postimg.cc/xTvwshPT/boy1.png'} />
                                            </div>
                                        </div>
                                        <Tooltip id="my-tooltip" />
                                    </div>
                                    <button onClick={handleLogout} className="btn btn-sm md:btn-md bg-[#FA7070] text-white">Log out</button>
                                </div>
                                :
                                <div className="space-x-1 md:space-x-4">
                                    <Link to="/login"><button className="btn btn-sm md:btn-md bg-[#A1C398] text-white">Login</button></Link>
                                    <Link to="/register"><button className="btn btn-sm md:btn-md bg-[#A1C398] text-white">Register</button></Link>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
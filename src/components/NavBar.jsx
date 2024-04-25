import { Link, NavLink } from "react-router-dom";

const NavBar = () => {

    const navLinks = <>
        <li><NavLink to='/' className={({isActive}) => isActive ? 'text-[#FA7070] border-b-4 pb-1 border-[#FA7070] duration-200' : '' }>Home</NavLink></li>
        <li><NavLink to='/all-spots' className={({isActive}) => isActive ? 'text-[#FA7070] border-b-4 pb-1 border-[#FA7070] duration-200' : '' }>All Sopts</NavLink></li>
        <li><NavLink to='/add-spot' className={({isActive}) => isActive ? 'text-[#FA7070] border-b-4 pb-1 border-[#FA7070] duration-200' : '' }>Add Spot</NavLink></li>
        <li><NavLink to='/my-list' className={({isActive}) => isActive ? 'text-[#FA7070] border-b-4 pb-1 border-[#FA7070] duration-200' : '' }>My List</NavLink></li>
    </>

    return (
        <div className="px-2 bg-[#FEFDED] fixed top-0 w-full z-10 bg-opacity-90">
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn px-2 md:px-4 btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 gap-1 z-[1] p-2 shadow rounded-box bg-[#FEFDED] w-52 font-semibold">
                            { navLinks }
                        </ul>
                    </div>
                    <a className="btn px-2 md:px-4 btn-ghost text-xl md:text-2xl lg:text-3xl flex gap-0">Tour<span className="text-[#FA7070]">Explorer</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu-horizontal gap-8 text-lg font-semibold">
                        { navLinks }
                    </ul>
                </div>
                <div className="navbar-end gap-2 md:gap-4">
                    <Link><button className="btn btn-sm md:btn-md bg-[#A1C398] text-white">Login</button></Link>
                    <Link><button className="btn btn-sm md:btn-md bg-[#A1C398] text-white">Register</button></Link>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
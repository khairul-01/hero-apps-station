import React from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../assets/logo.png'
import gitHub from '../assets/fi_2111432.png'

const Navbar = () => {
    const links = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/apps'}>Apps</NavLink></li>
        <li><NavLink to={'/installation'}>Installation</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm px-3 sm:px-8 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className=" menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <Link to={'/'} className='btn btn-ghost'>
                        <img className='w-9 h-9' src={logo} alt="apps logo" />
                        <h3 className="text-lg bg-linear-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent uppercase font-bold">Hero.io</h3>
                    </Link>
                </div>
                <div className="navbar-center hidden md:flex">
                    <ul className="text-[16px] font-medium menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a
                        href='https://github.com/khairul-01' target='_blank'
                        className="btn bg-linear-to-br from-[#632EE3] to-[#9F62F2] px-4 py-3 ">
                        <img className='mr-2' src={gitHub} alt="github" />
                        <span className='text-[16px] font-semibold text-white'>Contribute</span>

                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
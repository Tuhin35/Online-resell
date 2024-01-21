import React, { useContext, useEffect } from 'react';
import logo from './logo.png'
import { Link } from 'react-router-dom';
import { BiLogOut } from 'react-icons/bi';

import './header.css'

import { useState } from "react";


import { AuthContext } from '../Context/UserContext';
import useAdmin from '../../hooks/UseAdmin';



export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user, logOut } = useContext(AuthContext);

    const [isAdmin] = useAdmin(user?.email)
    return (
        <div class="container text-black">
            <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div class="relative flex items-center justify-between">
                    <a
                        href="/"
                        aria-label="Company"
                        title="Company"
                        class="inline-flex items-center"
                    >
                        <img src={logo} class="h-12 mr-5" alt="ORS Logo" />
                        <span class="ml-2 text-xl font-bold tracking-wide  uppercase">
                            Online Resell
                        </span>
                    </a>
                    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                        <div className=" flex flex-row justify-end gap-4  text-xl ">

                            <Link to='/'> Home </Link>
                            {/* <Link to='/products'> All Product </Link> */}
                            <Link to='/orders'> Order </Link>
                            {isAdmin && <>
                                <Link to='/dashboard'> Dashboard </Link>
                            </>}
                            <Link to='/blog'> Blog </Link>


                            <Link
                            >
                                {
                                    user?.email ?

                                        <button onClick={logOut}><BiLogOut className="text-4xl" ></BiLogOut></button>
                                        :
                                        <Link
                                            to="/signup"
                                            className="inline-flex w-1/2 items-center justify-center h-12 px-6 font-medium tracking-wide  transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                                            aria-label="Sign up"
                                            title="Sign up"
                                        >
                                            Sign up
                                        </Link>

                                }
                            </Link>





                        </div>
                    </div>
                    <div class="md:hidden">
                        <button
                            aria-label="Open Menu"
                            title="Open Menu"
                            class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                                />
                            </svg>
                        </button>
                        {isMenuOpen && (
                            <div class=" top-0 left-0 w-full">
                                <div className="p-5 dark:bg-slate-300  rounded-md shadow-lg">
                                    <div class="flex items-center justify-between mb-4">
                                        {/* <div>
                                            <a
                                                href="/"
                                                aria-label="Company"
                                                title="Company"
                                                class="inline-flex items-center"
                                            >
                                                <img src={logo} class="h-12 mr-5" alt="ORS Logo" />
                                                <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                                                    online ReSell
                                                </span>
                                            </a>
                                        </div> */}
                                        <div>
                                            <button
                                                aria-label="Close Menu"
                                                title="Close Menu"
                                                class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                                                    <path
                                                        fill="currentColor"
                                                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                    />
                                                </svg>
                                            </button>
                                            <nav className=' text-black'>
                                                <ul className="space-y-4">
                                                    <li>  <Link to='/'> Home </Link></li>
                                                    {/* <Link to='/products'> All Product </Link> */}
                                                    <li>   <Link to='/orders'> Order </Link></li>
                                                    <li> 
                                                        <Link to='/blog'> Blog </Link>

                                                   </li>
                                                    <li>  {isAdmin && <>
                                                        <Link to='/dashboard'> Dashboard </Link>
                                                    </>}</li>


                                                    <li> <Link
                                                    >
                                                        {
                                                            user?.email ?

                                                                <button onClick={logOut}><BiLogOut className="text-4xl" ></BiLogOut></button>
                                                                :
                                                                <Link
                                                                    to="/signup"
                                                                    className="inline-flex w-1/2 items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                                                                    aria-label="Sign up"
                                                                    title="Sign up"
                                                                >
                                                                    Sign up
                                                                </Link>

                                                        }
                                                    </Link></li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
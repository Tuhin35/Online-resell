import React, { useContext, useEffect } from 'react';
import logo from './logo.png'
import { Link } from 'react-router-dom';
import { BiLogOut } from 'react-icons/bi';
import { FcNightPortrait } from 'react-icons/fc';
import { useState } from 'react';
import './header.css'

import { AuthContext } from '../Context/UserContext';
import useAdmin from '../../hooks/UseAdmin';



const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const [theme, setTheme] = useState('light');
    const [isAdmin] = useAdmin(user?.email)

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return (

        <nav class="bg-white border-gray-200 dark:bg-gray-900">
            <div class=" flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/home" class="flex items-center">
                    <img src={logo} class="h-12 mr-5" alt="ORS Logo" />
                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">ORS</span>
                </a>
                <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </button>
                <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                  
                    <div className="flex flex-row justify-end gap-4 text-xl text-white ">

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
                                    className="inline-flex w-1/2 items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                                    aria-label="Sign up"
                                    title="Sign up"
                                >
                                    Sign up
                                </Link>

                        }
                       </Link>



                      

                    </div>
                </div>
            </div>
            
        </nav>
       
    );
};

export default Header;
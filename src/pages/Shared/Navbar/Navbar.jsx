import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const menuItem = <>
        <li><Link to={'/'}>All Task</Link></li>
        <li><Link to='/addnewtasks'>Add New Tasks</Link></li>
        <li><Link to='/managetask'>Manage Tasks</Link></li>
    </>
    return (
        <div className='px-4 lg:px-24 bg-white shadow-xl'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu font-semibold menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                menuItem
                            }
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl font-semibold">Mohite Consultancy Services</a>
                </div>
                <div className="navbar-end hidden  lg:flex">
                    <ul className="menu menu-horizontal font-semibold text-[18px] px-1">
                        {
                            menuItem
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
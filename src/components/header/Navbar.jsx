import React from 'react';
import { NavLink, useNavigate } from 'react-router';

const Navbar = () => {

    const navigate = useNavigate();

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className='w-11/12 mx-auto flex justify-between'>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        isActive ? "text-cyan-900 font-bold" : ""
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/allGroup"
                                    className={({ isActive }) =>
                                        isActive ? "text-cyan-900 font-bold" : ""
                                    }
                                >
                                    All Groups
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/createGroup"
                                    className={({ isActive }) =>
                                        isActive ? "text-cyan-900 font-bold" : ""
                                    }
                                >
                                    Create Group
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/myGroup"
                                    className={({ isActive }) =>
                                        isActive ? "text-cyan-900 font-bold" : ""
                                    }
                                >
                                    My Group
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <h1 className="btn btn-ghost flex items-center font-bold text-3xl">Hobby <span className='text-cyan-600'>Hub</span></h1>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">

                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? "text-cyan-900 font-bold" : ""
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/allGroup"
                                className={({ isActive }) =>
                                    isActive ? "text-cyan-900 font-bold" : ""
                                }
                            >
                                All Groups
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/createGroup"
                                className={({ isActive }) =>
                                    isActive ? "text-cyan-900 font-bold" : ""
                                }
                            >
                                Create Group
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/myGroup"
                                className={({ isActive }) =>
                                    isActive ? "text-cyan-900 font-bold" : ""
                                }
                            >
                                My Group
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end space-x-3">
                    <button onClick={() => navigate("/login")} className="btn  btn-info rounded-4xl">Login</button>

                    <button onClick={() => navigate("/register")} className="btn  btn-secondary rounded-4xl">Register</button>
                    <button className="btn  btn-secondary rounded-4xl">P</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
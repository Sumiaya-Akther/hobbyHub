import React, { useContext } from 'react';
import { Outlet, NavLink, Link, useNavigate } from "react-router";
import { AuthContext } from '../provider/AuthProvider';
import { IoHomeOutline } from "react-icons/io5";
import { IoIosCreate } from "react-icons/io";
import { GiJasmine } from "react-icons/gi";
import { IoLogOut } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { IoChevronBackCircle } from "react-icons/io5";
import Swal from 'sweetalert2';

const Dashboard = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogOut = () => {
        logOut();
        if (logOut) {

            Swal.fire({
                position: "center",
                icon: "success",
                title: "Logout Successfully",
                showConfirmButton: false,
                timer: 1500
            });
            navigate("/");
        }
    }
    return (
        <div className='bg-base-300'>
            <div className="w-11/12 mx-auto flex flex-col md:flex-row min-h-screen ">
                {/* Sidebar */}
                <aside className="w-full md:w-64 bg-base-300 border-r border-gray-300 shadow-md md:min-h-screen">
                    <div className="p-4 text-xl font-bold flex items-center border-bborder-gray-300"><img className='w-10' src="logo.png" alt="" /> Dashboard
                    </div>
                    <nav className=" flex md:flex-col gap-2 p-4">
                        <NavLink
                            to="/dashboard"
                            className={({ isActive }) =>
                                `px-4 py-2 rounded-md flex gap-2 items-center transition ${isActive
                                    ? "bg-cyan-600 text-white font-bold"
                                    : ""
                                }`
                            }
                        >
                            <IoHomeOutline size={20} />
                            <span className='hidden md:flex'> Overview</span>
                        </NavLink>

                        <NavLink
                            to="/dashboard/createGroup"
                            className={({ isActive }) =>
                                ` px-4 py-2 flex gap-2 items-center rounded-md transition ${isActive
                                    ? "bg-cyan-600 text-white font-bold"
                                    : ""
                                }`
                            }
                        > <IoIosCreate size={20} />
                            <span className='hidden md:flex'> Create Group</span>

                        </NavLink>

                        <NavLink
                            to="/dashboard/myGroup"
                            className={({ isActive }) =>
                                ` px-4 py-2 flex gap-2 items-center rounded-md transition ${isActive
                                    ? "bg-cyan-600 text-white font-bold"
                                    : ""
                                }`
                            }
                        > <GiJasmine size={20} />
                            <span className='hidden md:flex'> My Group</span>

                        </NavLink>
                          <NavLink
                            to="/dashboard/profile"
                            className={({ isActive }) =>
                                ` px-4 py-2 flex gap-2 items-center rounded-md transition ${isActive
                                    ? "bg-cyan-600 text-white font-bold"
                                    : ""
                                }`
                            }
                        > <CgProfile size={20} />
                            <span className='hidden md:flex'> My Profile</span>

                        </NavLink>
                        <button onClick={handleLogOut}
                            className="px-4 py-2  flex gap-2 items-center"

                        > <IoLogOut size={20} />
                            <span className='hidden md:flex'>Logout</span>
                        </button>

                        <NavLink
                            to="/"
                            className=" flex gap-2 items-center px-4 py-2 rounded-md transition  font-bold">
                            <IoChevronBackCircle size={20} />
                            <span className='hidden md:flex'>Back to Home</span>    
                        </NavLink>
                    </nav>
                </aside>

                {/* Main Content */}
                <main className="flex-1 p-4 md:p-6">
                    <Outlet />
                </main>
            </div>
        </div>

    );
};

export default Dashboard;
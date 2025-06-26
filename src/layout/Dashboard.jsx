import React from 'react';
import { Outlet, NavLink } from "react-router";

const Dashboard = () => {
    return (
        <div className='bg-gray-100'>
            <div className="w-11/12 mx-auto flex flex-col md:flex-row min-h-screen ">
                {/* Sidebar */}
                <aside className="w-full md:w-64 bg-base-300 shadow-md md:min-h-screen">
                    <div className="p-4 text-xl font-bold flex items-center border-b border-gray-300"><img className='w-10' src="logo.png" alt="" /> Dashboard
                    </div>
                    <nav className="flex md:flex-col gap-2 p-4">
                        <NavLink
                            to="/dashboard"
                            className={({ isActive }) =>
                                `block px-4 py-2 rounded-md transition ${isActive
                                    ? "bg-cyan-600 text-white font-bold"
                                    : "text-gray-700 hover:bg-gray-200"
                                }`
                            }
                        >
                            Overview
                        </NavLink>

                        <NavLink
                            to="/dashboard/createGroup"
                            className={({ isActive }) =>
                                `block px-4 py-2 rounded-md transition ${isActive
                                    ? "bg-cyan-600 text-white font-bold"
                                    : "text-gray-700 hover:bg-gray-200"
                                }`
                            }
                        >
                            Create Group
                        </NavLink>

                        <NavLink
                            to="/dashboard/myGroup"
                            className={({ isActive }) =>
                                `block px-4 py-2 rounded-md transition ${isActive
                                    ? "bg-cyan-600 text-white font-bold"
                                    : "text-gray-700 hover:bg-gray-200"
                                }`
                            }
                        >
                            My Group
                        </NavLink>
                         <NavLink
                            to="/"
                            className="block mt-20 px-4 py-2 rounded-md transition bg-gray-700 text-white font-bold">
                            Back to Home
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
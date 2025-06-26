import React from 'react';
import { Link, useLoaderData } from 'react-router';

const AllGroups = () => {
    const groups = useLoaderData();
    // console.log(groups);


    return (
        <div className="p-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {groups.map((group) => (
                <div
                    key={group._id}
                    className="border border-gray-300 rounded-xl shadow-md p-4 flex flex-col mb-5 justify-between"
                >
                    <img
                        src={group.picture}
                        alt={group.name}
                        className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <h2 className="text-xl font-bold text-cyan-700 mb-1">{group.name}</h2>
                    <p className="text-gray-600 mb-1"><strong>Category:</strong> {group.category}</p>
                    <p className="text-gray-600 mb-1"><strong>Date:</strong> {group.date}</p>
                    <p className="text-gray-600 mb-4"><strong>Organizer:</strong> {group.userName}</p>
                    <Link to={`/group/${group._id}`}>
                    <button
                        className="bg-cyan-600 text-white px-4 py-2 rounded hover:bg-cyan-700 transition-all w-full">
                        See More
                    </button>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default AllGroups;
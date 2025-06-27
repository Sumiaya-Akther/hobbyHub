import React from 'react';
import { Link } from 'react-router';

const GroupCard = ({ group }) => {
    return (
        <div className="border border-gray-300 rounded-xl shadow-md p-4 flex flex-col mb-5 justify-between hover:shadow-lg transition">
            <img
                src={group.picture}
                alt={group.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-bold text-cyan-700 mb-1">{group.name}</h2>
            <p className="text-gray-600 mb-1"><strong>Category:</strong> {group.category}</p>
            <p className="text-gray-600 mb-1">
                {group.date ? `Created: ${new Date(group.date).toLocaleDateString()}` : ""}
            </p>

            {/* 👉 See Details Button */}
                    <Link to={`/group/${group._id}`}>
                    <button
                        className="bg-cyan-600 text-white px-4 py-2 rounded hover:bg-cyan-700 transition-all w-full">
                        See More
                    </button>
                    </Link>
        </div>
    );
};

export default GroupCard;
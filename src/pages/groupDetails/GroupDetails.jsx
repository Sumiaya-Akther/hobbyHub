import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const GroupDetails = () => {
    const { id } = useParams();
    console.log(id);

    const [group, setGroup] = useState(null);

    useEffect(() => {
        //https://hobby-hub-server-one-tau.vercel.app
        //http://localhost:3000/group/${id}
        fetch(`http://localhost:3000/group/${id}`)
            .then((res) => res.json())
            .then((data) => setGroup(data));
    }, [id]);

    if (!group) return <div className="text-center py-10">Loading...</div>;

    return (
        <div className="p-4 sm:p-6 max-w-5xl mx-auto bg-cyan-500 rounded-2xl shadow-2xl mt-30 mb-14">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                {/* Image Section */}
                <div className="flex justify-center">
                    <img
                        src={group.picture}
                        alt={group.name}
                        className="w-full max-w-sm h-80 sm:h-96 object-cover rounded-xl shadow-md"
                    />
                </div>

                {/* Info Section */}
                <div className="space-y-4 text-black">
                    <h2 className="text-2xl sm:text-3xl font-bold">{group.name}</h2>

                    <p className="text-gray-800 text-base sm:text-lg">
                        <span className="font-semibold text-gray-900">📅 Date:</span> {group.date}
                    </p>
                    <p className="text-gray-800 text-sm sm:text-base">
                        <span className="font-semibold text-gray-900">📍 Location:</span> {group.location}
                    </p>
                    <p className="text-gray-800 text-sm sm:text-base">
                        <span className="font-semibold text-gray-900">🏷️ Category:</span> {group.category}
                    </p>
                    <p className="text-gray-800 text-sm sm:text-base">
                        <span className="font-semibold text-gray-900">👥 Members:</span> {group.member}
                    </p>
                    <p className="text-gray-800 text-sm sm:text-base">
                        <span className="font-semibold text-gray-900">👤 Organizer:</span> {group.userName}
                    </p>
                    <p className="text-gray-800 text-sm sm:text-base mb-2">
                        <span className="font-semibold text-gray-900">✉️ Email:</span> {group.userEmail}
                    </p>

                    <p className="text-gray-100 italic border-l-4 pl-3 border-white">
                        "{group.description}"
                    </p>
                </div>
            </div>
        </div>


    );
};

export default GroupDetails;

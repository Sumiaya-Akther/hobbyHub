import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const GroupDetails = () => {
    const { id } = useParams();
    console.log(id);
    
    const [group, setGroup] = useState(null);

    useEffect(() => {
        //http://localhost:3000/group/${id}
        fetch(`https://hobby-hub-server-one-tau.vercel.app/group/${id}`)
            .then((res) => res.json())
            .then((data) => setGroup(data));
    }, [id]);

    if (!group) return <div className="text-center py-10">Loading...</div>;

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-lg mt-10">
            <div className="grid md:grid-cols-2 gap-6 items-center">
                {/* Image Section */}
                <div>
                    <img
                        src={group.picture}
                        alt={group.name}
                        className="w-full h-64 object-cover rounded-xl shadow-md"
                    />
                </div>

                {/* Info Section */}
                <div>
                    <h2 className="text-3xl font-bold text-cyan-700 mb-2">{group.name}</h2>
                    <p className="text-gray-700 text-sm mb-1">
                        <span className="font-semibold text-gray-900">📅 Date:</span> {group.date}
                    </p>
                    <p className="text-gray-700 text-sm mb-1">
                        <span className="font-semibold text-gray-900">📍 Location:</span> {group.location}
                    </p>
                    <p className="text-gray-700 text-sm mb-1">
                        <span className="font-semibold text-gray-900">🏷️ Category:</span> {group.category}
                    </p>
                    <p className="text-gray-700 text-sm mb-1">
                        <span className="font-semibold text-gray-900">👥 Members:</span> {group.member}
                    </p>
                    <p className="text-gray-700 text-sm mb-1">
                        <span className="font-semibold text-gray-900">👤 Organizer:</span> {group.userName}
                    </p>
                    <p className="text-gray-700 text-sm mb-4">
                        <span className="font-semibold text-gray-900">✉️ Email:</span> {group.userEmail}
                    </p>

                    <p className="text-gray-600 italic border-l-4 pl-3 border-cyan-500">
                        "{group.description}"
                    </p>
                </div>
            </div>
        </div>

    );
};

export default GroupDetails;

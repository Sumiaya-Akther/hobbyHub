import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router';

const AllGroups = () => {
    const groups = useLoaderData();
    // console.log(groups);

    const [selectedGroup, setSelectedGroup] = useState(null);

    const openModal = (group) => {
        setSelectedGroup(group);
        document.getElementById('group_modal').showModal();
    };


    return (
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {groups.map((group) => (
                <div
                    key={group._id}
                    className="border border-gray-300 rounded-xl shadow-md p-4 flex flex-col justify-between"
                >
                    <img
                        src={group.picture}
                        alt={group.name}
                        className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <h2 className="text-xl font-bold text-cyan-700 mb-1">{group.name}</h2>
                    <p className="text-gray-600 mb-1"><strong>Category:</strong> {group.category}</p>
                    <p className="text-gray-600 mb-1"><strong>Location:</strong> {group.location}</p>
                    <p className="text-gray-600 mb-1"><strong>Date:</strong> {group.date}</p>
                    <p className="text-gray-600 mb-4"><strong>Organizer:</strong> {group.userName}</p>
                    <button
                        className="bg-cyan-600 text-white px-4 py-2 rounded hover:bg-cyan-700 transition-all w-full"
                        onClick={() => openModal(group)}
                    >
                        See More
                    </button>
                </div>
            ))}

            {/* DaisyUI Modal */}
            <dialog id="group_modal" className="modal">
                <div className="modal-box max-w-md">
                    {selectedGroup && (
                        <>
                            <h3 className="font-bold text-xl mb-2">{selectedGroup.name}</h3>
                            <img
                                src={selectedGroup.picture}
                                alt={selectedGroup.name}
                                className="w-full h-48 object-cover rounded-lg mb-3"
                            />
                            <p><strong>Category:</strong> {selectedGroup.category}</p>
                            <p><strong>Description:</strong> {selectedGroup.description}</p>
                            <p><strong>Date:</strong> {selectedGroup.date}</p>
                            <p><strong>Location:</strong> {selectedGroup.location}</p>
                            <p><strong>Members:</strong> {selectedGroup.member}</p>
                            <p><strong>Organizer:</strong> {selectedGroup.userName}</p>
                            <p><strong>Email:</strong> {selectedGroup.userEmail}</p>
                        </>
                    )}
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default AllGroups;
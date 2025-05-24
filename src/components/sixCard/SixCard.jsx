import Swal from "sweetalert2";
import Loading from "../../components/loading/Loading";
import React, { useEffect, useState } from "react";

const SixCard = () => {
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/featured-groups")
      .then(res => res.json())
      .then(data => {
        setGroups(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching featured groups:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading />;
  }

  const handleJoin = (groupId) => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "You Successfully Joining The Group",
      showConfirmButton: false,
      timer: 1500
    });
    // join logic here (navigate or modal or API call)
    console.log("Joining group:", groupId);
  };

  return (
    <div className="my-20 px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-cyan-700">🌟 Featured Hobby Groups</h2>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {groups.map(group => {
          const groupDate = new Date(group.date);
          const today = new Date();
          const isPast = groupDate < today;

          return (
            <div
              key={group._id}
              className="bg-white border border-gray-300 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 text-left"
            >
              <img
                src={group.picture}
                alt={group.name}
                className="w-full h-44 object-cover border border-gray-300 rounded-xl mb-4"
              />
              <h3 className="text-xl font-bold text-cyan-800 mb-1">{group.name}</h3>
              <p className="text-sm text-gray-600 mb-1">
                <span className="font-medium">🏷 Category:</span> {group.category}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <span className="font-medium">📍 Location:</span> {group.location}
              </p>
              <p className="text-sm text-gray-700 italic mb-2 line-clamp-2">{group.description}</p>

              <div className="text-sm text-gray-500 space-y-1 mb-4">
                <p>👤 <span className="font-medium">Created by:</span> {group.userName}</p>
                <p>📅 <span className="font-medium">Start Date:</span> {groupDate.toLocaleDateString()}</p>
                <p>👥 <span className="font-medium">Members:</span> {group.member}</p>
              </div>

              {isPast ? (
                <p className="text-red-500 font-semibold text-sm">⚠ This group is no longer active</p>
              ) : (
                <button
                  onClick={() => handleJoin(group._id)}
                  className="bg-cyan-600 text-white px-4 py-2 rounded hover:bg-cyan-700 transition-all w-full"
                >
                  Join Group
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SixCard;

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
    return <Loading></Loading>;
  }

  return (
   <div className="my-18 px-4  text-center">
      <h2 className="text-3xl font-bold my-10">🌟 Featured Hobby Groups</h2>
      <div className="grid gap-6  sm:grid-cols-2 md:grid-cols-3">
        {groups.map(group => (
          <div key={group._id} className="p-4 border bg-gray-100 rounded-xl shadow hover:shadow-lg transition">
            <img
              src={group.picture}
              alt={group.name}
              className="w-full h-40 object-covefont-lighted-md mb-4"
            />
            <h3 className="text-2xl text-black font-semibold mb-1">{group.name}</h3>
            <p className="font-semibold text-gray-600 mb-1">{group.category} | {group.location}</p>
            <p className="font-semibold text-gray-700 mb-2">{group.description}</p>
            <p className="font-light text-gray-500">👤 Created by: {group.userName}</p>
            <p className="font-light text-gray-500">📅 Start Date: {new Date(group.date).toLocaleDateString()}</p>
            <p className="font-light text-gray-500">👥 Members: {group.member}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SixCard;
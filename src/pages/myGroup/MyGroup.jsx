import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";
import Loading from "../../components/loading/Loading";



const MyGroup = () => {

  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const {user}=useContext(AuthContext);
 // console.log(user);
  const navigate=useNavigate();

  // Fetch groups created by logged-in user
  useEffect(() => {
    //const userEmail = user.email;
    const fetchGroups = async () => {
      try {
          //http://localhost:3000/mygroups?email=${user.email}
        setTimeout (async()=>{
          const res = await fetch(`https://hobby-hub-server-one-tau.vercel.app/mygroups?email=${user.email}`);
        const data = await res.json();

        //console.log(data);
        
        setGroups(data);
        setLoading(false);
        },100)
        
      } catch (error) {
        console.error("Error fetching groups:", error);
        setLoading(false);
      }
    };

    fetchGroups();
  }, [user]);

  // Handle delete
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This will permanently delete the group!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await fetch(`http://localhost:3000/deletegroups/${id}`, {
            method: "DELETE",
          });

          const result = await res.json();
          if (result.deletedCount > 0) {
            setGroups((prev) => prev.filter((g) => g._id !== id));
            Swal.fire("Deleted!", "Your group has been deleted.", "success");
          }else{
              console.log(result)
          }
        } catch (error) {
          console.error("Error deleting group:", error);
          Swal.fire("Error", "Something went wrong!", "error");
        }
      }
    });
  };

  const handleUpdate = (id) => {
    // Navigate to update form or modal (implement separately)
    navigate(`/updategroup/${id._id}`,{
       state:{massage:id}
    });
  };

  if (loading) return <Loading></Loading>;

  return (
    <div className="max-w-6xl mx-auto bg-cyan-600 rounded-2xl p-8 text-white">
      <h2 className="text-2xl font-bold mb-6 text-center">My Hobby Groups</h2>
      {groups.length === 0 ? (
        <p className="text-center">You haven’t created any groups yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full text-gray-200 rounded overflow-hidden shadow-lg">
            <thead className="bg-black text-white">
              <tr>
                <th className="py-2 px-4">Image</th>
                <th className="py-2 px-4">Group Name</th>
                <th className="py-2 px-4">Category</th>
                <th className="py-2 px-4">Location</th>
                <th className="py-2 px-4">Start Date</th>
                <th className="py-2 px-4">Max Members</th>
                <th className="py-2 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {groups.map((group) => (
                <tr key={group._id} className="border-t text-center  bg-white/10 backdrop-blur-md rounded-md shadow-xl  hover:bg-gray-800">
                  <td className="">
                      <img className="w-full min-h-16 max-h-20" src={group.picture} alt=""/>
                  </td>
                  <td className="py-2 text-red-600 px-4">{group.name}</td>
                  <td className="py-2 text-red-600 px-4">{group.category}</td>
                  <td className="py-2 text-red-600 px-4">{group.location}</td>
                  <td className="py-2 text-red-600 px-4">{group.date}</td>
                  <td className="py-2 text-red-600 px-4">{group.member}</td>
                  <td className="py-2 text-red-600 px-4 space-y-2 space-x-2 text-center">
                    <button
                      onClick={() => handleUpdate(group)}
                      className="bg-yellow-500 w-20 cursor-pointer hover:bg-yellow-600 text-white px-3 py-1 rounded"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(group._id)}
                      className="bg-red-600 w-20 cursor-pointer hover:bg-red-700 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyGroup;
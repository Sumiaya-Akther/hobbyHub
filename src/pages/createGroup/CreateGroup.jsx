import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router';
import Loading from '../../components/loading/Loading';

const CreateGroup = () => {
    const { user } = useContext(AuthContext);
    //console.log(user);
    
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const handleCreateGroup = e => {
        e.preventDefault();
        const form = e.target;

        const formData = new FormData(form);
        const groupData = Object.fromEntries(formData.entries())

        setLoading(true);

        // console.log(groupData);

        //sent data to the server

        //https://hobby-hub-server-one-tau.vercel.app
        //http://localhost:3000/groups

        fetch('http://localhost:3000/groups', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(groupData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Group Created Successfully!",
                        icon: "success",
                        draggable: true
                    });
                    form.reset();
                    navigate(`${location.state ? location.state : "/dashboard/myGroup"}`);
                }

            })
            .catch((error) => {
                if (error) {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong please try again!",
                    });
                }
            })

            .finally(() => {
                setLoading(false); 
            });
    };

     if (loading){
        return <Loading></Loading>
    }


    return (
        <section className="max-w-4xl mx-auto px-4 py-10">
            <div className="bg-cyan-500 shadow-lg rounded-xl p-6 sm:p-10">
                <h2 className="text-3xl font-bold text-center mb-8">Create a New Hobby Group</h2>

                <form onSubmit={handleCreateGroup} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Group Name */}
                    <div>
                        <label className="block mb-1 font-semibold">Group Name</label>
                        <input type="text" name='name' required placeholder="Enter group name" className="input input-bordered w-full" />
                    </div>

                    {/* Hobby Category */}
                    <div>
                        <label className="block mb-1 font-semibold">Hobby Category</label>
                        <select name='category' required className="select select-bordered w-full">
                            <option>Select a Category</option>
                            <option>Drawing & Painting</option>
                            <option>Photography</option>
                            <option>Video Gaming</option>
                            <option>Fishing</option>
                            <option>Running</option>
                            <option>Cooking</option>
                            <option>Reading</option>
                            <option>Writing</option>
                        </select>
                    </div>

                    {/* Description */}
                    <div className="md:col-span-2">
                        <label className="block mb-1 font-semibold">Description</label>
                        <textarea rows="3" required name='description' placeholder="Group description" className="textarea textarea-bordered w-full" />
                    </div>

                    {/* Location */}
                    <div>
                        <label className="block mb-1 font-semibold">Meeting Location</label>
                        <input name='location' required type="text" placeholder="e.g. Central Park, NYC" className="input input-bordered w-full" />
                    </div>

                    {/* Max Members */}
                    <div>
                        <label className="block mb-1 font-semibold">Max Members</label>
                        <input name='member' type="number" min="1" required className="input input-bordered w-full" />
                    </div>

                    {/* Start Date */}
                    <div>
                        <label className="block mb-1 font-semibold">Start Date</label>
                        <input name='date' type="date" required className="input input-bordered w-full" />
                    </div>

                    {/* Image URL */}
                    <div>
                        <label className="block mb-1 font-semibold">Image URL</label>
                        <input name='picture' type="url" required placeholder="https://..." className="input input-bordered w-full" />
                    </div>

                    {/* User Name (Readonly) */}
                    <div>
                        <label className="block mb-1 font-semibold">User Name</label>
                        <input name='userName' required type="text" defaultValue={user?.displayName} readOnly className="input input-bordered w-full bg-gray-800 text-white" />
                    </div>

                    {/* User Email (Readonly) */}
                    <div>
                        <label className="block mb-1 font-semibold">User Email</label>
                        <input name='userEmail' required defaultValue={user?.email} readOnly  type="email" className="input input-bordered w-full bg-gray-800 text-white" />
                    </div>

                    {/* Submit Button */}
                    <div className="md:col-span-2 mt-4">
                        <button type="submit" className="btn bg-black text-white w-full">Create Group</button>
                    </div>
                </form>
            </div>
        </section>

    );
};

export default CreateGroup;
import React from 'react';
import Swal from 'sweetalert2';

const CreateGroup = () => {


    const handleCreateGroup = e => {
        e.preventDefault();
        const form = e.target;

        const formData = new FormData(form);
        const groupData = Object.fromEntries(formData.entries())

       // console.log(groupData);

        //sent data to the server

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
                   // form.reset();
                }

            })


    }


    return (
        <section className="max-w-4xl mx-auto px-4 py-10">
            <div className="bg-cyan-500 shadow-lg rounded-xl p-6 sm:p-10">
                <h2 className="text-3xl font-bold text-center mb-8">Create a New Hobby Group</h2>

                <form onSubmit={handleCreateGroup} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Group Name */}
                    <div>
                        <label className="block mb-1 font-semibold">Group Name</label>
                        <input type="text" name='name' placeholder="Enter group name" className="input input-bordered w-full" />
                    </div>

                    {/* Hobby Category */}
                    <div>
                        <label className="block mb-1 font-semibold">Hobby Category</label>
                        <select name='category' className="select select-bordered w-full">
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
                        <textarea rows="3" name='description' placeholder="Group description" className="textarea textarea-bordered w-full" />
                    </div>

                    {/* Location */}
                    <div>
                        <label className="block mb-1 font-semibold">Meeting Location</label>
                        <input name='location' type="text" placeholder="e.g. Central Park, NYC" className="input input-bordered w-full" />
                    </div>

                    {/* Max Members */}
                    <div>
                        <label className="block mb-1 font-semibold">Max Members</label>
                        <input name='member' type="number" min="1" className="input input-bordered w-full" />
                    </div>

                    {/* Start Date */}
                    <div>
                        <label className="block mb-1 font-semibold">Start Date</label>
                        <input name='date' type="date" className="input input-bordered w-full" />
                    </div>

                    {/* Image URL */}
                    <div>
                        <label className="block mb-1 font-semibold">Image URL</label>
                        <input name='picture' type="url" placeholder="https://..." className="input input-bordered w-full" />
                    </div>

                    {/* User Name (Readonly) */}
                    <div>
                        <label className="block mb-1 font-semibold">User Name</label>
                        <input name='userName' type="text" className="input input-bordered w-full bg-gray-100" />
                    </div>

                    {/* User Email (Readonly) */}
                    <div>
                        <label className="block mb-1 font-semibold">User Email</label>
                        <input name='userEmail' type="email" className="input input-bordered w-full bg-gray-100" />
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
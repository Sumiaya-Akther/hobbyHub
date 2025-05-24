import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";
import Loading from "../../components/loading/Loading";


// Assume user info comes from context or props

const categories = [
    "Drawing & Painting",
    "Photography",
    "Video Gaming",
    "Fishing",
    "Running",
    "Cooking",
    "Reading",
    "Writing",
];

const UpdaetGroup = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [loading, setLoading] = useState(true);
    const { user } = useContext(AuthContext);
    const [merror, seterror] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        category: "",
        description: "",
        location: "",
        member: "",

        date: "",

        picture: "",
        // userName: user.name,
        // userEmail: user.email,
    });

    console.log(user);
    useEffect(() => {
       setTimeout(()=>{
        setLoading(false)
        
       },1000) ;
        try {
            const group = location?.state?.massage ?? null;
            const username = user.displayName === group.userName ? user.displayName : null;
            const useremail = user.email === group.userEmail ? user.email : null;
            if (!useremail || !username) seterror("You do not Author such a group.")
            else if (group) {
                setFormData({
                    groupId: group._id,
                    name: group.name,
                    category: group.category,
                    description: group.description,
                    location: group.location,
                    member: group.member,
                    date: group.date,
                    picture: group.picture,
                    userName: username,
                    userEmail: useremail,
                })
                seterror(false)
            } else {
                seterror('You do not have such a group.');
            }
        } catch (error) {
            console.log(error);

            seterror("You do not have such a group.")
        }
    }, [location, user]);



    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Replace with your DB logic
            Swal.fire({
                title: "Are you sure?",
                text: "This will permanently update the group!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#d33",
                cancelButtonColor: "#3085d6",
                confirmButtonText: "Yes, update it!",
            }).then(async (result) => {
                if (result.isConfirmed) {
                    const res = await fetch("http://localhost:3000/updategroup", {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(formData),
                    })
                    if (res.ok) {
                        Swal.fire({
                            icon: "success",
                            title: "Group Created!",
                            text: `Your ${formData.name} group has been successfully created.`,
                        }).then((result) => { if (result.isConfirmed) navigate('/myGroup') });
                    } else {
                        const error = await res.json();
                        Swal.fire("Error", error.message || "Update failed", "error");
                    }

                }
            }
            )
        }
        catch (error) {
            console.error("Error saving group:", error);
        }
    };

    if (loading){
        return <Loading></Loading>
    }


    return (
        merror ? <div>
            <p className="text-center text-2xl p-4 text-white">{merror}</p>
            <div className="w-full inline-flex items-center justify-center">
                <p onClick={() => navigate('/myGroup')} className="w-25 px-1 py-2 text-center rounded-md bg-blue-900 text-xl cursor-pointer text-white">Go Back</p>
            </div>
        </div>
            : <div className="max-w-3xl mx-auto p-6 bg-cyan-600 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 text-gray-100 space-y-5">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-300">
                    Update {formData.name} Group
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">

                    <label className="block">
                        <span className="block mb-1">Group Name</span>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full border p-2 rounded"
                            required
                        />
                    </label>

                    <label className="block">
                        <span className="block mb-1">Hobby Category</span>
                        <select
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            className="w-full border p-2 rounded bg-gray-800 "
                            required
                        >
                            <option value="" >Select Hobby Category</option>
                            {categories.map((cat, idx) => (
                                <option key={idx} value={cat}>
                                    {cat}
                                </option>
                            ))}
                        </select>
                    </label>

                    <label className="block">
                        <span className="block mb-1">Description</span>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            className="w-full border p-2 rounded"
                            rows="4"
                            required
                        />
                    </label>

                    <label className="block">
                        <span className="block mb-1">Meeting Location</span>
                        <input
                            type="text"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            className="w-full border p-2 rounded"
                            required
                        />
                    </label>

                    <label className="block">
                        <span className="block mb-1">Max Members</span>
                        <input
                            type="number"
                            name="member"
                            min={0}
                            value={formData.member}
                            onChange={handleChange}
                            className="w-full border p-2 rounded"
                            required
                        />
                    </label>

                    <label className="block">
                        <span className="block mb-1">Start Date</span>
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            className="w-full border p-2 rounded"
                            required
                        />
                    </label>

                    <label className="block">
                        <span className="block mb-1">Image URL</span>
                        <input
                            type="url"
                            name="picture"
                            value={formData.picture}
                            onChange={handleChange}
                            className="w-full border p-2 rounded"
                            required
                        />
                    </label>

                    <label className="block">
                        <span className="block mb-1">Your Name</span>
                        <input
                            type="text"
                            value={formData.userName}
                            readOnly
                            className="w-full border p-2 rounded bg-gray-100 text-gray-500"
                        />
                    </label>

                    <label className="block">
                        <span className="block mb-1">Your Email</span>
                        <input
                            type="email"
                            value={formData.userEmail}
                            readOnly
                            className="w-full border p-2 rounded bg-gray-100 text-gray-500"
                        />
                    </label>

                    <button
                        onClick={handleSubmit}
                        type="submit"
                        className="w-full cursor-pointer bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                    >
                        Update
                    </button>
                </form>
            </div>
    );
};

export default UpdaetGroup;
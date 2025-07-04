import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
import Lottie from 'lottie-react';
import registerLotti from "../../assets/lotties/animation.json";
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const navigate = useNavigate();
    const { handleregister, setUser } = useContext(AuthContext);
    const [nameError, setNameError] = useState("");
    // console.log(handleregister);
    const handleSubmit = e => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const { userEmail, userName, photo, password, ...restFormData } = Object.fromEntries(formData.entries());



        // const fullname = e.target.fullName.value
        // const photo = e.target.photo.value
        // const email = e.target.email.value
        // const password = e.target.password.value

        console.log(restFormData, userEmail, password);


        if (password.length < 6) {
            setNameError("Password Should be more than 6 character");
            return;
        } else {
            setNameError("");
        }

        if (!/[a-z]/.test(password)) {
            setNameError("Password must be on Lowercase");
            return
        } else {
            setNameError("");
        }

        if (!/[A-Z]/.test(password)) {
            setNameError("Password must be on Uppercase");
            return
        } else {
            setNameError("");
        }


        handleregister(userEmail, password)

            .then((userCredential) => {

                updateProfile(userCredential.user, { displayName: userName, photoURL: photo });

                setUser({ ...userCredential.user, displayName: userName, photoURL: photo });
                console.log(userCredential.user);


                const userProfile = {
                    userEmail,
                    displayName: userName,
                    photoURL: photo,
                    ...restFormData,
                    creationTime: userCredential.user?.metadata?.creationTime,
                    lastSignInTime: userCredential.user?.metadata?.lastSignInTime,

                }

                //save profile info in the db
                //https://hobby-hub-server-one-tau.vercel.app
                //http://localhost:3000/users
                fetch('https://hobby-hub-server-one-tau.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userProfile)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {

                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: "User Created Successfully",
                                showConfirmButton: false,
                                timer: 1500
                            });
                            navigate("/");
                        }

                    })

            })
    }


    return (
        <div className='flex gap-10 max-w-5xl mx-auto bg-cyan-600 rounded-2xl shadow-2xl justify-center items-center'>
            <div className='px-8 py-4'>
                <div className="flex mx-auto flex-col max-w-md p-6 rounded-md sm:p-10  ">
                    <div className="mb-8 text-center">
                        <h1 className="my-3 text-4xl font-bold">Register Now</h1>
                        <p className="text-sm dark:text-gray-600">Register a new account</p>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-12">
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="text" className="block mb-2 text-sm text-black font-semibold">Full Name</label>
                                <input type="text" name="userName" id="name" required placeholder="John Henry" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                            </div>
                            <div>
                                <label htmlFor="photo" className="block mb-2 text-sm text-black font-semibold">User Picture</label>
                                <input type="url" name="photo" id="photo" required placeholder="photo url..." className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm text-black font-semibold">Email address</label>
                                <input type="email" name="userEmail" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                            </div>
                            <div>
                                <div className="flex justify-between mb-2">
                                    <label htmlFor="password" className="text-sm text-black font-semibold">Password</label>
                                </div>
                                <input type="password" name="password" required id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                                {nameError && <p className='text-sm text-error'>{nameError}</p>}
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div>
                                <button type="submit" className="w-full btn bg-black text-white px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">Register Now</button>
                            </div>
                            <p className="px-6 text-sm text-center dark:text-gray-600 text-black">Already have an account?
                                <NavLink to="/login" rel="noopener noreferrer" href="#" className="hover:underline font-semibold dark:text-violet-600">Login</NavLink>.
                            </p>
                        </div>
                    </form>
                </div>
            </div>
            <div className="hidden md:flex flex-col justify-between">
                <Lottie animationData={registerLotti} loop={true}>

                </Lottie>
            </div>
        </div>
    );
};

export default Register;
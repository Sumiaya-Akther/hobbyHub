import React from 'react';
import errorImg from "../../assets/errorImg.jpeg"
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='mt-26 p-12'>
            <div className="max-w-md w-full p-6 bg-white rounded-xl
            flex flex-col items-center justify-center shadow-lg mx-auto">
                <img className='w-52' src={errorImg} alt="" />
                <h1 className="text-2xl font-bold text-red-500 mb-4">404 - Page Not Found</h1>
                <Link 
                    to="/" 
                    className="btn btn-primary px-6 py-3 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
                >
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;
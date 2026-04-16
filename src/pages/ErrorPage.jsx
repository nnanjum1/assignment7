import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">

            <h1 className="text-8xl font-extrabold tracking-widest text-red-500">
                404
            </h1>


            <h2 className="text-2xl md:text-3xl font-semibold mt-4">
                Oops! Page Not Found
            </h2>


            <p className="text-gray-700 mt-3 text-sm md:text-base">
                The page you are looking for doesn’t exist or has been moved.
            </p>

            <Link
                to="/"
                className="mt-6 inline-block px-6 py-3 bg-blue-700 text-white rounded-lg shadow hover:bg-violet-800 transition"
            >
                Back to Home
            </Link>

        </div>
    );
};

export default ErrorPage;
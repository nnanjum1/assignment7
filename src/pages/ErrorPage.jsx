import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">

            <h1 className="text-6xl font-bold text-gray-800">404</h1>
            <p className="text-xl text-gray-600 mt-4">
                Oops! The page you're looking for doesn't exist.
            </p>

            <Link
                to="/"
                className="mt-6 inline-block px-6 py-3 bg-green-700 text-white rounded-lg shadow hover:bg-green-800 transition"
            >
                Back to Home
            </Link>

        </div>
    );
};

export default ErrorPage;
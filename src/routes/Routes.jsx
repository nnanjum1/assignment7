import React from 'react'
import Timeline from '../pages/Timeline'
import Stats from '../pages/Stats'
import { createBrowserRouter } from 'react-router'
import { HomePage } from '../pages/HomePage'
import MainLayout from '../layout/MainLayout'
import ErrorPage from '../pages/ErrorPage'
import FriendDetails from '../pages/FriendDetails'
export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: "/timeline",
                element: <Timeline />
            },
            {
                path: "/stats",
                element: <Stats />
            },
            {
                path: "friend/:id",
                element: <FriendDetails />
            },

        ],
        errorElement: <ErrorPage />
    },
])
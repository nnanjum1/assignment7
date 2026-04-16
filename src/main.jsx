import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { HomePage } from './pages/HomePage';
import { router } from './routes/Routes';
import { FriendsProvider } from './context/FriendContex';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FriendsProvider>
      <RouterProvider router={router} />,

    </FriendsProvider>
  </StrictMode>,
)

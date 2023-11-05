import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import AddJobs from "../pages/AddJobs/AddJobs";
import AllJobs from "../pages/AllJobs/AllJobs";
import Blogs from "../pages/Blogs/Blogs";
import Home from "../pages/Home/Home";
import MyJobs from "../pages/MyJobs/MyJobs";
import Profile from "../pages/Profile/Profile";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
          
            {
                path: '/all-jobs',
                element: <AllJobs/>
            },
            {
                path: '/post-Jobs',
                element: <PrivateRoute><AddJobs/></PrivateRoute>
            },
            {
                path: '/blogs',
                element: <Blogs/>
            },
            {
                path: '/my-jobs',
                element: <MyJobs/>
            },
            {
                path: '/profile',
                element: <Profile/>
            },

            {
                path: '/sign-in',
                element: <SignIn/>
            },
            {
                path: '/sign-up',
                element: <SignUp/>,
            },

        ]
    }
])

export default router;
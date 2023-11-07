import { createBrowserRouter } from "react-router-dom";
import IsLoggedIn from "../components/IsLoggedIn";
import NotFound from "../components/NotFound";
import MainLayout from "../layout/MainLayout";
import AddJobs from "../pages/AddJobs/AddJobs";
import AllJobs from "../pages/AllJobs/AllJobs";
import Blogs from "../pages/Blogs/Blogs";
import Home from "../pages/Home/Home";
import JobDetails from "../pages/JobDetails/JobDetails";
import MyJobs from "../pages/MyJobs/MyJobs";
import Profile from "../pages/Profile/Profile";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <NotFound/>,
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
                element: <PrivateRoute><MyJobs/></PrivateRoute>
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile/></PrivateRoute>
            },
            {
                path: '/job-details/:id',
                element: <PrivateRoute><JobDetails/></PrivateRoute>
            },

            {
                path: '/sign-in',
                element: <IsLoggedIn><SignIn/></IsLoggedIn>
            },
            {
                path: '/sign-up',
                element: <IsLoggedIn><SignUp/></IsLoggedIn>,
            },

        ]
    }
])

export default router;
import { createBrowserRouter } from "react-router";
import ErrorPage from "../pages/errorPage/ErrorPage";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import AllGroups from "../pages/groups/AllGroups";
import MyGroup from "../pages/myGroup/MyGroup";
import CreateGroup from "../pages/createGroup/CreateGroup";
import Loading from "../components/loading/Loading";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import UpdaetGroup from "../pages/updateGroup/UpdateGroup";
import PrivateRoute from "../provider/PrivateRoute";
import GroupDetails from "../pages/groupDetails/GroupDetails";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Support from "../pages/support/Support";
import Dashboard from "../layout/Dashboard";
import DashHome from "../components/dashPage/DashHome";
import Profile from "../pages/profile/Profile";
import ReportIssuePage from "../pages/report/ReportIssuePage";
import FaqPage from "../pages/faqPage/FaqPage";
import AllGroup from "../pages/groups/allGroups/AllGroup";

export const router = createBrowserRouter([

    {
        path: "/",
        errorElement: <ErrorPage></ErrorPage>,
        Component: MainLayout,
        children: [
            {
                index: true,
                path: "/",
                Component: Home,
                hydrateFallbackElement: <Loading></Loading>
            },


            // {
            //     path: "/groups",
            //     Component: AllGroups,
            //     //https://hobby-hub-server-one-tau.vercel.app
            //     //http://localhost:3000/groups
            //     loader: () => fetch('http://localhost:3000/groups'),
            //     hydrateFallbackElement: <Loading></Loading>
            // },

        {
            path: "/groups",
             Component: AllGroup,
             hydrateFallbackElement: <Loading></Loading>
         },

            {
                path: "/group/:id",
                element: <PrivateRoute>
                    <GroupDetails></GroupDetails>
                </PrivateRoute>
            },

            {
                path: "/login",
                Component: Login
            },
            {
                path: "/register",
                Component: Register
            },
            {
                path: "/about",
                Component: About
            },
            {
                path: "/contact",
                Component: Contact
            },
            {
                path: "/support",
                Component: Support
            },
            {
                path: "/report",
                Component: ReportIssuePage
            },
            {
                path:"/faq",
                Component: FaqPage
            }
        ]

    },
    {
        path: "*",
        Component: ErrorPage
    },
    {
        path: "/dashboard",
        errorElement: <ErrorPage></ErrorPage>,
        element: <PrivateRoute>
            <Dashboard></Dashboard>
        </PrivateRoute>,
        children: [
            {
                index: true,
                path: "/dashboard",
                Component: DashHome,
                hydrateFallbackElement: <Loading></Loading>
            },

            {
                path: "createGroup",
                element: <PrivateRoute>
                    <CreateGroup></CreateGroup>
                </PrivateRoute>
            },
            {
                path: "updategroup/:id",
                element: <PrivateRoute>
                    <UpdaetGroup></UpdaetGroup>
                </PrivateRoute>
            },
            {
                path: "myGroup",
                element: <PrivateRoute>
                    <MyGroup></MyGroup>
                </PrivateRoute>
            },
            {
                path: "profile",
                element: <PrivateRoute>
                    <Profile></Profile>
                </PrivateRoute>
            }

        ]
    }


]);
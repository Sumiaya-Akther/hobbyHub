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
            {
                path: "/groups",
                Component: AllGroups,
                //http://localhost:3000/groups
                loader: () => fetch('https://hobby-hub-server-one-tau.vercel.app/groups'),
                hydrateFallbackElement: <Loading></Loading>
            },
            {
                path: "/createGroup",
                element: <PrivateRoute>
                    <CreateGroup></CreateGroup>
                </PrivateRoute>
            },
             {
                path: "/group/:id",
                element: <PrivateRoute>
                    <GroupDetails></GroupDetails>
                </PrivateRoute>
            },
            {
                path: "/updategroup/:id",
                element: <PrivateRoute>
                    <UpdaetGroup></UpdaetGroup>
                </PrivateRoute>
            },
            {
                path: "/myGroup",
                element: <PrivateRoute>
                    <MyGroup></MyGroup>
                </PrivateRoute>

            },
            {
                path: "/login",
                Component: Login
            },
            {
                path: "/register",
                Component: Register
            }
        ]

    },
    {
        path: "*",
        Component: ErrorPage
    }

]);
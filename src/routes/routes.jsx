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
                path: "/allGroup",
                Component: AllGroups,
                loader: () => fetch('http://localhost:3000/groups'),
                 hydrateFallbackElement: <Loading></Loading>
            },
            {
                path: "/createGroup",
                Component: CreateGroup,
            },
            {
                path: "/myGroup",
                Component: MyGroup,
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

    }

]);
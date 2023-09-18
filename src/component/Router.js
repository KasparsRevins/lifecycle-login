import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SignIn from "./signin/SignIn";
import Dashboard from "./dashboard/Dashboard";
import SignUp from "./signup/SignUp";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>
    },
    {
        path: "/SignUp",
        element: <SignUp/>
    },
    {
        path: "/SignIn",
        element: <SignIn/>
    },
    {
        path: "/Dashboard",
        element: <Dashboard/>
    },


])
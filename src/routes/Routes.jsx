import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true,
                Component: Home
            }
        ]
    }
])
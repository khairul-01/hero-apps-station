import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import axios from "axios";
import AllApps from "../pages/AllApps";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true,
                Component: Home,
                loader: async () => {
                    const res = await axios.get('/appData.json');
                    const apps = res.data.slice(0,8);
                    return apps
                }
            },
            {
                path: 'apps',
                Component: AllApps,
                loader: async () => {
                    const res = await axios.get('/appData.json');
                    return res.data;
                }
            }
        ]
    }
])
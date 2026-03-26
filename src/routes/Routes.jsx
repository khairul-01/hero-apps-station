import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import axios from "axios";
import AllApps from "../pages/AllApps";
import AppDetails from "../pages/AppDetails";
import AppError from "../pages/AppError";
import InstallationPage from "../pages/InstallationPage";

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
                    const apps = res.data.slice(0,20);
                    return apps
                }
            },
            {
                path: 'appDetails/:id',
                Component: AppDetails,
                errorElement: <AppError/>,
                loader: async ({params}) => {
                    const res = await axios.get('/appData.json');
                    const app = res.data.find(item => item.id === parseInt(params.id));
                    return app 
                }
            },
            {
                path: 'installation',
                Component: InstallationPage,
                loader: async () => {
                    const res = await axios.get('/appData.json');
                    const apps = res.data;
                    return apps
                }
            }
        ]
    }
])
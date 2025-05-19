import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";

const router = createBrowserRouter([
    {
        path:"/",
        element:<HomeLayout></HomeLayout>,
    },
    {
        path:"/auth",
        element:<h2>Authentication Layout</h2>,
    },
    {
        path:"/plants",
        element:<h2>Plants Layout</h2>,
    },
    {
        path:"/*",
        element:<h2>Error</h2>,
    },
])

export default router;
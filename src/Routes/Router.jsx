import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import AddPlant from "../pages/AddPlant";
import MainLayout from "../Layouts/MainLayout";

const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        children:[
         {
            index:true,
            loader:()=> fetch('http://localhost:3000/plants'),
            element:<HomeLayout></HomeLayout>,
         },
        ]
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
        path:"/addPlant",
        element:<AddPlant></AddPlant>,
    },
    {
        path:"/*",
        element:<h2>Error</h2>,
    },
])

export default router;
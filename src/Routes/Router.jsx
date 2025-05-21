import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import AddPlant from "../pages/AddPlant";
import MainLayout from "../Layouts/MainLayout";
import PlantDetails from "../pages/PlantDetails";
import AllPlants from "../pages/AllPlants";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";

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
        path:"/allPlants",
        loader: () => fetch('http://localhost:3000/plants'),
        element:<AllPlants></AllPlants>,
    },
    {
        path:"/auth",
        element:<AuthLayout></AuthLayout>,
        children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
    },
    {
        path:"/plants",
        element:<h2>Plants Layout</h2>,
    },
    {
        path:"/plants/:id",
        loader:({params}) =>fetch(`http://localhost:3000/plants/${params.id}`),
        element:<PlantDetails></PlantDetails>,
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
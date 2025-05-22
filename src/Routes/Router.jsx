import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import AddPlant from "../pages/AddPlant";
import MainLayout from "../Layouts/MainLayout";
import PlantDetails from "../pages/PlantDetails";
import AllPlants from "../pages/AllPlants";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MyPlantsPage from "../pages/MyPlantsPage";
import PrivateRoute from "../provider/PrivateRoute";
import UpdatePlantPage from "../pages/UpdatePlantPage";
import SignsYourPlantNeedHelp from "../Components/SignsYourPlantNeedHelp";
import FunPlantFacts from "../Components/FunPlantFacts";
import Error from "../pages/Error";

const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        children:[
         {
            index:true,
            loader:()=> fetch('https://plant-care-tracker-server-beta.vercel.app/plants'),
            element:<HomeLayout></HomeLayout>,
         },
        ]
    },
    {
        path:"/allPlants",
        loader: () => fetch('https://plant-care-tracker-server-beta.vercel.app/plants'),
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
        path:"/myplants",
        loader: () =>fetch('https://plant-care-tracker-server-beta.vercel.app/plants'),
        element:(
          <PrivateRoute>
            <MyPlantsPage></MyPlantsPage>
          </PrivateRoute>
        ),
    },
    {
        path:"/updatePlant/:id",
        loader:({params}) => fetch(`https://plant-care-tracker-server-beta.vercel.app/plants/${params.id}`),
        element:(
        <PrivateRoute>
          <UpdatePlantPage></UpdatePlantPage>
        </PrivateRoute>
        ),
    },
    {
        path:"/plants/:id",
        loader:({params}) =>fetch(`https://plant-care-tracker-server-beta.vercel.app/plants/${params.id}`),
        element:(
        <PrivateRoute>
          <PlantDetails></PlantDetails>
        </PrivateRoute>
        ),
    },
    {
        path:"/addPlant",
        element:(
        <PrivateRoute>
          <AddPlant></AddPlant>  
        </PrivateRoute>
        ),
    },  
    {
        path:"/*",
        element:<Error></Error>,
    },
])

export default router;
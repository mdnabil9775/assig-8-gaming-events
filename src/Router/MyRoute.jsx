import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Error from "../Error.jsx/Error";
import Home from "../Pages/Home";
import Events from "../components/Events/Events";
import Details from "../Pages/Details";


const myroute = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        errorElement: <Error></Error>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/events",
                element: <Events></Events>
            },
            {
                path:"/details/:id",
                element:<Details></Details>,
                loader: ()=> fetch(`/gaming.json`)
            }
        ]
    }
])

export default myroute;
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home";
import Allservices from "../Pages/Home/Services/Allservices";
import Login from "../Pages/Login/Login";
import MyReviews from "../Pages/MyReviews/MyReviews";
import Register from "../Pages/Register/Register";
import Reviews from "../Pages/Reviews/Reviews";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
    {path: '/',  element: <Main></Main>,
    children: [
        {path: '/', 
        element: <Home></Home>},
        {path: '/allservice', 
        element:  <Allservices></Allservices>
        },
        {path: '/servicedetails/:id', 
        element: <ServiceDetails></ServiceDetails>,
        loader: ({params}) => fetch(`https://service-review-server-chi.vercel.app/servicedetails/${params.id}`)
        },
        {path: '/login',
        element: <Login></Login>
        },
        {path: '/register',
        element: <Register></Register>
        },
        {path: '/reviews',
        element: <Reviews></Reviews>
        },
        {path: '/myreview',
        element: <PrivateRoutes><MyReviews></MyReviews></PrivateRoutes>
        }

    ]
    }
])
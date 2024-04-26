import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../pages/MainLayout";
import Home from "../pages/Home";
import AllSpots from "../pages/AllSpots";
import AddSpot from "../pages/AddSpot";
import MyList from "../pages/MyList";
import PrivateRoute from "./PrivateRoute";
import SpotDetails from "../pages/SpotDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ErrorPage from "../pages/ErrorPage";
import UpdateSpot from "../pages/UpdateSpot";
import CountrySpots from "../pages/CountrySpots";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/all-spots",
        element: <AllSpots></AllSpots>,
        loader: () => fetch('http://localhost:3000/touristSpots')
      },
      {
        path: "/add-spot",
        element: <PrivateRoute><AddSpot></AddSpot></PrivateRoute>
      },
      {
        path: "/my-list",
        element: <PrivateRoute><MyList></MyList></PrivateRoute>
      },
      {
        path: "/spot-details/:id",
        element: <PrivateRoute><SpotDetails></SpotDetails></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:3000/touristSpots/${params.id}`)
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/update-spot/:id",
        element: <UpdateSpot></UpdateSpot>,
        loader: ({params}) => fetch(`http://localhost:3000/touristSpots/${params.id}`)
      },
      {
        path: "/country-spots/:country",
        element: <CountrySpots></CountrySpots>,
        loader: ({params}) => fetch(`http://localhost:3000/countrySpots/${params.country}`)
      }
    ],
    errorElement: <ErrorPage></ErrorPage>
  },
]);

export default router;
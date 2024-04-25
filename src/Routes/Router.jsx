import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../pages/MainLayout";
import Home from "../pages/Home";
import AllSpots from "../pages/AllSpots";
import AddSpot from "../pages/AddSpot";
import MyList from "../pages/MyList";
import PrivateRoute from "./PrivateRoute";
import SpotDetails from "../pages/SpotDetails";
import Login from "../pages/Login";

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
        element: <AllSpots></AllSpots>
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
        element: <SpotDetails></SpotDetails>,
        loader: ({params}) => fetch(`http://localhost:3000/touristSpots/${params.id}`)
      },
      {
        path: "/login",
        element: <Login></Login>
      }
    ]
  },
]);

export default router;
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../pages/MainLayout";
import Home from "../pages/Home";
import AllSpots from "../pages/AllSpots";
import AddSpot from "../pages/AddSpot";
import MyList from "../pages/MyList";
import PrivateRoute from "./PrivateRoute";

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
      }
    ]
  },
]);

export default router;
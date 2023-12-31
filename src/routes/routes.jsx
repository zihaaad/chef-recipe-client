import {createBrowserRouter} from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Chef from "../Chef/Chef";
import ErrorPage from "../ErrorPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Blog from "../Blog/Blog";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch("https://chef-recipe-server-zynscript.vercel.app/chefs"),
      },
      {
        path: "/chef/:id",
        element: (
          <PrivateRoute>
            <Chef />
          </PrivateRoute>
        ),
        loader: ({params}) =>
          fetch(
            `https://chef-recipe-server-zynscript.vercel.app/chef/${params.id}}`
          ),
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Teamslider from "./components/Sliders/Teamslider/Teamslider";
import Ourbranches from "./components/Ourbranches/Ourbranches";
import Reservation from "./components/Reservation/Reservation";
import Notfound from "./components/Notfound/Notfound";
import Appear from "./components/Appear/Appear";
import { ToastContainer } from "react-toastify";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/reservation",
        element: <Reservation />,
      },
      {
        path: "/ourteam",
        element: <Teamslider />,
      },
      {
        path: "/ourbranches",
        element: <Ourbranches />,
      },
      {
        path: "/Admin11",
        element: <Appear />,
      },
      {
        path: "*",
        element: <Notfound />, //404 page
      },
    ],
  },
]);

function App() {
  <ToastContainer position="top-center" autoClose={2000} />;
  return <RouterProvider router={router} />;
}

export default App;

import { createBrowserRouter } from "react-router-dom";

import Home from "../views/Home";
import Politicas  from "../views/politicas";

import Error404 from "../views/Error404";

const router = createBrowserRouter([
  { path:"/", element: <Home /> },
  { path:"/politicas", element: <Politicas /> },
  { path: "*", element: <Error404 /> },
]);

export default router;




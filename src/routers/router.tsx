import { createBrowserRouter } from "react-router-dom";

import Home from "../views/Home";
import Politicas  from "../views/politicas";
import Contacto from "../views/Contacto";
import Blog from "../views/Blog";

import Error404 from "../views/Error404";

const router = createBrowserRouter([
  { path:"/", element: <Home /> },
  { path:"/politicas", element: <Politicas /> },
  { path:"/contacto", element: <Contacto /> },
  { path:"/blog", element: <Blog /> },
  { path: "*", element: <Error404 /> },
]);

export default router;




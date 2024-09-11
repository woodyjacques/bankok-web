import { createBrowserRouter } from "react-router-dom";

import Home from "../views/Home";
import Politicas  from "../views/politicas";
import Contacto from "../views/Contacto";
import Blog from "../views/Blog";

import Error404 from "../views/Error404";
import FormIngresar from "../views/FormIngresar";

const router = createBrowserRouter([
  { path:"/", element: <Home /> },
  { path:"/politicas", element: <Politicas /> },
  { path:"/contacto", element: <Contacto /> },
  { path:"/blog", element: <Blog /> },
  { path:"/form", element: <FormIngresar /> },
  { path: "*", element: <Error404 /> },
]);

export default router;




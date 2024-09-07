import { createBrowserRouter } from "react-router-dom";

import Home from "../views/Home";
import Error404 from "../views/Error404";

const router = createBrowserRouter([
  { path:"/", element: <Home /> },
  { path: "*", element: <Error404 /> },
]);

export default router;




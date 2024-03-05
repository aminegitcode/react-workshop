import { createBrowserRouter } from "react-router-dom";
import Landing from "./routers/Landing";
import Login from "./routers/Login";
import AppMenu from "./routers/AppMenu";
import "./index.css";

const router = createBrowserRouter([
  

  {
    path: "/landing",
    element: <Landing/>,
  },
  
  {
    path: "/login",
    
    element: <Login/>,
    
  },
  {
    path:"/AppMenu",
    element:<AppMenu/>
  },
]);

export default router;


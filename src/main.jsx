import ReactDOM from 'react-dom/client'
import router from './App.jsx'
import { RouterProvider } from "react-router-dom"
import './index.css'



console.log ('hello');

ReactDOM.createRoot(document.getElementById('root')).render(
 <RouterProvider router={router} />
);

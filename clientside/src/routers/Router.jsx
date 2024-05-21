import App from "../App";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Home from "../home/Home";
import Shop from "../shop/Shop";
import About from "../components/About";
import Blog from "../components/Blog";
import SingleGood from "../components/SingleGood";
import DashboardLayout from "../dashboard/DashboardLayout";
import UploadGood from "../dashboard/UploadGood";
import ManageGood from "../dashboard/ManageGood";
import EditGood from "../dashboard/EditGood";
import Dashboard from "../dashboard/Dashboard";
import SignUp from "../components/SignUp";
import Login from "../components/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute"
import Logout from "../components/Logout";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
            path: '/',
            element:<Home/>
        },
        {
            path:'/shop',
            element:<Shop/>
        },
        {
            path:'/about',
            element:<About/>
        },
        {
            path:'/blog',
            element:<Blog/>
        },
        {
          path:"/good/:id",
          element:<SingleGood/>,
          loader:({params}) => fetch('http://localhost:5000/good/${params.id}')
        }
      ]
    },
    
    {
      path: "/admin/dashboard",
      element: <DashboardLayout/>,
      children:[
        {
            path: "/admin/dashboard",
            element:<PrivateRoute><Dashboard/></PrivateRoute>
        },
        {
            path:"/admin/dashboard/upload",
            element:<UploadGood/>
        },
        {
            path:"/admin/dashboard/manage",
            element:<ManageGood/>
        },
        {
            path:"/admin/dashboard/edit/:id",
            element:<EditGood/>,
            loader: ({ params }) => fetch(`http://localhost:5000/good/${params._id}`)
        }
        
        
      ]
    },
    { 
      path:"signup",
      element:<SignUp/>
        
    },
    {
      path:'login',
      element:<Login/>
    },
    {
      path:"logout",
      element:<Logout/>
    }
  ]);

  export default router
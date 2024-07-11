import App from "../App";
import { createBrowserRouter } from "react-router-dom";
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
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Logout from "../components/Logout";
import Purchase_memo from "../dashboard/Purchase_memo";
import Sell_memo from "../dashboard/Sell_memo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/shop',
        element: <Shop />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/blog',
        element: <Blog />
      },
      {
        path: "/good/:id",
        element: <SingleGood />,
        loader: async ({ params }) => {
          try {
            const response = await fetch(`http://localhost:5000/good/${params.id}`);
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          } catch (error) {
            console.error('Fetch error:', error);
            throw error;
          }
        }
      }
    ]
  },
  {
    path: "/admin/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/admin/dashboard",
        element: <PrivateRoute><Dashboard /></PrivateRoute>
      },
      {
        path: "/admin/dashboard/upload",
        element: <UploadGood />
      },
      {
        path: "/admin/dashboard/manage",
        element: <ManageGood />
      },
      {
        path: "/admin/dashboard/edit/:id",
        element: <EditGood />,
        loader: async ({ params }) => {
          try {
            const response = await fetch(`http://localhost:5000/good/${params.id}`);
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          } catch (error) {
            console.error('Fetch error:', error);
            throw error;
          }
        }
      },
      {
        path:"/admin/dashboard/purchase",
        element : <Purchase_memo/>
      },{
        path:"/admin/dashboard/sell",
        element:<Sell_memo/>
      }
    ]
  },
  {
    path: "signup",
    element: <SignUp />
  },
  {
    path: 'login',
    element: <Login />
  },
  {
    path: "logout",
    element: <Logout />
  }
]);

export default router;
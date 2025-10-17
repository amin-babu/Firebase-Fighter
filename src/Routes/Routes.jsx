import { createBrowserRouter } from "react-router";
import Homepage from "../Pages/HomePage";
import MainLayout from "../Layout/MainLayout";
import AboutUs from "../Pages/AboutUs";
import Profile from "../Pages/Profile";
import Signup from "../Pages/SignUp";
import Signin from "../Pages/SignIn";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Homepage />
      },
      {
        path: '/about-us',
        element: <AboutUs />
      },
      {
        path: '/profile',
        element: <Profile />
      }, 
      {
        path: '/signup',
        Component: Signup
      },
      {
        path: '/signin',
        Component: Signin
      }
    ]
  }
])
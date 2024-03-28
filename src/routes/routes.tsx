import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/Home";
import SingleCourse from "../pages/SingleCourse";
import Course from "../pages/Course";
import ContactUs from "../pages/ContactUs";
import Blogs from "../pages/Blogs";
import SingleBlogs from "../pages/SingleBlogs";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import NotFound from "../pages/NotFound";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/courses",
        element: <Course />,
      },
      {
        path: "/courses/:id",
        element: <SingleCourse />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/blogs/:id",
        element: <SingleBlogs />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/sign-in",
        element: <Signin />,
      },
      {
        path: "/sign-up",
        element: <Signup />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

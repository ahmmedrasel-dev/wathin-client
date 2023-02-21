import { createBrowserRouter } from "react-router-dom";
import Blogs from "../components/Blogs/Blogs";
import Main from "../layout/Main";
import BlogDetails from "../pages/BlogDetails/BlogDetails";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        loader: async () => fetch('http://localhost:5000/news'),
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/news',
        loader: async () => fetch('http://localhost:5000/news'),
        element: <Blogs></Blogs>,
      },
      {
        path: '/news/:slug',
        loader: async ({ params }) => fetch(`http://localhost:5000/news/${params.slug}`),
        element: <BlogDetails></BlogDetails>
      }
    ]
  }
])

export default router;
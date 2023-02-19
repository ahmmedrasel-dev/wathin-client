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
        loader: async () => {
          return fetch('blog.json');
        },
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/news',
        loader: async () => {
          return fetch('blog.json');
        },
        element: <Blogs></Blogs>,
        children: [
          {
            path: ':slug',
            loader: async ({ params }) => {
              return fetch('blog.json')
            },
            element: <BlogDetails></BlogDetails>
          }
        ]
      }
    ]
  }
])

export default router;
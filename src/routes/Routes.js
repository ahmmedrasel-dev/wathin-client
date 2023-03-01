import { createBrowserRouter } from "react-router-dom";
import Blogs from "../components/Blogs/Blogs";
import Features from "../components/Features/Features";
import Projects from "../components/Projects/Projects";
import Services from "../components/services/Services";
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
        loader: async () => fetch('https://wathin-server.vercel.app/news'),
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/news',
        loader: async () => fetch('https://wathin-server.vercel.app/news'),
        element: <Blogs></Blogs>,
      },
      {
        path: '/about',
        element: <Features></Features>,
      },
      {
        path: '/services',
        element: <Services />,
      },
      {
        path: '/news/:slug',
        loader: async ({ params }) => fetch(`https://wathin-server.vercel.app/news/${params.slug}`),
        element: <BlogDetails></BlogDetails>
      },
      {
        path: '/projects',
        element: <Projects></Projects>
      }
    ]
  }
])

export default router;
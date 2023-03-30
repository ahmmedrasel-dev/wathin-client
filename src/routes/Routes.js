import { createBrowserRouter } from "react-router-dom";
import Blogs from "../components/Blogs/Blogs";
import Features from "../components/Features/Features";
import Projects from "../components/Projects/Projects";
import Services from "../components/services/Services";
import DashboardLayout from "../layout/DashboardLayout";
import Main from "../layout/Main";
import BlogDetails from "../pages/BlogDetails/BlogDetails";
import Contact from "../pages/Contact/Contact";
import Dashboard from "../pages/Dashboard/Dashboard";
import AddNews from "../pages/Dashboard/News/AddNews";
import UserNews from "../pages/Dashboard/News/UserNews";
import AllProjects from "../pages/Dashboard/Projects/AllProjects";
import CreateProject from "../pages/Dashboard/Projects/CreateProject";
import Users from "../pages/Dashboard/Users/Users";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/news',
        element: <Blogs></Blogs>,
      },
      {
        path: '/about',
        element: <Features></Features>,
      },
      {
        path: '/contact',
        element: <Contact></Contact>,
      },
      {
        path: '/services',
        element: <Services />,
      },
      {
        path: '/news/:slug',
        loader: async ({ params }) => fetch(`https://server.wathincompanyltd.com/api/news/${params.slug}`),
        element: <BlogDetails></BlogDetails>
      },
      {
        path: '/projects',
        element: <Projects></Projects>
      }
    ]
  },
  {
    path: '/dashboard',
    element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    children: [
      {
        path: '/dashboard',
        element: <AdminRoute><Dashboard></Dashboard></AdminRoute>
      },
      {
        path: '/dashboard/add-news',
        element: <AdminRoute><AddNews /></AdminRoute>
      },
      {
        path: '/dashboard/edit-news',
        element: <AdminRoute><AddNews /></AdminRoute>
      },
      {
        path: '/dashboard/news',
        element: <AdminRoute><UserNews /></AdminRoute>
      },
      {
        path: '/dashboard/add-project',
        element: <AdminRoute><CreateProject /></AdminRoute>
      },
      {
        path: '/dashboard/edit-project',
        element: <AdminRoute><CreateProject /></AdminRoute>
      },
      {
        path: '/dashboard/projects',
        element: <AdminRoute><AllProjects /></AdminRoute>
      },
      {
        path: '/dashboard/users',
        element: <AdminRoute><Users /></AdminRoute>
      }
    ]
  }
])

export default router;
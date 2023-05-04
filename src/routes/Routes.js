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
import PrivateRoute from "./PrivateRoute";
import EditProject from "../pages/Dashboard/Projects/EditProject";

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
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
      },
      {
        path: '/dashboard/add-news',
        element: <AddNews />
      },
      {
        path: '/dashboard/edit-news/:id',
        element: <AddNews />
      },
      {
        path: '/dashboard/news',
        element: <UserNews />
      },
      {
        path: '/dashboard/add-project',
        element: <PrivateRoute><CreateProject /></PrivateRoute>
      },
      {
        path: '/dashboard/edit-project/:slug',
        element: <PrivateRoute><EditProject /></PrivateRoute>,
        loader: ({ params }) => fetch(`https://server.wathincompanyltd.com/api/project/${params.slug}`)
      },
      {
        path: '/dashboard/projects',
        element: <PrivateRoute><AllProjects /></PrivateRoute>
      },
      {
        path: '/dashboard/users',
        element: <PrivateRoute><Users /></PrivateRoute>
      }
    ]
  }
])

export default router;
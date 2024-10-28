import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root.jsx";
import Home from "./Components/Home/Home.jsx";
import ApplyedJobs from "./Components/ApplyedJobs/ApplyedJobs.jsx";
import ErrorPage from "./Components/Error/ErrorPage.jsx";
import Login from "./Components/Login/Login.jsx";
import Profile from "./Components/Login/Profile.jsx";
import JobDetails from "./Components/JobDetails/JobDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/applied",
        element: <ApplyedJobs></ApplyedJobs>,
      },
      {
        path: "/Login",
        element: <Login></Login>,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/job/:id",
        element: <JobDetails />,
        loader: () => fetch("/jobs.json"), //dont load all data , load only what i need
      },
      // {
      //   path: "/Statistics"
      //   element:
      // }
      // {
      //   path: "/Blogs"
      //   element:
      // }
      // {
      //   path: "/jobs"
      //   element:
      // }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

import React, { Suspense, useEffect, lazy } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
const Wrapper = lazy(() => import("./Pages/Layout/Wrapper/Wrapper"));
const Home = lazy(() => import("./Pages/CMS/Home/Home"));
const About = lazy(() => import("./Pages/CMS/About/About"));
const Doctors = lazy(() => import("./Pages/CMS/Doctors/Doctors"));

const Blogs = lazy(() => import("./Pages/CMS/Blogs/Blogs"));
const Contact = lazy(() => import("./Pages/CMS/Contact/Contact"));
const Login = lazy(() => import("./Pages/Auth/Login/Login"));
const Registration = lazy(() =>
  import("./Pages/Auth/Registration/Registration")
);
import { useDispatch } from "react-redux";
import { checkToken } from "./Redux-Toolkit/Slice/authSlice";
const Department = lazy(() => import("./Pages/CMS/Department/Department"));
const DocDetails = lazy(() => import("./Pages/CMS/DocDetails/DocDetails"));
const DepartmentWiseDoctors = lazy(() =>
  import("./Pages/CMS/DepartmentWiseDoctors/DepartmentWiseDoctors")
);
const GetAppointment = lazy(() =>
  import("./Pages/CMS/GetAppointment/GetAppointment")
);

import Loader from "./Loader/Loader";
import { toast } from "react-toastify";
const BlogDetails = lazy(() => import("./Pages/CMS/BlogDetails/BlogDetails"));
const MyProfile = lazy(() => import("./Pages/CMS/MyProfile/MyProfile"));

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkToken());
  }, [dispatch]);

  function PrivateRoute({ children }) {
    const token =
      localStorage.getItem("token") || sessionStorage.getItem("token");

    return token != null || token != undefined ? (
      children
    ) : (
      <>
        <Navigate to="/login" />
        {toast.error("Please go for login either you can't access")}
      </>
    );
  }

  const publicRoutingName = [
    {
      path: "/",
      Component: <Home />,
    },
    {
      path: "/login",
      Component: <Login />,
    },
    {
      path: "/regis",
      Component: <Registration />,
    },
  ];

  const privateRoutingName = [
   
    {
      path: "/about",
      Component: <About />,
    },
    {
      path: "/department",

      Component: <Department />,
    },
    {
      path: "/departmentwisedoc/:id",
      Component: <DepartmentWiseDoctors />,
    },
    {
      path: "/doc",
      Component: <Doctors />,
    },
    {
      path: "/docdetails/:id",
      Component: <DocDetails />,
    },
    {
      path: "/appoint/:id",
      Component: <GetAppointment />,
    },
    {
      path: "/blogs",
      Component: <Blogs />,
    },
    {
      path: "/details/:id",
      Component: <BlogDetails />,
    },
    {
      path: "/contact",
      Component: <Contact />,
    },
    {
      path: "/profile",
      Component: <MyProfile />,
    },
  ];
  return (
    <>
      <Suspense fallback={<Loader />}>
        <BrowserRouter>
          <Wrapper>
            <Routes>
              {publicRoutingName.map((route, index) => (
                <Route
                  key={index}
                  exact
                  path={route.path}
                  element={route.Component}
                />
              ))}

              {privateRoutingName.map((route, index) => (
                <Route
                  key={index}
                  exact
                  path={route.path}
                  element={<PrivateRoute>{route.Component}</PrivateRoute>}
                />
              ))}
            </Routes>
          </Wrapper>
        </BrowserRouter>
      </Suspense>
    </>
  );
}

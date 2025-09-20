import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Componenets/about/about.jsx";
import Contact from "./Componenets/Home/home.jsx";
import Parent from "./Componenets/Parent/Parent.jsx";
import AppSetting from "./Pages/Appsetting.jsx";
import Login from "./Componenets/Login/Login.jsx";
import Register from "./Componenets/register/Register.jsx";
import MainLayout from "./layouts/Mainlayout.jsx";
import AuthLayout from "./layouts/Authlayout.jsx";
import Categry from "./Componenets/Category/Categry.jsx";
import Brand from "./Componenets/Brand/Brand.jsx";
import ProfileSetting from "./Pages/ProfileSetting.jsx";
import WebSetting from "./Pages/WebSetting.jsx";
import Notfound from "./Componenets/Notfound/Notfound.jsx";
import SettingsLayout from "./layouts/SettingsLayout.jsx";
function App() {
  const [count, setCount] = useState(0);

  const router = createBrowserRouter([
    {
      element: <MainLayout />,
      children: [
        { path: "/", element: <Parent /> },
        { path: "/products", element: <Parent /> },
        { path: "/category", element: <Categry /> },
        { path: "/brand", element: <Brand /> },
        { path: "/about", element: <About /> },
        { path: "/contact", element: <Contact /> },

        {
          path: "/settings",
          element: <SettingsLayout />,
          children: [
            { path: "app", element: <AppSetting /> },
            { path: "profile", element: <ProfileSetting /> },
            { path: "web", element: <WebSetting /> },
          ],
        },
        { path: "*", element: <Notfound layout="main" /> },
      ],
    },

    {
      element: <AuthLayout />,
      children: [
        { path: "/auth/about", element: <About /> },
        { path: "/auth/contact", element: <Contact /> },
        { path: "/auth/login", element: <Login /> },
        { path: "/auth/register", element: <Register /> },

        { path: "*", element: <Notfound layout="auth" /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

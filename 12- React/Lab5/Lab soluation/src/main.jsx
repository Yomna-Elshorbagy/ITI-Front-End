import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home/Home.jsx";
import Register from "./Components/Register/Register.jsx";
import Login from "./Components/Login/Login.jsx";
import LayOut from "./Components/LayOut/LayOut.jsx";
import NotFound from "./Components/NotFound/NotFound.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import TokenContextProvider from "./Context/TokenContext.jsx";
import CounterContextProvider from "./Context/CounterContetx.jsx";

const routes = createBrowserRouter([
  {
    path: "",
    element: <LayOut />,
    children: [
      { index: true, element: <Register /> },
      { path: "register", element: <Register /> },
      { path: "login", element: <Login /> },
      { path: "home", element: <Home /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <>
    <TokenContextProvider>
      <CounterContextProvider>
        <RouterProvider router={routes}></RouterProvider>
      </CounterContextProvider>
    </TokenContextProvider>
  </>
);

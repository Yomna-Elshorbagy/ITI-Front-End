import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./Components/Login/Login.jsx";
import Register from "./Components/Register/Register.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Login /> */}
      <Register />
    </>
  );
}

export default App;

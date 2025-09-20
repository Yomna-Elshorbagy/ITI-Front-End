import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Parent from "./Componenets/Parent/Parent.jsx";
import Navbar from "./Componenets/Navbar/Navbar.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Parent />
    </>
  );
}

export default App;

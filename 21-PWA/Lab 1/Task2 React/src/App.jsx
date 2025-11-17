import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar.jsx";
import Footer from "./components/footer/footer.jsx";
import Home from "./Home/home.jsx";
import About from "./components/about/about.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Footer />
    </>
  );
}

export default App;

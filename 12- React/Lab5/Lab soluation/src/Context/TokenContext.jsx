// 1- create context
import { createContext, useState } from "react";
export let TokenContext = createContext();

// 2- provide

export default function TokenContextProvider({ children }) {
  const [userData, setUserData] = useState(localStorage.getItem("token"));
  return (
    <TokenContext.Provider value={{ userData, setUserData }}>
      {children}
    </TokenContext.Provider>
  );
}

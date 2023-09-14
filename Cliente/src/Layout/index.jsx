import React, { createContext, useEffect, useState } from "react";
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";

export const userContext = createContext(null);
const initUser = {
  rol: -1
}
export const Layout = ({ children }) => {
  const [user, setUser] = useState({});

  useEffect(()=>{
    // Consultar si el usuario es valido
  },[])

  return (
    <userContext.Provider value={user}>
      <Header userRol={ user.rol } />
      {children}
      <Footer />
    </userContext.Provider>
  );
};

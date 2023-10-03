import React, { createContext, useEffect, useState } from "react";
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";

const initUser = {
  tipoUsuario: -1,
};
export const userContext = createContext(null);
export const Layout = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(initUser);

  const loginUser = (user) => {
    setCurrentUser({ ...user });

    console.log("Usuario Conectado!");
  };
  const logoutUser = () => {
    setCurrentUser(initUser);
    console.log("Usuario Desconectado!");
  };

  return (
    <userContext.Provider value={{ currentUser, loginUser, logoutUser }}>
      <Header tipoUsuario={currentUser.tipoUsuario} nombre={currentUser.email}/>
      {children}
      <Footer />
    </userContext.Provider>
  );
};

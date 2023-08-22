import React from "react";
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";

export const FrontLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

import React, { Children } from "react";
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";

export const FrontLayout = () => {
  return (
    <>
      <Header />
      {Children}
      <Footer />
    </>
  );
};

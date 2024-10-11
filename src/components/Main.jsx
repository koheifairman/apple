import React from "react";
import { Product } from "./Product";
import { Promotion } from "./Promotion";
import { Recommendation } from "./Recommendation";

export const Main = () => {
  return (
    <>
      <Promotion />
      <Product />
      <Recommendation />
    </>
  );
};

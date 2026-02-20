import React from "react";
import { ProductProvider } from "./src/context/ProductContext";
import ProductScreen from "./src/screens/ProductScreen";

export default function App() {
  return (
    <ProductProvider>
      <ProductScreen />
    </ProductProvider>
  );
}
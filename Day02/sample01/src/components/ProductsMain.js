import React from "react";
import ProductsList from "./ProductsList";

const products = [
  { id: 1, name: "product 1" },
  { id: 2, name: "product 2" },
  { id: 3, name: "product 3" },
];

export default function ProductsMain() {
  return (
    <div>
      ProductsMain
      <hr />
      <ProductsList products={products} />
      {/* <ProductsList /> */}
    </div>
  );
}

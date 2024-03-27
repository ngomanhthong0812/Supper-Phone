import React from "react";

import ProductCard from "../ProductCard/ProductCard";
import ProductsItem from "./ProductsItem";
export default function ProductsList() {
  return (
    <div>
      <div className="w-full flex items-center justify-center">
        <div className="container_body grid grid-cols-4 gap-[20px]">
          {ProductsItem.map((item) => (
            <ProductCard {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

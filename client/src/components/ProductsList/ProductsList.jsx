import React from "react";

import ProductCard from "../ProductCard/ProductCard";
import ProductsItem from "./ProductsItem";
export default function ProductsList() {
  return (
    <div>
      <div className="w-full flex items-center justify-center">
        <div className="container_body grid grid-cols-2 xl:grid-cols-4 gap-[20px] lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2">
          {ProductsItem.map((item) => (
            <ProductCard {...item} key={item.id}/>
          ))}
        </div>
      </div>
    </div>
  );
}

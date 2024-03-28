import React from "react";

import ProductCard from "../ProductCard/ProductCard";
import ProductsItem from "./ProductsItem";

export default function ProductsList({ quantityProduct = ProductsItem.length, isShowQuantitySold = false, nameCategory }) {
  const newProductItem = ProductsItem.filter(item => {
    return item.category.some(category => category.name == nameCategory)
  })
  console.log(newProductItem);
  return (
    <div>
      <div className="w-full flex items-center justify-center">
        <div className="container_body grid grid-cols-2 xl:grid-cols-4 gap-[20px] lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2">
          {nameCategory ?
            newProductItem.map((item, index) => (
              index < quantityProduct && (<ProductCard {...item} key={item.id} isShowQuantitySold={isShowQuantitySold} />)
            ))
            :
            ProductsItem.map((item, index) => (
              index < quantityProduct && (<ProductCard {...item} key={item.id} isShowQuantitySold={isShowQuantitySold} />)
            ))
          }
        </div>
      </div>
    </div>
  );
}

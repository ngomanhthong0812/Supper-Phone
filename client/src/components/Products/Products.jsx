import React from 'react'
import ProductCard from './ProductCard';
import Img1 from '../../asset/images/products/product-1.jpg';
import Img2 from '../../asset/images/products/product-2.jpg';
import Img3 from '../../asset/images/products/product-3.jpg';
import Img4 from '../../asset/images/products/product-4.jpg';

const ProductIphone = [
  {
    id: 1,
    img: Img1,
    productName: "iPhone 12 64GB - Chính hãng VN/A - MGJ73VN/A",
    old_price: "24.900.000",
    price: "14.790.000",
    installment: "Trả góp 0",
    guarantee: "BH 12 tháng",
    sale: "41%",
    aosDelay: "0",
    quantity_sold: 131,
  },
  {
    id: 2,
    img: Img2,
    productName: "iPhone 14 Pro Max 512GB - Chính hãng VN/A",
    old_price: "43.990.000",
    price: "35.790.000",
    installment: "Trả góp 0",
    guarantee: "BH 24 tháng",
    sale: "19%",
    aosDelay: "0",
    quantity_sold: 253,
  },
  {
    id: 3,
    img: Img3,
    productName: "iPhone 14 Pro Max 128GB - Chính hãng VN/A",
    old_price: "34.990.000",
    price: "26.890.000",
    installment: "Trả góp 0",
    guarantee: "BH 24 tháng",
    sale: "23%",
    aosDelay: "0",
    quantity_sold: 196,
  },
  {
    id: 4,
    img: Img4,
    productName: "iPhone 14 Plus 512GB - Chính hãng VN/A",
    old_price: "36.990.000",
    price: "29.990.000",
    installment: "Trả góp 0",
    guarantee: "BH 24 tháng",
    sale: "19%",
    aosDelay: "0",
    quantity_sold: 68,
  },
];

export default function Products() {
  return (
    <div>
      <ProductCard data={ProductIphone}></ProductCard>
    </div>
  )
}

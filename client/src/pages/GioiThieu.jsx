import React from 'react';

import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';
// Gọi API từ server
import ProductsAPI from '../services/ProductsAPI'
// chuyển đổi ảnh 
import arrayBufferToBase64 from '../services/Base64';

export default function GioiThieu() {
    const products = ProductsAPI();
    console.log(products);
    return (
        <div>
            <Header />
            <Navbar />
            Đây là trang giới thiệu
            {products.map(product => (
                <div key={product.id}>
                    <h3>{product.id}</h3>
                    <h3>{product.productName}</h3>
                    {/* Convert buffer to base64 and set it as img src */}
                    <img src={arrayBufferToBase64(product.img.data)} alt={product.productName} />
                   
                    <p>Old Price: {product.old_price}</p>
                    {/* Display other product information */}
                </div>
            ))}
        </div>
    );
}

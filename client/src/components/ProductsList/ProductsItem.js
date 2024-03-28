import React from "react";
import Img1 from "../../asset/images/products/product-1.jpg";
import Img2 from "../../asset/images/products/product-2.jpg";
import Img3 from "../../asset/images/products/product-3.jpg";
import Img4 from "../../asset/images/products/product-4.jpg";

const ProductsItem = [
  // {
  //   "id": 1,
  //   img: Img1,
  //   product"Name": "iPhone 12 64GB - Chính hãng VN/A - MGJ73VN/A",
  //   old_price: "24.900.000",
  //   price: "14.790.000",
  //   installment: "Trả góp 0%%",
  //   guarantee: "BH 12 tháng",
  //   sale: "41%",
  //   aosDelay: "0",
  //   quantity: 400,
  //   quantity_sold: 131,
  //   endow: "Giảm trực tiếp 40%, tối đa 600.000 VND khi mở thẻ TP Bank EVO",
  // },
  // {
  //   "id": 2,
  //   img: Img2,
  //   product"Name": "iPhone 14 Pro Max 512GB - Chính hãng VN/A",
  //   old_price: "43.990.000",
  //   price: "35.790.000",
  //   installment: "Trả góp 0%%",
  //   guarantee: "BH 24 tháng",
  //   sale: "19%",
  //   aosDelay: "0",
  //   quantity: 400,
  //   quantity_sold: 253,
  //   endow: "Giảm trực tiếp 40%, tối đa 600.000 VND khi mở thẻ TP Bank EVO",
  // },
  // {
  //   "id": 3,
  //   img: Img3,
  //   product"Name": "iPhone 14 Pro Max 128GB - Chính hãng VN/A",
  //   old_price: "34.990.000",
  //   price: "26.890.000",
  //   installment: "Trả góp 0%%",
  //   guarantee: "BH 24 tháng",
  //   sale: "23%",
  //   aosDelay: "0",
  //   quantity: 400,
  //   quantity_sold: 196,
  //   endow: "Giảm trực tiếp 40%, tối đa 600.000 VND khi mở thẻ TP Bank EVO",
  // },
  // {
  //   "id": 4,
  //   img: Img4,
  //   product"Name": "iPhone 14 Plus 512GB - Chính hãng VN/A",
  //   old_price: "36.990.000",
  //   price: "29.990.000",
  //   installment: "Trả góp 0%%",
  //   guarantee: "BH 24 tháng",
  //   sale: "19%",
  //   aosDelay: "0",
  //   quantity: 400,
  //   quantity_sold: 68,
  //   endow: "Giảm trực tiếp 40%, tối đa 600.000 VND khi mở thẻ TP Bank EVO",
  // },
  {
    "id": 1,
    "img": Img1,
    "productName": "iPhone 13 Pro Max 512GB - Chính Hãng VN/A",
    "link": "iphone-13-pro-max-512gb-chinh-hang-vn-a",
    "old_price": 43990000,
    "installment": "Trả góp 0%",
    "guarantee": "BH 12 tháng",
    "sale": 36,
    "aosDelay": "0",
    "quantity": 300,
    "quantity_sold": 122,
    "endow": "Thu cũ đổi mới: Thu giá cao trợ giá đến 90%",
    "description": "",
    "category": [
      {
        "title": "iPhone 13 Series",
        "name": "iphone-13-series",
        "link": "/iphone-13-series",
      }
    ]
  },
  {
    "id": 2,
    "img": Img1,
    "productName": "iPhone 13 Pro Max 1TB - Chính Hãng VN/A",
    "link": "iphone-13-pro-max-1tb-chinh-hang-vn-a",
    "old_price": 49990000,
    "installment": "Trả góp 0%",
    "guarantee": "BH 12 tháng",
    "sale": 40,
    "aosDelay": "0",
    "quantity": 200,
    "quantity_sold": 142,
    "endow": "Thu cũ đổi mới: Thu giá cao trợ giá đến 90%",
    "description": "",
    "category": [
      {
        "title": "iPhone 14 Series",
        "name": "iphone-14-series",
        "link": "/iphone-14-series",
      },
      {
        "title": "iPhone 13 Series",
        "name": "iphone-13-series",
        "link": "/iphone-13-series",
      }
    ]
  },
  {
    "id": 3,
    "img": Img1,
    "productName": "iPhone 13 Pro Max 1TB - Chính Hãng VN/A",
    "link": "13-pro-max-1tb-chinh-hang-vn-a",
    "old_price": null,
    "installment": null,
    "guarantee": null,
    "sale": null,
    "aosDelay": "0",
    "quantity": 100,
    "quantity_sold": 57,
    "endow": "Giảm 250.000đ khi mua kèm gói bảo hành VIP 12 tháng 1 Đổi 1.",
    "description": "",
    "category": [
      {
        "title": "iPhone 14 Series",
        "name": "iphone-14-series",
        "link": "/iphone-14-series",
      },
      {
        "title": "iPhone 13 Series",
        "name": "iphone-13-series",
        "link": "/iphone-13-series",
      }
    ]
  },
  {
    "id": 4,
    "img": Img1,
    "productName": "iPhone 14 512GB - Chính hãng VN/A",
    "link": "iphone-14-512gb-chinh-hang-vn-a",
    "old_price": 33990000,
    "installment": "Trả góp 0%",
    "guarantee": "BH 24 tháng",
    "sale": 18,
    "aosDelay": "0",
    "quantity": 100,
    "quantity_sold": 68,
    "endow": "Giảm 250.000đ khi mua kèm gói bảo hành VIP 12 tháng 1 Đổi 1.",
    "description": "",
    "category": [
      {
        "title": "iPhone 14 Series",
        "name": "iphone-14-series",
        "link": "/iphone-14-series",
      },
      {
        "title": "iPhone 13 Series",
        "name": "iphone-13-series",
        "link": "/iphone-13-series",
      },
      {
        "title": "iPhone 12 series",
        "name": "iphone-12-series",
        "link": "/iphone-12-series",
      }
    ]
  },
  {
    "id": 5,
    "img": Img1,
    "productName": "iPhone 14 Plus 128GB - Chính hãng VN/A",
    "link": "iphone-14-plus-128gb-chinh-hang-vn-a",
    "old_price": 27990000,
    "installment": null,
    "guarantee": "BH 24 tháng",
    "sale": 23,
    "aosDelay": "0",
    "quantity": 150,
    "quantity_sold": 55,
    "endow": "Giảm 250.000đ khi mua kèm gói bảo hành VIP 12 tháng 1 Đổi 1.",
    "description": "",
    "category": [
      {
        "title": "iPhone 14 Series",
        "name": "iphone-14-series",
        "link": "/iphone-14-series",
      },
      {
        "title": "iPhone 13 Series",
        "name": "iphone-13-series",
        "link": "/iphone-13-series",
      },
      {
        "title": "iPhone 12 series",
        "name": "iphone-12-series",
        "link": "/iphone-12-series",
      }
    ]
  },
  {
    "id": 6,
    "img": Img1,
    "productName": "iPhone 14 Plus 256GB - Chính hãng VN/A",
    "link": "iphone-14-plus-256gb-chinh-hang-vn-a",
    "old_price": 30990000,
    "installment": null,
    "guarantee": "BH 24 tháng",
    "sale": 21,
    "aosDelay": "0",
    "quantity": 150,
    "quantity_sold": 100,
    "endow": "Giảm 250.000đ khi mua kèm gói bảo hành VIP 12 tháng 1 Đổi 1.",
    "description": "",
    "category": [
      {
        "title": "iPhone 14 Series",
        "name": "iphone-14-series",
        "link": "/iphone-14-series",
      },
      {
        "title": "iPhone 13 Series",
        "name": "iphone-13-series",
        "link": "/iphone-13-series",
      },
      {
        "title": "iPhone 12 series",
        "name": "iphone-12-series",
        "link": "/iphone-12-series",
      }
    ]
  },
  {
    "id": 7,
    "img": Img1,
    "productName": "iPhone 14 Plus 512GB - Chính hãng VN/A",
    "link": "iphone-14-plus-512gb-chinh-hang-vn-a",
    "old_price": 36990000,
    "installment": null,
    "guarantee": "BH 24 tháng",
    "sale": 19,
    "aosDelay": "0",
    "quantity": 200,
    "quantity_sold": 100,
    "endow": "Giảm 250.000đ khi mua kèm gói bảo hành VIP 12 tháng 1 Đổi 1.",
    "description": "",
    "category": [
      {
        "title": "iPhone 14 Series",
        "name": "iphone-14-series",
        "link": "/iphone-14-series",
      },
      {
        "title": "iPhone 13 Series",
        "name": "iphone-13-series",
        "link": "/iphone-13-series",
      },
      {
        "title": "iPhone 12 series",
        "name": "iphone-12-series",
        "link": "/iphone-12-series",
      }
    ]
  },
  {
    "id": 8,
    "img": Img1,
    "productName": "iPhone 14 Pro Max 128GB - Chính hãng VN/A",
    "link": "iphone-14-pro-max-128gb-chinh-hang-vn-a",
    "old_price": 34990000,
    "installment": "Trả góp 0%",
    "guarantee": "BH 24 tháng",
    "sale": 23,
    "aosDelay": "0",
    "quantity": 100,
    "quantity_sold": 90,
    "endow": "Giảm 250.000đ khi mua kèm gói bảo hành VIP 12 tháng 1 Đổi 1.",
    "description": "",
    "category": [
      {
        "title": "iPhone 14 Series",
        "name": "iphone-14-series",
        "link": "/iphone-14-series",
      },
      {
        "title": "iPhone 13 Series",
        "name": "iphone-13-series",
        "link": "/iphone-13-series",
      },
      {
        "title": "iPhone 12 series",
        "name": "iphone-12-series",
        "link": "/iphone-12-series",
      },
      {
        "title": "iPhone 11 series",
        "name": "iphone-11-series",
        "link": "/iphone-11-series",
      }
    ]
  },
  {
    "id": 9,
    "img": Img1,
    "productName": "iPhone 14 Pro Max 512GB - Chính hãng VN/A",
    "link": "iphone-14-pro-max-512gb-chinh-hang-vn-a",
    "old_price": 43990000,
    "installment": "Trả góp 0%",
    "guarantee": "BH 24 tháng",
    "sale": 19,
    "aosDelay": "0",
    "quantity": 500,
    "quantity_sold": 400,
    "endow": "Giảm 250.000đ khi mua kèm gói bảo hành VIP 12 tháng 1 Đổi 1.",
    "description": "",
    "category": [
      {
        "title": "iPhone 14 Series",
        "name": "iphone-14-series",
        "link": "/iphone-14-series",
      },
      {
        "title": "iPhone 12 series",
        "name": "iphone-12-series",
        "link": "/iphone-12-series",
      },
      {
        "title": "iPhone 11 series",
        "name": "iphone-11-series",
        "link": "/iphone-11-series",
      }
    ]
  },
  {
    "id": 10,
    "img": Img1,
    "productName": "iPhone 12 64GB - Chính hãng VN/A - MGJ73VN/A",
    "link": "iphone-12-64gb-chinh-hang-vn-a-mgj73vn-a",
    "old_price": 24990000,
    "installment": "Trả góp 0%",
    "guarantee": "BH 12 tháng",
    "sale": 41,
    "aosDelay": "0",
    "quantity": 200,
    "quantity_sold": 60,
    "endow": "Giảm trực tiếp 40%, tối đa 600.000 VNĐ khi mở thẻ TP Bank EVO.",
    "description": "",
    "category": [
      {
        "title": "iPhone 12 series",
        "name": "iphone-12-series",
        "link": "/iphone-12-series",
      },
      {
        "title": "iPhone 11 series",
        "name": "iphone-11-series",
        "link": "/iphone-11-series",
      }
    ]
  },
  {
    "id": 11,
    "img": Img1,
    "productName": "iPhone 12 128GB - Chính hãng VN/A - MGJF3VN/A",
    "link": "iphone-12-128gb-chinh-hang-vn-a-mgjf3vn-a",
    "old_price": 26990000,
    "installment": "Trả góp 0%",
    "guarantee": "BH 24 tháng",
    "sale": 39,
    "aosDelay": "0",
    "quantity": 100,
    "quantity_sold": 40,
    "endow": "Hỗ trợ trả góp 0%% chỉ cần CCCD gắn chip hoặc 0% qua thẻ tín dụng.",
    "description": "",
    "category": [
      {
        "title": "iPhone 12 series",
        "name": "iphone-12-series",
        "link": "/iphone-12-series",
      }
    ]
  },
  {
    "id": 12,
    "img": Img1,
    "productName": "iPhone 12 128GB - Chính hãng VN/A - MGJF3VN/A",
    "link": "iphone-12-128gb-chinh-hang-vn-a-mgjf3vn-a",
    "old_price": 28990000,
    "installment": "Trả góp 0%",
    "guarantee": "BH 24 tháng",
    "sale": 35,
    "aosDelay": "0",
    "quantity": 200,
    "quantity_sold": 190,
    "endow": "Thu cũ lên đời - Giá thu cao nhất - Tặng thêm 1 triệu khi lên đời.",
    "description": "",
    "category": [
      {
        "title": "iPhone 12 series",
        "name": "iphone-12-series",
        "link": "/iphone-12-series",
      }
    ]
  },
  {
    "id": 13,
    "img": Img1,
    "productName": "Apple Watch SE 2022 LTE 44mm - Chính hãng VN/A",
    "link": "apple-watch-se-2022-lte-44mm-chinh-hang-vn-a",
    "old_price": null,
    "installment": "Trả góp 0%",
    "guarantee": "BH 24 tháng",
    "sale": null,
    "aosDelay": "0",
    "quantity": 100,
    "quantity_sold": 40,
    "endow": null,
    "description": null,
    "category": []
  },
  {
    "id": 14,
    "img": Img1,
    "productName": "Apple Watch S8 LTE 45mm viền thép dây cao su - Chính hãng VN/A",
    "link": "apple-watch-s8-lte-45mm-vien-thep-day-cao-su-chinh-hang-vn-a",
    "old_price": 21990000,
    "installment": "Trả góp 0%",
    "guarantee": "BH 24 tháng",
    "sale": 11,
    "aosDelay": "0",
    "quantity": 100,
    "quantity_sold": 20,
    "endow": null,
    "description": null,
    "category": []
  },
  {
    "id": 15,
    "img": Img1,
    "productName": "Apple Watch S8 LTE 41mm viền thép dây cao su - Chính hãng VN/A",
    "link": "apple-watch-s8-lte-41mm-vien-thep-day-cao-su-chinh-hang-vn-a",
    "old_price": 19990000,
    "installment": "Trả góp 0%",
    "guarantee": "BH 24 tháng",
    "sale": 6,
    "aosDelay": "0",
    "quantity": 100,
    "quantity_sold": 100,
    "endow": null,
    "description": null,
    "category": []
  },
  {
    "id": 16,
    "img": Img1,
    "productName": "Apple Watch S8 LTE 41mm viền thép dây thép - Chính hãng VN/A",
    "link": "apple-watch-s8-lte-41mm-vien-thep-day-thep-chinh-hang-vn-a",
    "old_price": 18990000,
    "installment": "Trả góp 0%",
    "guarantee": null,
    "sale": null,
    "aosDelay": "0",
    "quantity": 100,
    "quantity_sold": 20,
    "endow": null,
    "description": null,
    "category": []
  },
  {
    "id": 17,
    "img": Img1,
    "productName": "Apple Watch S8 LTE 45mm viền thép dây thép - Chính hãng VN/A",
    "link": "pple-watch-s8-lte-45mm-vien-thep-day-thep-chinh-hang-vn-a",
    "old_price": 20790000,
    "installment": "Trả góp 0%",
    "guarantee": null,
    "sale": 7,
    "aosDelay": "0",
    "quantity": 100,
    "quantity_sold": 30,
    "endow": null,
    "description": null,
    "category": []
  },
  {
    "id": 18,
    "img": Img1,
    "productName": "Apple Watch Ultra LTE 49mm Dây Ocean Band - Chính hãng VN/A",
    "link": "apple-watch-ultra-lte-49mm-day-ocean-band-chinh-hang-vn-a",
    "old_price": 23990000,
    "installment": "Trả góp 0%",
    "guarantee": "BH 12 tháng",
    "sale": 17,
    "aosDelay": "0",
    "quantity": 100,
    "quantity_sold": 80,
    "endow": "Ưu đãi từ 5% – 30% khi mua phụ kiện",
    "description": null,
    "category": []
  },
  {
    "id": 19,
    "img": Img1,
    "productName": "Apple Watch Ultra LTE 49mm Dây Alpine Loop - Chính hãng VN/A",
    "link": "apple-watch-ultra-lte-49mm-day-alpine-loop-chinh-hang-vn-a",
    "old_price": 23990000,
    "installment": "Trả góp 0%",
    "guarantee": "BH 12 tháng",
    "sale": 17,
    "aosDelay": "0",
    "quantity": 100,
    "quantity_sold": 50,
    "endow": " Giảm trực tiếp 40%, tối đa 600.000 VNĐ khi mở thẻ TP Bank EVO",
    "description": null,
    "category": []
  },
  {
    "id": 20,
    "img": Img1,
    "productName": "Apple Watch Ultra LTE 49mm Dây Trail Loop - Chính hãng VN/A",
    "link": "apple-watch-ultra-lte-49mm-day-trail-loop-chinh-hang-vn-a",
    "old_price": 23990000,
    "installment": "Trả góp 0%",
    "guarantee": "BH 12 tháng",
    "sale": 17,
    "aosDelay": "0",
    "quantity": 100,
    "quantity_sold": 20,
    "endow": "Giảm trực tiếp 40%, tối đa 600.000 VNĐ khi mở thẻ TP Bank EVO",
    "description": null,
    "category": []
  }
];

export default ProductsItem;

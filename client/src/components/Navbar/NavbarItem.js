import React from "react";

import { v4 } from "uuid";

const NavbarItem = [
  {
    id: v4(),
    title: "Trang chủ",
    link: "/",
  },
  {
    id: v4(),
    title: "Giới thiệu",
    link: "/gioi-thieu",
  },
  {
    id: v4(),
    title: "iPhone",
    link: "/iphone",
    subMenu: [
      {
        id: v4(),
        title: "IPHONE 14 SERIES",
        link: "/iphone-14-series",
        subMenu: [
          {
            id: v4(),
            title: "iPhone 14",
            link: "/iphone-14",
          },
          {
            id: v4(),
            title: "iPhone 14 Plus",
            link: "/iphone-14-plus",
          },
          ,
          {
            id: v4(),
            title: "iPhone 14 Pro",
            link: "/iphone-14-pro",
          },
          {
            id: v4(),
            title: "iPhone 14 Pro Max",
            link: "/iphone-14-pro-max",
          },
        ],
      },
      {
        id: v4(),
        title: "IPHONE 13 SERIES",
        link: "/iphone-13-series",
        subMenu: [
          {
            id: v4(),
            title: "iPhone 13",
            link: "/iphone-13",
          },
          {
            id: v4(),
            title: "iPhone 13 mini",
            link: "/iphone-13-mini",
          },
          {
            id: v4(),
            title: "iPhone 13 Pro",
            link: "/iphone-13-pro",
          },
          {
            id: v4(),
            title: "iPhone 13 Pro Max",
            link: "/iphone-13-pro-max",
          },
        ],
      },
      {
        id: v4(),
        title: "IPHONE 12 SERIES",
        link: "/iphone-12-series",
        subMenu: [
          {
            id: v4(),
            title: "iPhone 12",
            link: "/iphone-12",
          },
          {
            id: v4(),
            title: "iPhone 12 mini",
            link: "/iphone-12-mini",
          },
          {
            id: v4(),
            title: "iPhone 12 Pro",
            link: "/iphone-12-pro",
          },
          {
            id: v4(),
            title: "iPhone 12 Pro Max",
            link: "/iphone-12-pro-max",
          },
        ],
      },
      {
        id: v4(),
        title: "IPHONE 11 SERIES",
        link: "/iphone-11-series",
        subMenu: [
          {
            id: v4(),
            title: "iPhone 11",
            link: "/iphone-11",
          },
          {
            id: v4(),
            title: "iPhone 11 Pro",
            link: "/iphone-11-pro",
          },
          {
            id: v4(),
            title: "iPhone 11 Pro Max",
            link: "/iphone-11-pro-max",
          },
        ],
      },
    ],
  },
  {
    id: v4(),
    title: "iPad",
    link: "/ipad",
    subMenu: [
      {
        id: v4(),
        title: "iPad Pro",
        link: "/ipad-pro",
        subMenu: [
          {
            id: v4(),
            title: "iPad Pro M2 2022",
            link: "/ipad-pro-m2-2022",
          },
          {
            id: v4(),
            title: "iPad Pro 2021",
            link: "/ipad-pro-2021",
          },
          ,
          {
            id: v4(),
            title: "iPad Pro 12.9",
            link: "/ipad-pro-12-9",
          },
          {
            id: v4(),
            title: "iPad Pro 11",
            link: "/ipad-pro-11",
          },
        ],
      },
      {
        id: v4(),
        title: "iPad Air",
        link: "/ipad-air",
        subMenu: [
          {
            id: v4(),
            title: "iPad Air 4",
            link: "/ipad-air-4",
          },
          {
            id: v4(),
            title: "iPad Air 5",
            link: "/ipad-air-5",
          },
        ],
      },
      {
        id: v4(),
        title: "iPad 10.9",
        link: "/ipad-10-9",
      },
      {
        id: v4(),
        title: "iPad 10-2",
        link: "/ipad-pro",
      },
      {
        id: v4(),
        title: "iPad mini",
        link: "/ipad-mini",
      },
    ],
  },
  {
    id: v4(),
    title: "Macbook - iMac",
    link: "/macbook-imac",
    subMenu: [
      {
        id: v4(),
        title: "MacBook Pro",
        link: "/macbook-pro",
      },
      {
        id: v4(),
        title: "MacBook Air",
        link: "/macbook-air",
      },
    ],
  },
  {
    id: v4(),
    title: "Apple watch",
    link: "/apple-watch",
    subMenu: [
      {
        id: v4(),
        title: "Apple Watch Ultra",
        link: "/apple-watch-ultra",
      },
      {
        id: v4(),
        title: "Apple Watch S7",
        link: "/apple-watch-s7",
      },
      {
        id: v4(),
        title: "Apple Watch S6",
        link: "/apple-watch-s6",
      },
      {
        id: v4(),
        title: "Apple Watch SE",
        link: "/apple-watch-se",
      },
      {
        id: v4(),
        title: "Apple Watch S8",
        link: "/apple-watch-s8",
      },
      {
        id: v4(),
        title: "Apple Watch S3",
        link: "/apple-watch-s3",
      },
    ],
  },
  {
    id: v4(),
    title: "Airpods",
    link: "/airpods",
  },
  {
    id: v4(),
    title: "Phụ kiện",
    link: "/phu-kien",
    subMenu: [
      {
        id: v4(),
        title: "Phụ kiện Apple",
        link: "/phu-kien-apple",
      },
      {
        id: v4(),
        title: "Cốc - Cáp Sạc",
        link: "/coc-cap-sac",
      },
      {
        id: v4(),
        title: "Bao Da - Ốp Lưng",
        link: "/bao-da-op-lung",
      },
      {
        id: v4(),
        title: "Dán cường lực",
        link: "/dan-cuong-luc",
      },
      {
        id: v4(),
        title: "Sạc dự phòng",
        link: "/sac-du-phong",
      },
    ],
  },
  {
    id: v4(),
    title: "Chính sách",
    link: "/chinh-sach",
  },
  {
    id: v4(),
    title: "Tin tức",
    link: "/tin-tuc",
  },
  {
    id: v4(),
    title: "Liên hệ",
    link: "/lien-he",
  },
];

export default NavbarItem;

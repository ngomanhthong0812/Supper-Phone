import React from 'react'

import { v4 } from 'uuid'

const NavbarItem = [
    {
        id: v4(),
        title: "Trang chủ",
        name: "trang-chu",
        link: "/",
        children: []
    },
    {
        id: v4(),
        title: "Giới thiệu",
        name: "gioi-thieu",
        link: "/gioi-thieu",
        children: []
    },
    {
        id: v4(),
        title: "iPhone",
        name: "iphone",
        link: "/iphone",
        children: [
            {
                id: v4(),
                title: "iPhone 14 Series",
                name: "iphone-14-series",
                link: "/iphone-14-series",
                grandchildren: [
                    {
                        id: v4(),
                        title: "iPhone 14",
                        name: "iphone-14",
                        link: "/iphone-14"
                    },
                    {
                        id: v4(),
                        title: "iPhone 14 Plus",
                        name: "iphone-14-plus",
                        link: "/iphone-14-plus"
                    }, ,
                    {
                        id: v4(),
                        title: "iPhone 14 Pro",
                        name: "iphone-14-pro",
                        link: "/iphone-14-pro"
                    },
                    {
                        id: v4(),
                        title: "iPhone 14 Pro Max",
                        name: "iphone-14-pro-max",
                        link: "/iphone-14-pro-max"
                    },
                ]
            },
            {
                id: v4(),
                title: "iPhone 13 Series",
                name: "iphone-13-series",
                link: "/iphone-13-series",
                grandchildren: [
                    {
                        id: v4(),
                        title: "iPhone 13",
                        name: "iphone-13",
                        link: "/iphone-13"
                    },
                    {
                        id: v4(),
                        title: "iPhone 13 mini",
                        name: "iphone-13-mini",
                        link: "/iphone-13-mini"
                    },
                    {
                        id: v4(),
                        title: "iPhone 13 Pro",
                        name: "iphone-13-pro",
                        link: "/iphone-13-pro"
                    },
                    {
                        id: v4(),
                        title: "iPhone 13 Pro Max",
                        name: "iphone-13-pro-max",
                        link: "/iphone-13-pro-max"
                    },
                ]
            },
            {
                id: v4(),
                title: "iPhone 12 series",
                name: "iphone-12-series",
                link: "/iphone-12-series",
                grandchildren: [
                    {
                        id: v4(),
                        title: "iPhone 12",
                        name: "iphone-12",
                        link: "/iphone-12"
                    },
                    {
                        id: v4(),
                        title: "iPhone 12 mini",
                        name: "iphone-12-mini",
                        link: "/iphone-12-mini"
                    },
                    {
                        id: v4(),
                        title: "iPhone 12 Pro",
                        name: "iphone-12-pro",
                        link: "/iphone-12-pro",
                    },
                    {
                        id: v4(),
                        title: "iPhone 12 Pro Max",
                        name: "iphone-12-pro-max",
                        link: "/iphone-12-pro-max",
                    },
                ]
            },
            {
                id: v4(),
                title: "iPhone 11 series",
                name: "iphone-11-series",
                link: "/iphone-11-series",
                grandchildren: [
                    {
                        id: v4(),
                        title: "iPhone 11",
                        name: "iphone-11",
                        link: "/iphone-11",
                    },
                    {
                        id: v4(),
                        title: "iPhone 11 Pro",
                        name: "iphone-11-pro",
                        link: "/iphone-11-pro",
                    },
                    {
                        id: v4(),
                        title: "iPhone 11 Pro Max",
                        name: "iphone-11-pro-max",
                        link: "/iphone-11-pro-max",
                    },
                ]
            }
        ]
    },
    {
        id: v4(),
        title: "iPad",
        name: "ipad",
        link: "/ipad",
        children: [
            {
                id: v4(),
                title: "iPad Pro",
                name: "ipad-pro",
                link: "/ipad-pro",
                grandchildren: [
                    {
                        id: v4(),
                        title: "iPad Pro M2 2022",
                        name: "ipad-pro-m2-2022",
                        link: "/ipad-pro-m2-2022"
                    },
                    {
                        id: v4(),
                        title: "iPad Pro 2021",
                        name: "ipad-pro-2021",
                        link: "/ipad-pro-2021"
                    }, ,
                    {
                        id: v4(),
                        title: "iPad Pro 12.9",
                        name: "ipad-pro-12-9",
                        link: "/ipad-pro-12-9"
                    },
                    {
                        id: v4(),
                        title: "iPad Pro 11",
                        name: "ipad-pro-11",
                        link: "/ipad-pro-11",
                    },
                ]
            },
            {
                id: v4(),
                title: "iPad Air",
                name: "ipad-air",
                link: "/ipad-air",
                grandchildren: [
                    {
                        id: v4(),
                        title: "iPad Air 4",
                        name: "ipad-air-4",
                        link: "/ipad-air-4",
                    },
                    {
                        id: v4(),
                        title: "iPad Air 5",
                        name: "ipad-air-5",
                        link: "/ipad-air-5"
                    },
                ]
            },
            {
                id: v4(),
                title: "iPad 10.9",
                name: "ipad-10-9",
                link: "/ipad-10-9",
                grandchildren: []
            },
            {
                id: v4(),
                title: "iPad 10-2",
                name: "ipad-pro",
                link: "/ipad-pro",
                grandchildren: []
            },
            {
                id: v4(),
                title: "iPad mini",
                name: "ipad-mini",
                link: "/ipad-mini",
                grandchildren: []
            },

        ]

    },
    {
        id: v4(),
        title: "Macbook - iMac",
        name: "macbook-imac",
        link: "/macbook-imac",
        children: [
            {
                id: v4(),
                title: "MacBook Pro",
                name: "macbook-pro",
                link: "/macbook-pro",
                grandchildren: []
            },
            {
                id: v4(),
                title: "MacBook Air",
                name: "macbook-air",
                link: "/macbook-air",
                grandchildren: []
            },
        ]
    },
    {
        id: v4(),
        title: "Apple watch",
        name: "apple-watch",
        link: "/apple-watch",
        children: [
            {
                id: v4(),
                title: "Apple Watch Ultra",
                name: "apple-watch-ultra",
                link: "/apple-watch-ultra",
                grandchildren: []
            },
            {
                id: v4(),
                title: "Apple Watch S7",
                name: "apple-watch-s7",
                link: "/apple-watch-s7",
                grandchildren: []
            },
            {
                id: v4(),
                title: "Apple Watch S6",
                name: "apple-watch-s6",
                link: "/apple-watch-s6",
                grandchildren: []
            },
            {
                id: v4(),
                title: "Apple Watch SE",
                name: "apple-watch-se",
                link: "/apple-watch-se",
                grandchildren: []
            },
            {
                id: v4(),
                title: "Apple Watch S8",
                name: "apple-watch-s8",
                link: "/apple-watch-s8",
                grandchildren: []
            },
            {
                id: v4(),
                title: "Apple Watch S3",
                name: "apple-watch-s3",
                link: "/apple-watch-s3",
                grandchildren: []
            },
        ]

    },
    {
        id: v4(),
        title: "Airpods",
        link: "/airpods",
        link: "/airpods",
        children: []

    },
    {
        id: v4(),
        title: "Phụ kiện",
        name: "phu-kien",
        link: "/phu-kien",
        children: [
            {
                id: v4(),
                title: "Phụ kiện Apple",
                name: "phu-kien-apple",
                link: "/phu-kien-apple",
                grandchildren: []
            },
            {
                id: v4(),
                title: "Cốc - Cáp Sạc",
                name: "coc-cap-sac",
                link: "/coc-cap-sac",
                grandchildren: []
            },
            {
                id: v4(),
                title: "Bao Da - Ốp Lưng",
                name: "bao-da-op-lung",
                link: "/bao-da-op-lung",
                grandchildren: []
            },
            {
                id: v4(),
                title: "Dán cường lực",
                name: "dan-cuong-luc",
                link: "/dan-cuong-luc",
                grandchildren: []
            },
            {
                id: v4(),
                title: "Sạc dự phòng",
                name: "sac-du-phong",
                link: "/sac-du-phong",
                grandchildren: []
            }

        ]
    },
    {
        id: v4(),
        title: "Chính sách",
        name: "chinh-sach",
        link: "/chinh-sach",
        children: []
    },
    {
        id: v4(),
        title: "Tin tức",
        name: "tin-tuc",
        link: "/tin-tuc",
        children: []
    },
    {
        id: v4(),
        title: "Liên hệ",
        name: "lien-he",
        link: "/lien-he",
        children: []
    }
]

export default NavbarItem;

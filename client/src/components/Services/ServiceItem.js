import React, { Component } from 'react';
import { v4 } from 'uuid';

import Img1 from "../../asset/images/services_img/ser_1.svg";
import Img2 from "../../asset/images/services_img/ser_2.svg";
import Img3 from "../../asset/images/services_img/ser_3.svg";
import Img4 from "../../asset/images/services_img/ser_4.svg";

const ServiceItem = [
    {
        id: v4(),
        img: Img1,
        title: "Vận chuyển miễn phí",
        des: "Hóa đơn trên 5 triệu",
        background: "#ebf2fc",
    },
    {
        id: v4(),
        img: Img2,
        title: "Quà tặng hấp dẫn",
        des: "Hóa đơn trên 10 triệu",
        background: "#fae9ef"
    },
    {
        id: v4(),
        img: Img3,
        title: "Chứng nhận chất lượng",
        des: "Sản phẩm chính hãng",
        background: "#fffbdb"
    },
    {
        id: v4(),
        img: Img4,
        title: "Hotline: 1900 6750",
        des: "Hỗ trợ 24/7",
        background: "#e9ffe3"
    },
]

export default ServiceItem

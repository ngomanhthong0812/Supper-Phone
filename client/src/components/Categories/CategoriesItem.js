import React from 'react'
import { v4 } from 'uuid'

import Img1 from "../../asset/images/categories-img/cate_1.jpg"
import Img2 from "../../asset/images/categories-img/cate_2.jpg"
import Img3 from "../../asset/images/categories-img/cate_3.jpg"
import Img4 from "../../asset/images/categories-img/cate_4.jpg"
import Img5 from "../../asset/images/categories-img/cate_5.jpg"
import Img6 from "../../asset/images/categories-img/cate_6.jpg"

const CategoriesItem = [
    {
        id: v4(),
        img: Img1,
        category_name: "iphone",
        link: "/tat-ca-san-pham",
    },
    {
        id: v4(),
        img: Img2,
        category_name: "Mac",
        link: "/tat-ca-san-pham",
    },
    {
        id: v4(),
        img: Img3,
        category_name: "iPad",
        link: "/tat-ca-san-pham",
    },
    {
        id: v4(),
        img: Img4,
        category_name: "Watch",
        link: "/tat-ca-san-pham",
    },
    {
        id: v4(),
        img: Img5,
        category_name: "Âm thanh",
        link: "/tat-ca-san-pham",
    },
    {
        id: v4(),
        img: Img6,
        category_name: "Phụ kiện",
        link: "/tat-ca-san-pham",
    },
]

export default CategoriesItem


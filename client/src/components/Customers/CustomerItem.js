import React from "react";

import { v4 } from "uuid";

import Img1 from "../../asset/images/customers_img/img_cus_1.jpg";
import Img2 from "../../asset/images/customers_img/img_cus_2.jpg";
import Img3 from "../../asset/images/customers_img/img_cus_3.jpg";
import Img4 from "../../asset/images/customers_img/img_cus_4.jpg";
import Img5 from "../../asset/images/customers_img/img_cus_5.jpg";

const CustomerItem = [
    {
        id: v4(),
        img: Img1,
    },
    {
        id: v4(),
        img: Img2,
    },
    {
        id: v4(),
        img: Img3,
    },
    {
        id: v4(),
        img: Img4,
    },
    {
        id: v4(),
        img: Img5,
    },
]

export default CustomerItem;
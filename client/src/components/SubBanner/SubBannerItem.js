import React from 'react';
import { v4 } from 'uuid';

import Img1 from "../../asset/images/banner/img_3banner_1.jpg";
import Img2 from "../../asset/images/banner/img_3banner_2.jpg";
import Img3 from "../../asset/images/banner/img_3banner_3.jpg";

const SubBannerItem = [
    {
        id: v4(),
        img: Img1,
        link: "/tat-ca-san-pham",
    },
    {
        id: v4(),
        img: Img2,
        link: "/tat-ca-san-pham",
    },
    {
        id: v4(),
        img: Img3,
        link: "/tat-ca-san-pham",
    },
]

export default SubBannerItem

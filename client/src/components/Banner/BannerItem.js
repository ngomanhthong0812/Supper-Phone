import React from 'react'

import { v4 } from 'uuid'

import Banner_1 from '../../asset/images/banner/slider_1.png'
import Banner_2 from '../../asset/images/banner/slider_2.png'

const BannerItem = [
    {
        id: v4(),
        src: Banner_1,
        alt: 'banner-1'
    },
    {
        id: v4(),
        src: Banner_2,
        alt: 'banner-2'
    }
]

export default BannerItem;

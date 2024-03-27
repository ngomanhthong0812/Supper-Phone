import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import BannerItem from './BannerItem';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Banner.css';

import { Pagination, Navigation } from 'swiper/modules';

export default function Banner() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper banner"
            >
                {BannerItem.map(item => (
                    <SwiperSlide><img src={item.src} alt={item.alt} /></SwiperSlide>
                ))}

            </Swiper>
        </>
    )
}

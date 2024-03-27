import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import CustomerItem from './CustomerItem';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import 'swiper/css/scrollbar';

import { Navigation, Scrollbar } from 'swiper/modules';

export default function Customers() {
  return (
    <div>
        <div className='title mb-5'>
            <h2 className='text-[26px] text-center font-bold text-[#333333]'>
                KHÁCH HÀNG CỦA 
                <span className='text-[#bf1e2e]'> SUDES</span>
            </h2>
        </div>

        <Swiper
            slidesPerView={5}
            spaceBetween={20}
            loop={false}
            scrollbar={{ draggable: true }}
            modules={[Navigation, Scrollbar]}
            className='container_body'
            watchSlidesProgress={true}
        >
            {CustomerItem.map((item) => (
                <SwiperSlide key={item.id}>
                    <div className='hover:-translate-y-1 hover:shadow-lg transition duration-300'>
                        <a href="#"><img src={item.img} className='rounded-2xl' alt="" /></a>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
  )
}

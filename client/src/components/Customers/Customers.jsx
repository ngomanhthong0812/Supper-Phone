import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

import CustomerItem from './CustomerItem';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import 'swiper/css/scrollbar';

import { Navigation, Scrollbar } from 'swiper/modules';

export default function Customers() {
    return (
        <div className="py-[1.5rem] container_body">
            <div className='title mb-4 group'>
                <h2 className='text-[26px] text-center font-bold text-[#333333] group-hover:!text-[#bf1e2e] transition duration-300'>
                    <span className="cursor-pointer">KHÁCH HÀNG CỦA
                        <span className='text-[#bf1e2e]'> SUPPER</span></span>
                </h2>
            </div>


            <div className='grid grid-cols-5 gap-5'>
                {CustomerItem.map((item) => (
                    <div className='hover:-translate-y-1 hover:shadow-lg transition duration-300 rounded-2xl overflow-hidden'>
                        <a href="#"><img src={item.img} className='' alt="" /></a>
                    </div>
                ))}
            </div>

        </div>
    )
}

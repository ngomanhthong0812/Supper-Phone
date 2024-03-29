import React from 'react';
import SubBannerItem from './SubBannerItem';
import { Link } from 'react-router-dom';

export default function SubBanner() {
  return (
    <div className='container_body'>
        <div className='grid grid-cols-3 gap-5 mt-6'>
            {SubBannerItem.map((item) => (
                <div className='overflow-hidden rounded-xl hover:-translate-y-1 transition duration-300'>
                    <Link to={item.link}><img src={item.img} alt="" /></Link>
                </div>
            ))}
        </div>
    </div>
  )
}

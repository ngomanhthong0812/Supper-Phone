import React from 'react';

import ServiceItem from './ServiceItem';

export default function Services() {

  return (
    <div className='container_body'>
        <div className='grid grid-cols-4 gap-5 mt-6'>
            {ServiceItem.map((item) => (
                <div className='service-box flex items-center justify-center p-[7px] rounded-xl gap-x-[14px] hover:shadow-md transition duration-300'  style={{backgroundColor: item.background}}>
                    <div className='service-icon'>
                        <img src={item.img} alt="" />
                    </div>

                    <div className='service-info text-left'>
                        <h2 className='service-title text-[#141414] font-bold'>{item.title}</h2>
                        <span className='service-description text-[#666666] text-sm'>{item.des}</span>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}


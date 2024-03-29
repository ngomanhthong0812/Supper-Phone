import React from 'react'
import Countdown from '../CountdownTimer/Countdown'
import ProductsList from '../ProductsList/ProductsList'
import { Link } from 'react-router-dom';
import { GrNext } from "react-icons/gr";

export default function BlockSale() {
  return (
    <div className='container_body w-full h-auto bg-gradient-to-b from-[#BF1E2E] to-[#fa2c29] rounded-xl'>
      <div className='block-title flex items-center justify-between px-5 pt-5'>
        <h2 className='text-[#ffffff] text-[26px] font-black uppercase'>hot sale cuối tuần</h2>
        <Countdown />
      </div>

      <div className='block-product-sale px-5 pb-5 mt-5'>
        <ProductsList quantityProduct={2} isShowQuantitySold={true} />
        <button className='mt-5 border text-[#ffffff] border-[#ffffff] px-6 py-2 rounded-[8px] hover:bg-black hover:border-black transition duration-300'>
          <Link to="/san-pham-khuyen-mai" className='gravity gap-2'>Xem tất cả<GrNext className='text-[14px]' /></Link>
        </button>
      </div>
    </div>
  )
}

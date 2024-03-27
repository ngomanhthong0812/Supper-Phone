import React from 'react';
import { CiSettings } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { IoIosGitCompare } from "react-icons/io";

export default function ProductCard({data}) {
  return (
    <div>
      <div className="w-full flex items-center justify-center">
        
        <div className="container_body grid grid-cols-4 gap-[20px]">
          {data.map((data) => (
            <div key={data.id} className="group bg-white p-[10px] text-left relative">

                <span className='flash-sale absolute top-4 -left-1.5 bg-[#e31934] text-white text-sm px-2 font-medium rounded-r-full
                after:content-[""] after:block after:w-4 after:h-4 after:bg-[#e31934] after:absolute after:left-1 after:top-3 after:rotate-45 after:-z-20'>
                    Giảm {data.sale}
                </span>

                <div className='product-img'>
                  <img src={data.img} alt="" />
                </div>

                <div className='tick-tag flex flex-col gap-y-1'>
                    <span className='w-fit px-[10px] inline-block text-white text-[12px] bg-gradient-to-t from-[#BF1E2E] to-[#fa2c29] rounded-r-md'>{data.installment}</span>
                    <span className='w-fit px-[10px] inline-block text-white text-[12px] bg-gradient-to-b from-[#e8684a] to-[#ba2604] rounded-r-md'>{data.guarantee}</span>
                </div>

                <div className="product-name flex flex-col items-start mt-3">
                  <span className="text-[#343a40] hover:text-[#bf1e2e] font-normal"><a href="#">{data.productName}</a></span>
                </div>

                <div className='product-price-cart w-full flex items-center justify-between mt-1'>
                    <div className='price-box flex flex-col'>
                        <span className='text-[#6c757d] text-sm line-through'>{data.old_price}<span className='underline decoration-2'>đ</span></span>
                        <span className='text-lg font-extrabold text-[#bf1e2e]'>{data.price}<span className='underline decoration-2'>đ</span></span>
                    </div>
                    
                    <div className='product-button w-9 h-9 bg-black hover:bg-[#991c28] transition duration-300 text-white flex items-center justify-center rounded-md'>
                        <button className='btn-cart text-3xl'><CiSettings /></button>
                    </div>
                </div>

                <div className='bg-[#f1f1f1] py-[3px] px-[5px] mt-2 rounded-md'>
                    <span className='text-sm text-[#333333]'>Giảm trực tiếp 40%, tối đa 600.000 VND khi mở thẻ TP Bank EVO</span>
                </div>

                <div className='quantity-sold w-full text-center mt-3 bg-[#ffcfb4] rounded-full relative z-10'>
                    <span className='text-white text-sm z-[4]'>Đã bán {data.quantity_sold}</span>
                    <div className='countdown absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-[#f53d2d] to-[#f63] rounded-full z-[-1]'></div>
                </div>

                <div className='btn-action absolute flex flex-col gap-y-2 right-0 top-1/4 text-2xl'>
                    <button className='translate-x-11 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition duration-200
                    w-11 h-11 flex items-center justify-center bg-white hover:bg-black hover:text-white rounded-full border '><IoEyeOutline /></button>
                    <button className='translate-x-11 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition duration-300
                    w-11 h-11 flex items-center justify-center bg-white hover:bg-black hover:text-white rounded-full border'><CiHeart /></button>
                    <button className='translate-x-11 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition duration-500
                    w-11 h-11 flex items-center justify-center bg-white hover:bg-black hover:text-white rounded-full border'><IoIosGitCompare /></button>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

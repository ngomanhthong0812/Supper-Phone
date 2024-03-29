import React from "react";

import { CiSettings } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { IoIosGitCompare } from "react-icons/io";

export default function ProductCard({
  id,
  sale,
  img,
  productName,
  old_price,
  quantity,
  quantity_sold,
  installment,
  guarantee,
  endow,
  isShowQuantitySold
}) {
  const style = {
    textShadow: '#454545 0px 1px 2px',
    borderRadius: '13px 30px 30px 0px'
  }
  const widthQuantitySold = (quantity_sold / quantity) * 100;

  //format price
  const newPriceOld = old_price - (old_price * sale / 100);
  const roundedPrice = Math.floor(newPriceOld / 1000) * 1000;
  const roundedPriceOld = Math.floor(old_price / 1000) * 1000;
  const formattedRoundedPrice = roundedPrice.toLocaleString('vi-VN');
  const formattedRoundedPriceOld = roundedPriceOld.toLocaleString('vi-VN');

  return (
    <div
      className="group bg-white p-[10px] text-left relative rounded-[10px] shadow-[0_1px_4px_0_#c9c9c9] hover:shadow-[0_0_7px_#c9c9c9]"
    >
      {sale && (
        <span
          className='flash-sale absolute top-1 -left-1.5 bg-[#e31934] text-white text-[13px] px-2 py-[2.2px] font-medium 
                after:content-[""] after:block after:w-4 after:h-4 after:bg-[#e31934] after:absolute after:left-[3.2px] after:top-[15px] after:rotate-45 after:-z-20 text-center'
          style={style}
        >
          Giảm {sale}%
        </span>
      )}

      <div className="product-img">
        <img src={img} alt="" />
      </div>

      <div className="tick-tag flex flex-col gap-y-1 absolute left-0 top-[50%] h-[40px] justify-end">
        <span className="w-fit px-[10px] inline-block text-white text-[12px] bg-gradient-to-t from-[#BF1E2E] to-[#fa2c29] rounded-r-md">
          {guarantee && installment}
        </span>
        <span className="w-fit px-[10px] inline-block text-white text-[12px] bg-gradient-to-b from-[#e8684a] to-[#ba2604] rounded-r-md">
          {guarantee ? guarantee : installment}
        </span>
      </div>

      <div className="product-name flex flex-col items-start mt-3">
        <span className="text-[#343a40] hover:text-[#bf1e2e] font-normal h-[49px] ">
          <a href="#">{productName}</a>
        </span>
      </div>

      <div className="product-price-cart w-full flex items-center justify-between mt-1">
        <div className="price-box flex flex-col">
          <span className="text-[#6c757d] text-sm line-through h-[20px]">
            {sale && (
              <span>
                {formattedRoundedPriceOld}₫
              </span>
            )}
          </span>
          <span className="text-lg font-extrabold text-[#bf1e2e]">
            {!sale && !old_price ? 'Liên hệ' : <div>{formattedRoundedPrice}₫</div>}

          </span>
        </div>

        <div className="product-button w-9 h-9 bg-black hover:bg-[#991c28] transition duration-300 text-white flex items-center justify-center rounded-md relative">
          <button className="btn-cart after:whitespace-nowrap after:content-['Tuỳ_chọn'] after:w-[auto] after:h-[20px] after:items-center after:justify-center 
          after:text-[12px] after:p-[2px] after:px-2  after:rounded-[4px] after:text-white after:bg-[#828282] 
          after:absolute after:left-[-74px] after:top-[50%] after:translate-y-[-50%] 
          before:w-[10px] before:h-[10px] before:absolute before:bg-[#828282] before:rotate-45 before:top-[50%]
          before:left-[-17px] before:translate-y-[-50%] before:hidden hover:before:flex
          after:hidden hover:after:flex">
            <CiSettings className="text-[26px]" />
          </button>
        </div>
      </div>

      {endow && (
        <div className="bg-[#f1f1f1] gravity !justify-start h-[50px] py-[3px] px-[5px] mt-2 rounded-md">
          <span className="text-sm text-[#333333]">{endow}</span>
        </div>
      )}

      {isShowQuantitySold && (
        <div className="quantity-sold w-full text-center mt-3 bg-[#ffcfb4] rounded-full relative z-10">
          <span className="text-white text-sm z-[4]">
            <div className="fire absolute left-0 top-[-3px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 16 16">
                <defs>
                  <linearGradient id="prefix__a" x1="50%" x2="50%" y1="36.31%" y2="88.973%">
                    <stop offset="0%" stop-color="#FDD835"></stop>
                    <stop offset="100%" stop-color="#FFB500"></stop>
                  </linearGradient>
                </defs>
                <g fill="none" fill-rule="evenodd">
                  <path d="M0 0H16V16H0z"></path>
                  <path fill="url(#prefix__a)" stroke="#FF424E" stroke-width="1.1" d="M9.636 6.506S10.34 2.667 7.454 1c-.087 1.334-.786 2.571-1.923 3.401-1.234 1-3.555 3.249-3.53 5.646-.017 2.091 1.253 4.01 3.277 4.953.072-.935.549-1.804 1.324-2.41.656-.466 1.082-1.155 1.182-1.912 1.729.846 2.847 2.469 2.944 4.27v.012c1.909-.807 3.165-2.533 3.251-4.467.205-2.254-1.134-5.316-2.321-6.317-.448.923-1.144 1.725-2.022 2.33z" transform="rotate(4 8 8)"></path>
                </g>
              </svg>
            </div>
            Đã bán {quantity_sold}
          </span>
          <div
            className="countdown absolute top-0 left-0 h-full bg-gradient-to-r from-[#f53d2d] to-[#f63] rounded-full z-[-1]"
            style={{ width: `${widthQuantitySold}%` }}
          ></div>
        </div>
      )}

      <div className="btn-action absolute flex flex-col gap-y-2 right-[12px] top-1/4 text-2xl">
        <button
          className="translate-x-3 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition duration-200
                    w-[36px] h-[36px] flex items-center justify-center bg-white hover:bg-black hover:text-white rounded-full border"
        >
          <div className="after:whitespace-nowrap after:content-['Xem_nhanh'] after:w-[auto] after:h-[20px] after:items-center after:justify-center 
          after:text-[12px] after:p-[2px] after:px-2  after:rounded-[4px] after:text-white after:bg-[#828282] 
          after:absolute after:left-[-86.5px] after:top-[50%] after:translate-y-[-50%] 
          before:w-[10px] before:h-[10px] before:absolute before:bg-[#828282] before:rotate-45 before:top-[50%]
          before:left-[-17px] before:translate-y-[-50%] before:hidden hover:before:flex
          after:hidden hover:after:flex">
            <IoEyeOutline className="text-[20px]" />
          </div>
        </button>
        <button
          className="translate-x-3 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition duration-300
                    w-[36px] h-[36px] flex items-center justify-center bg-white hover:bg-black hover:text-white rounded-full border"
        >
          <div className="after:whitespace-nowrap after:content-['Thêm_vào_yêu_thích'] after:w-[auto] after:h-[20px] after:items-center after:justify-center 
          after:text-[12px] after:p-[2px] after:px-2  after:rounded-[4px] after:text-white after:bg-[#828282] 
          after:absolute after:left-[-130.5px] after:top-[50%] after:translate-y-[-50%] 
          before:w-[10px] before:h-[10px] before:absolute before:bg-[#828282] before:rotate-45 before:top-[50%]
          before:left-[-17px] before:translate-y-[-50%] before:hidden hover:before:flex
          after:hidden hover:after:flex"> <CiHeart className="text-[20px]" /></div>
        </button>
        <button
          className="translate-x-3 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition duration-500
                    w-[36px] h-[36px] flex items-center justify-center bg-white hover:bg-black hover:text-white rounded-full border"
        >
          <div className="after:whitespace-nowrap after:content-['Thêm_vào_so_sánh'] after:w-[auto] after:h-[20px] after:items-center after:justify-center 
          after:text-[12px] after:p-[2px] after:px-2  after:rounded-[4px] after:text-white after:bg-[#828282] 
          after:absolute after:left-[-123.5px] after:top-[50%] after:translate-y-[-50%] 
          before:w-[10px] before:h-[10px] before:absolute before:bg-[#828282] before:rotate-45 before:top-[50%]
          before:left-[-17px] before:translate-y-[-50%] before:hidden hover:before:flex
          after:hidden hover:after:flex">
            <IoIosGitCompare className="text-[20px]" />
          </div>
        </button>
      </div >
    </div >
  );
}

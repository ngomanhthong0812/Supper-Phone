import React from "react";

import { Link, useLocation } from "react-router-dom";

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
          className='flash-sale absolute top-4 -left-1.5 bg-[#e31934] text-white text-sm px-2 font-medium rounded-r-full
                after:content-[""] after:block after:w-4 after:h-4 after:bg-[#e31934] after:absolute after:left-1 after:top-3 after:rotate-45 after:-z-20'
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
          <Link>{productName}</Link>
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

        <div className="product-button w-9 h-9 bg-black hover:bg-[#991c28] transition duration-300 text-white flex items-center justify-center rounded-md">
          <button className="btn-cart">
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
          <span className="text-white text-sm z-[4]">Đã bán {quantity_sold}</span>
          <div
            className="countdown absolute top-0 left-0 h-full bg-gradient-to-r from-[#f53d2d] to-[#f63] rounded-full z-[-1]"
            style={{ width: `${widthQuantitySold}%` }}
          ></div>
        </div>
      )}

      <div className="btn-action absolute flex flex-col gap-y-2 right-[12px] top-1/4 text-2xl">
        <button
          className="translate-x-3 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition duration-200
                    w-[36px] h-[36px] flex items-center justify-center bg-white hover:bg-black hover:text-white rounded-full border "
        >
          <IoEyeOutline className="text-[20px]" />
        </button>
        <button
          className="translate-x-3 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition duration-300
                    w-[36px] h-[36px] flex items-center justify-center bg-white hover:bg-black hover:text-white rounded-full border"
        >
          <CiHeart className="text-[20px]" />
        </button>
        <button
          className="translate-x-3 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition duration-500
                    w-[36px] h-[36px] flex items-center justify-center bg-white hover:bg-black hover:text-white rounded-full border"
        >
          <IoIosGitCompare className="text-[20px]" />
        </button>
      </div>
    </div>
  );
}

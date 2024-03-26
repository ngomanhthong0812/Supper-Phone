import React from 'react'
import { Link } from 'react-router-dom';

import { CiSearch } from "react-icons/ci";
import { LuMapPin } from "react-icons/lu";
import { FiPhoneCall } from "react-icons/fi";
import { FaUser } from "react-icons/fa6";
import { BsCart3 } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosLogIn } from "react-icons/io";
import { PiUserPlusLight } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import { IoIosGitCompare } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { AiOutlineMenu } from "react-icons/ai";

import logo from '../../asset/images/logo.png'

import './Header.css';

export default function Header() {
  return (
    <div className='bg-[#252525] text-white'>
      <div className='container_body flex items-center justify-between py-3 gap-2'>
        <Link to={'/'}><img src={logo} alt="logo" className='w-[249px] h-[26px] cursor-pointer' /></Link>
        <div className='gravity relative max-md:hidden'><input type="text" placeholder='Tìm sản phẩm...' className='w-[406px] outline-none text-black  rounded-[5px] py-[0.4rem] px-[1rem] text-[17px]' /><CiSearch className='absolute text-[28px] top-[50%] right-2 translate-y-[-50%] text-black' /></div>
        <div className='gravity gap-6'>
          <div className='gravity gap-2 cursor-pointer bg-white bg-opacity-15 py-1 px-2 rounded-[3px]  hover:bg-opacity-10 transition duration-100 max-md:hidden'><LuMapPin className='text-[28px]' /><span className='flex flex-col items-start text-[12px] leading-[16px]  max-lg:hidden'>Hệ thống cửa hàng <div className='text-[14px]'>7 cửa hàng</div></span></div>
          <div className='gravity gap-2 cursor-pointer max-md:hidden'><FiPhoneCall className='text-[28px]' /><span className='flex flex-col items-start text-[12px] leading-[16px]'>Gọi mua hàng <div className='text-[14px]'>1900 2318</div></span></div>
          <div className='relative account'>
            <div className='gravity gap-2 cursor-pointer'><FaUser className='text-[28px]' /><span className='flex flex-col items-start text-[12px] leading-[16px]'><span className='max-md:hidden'>Thông tin</span> <div className='text-[14px] gravity '><span className='max-md:hidden'>Tài khoản</span> <IoIosArrowDown /></div></span></div>
            <span className='nav_children w-[210px] flex flex-col items-start gap-1'>
              <div className='gravity gap-1 w-[100%] px-2 py-1 transition duration-500 rounded-[4px] !justify-start hover:bg-black hover:text-white cursor-pointer'><IoIosLogIn className='text-[20px]' />Đăng nhập</div>
              <div className='gravity gap-1 w-[100%] px-2 py-1 transition duration-500 rounded-[4px] !justify-start hover:bg-black hover:text-white cursor-pointer'><PiUserPlusLight className='text-[20px]' />Đăng ký</div>
              <div className='gravity gap-1 w-[100%] px-2 py-1 transition duration-500 rounded-[4px] !justify-start hover:bg-black hover:text-white cursor-pointer'><CiHeart className='text-[20px]' />Danh sách yêu thích (0)</div>
              <div className='gravity gap-1 w-[100%] px-2 py-1 transition duration-500 rounded-[4px] !justify-start hover:bg-black hover:text-white cursor-pointer'><IoIosGitCompare className='text-[20px]' />So sánh sản phẩm (0)</div>
            </span>
          </div>
          <div className='relative cart'>
            <div className='gravity gap-2 cursor-pointer relative'><BsCart3 className='text-[28px]' /><span className='flex flex-col items-start text-[14px] leading-[16px]'><span className='max-md:hidden'>Giỏ hàng</span></span><div className='count_cart'>0</div></div>
            <span className='flex-col gravity nav_children-1 w-[300px] gap-1'>
              <HiOutlineShoppingBag className='text-[50px]' />
              <span>Không có sản phẩm nào trong giỏ hàng</span>
            </span>
          </div>
          <div className="reponsive_menu hidden max-md:flex"><AiOutlineMenu className='text-[28px]'/></div>
        </div>
      </div>
    </div>
  )
}

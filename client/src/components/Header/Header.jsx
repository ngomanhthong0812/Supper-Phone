import React from 'react'

import { CiSearch } from "react-icons/ci";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { FaUser } from "react-icons/fa6";
import { BsCart3 } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";

import logo from '../../asset/images/logo.png'

export default function Header() {
  return (
    <div>
      <img src={logo} alt="logo" />
      <div><input type="text" /><CiSearch /></div>
      <div><FaMapMarkerAlt /><span>Hệ thống cửa hàng <p>7 cửa hàng</p></span></div>
      <div><FiPhoneCall /><span>Gọi mua hàng <p>1900 2318</p></span></div>
      <div><FaUser /><span>Thông tin <p>Tài khoản <IoIosArrowDown /></p></span></div>
      <div><BsCart3 /><span>Giỏ hàng</span></div>
    </div>
  )
}

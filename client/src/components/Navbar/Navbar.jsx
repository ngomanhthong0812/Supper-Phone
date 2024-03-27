import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';

import NavbarItem from './NavbarItem'

import { IoIosArrowDown } from "react-icons/io";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

import './Navbar.css'

export default function Navbar() {
    const location = useLocation(); // Lấy thông tin về đường dẫn hiện tại

    const style = {
        boxShadow: '0 0 0.9px white'
    }

    return (
        <div className='bg-gradient-to-b from-[#252525] to-[#444444] max-md:hidden' style={style}>
            <nav className='container_body text-white gravity'>
                <ul className='flex text-[17px] gap-[4px]'>
                    {NavbarItem.map((item) => (
                        <li key={item.id} className='relative container_menu '>
                            <Link className={`gravity gap-[3px] px-[16px] py-[8px] cursor-pointer ${location.pathname == item.link ? 'active_menu_item' : 'menu_item'} `} to={item.link}>{item.title}{item.subMenu && <IoIosArrowDown />}</Link>
                            {
                                item.subMenu && (
                                    item.title !== 'iPhone' ? (<ul className='absolute subMenu bg-white text-black w-[250px] top-[50px]'>
                                        {item.subMenu.map(item => (
                                            <li key={item.id} className='container_menu-children'>
                                                <Link to={item.link} className='gravity !justify-between px-3 py-2 cursor-pointer hover:underline transition duration-100'><span>{item.title}</span>{item.subMenu && <MdNavigateNext />}</Link>
                                                {item.subMenu && (<ul className='absolute subMenuChildren bg-white text-black w-[250px]'>
                                                    {item.subMenu.map(item => (<li key={item.id} >
                                                        <Link className='gravity !justify-between px-3 py-2 cursor-pointer hover:underline transition duration-100' to={item.link}>{item.title}</Link>
                                                    </li>))}
                                                </ul>)}
                                            </li>
                                        ))}
                                    </ul>)
                                        :
                                        (<ul className='absolute subMenu flex bg-white text-black w-[1259px] left-[-225px] top-[50px] rounded-b-[3px]'>
                                            {item.subMenu.map(item => (
                                                <div key={item.id} className='py-4 w-[25%]'>
                                                    <li className='subMenu_iphone flex justify-start'>
                                                        <Link to={item.link} className='gravity px-5 pb-2 cursor-pointer hover:underline transition duration-100'>{item.title}</Link>
                                                    </li>
                                                    <ul>
                                                        {item.subMenu.map(item => (
                                                            <li className='flex justify-start'>
                                                                <Link to={item.link} className='gravity px-5 py-[2px] cursor-pointer text-[#333333] hover:underline transition duration-100'>{item.title}</Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </ul>)
                                )
                            }
                        </li>



                    ))}
                </ul>

                {/* <ul>
                    <li className='gravity'>
                        <GrFormPrevious className='text-[25px] cursor-pointer hover:text-[#a90000]' />
                        <MdNavigateNext className='text-[25px] cursor-pointer hover:text-[#a90000]' />
                    </li>
                </ul> */}
            </nav>
        </div>
    )
}

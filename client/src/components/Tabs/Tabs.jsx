import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import NavbarItem from '../Navbar/NavbarItem';
import ProductsList from '../ProductsList/ProductsList';

import Loading from '../Loading/Loading';

import { GrNext } from "react-icons/gr";

import './Tabs.css'


export default function Tabs({ tabCategory }) {
  const tabs = NavbarItem.filter(item => item.name == tabCategory)
  const [toggleState, setToggleState] = useState(1);
  const [category, setCategory] = useState('')
  const [link, setLink] = useState('')
  const [clickedItems, setClickedItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setCategory(tabs[0].children[0].name);
    setLink(tabs[0].children[0].link)

  }, []);

  useEffect(() => {
    if (!clickedItems.includes(toggleState)) {
      setIsLoading(true)
      setTimeout(() => {
        setIsLoading(false)
      }, 500)
      //thêm index vào mảng để xác định đã click
      setClickedItems(prevClickedItems => [...prevClickedItems, toggleState])
    }
  }, [toggleState])

  const handelSubmit = (index, nameCategory, link) => {
    setToggleState(index + 1)
    setCategory(nameCategory)
    setLink(link)
  }

  return (
    <div className="py-[1.5rem] container_body">
      <div className='title mb-3'>
        <h2 className='text-[26px] text-center font-bold text-[#333333] transition duration-300'>
          <span className="uppercase">{tabCategory}</span>
        </h2>
      </div>
      <div className="gravity my_tabs mb-5">
        {tabs[0].children.map((item, index) => (
          <ul className={`${toggleState == index + 1 ? "active-tab" : "tab"} px-5 py-[3px] text-[16px] font-[500] cursor-pointer relative`} key={item.id}><li className='relative hover:text-[#bf1e2e]' onClick={() => handelSubmit(index, item.name, item.link)}>{item.title}</li></ul>
        ))}
      </div>
      {isLoading ? <Loading /> : <ProductsList quantityProduct={8} nameCategory={category} />}

      <button className='m-auto border border-black px-6 py-2 rounded-[8px] mt-7 hover:bg-[#bf1e2e] hover:text-white hover:border-[#bf1e2e] transition duration-300 ease-in-out'><Link to={link} className='gravity gap-2'>Xem tất cả<GrNext className='text-[14px]' /></Link></button>
    </div>
  )
}

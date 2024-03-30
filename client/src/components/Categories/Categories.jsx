import React from 'react'
import CategoriesItem from './CategoriesItem'
import { Link } from 'react-router-dom'

export default function Categories() {
  return (
    <div className='container_body'>
        <div className='title mb-3'>
            <h2 className='text-[26px] text-center font-bold text-[#333333] transition duration-300'>
              <span className="uppercase">danh mục nổi bật</span>
            </h2>
        </div>

        <div className='grid grid-cols-6 gap-5'>
            {CategoriesItem.map((item) => (
                <Link to={item.link}>
                    <div className='group w-full h-full flex flex-col items-center justify-center py-5 px-[10px] bg-[#f1f1f1] rounded-xl
                                    hover:bg-gradient-to-tr from-[#333333] to-[#f1f1f1]'>
                        <img className='group-hover:scale-105 transition duration-200' src={item.img} alt="" />
                        <span className='group-hover:text-[#ffffff] mt-2 text-[#333333] font-semibold text-center transition duration-200'>{item.category_name}</span>
                    </div>
                </Link>
            ))}
        </div>
    </div>
  )
}

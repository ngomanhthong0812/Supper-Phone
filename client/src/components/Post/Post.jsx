import React, { useState, useEffect } from "react";
import time from "../../asset/icon/time.svg";
import ListPost from "./PostList";

const Post = () => {
  //   const [value, setvalue] = useState([
  //     {
  //       src: Banner_2,
  //       title: "'Thò thụt': iPhone Đã Đúng Khi Không Đụng Đến Tính Năng N... ",
  //       content:
  //         "iPhone vẫn kiên định với thiết kế tai thỏ suốt nhiều năm dù bị nhiều người dùng chỉ trích. Thế nhưng, có vẻ nh...",
  //       time: "28/04/2023",
  //     },
  //     {
  //       src: Banner_2,
  //       title: "'Thò thụt': iPhone Đã Đúng Khi Không Đụng Đến Tính Năng N... ",
  //       content:
  //         "iPhone vẫn kiên định với thiết kế tai thỏ suốt nhiều năm dù bị nhiều người dùng chỉ trích. Thế nhưng, có vẻ nh...",
  //       time: "28/04/2023",
  //     },
  //     {
  //       src: Banner_2,
  //       title: "'Thò thụt': iPhone Đã Đúng Khi Không Đụng Đến Tính Năng N... ",
  //       content:
  //         "iPhone vẫn kiên định với thiết kế tai thỏ suốt nhiều năm dù bị nhiều người dùng chỉ trích. Thế nhưng, có vẻ nh...",
  //       time: "28/04/2023",
  //     },
  //     {
  //       src: Banner_2,
  //       title: "'Thò thụt': iPhone Đã Đúng Khi Không Đụng Đến Tính Năng N... ",
  //       content:
  //         "iPhone vẫn kiên định với thiết kế tai thỏ suốt nhiều năm dù bị nhiều người dùng chỉ trích. Thế nhưng, có vẻ nh...",
  //       time: "28/04/2023",
  //     },
  //   ]);

  return (
    <div className="py-[1.5rem]  container_body">
      <div className='title mb-3 group'>
        <h2 className='text-[26px] text-center font-bold text-[#333333] group-hover:!text-[#bf1e2e] transition duration-300'>
          <span className="cursor-pointer">TIN TỨC
            <span className='text-[#bf1e2e]'> CÔNG NGHỆ</span></span>
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-[20px] sm:grid-cols-2 lg:grid-cols-4">
        {ListPost.map((a, index) => (
          <div key={index} className="w-full rounded-2xl border-2 shadow-md overflow-hidden bg-gray-50 group">
            <div className="relative overflow-hidden">
              <img
                className="object-cover w-full h-40 duration-500 transform group-hover:scale-105 cursor-pointer"
                src={a.src}
                alt="image"
              />
            </div>
            <div className="px-3 py-2 text-left">
              <h4 className="text-[18px] font-semibold hover:text-red-500 mb-2">
                {a.title}
              </h4>
              <p className="mb-2 leading-normal text-base text-[#484848]">
                {a.content}
              </p>
              <div className="flex items-center">
                <img
                  src={time}
                  alt="time"
                  className="w-5 h-5 "
                />
                <span className="text-base text-[#484848]">{a.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>



  );
};

export default Post;

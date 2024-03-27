import React from 'react'
import logo from '../../asset/images/logo.png'
import facebook_2 from '../../asset/icon/facebook_2.svg'
import instagram_1 from '../../asset/icon/instagram_1.svg'
import lazada from '../../asset/icon/lazada.svg'
import shopee from '../../asset/icon/shopee.svg'
import tiktok from '../../asset/icon/tiktok.svg'
import payment_1 from '../../asset/icon/payment_1.svg'
import payment_2 from '../../asset/icon/payment_2.svg'
import payment_3 from '../../asset/icon/payment_3.svg'
import payment_4 from '../../asset/icon/payment_4.svg'
import payment_5 from '../../asset/icon/payment_5.svg'
import payment_6 from '../../asset/icon/payment_6.svg'
import payment_7 from '../../asset/icon/payment_7.svg'
import ListChinhSach from './ListChinhSach'
import ListHuongDan from './ListHuongDan' 

export default function Footer() {
  return (
    <div>
        <footer>
          <div className="bg-[#f5f5f5] leading-relaxed">

          <div className="pt-5 pb-8">
            <div className="max-w-[650px] w-full grid grid-flow-row m-auto ">
              <h1 className='font-bold text-[26px]'>Đăng ký nhận tin từ Sudes Phone</h1>
              <span className='text-base font-medium text-[#585858]'>Nhận thông tin sản phẩm mới nhất và các chương trình khuyến mãi.</span>
              <form action="" className='relative mt-5'>
                <input type="text" placeholder="Nhập địa chỉ email" className='w-full border border-[#141414] rounded-full py-2 px-[30px] text-sm focus:outline-none'/>
                <button className='absolute top-0 right-0 bg-black text-white px-6 h-[37px] rounded-full'>Đăng ký</button>
              </form>
            </div>
          </div>
    {/*  */}
          <div className="bg-black pt-[30px] pb-[20px] text-white">
            <div className="container_body m-auto ">
              <div className="grid grid-cols-12 grid-rows-1  text-start">

                <div className="col-span-4 pr-6">
                  <div className="mb-[15px]">
                    <a href="#" className='text-white'><img src={logo} alt="" width={249} height={29} /></a>
                  </div>
                  <div className="mb-[10px] text-base">
                  Hệ thống cửa hàng Sudes Phone chuyên bán lẻ điện thoại, máy tính laptop, smartwatch, smarthome, phụ kiện chính hãng - Giá tốt, giao miễn phí.
                  </div>
                  <div className=" text-base">
                      <div className="py-1">Địa chỉ:70 Lữ Gia, Phường 15, Quận 11, Tp.HCM</div>
                      <div className="py-1">Số điện thoại: <span className='hover:text-[#bf1e2e] cursor-pointer'>1900 6750</span></div>
                      <div className="py-1">Email: <span className='hover:text-[#bf1e2e] cursor-pointer'>support@sapo.vn</span></div>
                  </div>
                </div>

                <div className="col-span-2 text-[15px]">
                  <ul>
                    <li className='mb-[15px] '>{ListChinhSach.tile}</li>
                    {/* <li className='py-1 hover:text-[#bf1e2e] cursor-pointer leading-normal'><a href="#"></a> Chính sách mua hàng</li>
                    <li className='py-1 hover:text-[#bf1e2e] cursor-pointer leading-normal'><a href="#"></a> Chính sách đổi trả</li>
                    <li className='py-1 hover:text-[#bf1e2e] cursor-pointer leading-normal'><a href="#"></a> Chính sách vận chuyển</li>
                    <li className='py-1 hover:text-[#bf1e2e] cursor-pointer leading-normal'><a href="#"></a> Chính sách bảo mật</li>
                    <li className='py-1 hover:text-[#bf1e2e] cursor-pointer leading-normal'><a href="#"></a> Cam kết cửa hàng</li> */}
                    {ListChinhSach.conten.map(item => 
                       <li className='py-1 hover:text-[#bf1e2e] cursor-pointer leading-normal'><a href="#"></a>{item}</li>
                      )}
                  </ul>
                </div>

                <div className="col-span-2 text-[15px]">
                  <ul>
                      {/* <li className='mb-[15px]'>HƯỚNG DẪN</li>
                      <li className='py-1 hover:text-[#bf1e2e] cursor-pointer leading-normal'><a href="#"></a> Hướng dẫn mua hàng</li>
                      <li className='py-1 hover:text-[#bf1e2e] cursor-pointer leading-normal'><a href="#"></a> Hướng dẫn đổi trả</li>
                      <li className='py-1 hover:text-[#bf1e2e] cursor-pointer leading-normal'><a href="#"></a> Hướng dẫn chuyển khoản</li>
                      <li className='py-1 hover:text-[#bf1e2e] cursor-pointer leading-normal'><a href="#"></a> Hướng dẫn trả góp</li>
                      <li className='py-1 hover:text-[#bf1e2e] cursor-pointer leading-normal'><a href="#"></a> Hướng dẫn hoàn hàng</li> */}
                     <li className='mb-[15px] '>{ListHuongDan.tile}</li>
                     {ListHuongDan.conten.map(item => 
                       <li className='py-1 hover:text-[#bf1e2e] cursor-pointer leading-normal'><a href="#"></a>{item}</li>
                      )}
                    </ul>
                </div>

                <div className="col-span-4">
                  <h4 className='mb-[15px]'>KẾT NỐI VỚI CHÚNG TÔI</h4>
                  <div className="flex gap-3 mb-5">
                    <a href=""><img src={facebook_2} alt="facebook"  /></a>
                    <a href=""><img src={instagram_1} alt="instagram" /></a>
                    <a href=""><img src={shopee} alt="shopee" /></a>
                    <a href=""><img src={lazada} alt="laptop" /></a>
                    <a href=""><img src={tiktok} alt="tiktok" /></a>
                  </div>
                  <div className="col-span-4 ">
                    <h4 className='mb-[15px]'>HỖ TRỢ THANH TOÁN</h4>
                    <div className="flex gap-2">
                    <div className='w-16' ><img src={payment_1} alt="payment_1"  /></div>
                    <div className='w-16' ><img src={payment_2} alt="payment_2"  /></div>
                    <div className='w-16' ><img src={payment_3} alt="payment_3"  /></div>
                    <div className='w-16' ><img src={payment_4} alt="payment_4"  /></div>
                    <div className='w-16' ><img src={payment_5} alt="payment_5"  /></div>
                   
                    
                  </div>
                  <div className="flex gap-2 mt-2">
                  <div className='w-16' ><img src={payment_6} alt="payment_6"  /></div>
                    <div className='w-16' ><img src={payment_7} alt="payment_7"  /></div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    {/*  */}
          <div className="p-2">
          © Bản quyền thuộc về Sudes Team | Cung cấp bởi Sapo
          </div>
          </div>
        </footer>
    </div>
  )
}

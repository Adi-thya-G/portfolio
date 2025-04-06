import React from 'react'
import authService from '../../appwrite/auth'
import demo from './image.png'
import demo1 from './image1.png'
import demo2 from './image2.png'
import demo3 from './image3.png'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';
function Project() {
  console.log(authService.get_project_file_preview())
  return (
    <div className=' w-auto h-auto mt-16  mx-20 p-3 ' id='Project'>
       <h2 className='flex justify-center py-5 my-2 font-serif  text-3xl'>Task Management System            
       
      
        </h2>
  
       <Swiper
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
         
        <SwiperSlide><div className='flex justify-center '>
        
          <img src={demo} alt="" className='w-[1200px] h-[600px] border-2 border-slate-200 shadow-xl shadow-slate-300 mb--9  rounded-lg' />
        </div>
        </SwiperSlide>

        <SwiperSlide><div className='flex justify-center '>
          <img src={demo1} alt="" className='w-[1200px] h-[600px] border-2 border-slate-200 shadow-xl shadow-slate-300 mb--9  rounded-lg' />

        </div></SwiperSlide>
        
        <SwiperSlide><div className='flex justify-center '>
          <img src={demo2} alt="" className='w-[1200px] h-[600px] border-2 border-slate-200 shadow-xl shadow-slate-300 mb--9  rounded-lg' />

        </div></SwiperSlide>
        
        <SwiperSlide><div className='flex justify-center '>
          <img src={demo3} alt="" className='w-[1200px] h-[600px] border-2 border-slate-200 shadow-xl shadow-slate-300 mb--9  rounded-lg' />

        </div></SwiperSlide>
        
      </Swiper>
      
        
      </div>
  )
}

export default Project
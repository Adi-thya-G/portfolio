import React, { useEffect, useState } from 'react'
import Card from './Card'
import authService from '../../appwrite/auth'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './style.css'

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard  } from 'swiper/modules';
function Course() {
    
    const [data,setdata]=useState([])
    useEffect(()=>{
        authService.getcourseData().then((res)=>res).then((res)=>{
            
            setdata(res?.documents)})
        
    },[])
  return (
  <div id='Course' className='pt-20'>
     <h2 className='flex justify-center text-3xl'>Building My Expertise with Certifications</h2>
     <Swiper 
  slidesPerView={3}
  spaceBetween={30}
  navigation={true}
  mousewheel={true}
  keyboard={true}
  pagination={{
    clickable: true,
  }}
  modules={[Navigation, Pagination, Mousewheel, Keyboard]}
  className="mySwiper"
  breakpoints={{
    768: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  }}
>
  {
    data.length === 0 ? null : data?.map((ele) => (
      <SwiperSlide key={ele.$id} className="swiper-slide">
        <Card
          img={ele.logo_id}
          heading={ele.heading}
          description={ele.description}
          skill={ele.skill}
          language={ele.language}
          start_date={ele.start_date}
          end_date={ele.end_date}
          url={ele.view}
        />
      </SwiperSlide>
    ))
  }
</Swiper>

        
    
  </div>
  )
}

export default Course
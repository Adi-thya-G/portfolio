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
            console.log(res)
            setdata(res?.documents)})
        console.log(data?.skill ,"hi")
    },[])
  return (
  <div id='Course' className='pt-20'>
     <h2 className='flex justify-center text-3xl'>Building My Expertise with Certifications</h2>
     <Swiper key={"one"}
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
            // For screens with width <= 768px (typically mobile phones)
            768: {
              slidesPerView: 1, // Display 1 slide on small screens
              spaceBetween: 10, // Adjust space between slides on small screens
            },
            // For screens with width <= 1024px (tablets, small laptops)
            1024: {
              slidesPerView: 2, // Display 2 slides on tablets
              spaceBetween: 20,
            },
            // Default (for screens larger than 1024px)
            1440: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
      >
        {
            data.length==0?null:data?.map((ele)=>(
                <>
                <SwiperSlide key={ele.$id} className='swiper-slide '>
                    <div key={ele.$id}>
                    <Card  img={ele.logo_id} heading={ele.heading} description={ele.description} skill={ele.skill} language={ele.language} start_date={ele.start_date} end_date={ele.end_date} url={ele.view}/>
                     
                </div>
                </SwiperSlide>
                
                
                
            </>
            ))
        }
        </Swiper>
        
    
  </div>
  )
}

export default Course
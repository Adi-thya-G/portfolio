import React, { useEffect, useState } from 'react'
import authService from '../../appwrite/auth'
import demo from './image.png'
import demo1 from './image1.png'
import demo2 from './image2.png'
import demo3 from './image3.png'

// Import Swiper styles




// import required modules
import { Pagination } from 'swiper/modules';
function Project() {
const [data,setdata]=useState([])
useEffect(()=>{
  authService.getProjectData().then((res)=>{setdata(res?.documents)})
  console.log('====================================');
  console.log(data);
  console.log('====================================');
},[])
  
  return (
  <div className='w-full' id='Project'>
    <div>
      <h1 className='text-3xl font-serif text-center text-slate-600'>Projects</h1>
    </div>
    
        <div className='w-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 px-3 py-3'>
          {
      data?.length>0?
      data?.map((ele)=>(
      <div className='w-full px-3 py-3 border-2 bg-zinc-50  border-zinc-100 shadow-xl mb-10 z-10  shadow-slate-300 selection: min-h-[350px] md:min-h-[400px] md:min-w-[350px] rounded-lg' key={ele.$id}>
        <div>
          <img src={ele.img_id} alt="todo/fornt/page" />
        </div>
        <div className='h-fit text-[13px] sm:text-[16px]'>
          <h2 className='text-2xl font-serif text-slate-600 '>{ele?.name}</h2>
          <p className='text-gray-700'>{ele?.description}.</p>
          <p>features</p>
          <ul className='list-disc pl-5'>
            {ele.features.split("\n")?.map((feature, index) => (
              <li key={index} className='text-gray-600'>{feature}</li>
            ))}
          </ul>
        </div>
        <div className='flex justify-between px-5 py-2 items-end'>
         <button className='px-3 py-2 bg-blue-500 text-white rounded-md' >
          <a href={ele?.demo}>Demo</a>
         </button>
           <button className='px-3 py-2 bg-blue-500 text-white rounded-md'>
            <a href={ele?.github_src}> Github</a>
           </button>
        </div>
      </div>
         ))
      :
      <div>
        <h4>loading</h4>
      </div>
    }
       
    </div>
    
  </div>
  )
}

export default Project
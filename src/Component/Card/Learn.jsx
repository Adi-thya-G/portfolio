import React, { useEffect, useState } from 'react'
import Card from './Card'
import authService from '../../appwrite/auth'
function Learn() {
    const [data,setdata]=useState([])
    useEffect(()=>{
        authService.getData().then((res)=>res).then((res)=>setdata(res?.documents))
        .catch((error)=>{console.log(error)})
    },[])
  return (
    <div className='mt-20 mx-auto '>
        <h2 className='text-2xl flex justify-center py-7'>Technologies I’m Proficient In <span className='w-1 h-1 ml-1 mt-5 rounded-lg bg-yellow-600 '></span></h2>
      <ul className='flex gap-7 justify-center'>
         {data==0?null
       :data?.map((ele)=>(
       <li key={ele.$id}><Card img={authService.getFilePreview(ele.image_id).href} name={ele.name} id={ele.$id}/> </li>))}
              </ul>
    </div>
  )
}

export default Learn
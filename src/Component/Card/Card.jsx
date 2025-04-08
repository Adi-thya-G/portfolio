import React, { useEffect, useState } from 'react'
import authService from '../../appwrite/auth'



import "aos/dist/aos.css";
import Aos from 'aos';


function Card({img,name,id}) {
  const [url,seturl]=useState()
  useEffect(()=>{
  let a=img.replace("preview","view")+"&mode=admin"

    Aos.init({
      duration: 1000, // Animation duration (1 second)
      easing: "ease-in-out", // Easing function for the animation
      offset: 200, // Trigger animation when the element is 200px into the viewport
      once: Infinity,
    })
seturl(a)
  })
  Aos.refresh()
  return (
    <div className='w-max p-3 py-6 border-slate-200 shadow-xl shadow-slate-300 mb-28  rounded-lg' key={id} data-aos="flip-left">
        <div className='flex justify-center'>
           <img src={url} alt={name}className='w-32 h-36'/>
        </div>
        <h2 className='flex justify-center text-gray-600 font-semibold text-x'>{name}</h2>
    </div>
  )
}

export default Card
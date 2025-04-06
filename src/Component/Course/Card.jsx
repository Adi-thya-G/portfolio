import React from 'react'
import date from './date.png'

import intershal from './intershal.png'
import authService from '../../appwrite/auth'
function Card({img,heading,description,skill,language,start_date,end_date,url}) {
  return (
    <div className='w-[500px] h-[550px] border-2 bg-zinc-50  border-zinc-100 shadow-xl mb-10 z-10  shadow-slate-300 p-3  select-none
    rounded-lg' >
      <div className='w-20 h-10'><img src={authService.getFilePreview(img).href.replace("preview","view")+"&mode=admin"} alt=""  className=''/></div>
        <h2 className='flex justify-center text-3xl font-serif -mt-4 text-slate-600'>{heading}</h2>
   <div className='w-[100%] mt-4 px-5 text-gray-700'>
    <p className='text-justify h-[150px]'>{description}</p>
   </div>
   <div className='w-full'>
    <div className='px-5 '>
      <h2>Skills Learned:</h2>
      <ol style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
      {
        skill?.map((ele)=>(
          <li key={ele}>{ele}</li>
        ))
      }
      
    </ol>
    </div>
    <div>
    <div className='flex px-5 py-2 gap-3'>
        <h2>Programming language:</h2><h2>{language}</h2>
      </div>
      <div className='flex px-5 py-2 gap-3'>
       <img src={date} alt="" /> <h2>Starting date : {start_date}</h2>
      </div>
      <div className='flex px-5 py-2 gap-3'>
       <img src={date} alt="" /> <h2>Ending date :{end_date}</h2>
      </div>
      <div className='flex px-5 py-2 gap-3'>
        <a href={url} target='_blank' className='text-blue-600 my-auto'> view certificate</a>
      </div>
    </div>
   </div>
    </div>
  )
}

export default Card
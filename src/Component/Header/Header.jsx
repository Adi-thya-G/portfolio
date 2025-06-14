import React from 'react'
import Home from '../Home/Home'
import About from '../About/About'
import { useState } from 'react'
import { RxCross1 } from "react-icons/rx";
import { MdMenu } from "react-icons/md";

function Header() {
   const [onclick,setclick]=useState(false)
   console.log(onclick)

  return (
 <nav className='w-full grid  sm:h-[60px]  grid-cols-1 sm:grid-cols-[auto_3fr_auto]  md:grid-cols-[0.4fr_3fr_0.5fr] bg-gradient-to-r from-gray-100 to-gray-500  place-items-center fixed z-40'>
  <div className={`w-full grid items-center grid-cols-2 h-16 px-2 ${onclick&&"shadow-md bg-gradient-to-r from-gray-100 to-gray-500 "}`}>
    <h2 className=''>  </h2>
    <div className='flex justify-end sm:hidden'>
      {onclick?(<RxCross1 size={25} className="cursor-pointer"onClick={()=>setclick(false)} />):
      (<MdMenu size={25} className="cursor-pointer" onClick={()=>{setclick(true) 
      console.log("click")}}/>)}
      </div>
    
  </div>
  <div className={`w-full   hidden sm:flex sm:gap-9 justify-center  sm:max-md:px-5 `}>
     <a href="#Home" className=''>Home</a>
     <a href="#About"className='flex justify-center'>About</a>
     <a href="#Course"className='flex justify-center'>Course</a>
     <a href="#Project" className='flex justify-center'>Project</a>
     
     
  </div>
  <div className='w-full  gap-7 hidden sm:flex px-2 '>
     
  </div>
    {onclick&&(<div className={`sm:hidden animate duration-200 h-[600px]  flex flex-col p-3 items-start gap-6 transition-all duration-900 ease-out transform origin-top  ${onclick? "opacity-100 scale-100 max-h-96" : "opacity-0 scale-90 max-h-0"
        } `} >
        <a href="#Home" className='' onClick={()=>setclick(false)} >Home</a>
     <a href="#About"className='flex justify-center' onClick={()=>setclick(false)} >About</a>
     <a href="#Course"className='flex justify-center' onClick={()=>setclick(false)} >Course</a>
     <a href="#Project" className='flex justify-center' onClick={()=>setclick(false)} >Project</a>
     
      </div>)}
 </nav>

  );
//   return (
//     <>
//       <nav className='bg-transparent w-full flex fixed sm:justify-center z-50 mx-auto py-3 bg-gradient-to-r from-gray-100 to-gray-500 '>
//         <div> 
//           <div className='mx-auto px-20'>
//             <ul className='flex gap-10'>
//               <li>
//               <a
//             className='text-blue-600 text-xl active:underline  font-serif'
//             href="#Home">Home</a>
//               </li>
//               <li>
//               <a
//             className='text-blue-600 text-xl active:underline  font-serif'
//             href="#About">About</a>
//               </li>
//               <li>
//               <a
//             className='text-blue-600 text-xl active:underline  font-serif'
//             href="#Course">Course</a>
              
//               </li>
//               <li>
//               <a
//             className='text-blue-600 text-xl active:underline  font-serif'
//             href="#Project">Projects</a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </>
    
// )
}

export default Header

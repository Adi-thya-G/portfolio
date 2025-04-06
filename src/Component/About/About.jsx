import React from 'react'
import adithya from './adithya.png'
import github from './github-sign.png'
import fb from './facebook.png'
import email from './email.png'
function About() {
  return (
 <div className='w-full h-[700px] pt-20 flex ' id='About'>
   
   <div className='w-[27%] h-[70%] my-auto grid place-content-center'>
  <div>
  <img src={adithya} alt="" className='w-[380px] h-[450px]' />
  </div>
 
   </div>
   <div className='flex-1 flex-col justify-center'>
  
  
 <div className='pl-7 pr-10 py-2 pt-20'>
 <h2 className='flex  text-[60px] font-sans font-extrabold text-gray-600'>ABOUT ME</h2>
 <h2 className='my-4 text-[26px] font-bold text-light-blue-600 '>ADITHYA KARMARKAR G</h2>
   <p className='text-[20px] text-left font-sans'>Hi! I’m Adithya Karmarkar G, a final-year BCA student with a strong passion for web development. I specialize in HTML, CSS, JavaScript, React, and Django, and I aim to build user-friendly web applications that solve real-world problems.

One of my key projects was a Task Management System built with Django. The system sends automatic email reminders one hour before task deadlines, helping users stay organized. This project strengthened my skills in backend development, email automation, and working with APIs.

I am also an advocate for open-source development and have explored tools like Appwrite to further enhance my technical abilities. I enjoy learning from the open-source community and contributing to meaningful projects.

When I’m not coding, I’m exploring new technologies, frameworks, and libraries to expand my skill set. I enjoy tackling challenges and collaborating on projects that help me grow as a developer.

Feel free to explore my work and reach out if you’d like to connect or discuss potential collaborations!



   </p>
   <div className='gap-5 flex place-content-center my-10'>
      <a href="https://www.linkedin.com/in/adithya-karmarkar-g-444462268/" target='_blank'>
      <i>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
      </i>
      </a>

      <a href="https://github.com/Adi-thya-G" target='_blank'>
      <i>
       <img src={github} alt="" className='w-[24px] h-[24px]' />
      </i>
      </a>
      <i>
         <img src={email} alt="" className='w-[26px] h-[26px]'/>
      </i>
      <i>

         <img src={fb} alt="" className='w-[25px] h-[25px]' />
      </i>
  
   </div>
 </div>
 </div>
 </div>
    

   

  )
}

export default About
import { useEffect, useState } from 'react'
import Card from './Component/Card/Card'
import Header from './Component/Header/Header'
import Home from './Component/Home/Home'
import About from './Component/About/About'
import Learn from './Component/Card/Learn'
import Course from './Component/Course/Course'
import Project from './Component/Project/Project'
function App() {
  const [count, setCount] = useState([])
 
  return (
    <>
      <Header/>
       <Home/>
       
      <About/>
     
      <Learn/>
       
      <Course/>
      
      <Project/> 
    </>
  )
}

export default App

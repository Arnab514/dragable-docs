import React, { useRef } from 'react'
import Card from './Card'

const Foreground = () => {
  const ref = useRef(null)
  const data = [
  {  
    desc : "Hi!! Myself Arnab Majumder , a tech enthusiast",
    filesize : "0.9mb",
    close : false,
    tag : {
      isOpen : true,
      tagTitle : "Download now",
      tagColor : "green"
    }
  },
  {  
    desc : "Hi!! Myself Arnab Majumder , a tech enthusiast",
    filesize : "0.9mb",
    close : false,
    tag : {
      isOpen : true,
      tagTitle : "Download now",
      tagColor : "blue"
    }
  },
  {  
    desc : "I am passionate about programming and dedicated to honing my skills in various programming languages such as Java, C++ and JavaScript",
    filesize : "0.9mb",
    close : false,
    tag : {
      isOpen : false,
      tagTitle : "Download now",
      tagColor : "green"
    }
  },
  {  
    desc : "Hi!! Myself Arnab Majumder , a tech enthusiast",
    filesize : "0.9mb",
    close : false,
    tag : {
      isOpen : true,
      tagTitle : "Download now",
      tagColor : "blue"
    }
  }
]
  
  return (
    <>
      <div ref={ref} className="fixed w-full h-full z-[3] flex flex-wrap justify-evenly">
      {data.map((item , index) => (
        <Card data = {item} reference = {ref}/>  
      ))}   
        
      </div>
    </>
  )
}

export default Foreground;

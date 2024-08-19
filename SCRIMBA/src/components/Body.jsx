import React from 'react'
import { FaReact } from "react-icons/fa";

const Body = () => {
  return (
    <div className='h-4/5 bg-gray-700 flex-grow py-14 px-7'>
        <FaReact className="absolute -right-40 top-3/4 transform -translate-y-1/2 text-gray-500 opacity-10 text-[20rem]" />
      <h1 className='text-white text-4xl font-semibold m-0'>
        Fun facts about React
      </h1>
      <ul className='list-none mt-10 text-xl'>
        <li className='py-3 relative pl-6 before:content-["•"] before:absolute before:left-0 before:text-blue-500 before:text-2xl'>
          Was originally created by Jordan Walke
        </li>
        <li className='py-3 relative pl-6 before:content-["•"] before:absolute before:left-0 before:text-blue-500 before:text-2xl'>
          Was first released in 2013
        </li>
        <li className='py-3 relative pl-6 before:content-["•"] before:absolute before:left-0 before:text-blue-500 before:text-2xl'>
          Has well over 100K stars on Github 
        </li>
        <li className='py-3 relative pl-6 before:content-["•"] before:absolute before:left-0 before:text-blue-500 before:text-2xl'>
          Powers thousands of enterprise apps, including mobile apps
        </li>
      </ul>
    </div>
  )
}

export default Body
 
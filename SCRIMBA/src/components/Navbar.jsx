import React from 'react'
import { FaReact } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className='h-1=1/5 flex items-center bg-gray-900 h-20 py-7 px-6'>
        <FaReact className='text-cyan-600 text-4xl mr-2'/>
        <h3 className='m-0 text-cyan-400  text-2xl font-bold mr-auto'>ReactFacts</h3>
        <h4 className='m-0 text-gray-100 font-semibold'>React Course - Project 1</h4>
    </nav>
  )
}

export default Navbar
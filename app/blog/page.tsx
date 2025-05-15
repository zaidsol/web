import React from 'react'
import Aboutus from '../components/aboutus'
import Navbar from '../components/navbar'

export default function Blog() {
  return (
    <div>
        <Navbar></Navbar>
       <div className='text-center bg-red-500 font-bold  text-white text-5xl p-14'>Blog List</div>
       <Aboutus></Aboutus>
    </div>
  )
}

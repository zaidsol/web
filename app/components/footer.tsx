import React from 'react';
import { PhoneCallIcon, Mail, VideoIcon, SquarePlay, SquareChartGantt } from 'lucide-react';

export default function Footer() {
  return (
    <div>
      <div className='flex justify-center '>
        <img src="/lg.png" alt="Logo" />
      </div>
      <div className="bg-gray-200 text-gray-600  px-4 py-12 flex items-center ">

        <div className="flex flex-col md:flex-row  justify-between gap-14">

          <div className='space-y-6 '>
            <p className=' flex gap-2'> <Mail /> email@gmail.com</p>
            <p className='flex gap-2'><PhoneCallIcon /> 0224242</p>
            <div className='flex'>
              <SquareChartGantt />
              <SquarePlay />
              <VideoIcon />
            </div>
            <div className="flex gap-4 mt-2 text-xl">
            </div>
          </div>

          <div>
            <h1 className="text-lg font-semibold mb-2">Customer Care</h1>
            <ul className="space-y-3">
              <li>Contact</li>
              <li>Shopping Policy</li>
              <li>Exchange</li>
            </ul>
          </div>

          <div>
            <h1 className="text-lg font-semibold mb-2">Our Company</h1>
            <ul className="space-y-2">
              <li>Company Profile</li>
              <li>Careers</li>
            </ul>
          </div>

          <div>
            <h1 className="text-lg font-bold mb-2">Help & Info</h1>
            <ul className="space-y-2">
              <li>Blog</li>
              <li>Track Your Order</li>
              <li>Hear from Our Customers</li>
            </ul>
          </div>

          <div className='w-60'>
            <h1 className="text-lg font-bold mb-2">Newsletter</h1>
            <p className="mb-8">Subscribe to our newsletter for every update:</p>
            <div className='border rounded-4xl '>
              <div className="flex justify-between ">
                <input
                  type="email"
                  placeholder="Email"
                  className="p-3 text-black rounded-xl"
                />
                <button className="bg-black text-white px-4 rounded-xl">Subscribe</button>
              </div>
            </div>
            <div className='flex'>
              <img className='w-15 h-10' src="/icon2.png" alt="icon" />
              <img className='w-15 h-10' src="/icon1.png" alt="icon" />
              <img className='w-15 h-10' src="/icon2.png" alt="icon" />
              <img className='w-15 h-10' src="/icon1.png" alt="icon" />
            </div>
          </div>
        </div>
      </div>
      <p className='text-gray-600'>copyright @2024 Saya all rights reserved. It is noted that our legacy</p>
    </div>
  );
}


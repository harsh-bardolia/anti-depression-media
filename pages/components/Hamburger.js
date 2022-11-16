import { Bars4Icon } from '@heroicons/react/24/outline'
import React from 'react'

const Hamburger = () => {
  return (
    <div>
        <Bars4Icon className="text-black h-8 cursor-pointer dark:text-white"  />
            <div className="list-none hidden">
              <li className="hover:text-[#FF5A5F] cursor-pointer active:scale-90 transition duration-150">
                Overview
              </li>
              <li className="hover:text-[#f05055] cursor-pointer active:scale-90 transition duration-150">
                Features
              </li>
              <li className="hover:text-[#FF5A5F] cursor-pointer active:scale-90 transition duration-150">
                Let&apos;s Test
              </li>
              <li className="hover:text-[#FF5A5F] cursor-pointer active:scale-90 transition duration-150">
                Contact Us
              </li>
            </div>

            
    </div>
  )
}

export default Hamburger
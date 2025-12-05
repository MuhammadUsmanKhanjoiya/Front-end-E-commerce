import React from 'react'
import { assets } from '../assets/assets'

function Footer() {
  return (
    <div className="px-6 md:px-16">
      <div className="grid sm:grid-cols-[3fr_1fr_1fr] gap-10 my-10 mt-20 md:mt-40 text-sm">
        
        {/* Logo + Description */}
        <div>
          <img src={assets.logo} alt="Logo" className="mb-5 w-32" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus neque aperiam recusandae voluptatibus aliquam earum.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <p className="text-lg font-semibold mb-4">Company</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li className="hover:text-gray-900 cursor-pointer">Home</li>
            <li className="hover:text-gray-900 cursor-pointer">About</li>
            <li className="hover:text-gray-900 cursor-pointer">Delivery</li>
            <li className="hover:text-gray-900 cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <p className="text-lg font-semibold mb-4">Get In Touch</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li className="hover:text-gray-900 cursor-pointer">+92-000-0000</li>
            <li className="hover:text-gray-900 cursor-pointer">ContactUs@Gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div>
        <hr className="border-gray-300" />
        <p className="py-5 text-xs md:text-sm text-center text-gray-500">
          © 2024 forever.com — All Rights Reserved
        </p>
      </div>
    </div>
  )
}

export default Footer

import React from 'react'
import { CiSettings } from "react-icons/ci";
import { MdDashboard } from "react-icons/md";
import { FaCar } from "react-icons/fa";
import { FaHotel } from "react-icons/fa6";
import { TbBrandBooking } from "react-icons/tb";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { TbPackageImport } from "react-icons/tb";
function Sidebar() {
  return (
    <>
    <div className='flex'>
      <div className='w-72 h-screen bg-gray-700'>
        <h1 className='text-2xl text-white font-semibold px-4 py-4'>Najmul Akash</h1>
        <div className='w-full h-fit my-4'>
          <ul className='space-y-7  text-white px-4 '>
            <li className='hover:bg-gray-900 text-xl cursor-pointer rounded flex'><MdDashboard className='text-2xl mx-2'/>Dashboard</li>
            <li className='hover:bg-gray-900 text-xl cursor-pointer rounded flex '><TbPackageImport  className='text-2xl mx-2'/>packages</li>
            <li className='hover:bg-gray-900 text-xl cursor-pointer rounded flex'><MdOutlineDashboardCustomize className='text-2xl mx-2 ' />Custom Packges</li>
            <li className='hover:bg-gray-900 text-xl cursor-pointer rounded flex'><TbBrandBooking className='text-2xl mx-2' />Bookings</li>
            <li className='hover:bg-gray-900 text-xl cursor-pointer rounded flex'><FaHotel className='text-2xl mx-2'/>Hotels</li>
            <li className='hover:bg-gray-900 text-xl cursor-pointer rounded flex'><FaCar className='text-2xl mx-2'/>Cars</li>
            <li className='hover:bg-gray-900 text-xl cursor-pointer flex rounded'><CiSettings  className='text-2xl mx-2'/>Setting</li>
          </ul>
        </div>
      </div>
      <div className='w-2/4 h-72  bg-red-500'></div>
    </div>
    </>
  )
}

export default Sidebar
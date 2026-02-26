import React from 'react'
function Navbar() {
  return (
    <>
    <div className='bg-purple-700'>
        <div className='h-16 flex justify-between items-center'>
            <div className='text-2xl px-4 text-white'>Admin Dashboard</div>
            <div className='hidden sm:block'>
                <input type="text"  placeholder='Search...' className='text-xl mx-9 bg-white rounded outline-none px-5.5 py-1' />
            </div>
        </div>
    </div>
    </>
  )
}

export default Navbar

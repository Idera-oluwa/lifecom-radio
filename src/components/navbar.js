import React from 'react'

const navbar = () => {
  return (
    <div className='w-[90vw] mx-auto py-[1rem] flex justify-between items-center'>
      <img src='/images/home/logo.svg' alt=''/>
      <ul className='flex flex-row gap-[1.5rem] items-center'>
        <li className='font-normal text-[16px] text-[#145C9B] leading-[19px] cursor-pointer'>Home</li>
        <li className='font-normal text-[16px] text-white leading-[19px] cursor-pointer'>Explore</li>
        <li className='font-normal text-[16px] text-white leading-[19px] cursor-pointer'>Schedule</li>
        <li className='font-normal text-[16px] text-white leading-[19px] cursor-pointer'>About us</li>
        <li className='font-normal text-[16px] text-white leading-[19px] cursor-pointer'>Contact</li>
      </ul>
      <div className='flex flex-row gap-[1rem] items-center'>
        <img src='/images/home/earth.svg' alt=''/>
        <div className='flex flex-row gap-[0.2rem] items-center'>
        <p className='font-medium text-[16px] text-white leading-[19px] cursor-pointer'>ENG</p>
        <img src='/images/home/caret.svg' alt=''/>
        </div>
      </div>
    </div>
  )
}

export default navbar

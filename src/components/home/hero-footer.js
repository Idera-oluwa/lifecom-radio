import React from 'react'

const heroFooter = () => {
  return (
    <div className='bg-[#081A27] flex flex-row justify-center mt-[-10rem] py-[1.5rem] gap-[10%]'>
      <div className='flex flex-row items-center gap-[0.5rem]'>
        <img src='/images/home/one.svg'/>
        <p className='font-semibold text-[16px] text-white leading-[19px]'>NO 1</p>
        <p className='font-medium text-[14px] text-[#CCC9DC] leading-[17px]'>SPIRITUAL RADIO</p>
      </div>
      <div className='flex flex-row items-center gap-[0.5rem]'>
        <img src='/images/home/headset.svg'/>
        <p className='font-semibold text-[16px] text-white leading-[19px]'>1000K+</p>
        <p className='font-medium text-[14px] text-[#CCC9DC] leading-[17px]'>LISTENERS</p>
      </div>
      <div className='flex flex-row items-center gap-[0.5rem]'>
        <img src='/images/home/earth.svg'/>
        <p className='font-medium text-[14px] text-[#CCC9DC] leading-[17px]'>ANYWHERE IN THE WORLD</p>
      </div>
    </div>
  )
}

export default heroFooter

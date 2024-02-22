import React from 'react'

const hero = () => {
  return (
    <div className='w-[90vw] mx-auto py-[1rem] flex justify-between min-h-screen mt-[0rem]'>
      <div className='w-[40%] mt-[6rem]'>
       <p className='font-normal text-[20px] leading-[24px] text-white'>Transforming Lives Through</p>
       <h1 className='font-bold text-[48px] leading-[58px] text-white mt-[1rem]'>Sound and Spirit</h1>
       <p className='font-normal text-[16px] leading-[19.36px] text-[#CCC9DC] mt-[1rem]'>Discover a world of inspiration and connection at LifeCom Radio, where the power of music and spoken word converges to uplift your spirit and deepen your faith journey.</p>
       <div className='bg-[#324A5F] w-[167px] h-[40px] rounded-[4px] flex flex-row justify-center items-center mt-[1.5rem] cursor-pointer gap-[0.5rem]'>
        <p className='font-medium text-[15px] text-white leading-[18px]'>Start Listening</p>
        <img src='/images/home/play.svg' alt=''/>
        </div>
      </div>
      <img src='/images/home/hero-image.svg' alt='' className='w-[60%]'/>
    </div>
  )
}

export default hero

import React from 'react'

const Donations = () => {
  return (
    <div className='mt-[5rem] lg:mt-[13rem] w-[90%] mx-auto bg-gradient-to-b  from-[#03447D40] to-[#1EAAB266]  h-[353px] pt-[2px]'>
        <div className='w-[calc(100%-4px)] bg-[#0C1821] h-[calc(100%-2px)] mx-auto relative flex flex-row items-center'>
         <img src='/images/getintouch/donations-elipse.png' alt='' className='absolute top-0 right-0'/>
         <div className='flex flex-col ml-[8%]'>
           <p className='font-normal text-[40px] text-white leading-[48.41px] w-[466px]'>Want to support us with donations?</p>
           <p className='font-normal text-[14px] text-[#CCC9DC] leading-[16.94px] w-[527px] mt-[1rem]'>Do you like what you hear on lifecom radio and would like to contribute in form of donations? </p>
           <div className='bg-[#002545] w-[156px] h-[49px] rounded-[4px] mt-[1rem] text-white flex justify-center items-center text-[16px] font-medium cursor-pointer'>Donate</div>
         </div>
         <img src='/images/getintouch/payment-logos.png' alt='' className='ml-[7rem]'/>
        </div>
    </div>
  )
}

export default Donations
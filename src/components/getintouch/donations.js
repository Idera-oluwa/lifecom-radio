import React from 'react'
import Link from 'next/link'

const Donations = () => {
  return (
    <div className='mt-[5rem] lg:mt-[13rem] md:w-[90%] md:mx-auto md:bg-gradient-to-b bg-[#0C1821] md:from-[#03447D40] md:to-[#1EAAB266]  h-[353px] pt-[2px]'>
        <div className='w-[calc(100%-4px)]  bg-[#0C1821] h-[calc(100%-2px)] mx-auto relative flex flex-row items-center'>
         <img src='/images/getintouch/donations-elipse.png' alt='' className='hidden md:block absolute top-0 right-0'/>
         <div className='flex flex-col md:ml-[8%] w-full'>
           <p className='font-normal text-[20px] md:text-[40px] text-white leading-[24.2px] md:leading-[48.41px] text-center md:text-left mx-auto md:ml-0 w-[240px] md:w-[466px]'>Want to support us with donations?</p>
           <p className='font-normal text-[10px] md:text-[14px] text-[#CCC9DC] leading-[16.94px] w-[90%] md:w-[527px] mt-[1rem] text-center md:text-left mx-auto md:ml-0'>Do you like what you hear on lifecom radio and would like to contribute in form of donations? </p>
           <div className='md:hidden md:bg-logo-bg md:bg-cover md:bg-no-repeat w-full h-[83px] flex flex-row justify-around items-center mt-[2rem] mb-[2rem]'>
             <img src='/images/donations/tide-logo.png' alt='' className='w-[68px] h-[68px]'/>
             <img src='/images/donations/paypal-icon.png' alt='' className='w-[117.4] h-[30px]'/>
             <img src='/images/donations/zenith-logo.png' alt='' className='w-[53px] h-[54px]'/>
           </div>
           <Link href="/donations"><div className='bg-[#002545] w-[156px] h-[49px] rounded-[4px] mt-[1rem] text-white flex justify-center items-center text-[16px] font-medium cursor-pointer mx-auto md:ml-0'>Donate</div></Link>
         </div>
         <img src='/images/getintouch/payment-logos.png' alt='' className='mr-[16rem] hidden lg:block'/>
        </div>
    </div>
  )
}

export default Donations
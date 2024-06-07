import React from 'react'

const Header = () => {
  return (
    <div className="w-[90vw] mx-auto mt-[2rem] lg:mt-[6rem]">
      <div className="w-[90%] mx-auto mt-[0rem] lg:mt-[5rem] flex flex-row justify-between items-center lg:items-start">
        <div className="flex flex-row mt-[0.5rem] lg:gap-[1rem] items-center lg:items-start">
          <p className="font-normal text-[20px] leading-6 lg:text-[40px] lg:leading-[58px] text-white">
            Donations
          </p>
        </div>
        <div className="flex flex-row gap-[0.5rem]">
          <a
            href="https://www.facebook.com/Lifecomfm.co.uk/"
            target="_blank"
            rel="noreferrer">
            {" "}
            <img
              src="/images/home/facebook.svg"
              alt=""
              className="cursor-pointer lg:w-[30px] lg:h-[30px] w-[17px] h-[17px]"
            />{" "}
          </a>
          <a
            href="https://x.com/LifecomRadio"
            target="_blank"
            rel="noreferrer"
          ><img
            src="/images/home/twitter.svg"
            alt=""
            className="cursor-pointer  lg:w-[30px] lg:h-[30px] w-[17px] h-[17px]"
          /></a>
          <a
            href="https://www.instagram.com/lifecom_radioandtelevision/"
            target="_blank"
            rel="noreferrer">
            <img
              src="/images/home/instagram.svg"
              alt=""
              className="cursor-pointer  lg:w-[30px] lg:h-[30px] w-[17px] h-[17px]"
            />
          </a>
          <img
            src="/images/home/linkedin.svg"
            alt=""
            className="cursor-pointer  lg:w-[30px] lg:h-[30px] w-[17px] h-[17px]"
          />
        </div>
      </div>
      <div className="w-full bg-[#1B2A41] h-[2px] md:h-[5px] mt-4 lg:mt-[3rem] rounded-[10px]"></div>
      <div className="w-[90%] mx-auto mt-[3rem]">
        <p className='font-semibold text-[18px] text-white'>You can make contributions through any of the following methods</p>
        <p className='text-[#CCC9DC] text-[16px] font-normal mt-[0.5rem]'>Do you like what you hear on lifecom radio and would like to contribute in form of donations? </p>
         <div className='flex flex-col mx-auto w-auto justify-center items-center mt-[8rem]'>
         <img src='/images/donations/paypal-icon.png' alt='' className='w-[162px] h-[41.4px]'/>
         <div className='w-[336px] h-[69px] bg-gradient-to-r from-[#0F2E5F80] to-[#259480] mt-[1.5rem] pt-[2px]'>
          <div className='w-[calc(100%-4px)] bg-[#0C1821] h-[calc(100%-2px)] mx-auto flex justify-center items-center'>
            <p className='text-[16px] text-white font-medium'>info@lifecomradio.org.uk</p>
          </div>
         </div>
         </div>
         <div className='flex flex-row justify-between items-center'>
           <div className='flex flex-col w-[336px] items-center'>
            <img src='/images/donations/tide-logo.png' className='w-[105px] h-[105px]'/>
            <div>
                <div className='w-[336px] h-[229px] bg-gradient-to-b from-[#07347A66] to-[#0398A199] pt-[2px] mt-[1rem]'>
                <div className='w-[calc(100%-4px)] bg-[#0C1821] h-[calc(100%-2px)] mx-auto flex flex-col justify-center items-center'>
            <p className='text-[12px] text-[#CCC9DC] font-medium'>ACCOUNT NAME</p>
            <p className='text-[16px] text-white font-medium'>Lifecom Broadcasting Network</p>
            <p className='text-[12px] text-[#CCC9DC] font-medium mt-[1rem]'>NETWORK ACCOUNT</p>
            <p className='text-[16px] text-white font-medium'>22778020</p>
            <p className='text-[12px] text-[#CCC9DC] font-medium mt-[1rem]'>SORT CODE</p>
            <p className='text-[16px] text-white font-medium'>040605</p>
          </div>

                </div>
            </div>
           </div>
         </div>
        </div>
      </div>
  )
}

export default Header
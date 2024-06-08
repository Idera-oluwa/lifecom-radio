import React from 'react'
import initTranslations from '@/i18n';

const media = async ({locale}) => {
  const { t } = await initTranslations(locale,['about']);
  const { t:h } = await initTranslations(locale,['home']);
  return (
    <div className='relative'>
      <img src='/images/about/about-mic.png' alt='' className='hidden md:block absolute right-0 top-0 mt-[-11rem]'/>
      <div className=' w-[80vw] h-[367px] mx-auto bg-gradient-to-b from-[#114E70] to-[#1E859B] pt-[2px] mt-[4rem] md:mt-[14rem] rounded-[10px]'>
        <div className='w-[calc(100%-4px)] bg-[#0C1821] h-[calc(100%-2px)] mx-auto py-[2rem] px-[1rem] rounded-[10px]'>
        <div className='mx-auto flex flex-row justify-between items-center md:items-start mb-[2rem] md:mb-0'>
     <img src='/images/about/about-onair.png' className=' md:w-[528px] md:h-[297px] w-[179px] h-[101px] ml-[1rem]'/>
          <div className='md:mt-[2rem]'>
           <div className='border-[#062048] border-[2px] flex flex-row rounded-[10px] w-[304px] h-[89px] justify-center items-center gap-[3rem]'>
           <p className='text-[16px] font-medium text-white'>87.7FM Kent UK</p>
           <img src='/images/home/logo.svg' alt='' className='w-[57px] h-[57px]'/>
           </div>
            <div className='bg-socials-bg bg-cover mt-[1rem] w-[304px] h-[123px] flex flex-col justify-center items-center'>
            <p className='hidden md:block font-medium text-[14px] leading-[17px] text-[#CCC9DC]'>{t('Follow us on social media')}</p>
            <div className='hidden md:flex flex-row gap-[0.5rem] mt-[1rem]'>
            <a
            href="https://www.facebook.com/Lifecomfm.co.uk/"
            target="_blank"
            rel="noreferrer"
          ><img src='/images/home/facebook.svg' alt=''/></a>
             <a
            href="https://x.com/LifecomRadio"
            target="_blank"
            rel="noreferrer"
          ><img src='/images/home/twitter.svg' alt=''/></a>
            <a
            href="https://www.instagram.com/lifecom_radioandtelevision/"
            target="_blank"
            rel="noreferrer"
          ><img src='/images/home/instagram.svg' alt=''/></a>
            <img src='/images/home/linkedin.svg' alt=''/>
            </div>
            </div>
           
          </div>
          <div className='mt-[2rem] hidden md:flex flex-col items-center mr-[1rem]'>
            <img src='/images/home/headset.svg' className='w-[133px] h-[133px]'/>
            <p className='font-semibold text-white text-[14px] mt-[0.5rem]'>{t('Over 100K')} </p>
            <p className='font-semibold text-[#CCC9DC] text-[16px] mt-[0.2rem]'>LISTENERS</p>
          </div>
        </div>
        </div>
      </div>
    </div>
   
  )
}

export default media
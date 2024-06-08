import React from 'react'
import initTranslations from '@/i18n';

const team = async ({locale}) => {
  const { t } = await initTranslations(locale,['about']);
  const { t:h } = await initTranslations(locale,['home']);
  return (
    <div className='w-[80vw] mx-auto flex flex-col justify-between mt-[5rem] md:mt-[15rem] mb-[-3rem]'>
     <div className='flex flex-col items-center'>
          <p className='text-white text-[12px] md:text-[40px] font-medium'>{t('Our Team')}</p>
        <p className='w-[90%] text-center font-normal text-white text-[10px] md:text-[16px] leading-[12.1px] md:leading-[22.3px] mt-[0.5rem] md:mt-[1.2rem]'>{t('Get to know the individuals dedicated to making LifeCom radio an uplifting and entertaining radio station.')}</p>
     </div>
     <div className='mt-[2.5rem] grid grid-cols-fluid w-[70vw] mx-auto justify-center'>
     <div className='bg-gradient-to-b from-[#152947] to-[#456CA7] w-[213px] h-[289px] rounded-[4px] pt-[2px] mt-[1.5rem] mx-auto'>
     <div className='w-[calc(100%-4px)] bg-[#0C1821] h-[calc(100%-2px)] mx-auto p-[1rem] flex flex-col justify-center items-center rounded-[4px]'>
      <div>
      <img src='/images/about/team1.png' className='w-[165px] h-[160px] mx-auto'/>
     <p className='text-white text-[14px] font-semibold text-left mt-[0.5rem]'>Andrew Lawrence</p>
     <p className='text-[#CCC9DC] text-[14px] font-semibold'>O.A.P</p> 
     <div className='flex flex-row items-center mt-[0.5rem] gap-[0.5rem]'>
       <img src='/images/about/Facebook.png' alt='' className='w-[7.8px] h-[14.58px]'/>
       <img src='/images/about/linkedin.png' alt='' className='w-[14.08px] h-[14.08px]'/>
       <img src='/images/about/twitter.png' alt='' className='w-[14px] h-[14px]'/>
     </div>
      </div>
      
     </div>
     </div>
     <div className='bg-gradient-to-b from-[#152947] to-[#456CA7] w-[213px] h-[289px] rounded-[4px] pt-[2px] mt-[1.5rem] mx-auto'>
     <div className='w-[calc(100%-4px)] bg-[#0C1821] h-[calc(100%-2px)] mx-auto p-[1rem] flex flex-col justify-center items-center rounded-[4px]'>
      <div>
      <img src='/images/about/team1.png' className='w-[165px] h-[160px] mx-auto'/>
     <p className='text-white text-[14px] font-semibold text-left mt-[0.5rem]'>Andrew Lawrence</p>
     <p className='text-[#CCC9DC] text-[14px] font-semibold'>O.A.P</p> 
     <div className='flex flex-row items-center mt-[0.5rem] gap-[0.5rem]'>
       <img src='/images/about/Facebook.png' alt='' className='w-[7.8px] h-[14.58px]'/>
       <img src='/images/about/linkedin.png' alt='' className='w-[14.08px] h-[14.08px]'/>
       <img src='/images/about/twitter.png' alt='' className='w-[14px] h-[14px]'/>
     </div>
      </div>
      
     </div>
     </div>
     <div className='bg-gradient-to-b from-[#152947] to-[#456CA7] w-[213px] h-[289px] rounded-[4px] pt-[2px] mt-[1.5rem] mx-auto'>
     <div className='w-[calc(100%-4px)] bg-[#0C1821] h-[calc(100%-2px)] mx-auto p-[1rem] flex flex-col justify-center items-center rounded-[4px]'>
      <div>
      <img src='/images/about/team1.png' className='w-[165px] h-[160px] mx-auto'/>
     <p className='text-white text-[14px] font-semibold text-left mt-[0.5rem]'>Andrew Lawrence</p>
     <p className='text-[#CCC9DC] text-[14px] font-semibold'>O.A.P</p> 
     <div className='flex flex-row items-center mt-[0.5rem] gap-[0.5rem]'>
       <img src='/images/about/Facebook.png' alt='' className='w-[7.8px] h-[14.58px]'/>
       <img src='/images/about/linkedin.png' alt='' className='w-[14.08px] h-[14.08px]'/>
       <img src='/images/about/twitter.png' alt='' className='w-[14px] h-[14px]'/>
     </div>
      </div>
      
     </div>
     </div>
     <div className='bg-gradient-to-b from-[#152947] to-[#456CA7] w-[213px] h-[289px] rounded-[4px] pt-[2px] mt-[1.5rem] mx-auto'>
     <div className='w-[calc(100%-4px)] bg-[#0C1821] h-[calc(100%-2px)] mx-auto p-[1rem] flex flex-col justify-center items-center rounded-[4px]'>
      <div>
      <img src='/images/about/team1.png' className='w-[165px] h-[160px] mx-auto'/>
     <p className='text-white text-[14px] font-semibold text-left mt-[0.5rem]'>Andrew Lawrence</p>
     <p className='text-[#CCC9DC] text-[14px] font-semibold'>O.A.P</p> 
     <div className='flex flex-row items-center mt-[0.5rem] gap-[0.5rem]'>
       <img src='/images/about/Facebook.png' alt='' className='w-[7.8px] h-[14.58px]'/>
       <img src='/images/about/linkedin.png' alt='' className='w-[14.08px] h-[14.08px]'/>
       <img src='/images/about/twitter.png' alt='' className='w-[14px] h-[14px]'/>
     </div>
      </div>
      
     </div>
     </div>
     <div className='bg-gradient-to-b from-[#36AE99] to-[#18718D70] w-[213px] h-[289px] rounded-[4px] pt-[2px] mt-[1.5rem] mx-auto'>
     <div className='w-[calc(100%-4px)] bg-[#0C1821] h-[calc(100%-2px)] mx-auto p-[1rem] flex flex-col justify-center items-center rounded-[4px]'>
      <div>
      <img src='/images/about/team1.png' className='w-[165px] h-[160px] mx-auto'/>
     <p className='text-white text-[14px] font-semibold text-left mt-[0.5rem]'>Andrew Lawrence</p>
     <p className='text-[#CCC9DC] text-[14px] font-semibold'>O.A.P</p> 
     <div className='flex flex-row items-center mt-[0.5rem] gap-[0.5rem]'>
       <img src='/images/about/Facebook.png' alt='' className='w-[7.8px] h-[14.58px]'/>
       <img src='/images/about/linkedin.png' alt='' className='w-[14.08px] h-[14.08px]'/>
       <img src='/images/about/twitter.png' alt='' className='w-[14px] h-[14px]'/>
     </div>
      </div>
      
     </div>
     </div>
     <div className='bg-gradient-to-b from-[#36AE99] to-[#18718D70] w-[213px] h-[289px] rounded-[4px] pt-[2px] mt-[1.5rem] mx-auto'>
     <div className='w-[calc(100%-4px)] bg-[#0C1821] h-[calc(100%-2px)] mx-auto p-[1rem] flex flex-col justify-center items-center rounded-[4px]'>
      <div>
      <img src='/images/about/team1.png' className='w-[165px] h-[160px] mx-auto'/>
     <p className='text-white text-[14px] font-semibold text-left mt-[0.5rem]'>Andrew Lawrence</p>
     <p className='text-[#CCC9DC] text-[14px] font-semibold'>O.A.P</p> 
     <div className='flex flex-row items-center mt-[0.5rem] gap-[0.5rem]'>
       <img src='/images/about/Facebook.png' alt='' className='w-[7.8px] h-[14.58px]'/>
       <img src='/images/about/linkedin.png' alt='' className='w-[14.08px] h-[14.08px]'/>
       <img src='/images/about/twitter.png' alt='' className='w-[14px] h-[14px]'/>
     </div>
      </div>
      
     </div>
     </div>
     <div className='bg-gradient-to-b from-[#36AE99] to-[#18718D70] w-[213px] h-[289px] rounded-[4px] pt-[2px] mt-[1.5rem] mx-auto'>
     <div className='w-[calc(100%-4px)] bg-[#0C1821] h-[calc(100%-2px)] mx-auto p-[1rem] flex flex-col justify-center items-center rounded-[4px]'>
      <div>
      <img src='/images/about/team1.png' className='w-[165px] h-[160px] mx-auto'/>
     <p className='text-white text-[14px] font-semibold text-left mt-[0.5rem]'>Andrew Lawrence</p>
     <p className='text-[#CCC9DC] text-[14px] font-semibold'>O.A.P</p> 
     <div className='flex flex-row items-center mt-[0.5rem] gap-[0.5rem]'>
       <img src='/images/about/Facebook.png' alt='' className='w-[7.8px] h-[14.58px]'/>
       <img src='/images/about/linkedin.png' alt='' className='w-[14.08px] h-[14.08px]'/>
       <img src='/images/about/twitter.png' alt='' className='w-[14px] h-[14px]'/>
     </div>
      </div>
      
     </div>
     </div>
     <div className='bg-gradient-to-b from-[#36AE99] to-[#18718D70] w-[213px] h-[289px] rounded-[4px] pt-[2px] mt-[1.5rem] mx-auto'>
     <div className='w-[calc(100%-4px)] bg-[#0C1821] h-[calc(100%-2px)] mx-auto p-[1rem] flex flex-col justify-center items-center rounded-[4px]'>
      <div>
      <img src='/images/about/team1.png' className='w-[165px] h-[160px] mx-auto'/>
     <p className='text-white text-[14px] font-semibold text-left mt-[0.5rem]'>Andrew Lawrence</p>
     <p className='text-[#CCC9DC] text-[14px] font-semibold'>O.A.P</p> 
     <div className='flex flex-row items-center mt-[0.5rem] gap-[0.5rem]'>
       <img src='/images/about/Facebook.png' alt='' className='w-[7.8px] h-[14.58px]'/>
       <img src='/images/about/linkedin.png' alt='' className='w-[14.08px] h-[14.08px]'/>
       <img src='/images/about/twitter.png' alt='' className='w-[14px] h-[14px]'/>
     </div>
      </div>
      
     </div>
     </div>
     </div>
     {/* <div className='flex flex-row gap-[1rem] mt-[2rem] md:mt-0'>
      <div className='w-[153px] md:bg-[#292E35] h-[208px] rounded-[4px]'>
        <img src='/images/about/team1.png' alt=''/>
       <div className='py-[0.5rem] flex flex-col items-center'>
       <p className='text-white text-[10px] md:text-[12px] font-semibold'>Andrew Lawrence</p>
        <p className='text-white text-[10px] md:text-[12px] font-normal'>{t('Presenter')}</p>
       </div>
      </div>
      <div className='w-[153px] md:bg-[#292E35] h-[208px] rounded-[4px]'>
        <img src='/images/about/team2.png' alt=''/>
       <div className='py-[0.5rem] flex flex-col items-center'>
       <p className='text-white text-[10px] md:text-[12px] font-semibold'>J. Smooth</p>
        <p className='text-white text-[10px] md:text-[12px] font-normal'>{t('Presenter')}</p>
       </div>
      </div>
      <div className='w-[153px] md:bg-[#292E35] h-[208px] rounded-[4px]'>
        <img src='/images/about/team3.png' alt=''/>
       <div className='py-[0.5rem] flex flex-col items-center'>
       <p className='text-white text-[10px] md:text-[12px] font-semibold'>Anita . A. A</p>
        <p className='text-white text-[10px] md:text-[12px] font-normal'>{t('Product Lead')}</p>
       </div>
      </div>
      <div className='w-[153px] md:bg-[#292E35] h-[208px] rounded-[4px] hidden md:block'>
        <img src='/images/about/team1.png' alt=''/>
       <div className='py-[0.5rem] flex flex-col items-center'>
       <p className='text-white text-[10px] md:text-[12px] font-semibold'>Timothy Luca</p>
        <p className='text-white text-[10px] md:text-[12px] font-normal'>{t('Engineer')}</p>
       </div>
      </div>
     </div> */}
    </div>
  )
}

export default team
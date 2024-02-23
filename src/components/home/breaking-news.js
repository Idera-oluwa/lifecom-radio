import React from 'react'

const breakingNews = () => {
  return (
    <div className='w-[90vw] mx-auto mt-[10rem] flex flex-row items-center'>
      <div className='w-[50%]'>
        <h1 className='font-bold text-[28px] leading-[34px] text-white'>Stay Informed, Stay Inspired</h1>
        <p className='font-normal text-[14px] text-white leading-[17px] w-[415px] mt-[2rem]'>At LifeCom Radio, we believe in providing more than just music and podcasts; we're dedicated to fostering a vibrant community of learning and growth. Our blog/news section serves as a hub for insightful articles, uplifting stories, and timely updates that enrich your faith journey and deepen your connection with our station.</p>
        <button className='bg-[#1B2A41] w-[116px] h-[37px] rounded-[4px] flex justify-center items-center font-medium text-[14px] text-white mt-[2rem]'>Learn More</button>
      </div>
      <img src='/images/home/breaking-news.svg' alt='' className='w-[50%]'/>
    </div>
  )
}

export default breakingNews

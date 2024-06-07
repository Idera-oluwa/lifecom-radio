import React from 'react'
import Header from '@/components/donations/header'
import Faq from '@/components/getintouch/faq'

const page = () => {
  return (
    <div className='pt-[3rem] md:pt-[7rem] mb-[3rem] md:mb-0'>
        <Header />
        <Faq />
    </div>
  )
}

export default page
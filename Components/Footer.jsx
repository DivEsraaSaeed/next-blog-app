import React from 'react'
import { assets } from '@/Assets/assets'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='flex justify-around flex-col gap-2 sm:gap-0 sm-flex-row bg-black py-5 items-center'>
        <Image src={assets.logo_light} width={120} alt=""/>
        <p className='text-white text-sm'>&copy; 2024 Latest Blogs. All rights reserved.</p>
        <div className='flex'>
                <Image src={assets.facebook_icon} width={40} alt="" className='mx-2'/>
                <Image src={assets.twitter_icon} width={40} alt="" className='mx-2'/>
                <Image src={assets.googleplus_icon} width={40} alt="" className='mx-2'/>
        </div>
      
    </div>
  )
}

export default Footer

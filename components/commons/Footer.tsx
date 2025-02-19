import React from 'react'
import { Sora } from 'next/font/google'


const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});
const Footer = () => {
  return (
    <div className='w-full border-y backdrop-blur-xl mt-7 absolute bottom-0  '>
        <div className='lg:max-w-5xl mx-auto py-4  lg:flex justify-center items-center '>
            <p className={`${sora.className} text-center dark:text-[#777777] text-[#758498] text-sm `}>© 2025 <span className='text-violet-400'>etaskify</span> developed by ervin arviandi</p>
        </div>
    </div>
  )
}

export default Footer
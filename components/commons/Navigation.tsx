
import React from 'react'
import { ModeToggle } from '@/components/mode-toggle'
import Link from 'next/link'
import { HiOutlineHome } from "react-icons/hi";
import { Flavors } from 'next/font/google';
import Popup from '@/components/organism/Popup';
const flavors = Flavors({
  variable: '--font-roboto',
  weight: '400',
  subsets: ['latin'],
})


const Headers = () => {  


  return (
    <div className='w-full border-b '>
        <div className='lg:max-w-6xl mx-auto p-5 flex justify-between'>
            <h1 className={`${flavors.className} text-2xl font-bold text-violet-400 font-roboto`}>eTaskify</h1>
            <div className='flex justify-between items-center gap-x-2 z-50'>
              <div className='pt-2.5'>
                <Popup />
              </div>
              <Link href={"/"}><HiOutlineHome size={20}/></Link>
              <div className='z-50'>
              <ModeToggle/>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Headers
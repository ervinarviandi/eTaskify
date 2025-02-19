"use client"
import React from 'react'
import Footer from '@/components/commons/Footer'
import Headers from '@/components/commons/Navigation'
import TodoList from '@/components/commons/Taskify'
import {motion} from "framer-motion"

const Page = () => {
  return (
    <>
      <motion.section  className='w-full relative ' initial={{ y: 250 }} animate={{ y: -10 }} transition={{ type: "spring" }}>
      <Headers />
         <div className='absolute right-0 top-0 h-32 w-32 rounded-full bg-violet-400 blur-3xl'>        
        </div>
         <div className='absolute left-0 bottom-0 h-32 w-32 rounded-full bg-pink-300 blur-3xl'>        
        </div>
        
        <TodoList/>
        <Footer/>
      </motion.section>
    </>
  )
}
export default Page
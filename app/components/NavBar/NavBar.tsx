import React from 'react'
import { Button } from "@/components/ui/button"
import SomeImage from '@/public/fake-filter-logo.jpg'

export default function NavBar() {
  return (
    <div className=' flex flex-wrap items-center justify-between bg-[#4DA8DA]'>
        <a href='#' className='flex items-center mx-32'>
            <img src = {SomeImage.src} width={220} height={280} className='mix-blend-multiply items-center'/>
        </a>
        
        <div className='text-white mx-32 text-3xl flex flex-initial space-x-11'>
            <a href='#' > אודות </a>
            <a href='#' > עזרה </a>
            <a href='#' > ארכיון</a>
            <a href='#' className='' > דף הבית </a>
        </div>
    </div>
  )
}
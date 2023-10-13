
import { Button } from '@/components/ui/button'
import { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

export const metadata: Metadata = {
	title: '404: Truth Not Found',
}

export default function NotFound() {

	return (
		<div dir='ltr' className='w-full xl:max-w-6xl h-[calc(100vh)] flex flex-col md:flex-row items-center justify-center text-foreground gap-1'>
			<div className='flex flex-col gap-2 items-center h-full justify-center md:h-fit md:items-start pl-4 pr-4 pt-5 xl:pl-0 xl:pt-0'>
				<h1 className='font-extrabold text-9xl'>404</h1>
				<h2 className='font-medium text-xl md:text-2xl text-center md:text-left'>Uh-oh! We lost track of the truth.</h2>
				<p className='font-normal text-lg md:text-xl text-center md:text-left mb-2'>It appears we've encountered a glitch in our truth-filtering system. But no worries, we'll have you back on the path to reality in no time.</p>
				<Link href={"/"}><Button className='text-base font-bold' size={'lg'} >Let's Get Back to Unmasking Lies</Button></Link>
			</div>
			<div className='flex flex-col gap-2 items-start w-full h-full bg-[url("/assets/404.jpg")] bg-cover -scale-x-100 bg-center'>
				
			</div>
		</div>
	)
}

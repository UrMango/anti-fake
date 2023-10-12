import React from 'react'
import { Button } from "@/components/ui/button"
import Image from 'next/image';
import Link from 'next/link'
import { Separator } from '@/components/ui/separator'

export default function NavBar() {
  return (
    <div dir='ltr' className="z-40 w-full flex flex-col items-center bg-background">
			<div className="w-full max-w-full xl:max-w-6xl flex max-xl:px-4 py-2 justify-between items-center">
				<div className="flex gap-4 left-0 items-center">
					<Link href={"/"}>
						<Image alt='' src={"/assets/logo.svg"} width={37} height={40}/>
					</Link>
					<div className='flex gap-2 items-center'>
						{/* <Button variant={"default"}>הוספת סרטון למאגר</Button> */}
						<Link href={"feed"}><Button variant={"outline"}>Videos Feed</Button></Link>
						<Button variant={"outline"}>Videos for Content Creators</Button>
						{/* <div className='relative w-fit h-fit'>
							<Button variant={"outline"} disabled className='flex flex-col gap-0 leading-none'><p>AI Info Verifi</p><p className='font-bold'>בקרוב...</p></Button>
						</div> */}
					</div>
				</div>
				<div className="flex items-center gap-1 right-0">
					<Button variant={"ghost"}>About</Button>
				</div>
			</div>
			<Separator />
		</div>
  )
}

import React from 'react'
import { Button } from "@/components/ui/button"
import SomeImage from '@/public/fake-filter-logo.jpg'
import Link from 'next/link'
import { Separator } from '@/components/ui/separator'

export default function NavBar() {
  return (
    <div className="z-40 w-full flex flex-col items-center bg-background">
			<div className="w-full max-w-full xl:max-w-[80rem] flex max-xl:px-4 py-2 justify-between items-center">
				<div className="flex gap-2 left-0 items-center">
					<Button variant={"default"}>הוספת סרטון למאגר</Button>
					<Button variant={"outline"}>פיד סרטונים</Button>
					<Button variant={"outline"}>סרטונים ליוצרי תוכן</Button>
					<div className='relative w-fit h-fit'>
						<Button variant={"outline"} disabled className='flex flex-col gap-0 leading-none'><p> אימות פייק ניוז בAI</p><p className='font-bold'>בקרוב...</p></Button>
					</div>
				</div>
				<div className="flex items-center gap-2 right-0">
					<Button variant={"ghost"}>אודות</Button>
				</div>
			</div>
			<Separator />
		</div>
  )
}

"use client"
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function Post({ isSupport } : { platform : string, link : string, isSupport : boolean }) {
	return (
		<Card className='h-72 w-56 flex flex-col items-center relative overflow-hidden' >
			<div className='py-4 px-4'>
				<h3 className='text-lg font-medium'>A Post</h3>
					{/* TODO: Get image from link / display platform link  */}
			</div>
			{
				isSupport ? 
				<div className='bg-primary w-full h-16 absolute bottom-0 flex items-center justify-center'>
					<p className='text-white font-bold text-lg'>הפוסט הזה צריך תמיכה!</p>
				</div> :
				<div className='bg-destructive w-full h-16 absolute bottom-0 flex items-center justify-center'>
					<p className='text-white font-bold text-lg'>הפוסט הזה דורש דיווח.</p>
				</div>
			}
		</Card>
	);
};
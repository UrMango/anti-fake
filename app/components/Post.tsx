"use client"
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const Post = ({ imageUrl, caption, username, userImage } : { imageUrl: string, caption: string, username?: string | null, userImage : string}) => {

	return (
		<Card className='h-72 w-56' >
			<h3>Hello</h3>
		</Card>
	);
};

export default Post;

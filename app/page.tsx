"use client"

import Image from 'next/image'
import PostsCarousel from './components/posts-carousel';
import { Button } from '@/components/ui/button';
import Post from '@/components/post';
import MainLogo from '@/public/assets/logo.svg'
import { useEffect, useState } from 'react';
import { getPosts } from './utils/posts';
import Link from 'next/link';
import PostSkeleton from '@/components/post-skeleton';

export default function Home() {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    (async () => { 
      setPosts((await getPosts(1, 10, 0, false)).posts);
    })();
  }, []);

  return (
    <div className="w-full xl:w-[80rem] min-h-[calc(100vh)] flex flex-col pt-14 items-center justify-center text-foreground gap-6">
      <div className="flex w-full items-center relative gap-0 md:gap-14 px-3 lg:px-0 justify-center">
        <div className=" flex flex-col h-full items-center justify-center gap-2"> 
          <div className='flex flex-col items-center justify-center'>
            <div className='flex flex-row w-fit items-center gap-2'>
              <h1 className="text-3xl xs:text-5xl lg:text-6xl font-extrabold text-center">Fake Filter</h1>
              <Image alt='' src={"/assets/logo.svg"} width={73} height={78}/>
            </div>
            <h2 className="text-2xl lg:text-4xl font-medium text-center">Spreading the truth on the web</h2>
          </div>
            <h3 className='hidden lg:block text-xl lg:w-2/3 text-center my-5' dir='ltr'>In such war, the State of Israel needs everyone's support on social media to help explain the Israeli situation to the world.</h3>
          <div dir='ltr' className='flex flex-col sm:flex-row gap-2 items-center'>
            <h3 className='font-bold'>Quick Look:</h3>
            {/* <Button variant={'default'}>הוספת סרטון למאגר</Button> */}
            <Link href={"/feed"}><Button variant={'secondary'}>Videos Feed</Button></Link>
            <Button variant={'secondary'}>Videos for Content Creators</Button>
          </div>
        </div>
      </div>
      <h1 dir='ltr' className='text-lg font-medium'>Leading posts right now:</h1>
      <PostsCarousel posts={
        posts.map((post, index) =>
          <Post key={index} link={post.link} isSupport={post.isSupport} platform={post.platform} />
        )
      } />
      
      {posts.length == 0 &&
        <PostsCarousel posts={
          [
            <PostSkeleton />,
            <PostSkeleton />,
            <PostSkeleton />,
            <PostSkeleton />,
            <PostSkeleton />,
            <PostSkeleton />,
            <PostSkeleton />,
            <PostSkeleton />,
            <PostSkeleton />,
            <PostSkeleton />
          ]
        } />
      }
    </div>
  )
}

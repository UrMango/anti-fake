"use client"
import Image from 'next/image'
import { Button } from '@/components/ui/button';
import Post from '@/components/post';
import PostRow from './components/posts-row';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { useState } from 'react';

export default function Home() {

  const [posts, setPosts] = useState<any[]>([
  
    [
      {link: 'https://vt.tiktok.com/ZSNYeNDvt/', isSupport: true, platform: 'tiktok'},
      {link: 'https://vt.tiktok.com/ZSNYeNDvt/', isSupport: true, platform: 'tiktok'},
      {link: 'https://vt.tiktok.com/ZSNYeNDvt/', isSupport: true, platform: 'tiktok'},
      {link: 'https://vt.tiktok.com/ZSNYeNDvt/', isSupport: true, platform: 'tiktok'}
    ],
    [
      {link: 'https://vt.tiktok.com/ZSNYeNDvt/', isSupport: true, platform: 'tiktok'},
      {link: 'https://vt.tiktok.com/ZSNYeNDvt/', isSupport: true, platform: 'tiktok'},
      {link: 'https://vt.tiktok.com/ZSNYeNDvt/', isSupport: true, platform: 'tiktok'},
      {link: 'https://vt.tiktok.com/ZSNYeNDvt/', isSupport: true, platform: 'tiktok'}
    ],
    [
      {link: 'https://vt.tiktok.com/ZSNYeNDvt/', isSupport: true, platform: 'tiktok'},
      {link: 'https://vt.tiktok.com/ZSNYeNDvt/', isSupport: true, platform: 'tiktok'},
      {link: 'https://vt.tiktok.com/ZSNYeNDvt/', isSupport: true, platform: 'tiktok'},
      {link: 'https://vt.tiktok.com/ZSNYeNDvt/', isSupport: true, platform: 'tiktok'}
    ],
    [
      {link: 'https://vt.tiktok.com/ZSNYeNDvt/', isSupport: true, platform: 'tiktok'},
      {link: 'https://vt.tiktok.com/ZSNYeNDvt/', isSupport: true, platform: 'tiktok'},
      {link: 'https://vt.tiktok.com/ZSNYeNDvt/', isSupport: true, platform: 'tiktok'},
      {link: 'https://vt.tiktok.com/ZSNYeNDvt/', isSupport: true, platform: 'tiktok'}
    ],
    [
      {link: 'https://vt.tiktok.com/ZSNYeNDvt/', isSupport: true, platform: 'tiktok'},
      {link: 'https://vt.tiktok.com/ZSNYeNDvt/', isSupport: true, platform: 'tiktok'},
      {link: 'https://vt.tiktok.com/ZSNYeNDvt/', isSupport: true, platform: 'tiktok'},
      {link: 'https://vt.tiktok.com/ZSNYeNDvt/', isSupport: true, platform: 'tiktok'}
    ],

  ])
  
  return (
    
    <div className="w-full xl:w-[80rem] min-h-full flex flex-col items-center text-foreground gap-6 pt-2">
     <Tabs defaultValue='postsReport' className='flex flex-col items-center justify-center gap-4'>
            <TabsList>
                <TabsTrigger value='postsReport' onClick={ () => alert("loading report...") }>Post Reports</TabsTrigger>
                <TabsTrigger value='postsSupport' onClick={ () => alert("loading support...") }>Post Support</TabsTrigger>
            </TabsList>     
            <TabsContent value='postsReport' className='flex flex-col gap-4'>

              {
               
                posts.map((postRow, index) => (
                  <PostRow posts={[
                    <Post key={1} link={postRow[0].link} isSupport={postRow[0].isSupport} platform={postRow[0].platform} />,
                    <Post key={1} link={postRow[1].link} isSupport={postRow[1].isSupport} platform={postRow[1].platform} />,
                    <Post key={1} link={postRow[2].link} isSupport={postRow[2].isSupport} platform={postRow[2].platform} />,
                    <Post key={1} link={postRow[3].link} isSupport={postRow[3].isSupport} platform={postRow[3].platform} />,
                  ]} />
                ))

                
              }  
            
            </TabsContent>
            <TabsContent value='postsSupport' className='flex flex-col gap-4'>
                            
              {
                
                posts.map((postRow, index) => (
                  <PostRow posts={[
                    <Post key={1} link={postRow[0].link} isSupport={postRow[0].isSupport} platform={postRow[0].platform} />,
                    <Post key={1} link={postRow[1].link} isSupport={postRow[1].isSupport} platform={postRow[1].platform} />,
                    <Post key={1} link={postRow[2].link} isSupport={postRow[2].isSupport} platform={postRow[2].platform} />,
                    <Post key={1} link={postRow[3].link} isSupport={postRow[3].isSupport} platform={postRow[3].platform} />,
                  ]} />
                ))

                
              }  
            </TabsContent>
        </Tabs>    
      
    </div>
  )
}

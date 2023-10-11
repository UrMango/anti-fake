"use client"
import Image from 'next/image'
import { Button } from '@/components/ui/button';
import Post from '@/components/post';
import PostRow from './components/posts-row';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { useEffect, useState } from 'react';
import axios from 'axios';
import PostSkeleton from '@/components/post-skeleton';
import { getPosts } from '../utils/posts';

export default function Feed() {

  const [posts, setPosts] = useState<any[]>([]);
  
  useEffect(() => {
    getPosts(1, setPosts);
  }, []);
  
  return (
    
    <div className="w-full xl:w-[80rem] min-h-full flex flex-col items-center text-foreground gap-6 pt-2">
      <Tabs defaultValue='postsSupport' className='flex flex-col items-center justify-center gap-4'>
        <TabsList>
            <TabsTrigger value='postsSupport' onClick={ () => {getPosts(1, setPosts); setPosts([])} }>Post Support</TabsTrigger>
            <TabsTrigger value='postsReport' onClick={ () => {getPosts(2, setPosts); setPosts([])} }>Post Reports</TabsTrigger>
        </TabsList>     
        <TabsContent value='postsReport' className='flex flex-col gap-4'>
          {
            posts.map((postRow, index) => (
              <PostRow key={index} posts={[
                <Post key={1} link={postRow[0].link} isSupport={postRow[0].isSupport} platform={postRow[0].platform} />,
                <Post key={1} link={postRow[1].link} isSupport={postRow[1].isSupport} platform={postRow[1].platform} />,
                <Post key={1} link={postRow[2].link} isSupport={postRow[2].isSupport} platform={postRow[2].platform} />,
                <Post key={1} link={postRow[3].link} isSupport={postRow[3].isSupport} platform={postRow[3].platform} />,
              ]} />
            ))
          } 

          {posts.length == 0 &&
            <>
              <PostRow  posts={[
                <PostSkeleton />,
                <PostSkeleton />,
                <PostSkeleton />,
                <PostSkeleton />,
              ]} />
              <PostRow  posts={[
                <PostSkeleton />,
                <PostSkeleton />,
                <PostSkeleton />,
                <PostSkeleton />,
              ]} />
              <PostRow  posts={[
                <PostSkeleton />,
                <PostSkeleton />,
                <PostSkeleton />,
                <PostSkeleton />,
              ]} />
              <PostRow  posts={[
                <PostSkeleton />,
                <PostSkeleton />,
                <PostSkeleton />,
                <PostSkeleton />,
              ]} />
            </>
          }

          <PostRow  posts={[
            <PostSkeleton />,
            <PostSkeleton />,
            <PostSkeleton />,
            <PostSkeleton />,
          ]} />
        </TabsContent>
        <TabsContent value='postsSupport' className='flex flex-col gap-4'>            
          {
            posts.map((postRow, index) => (
              <PostRow key={index} posts={[
                <Post key={1} link={postRow[0].link} isSupport={postRow[0].isSupport} platform={postRow[0].platform} />,
                <Post key={1} link={postRow[1].link} isSupport={postRow[1].isSupport} platform={postRow[1].platform} />,
                <Post key={1} link={postRow[2].link} isSupport={postRow[2].isSupport} platform={postRow[2].platform} />,
                <Post key={1} link={postRow[3].link} isSupport={postRow[3].isSupport} platform={postRow[3].platform} />,
              ]} />
            ))
          }  

          {posts.length == 0 &&
            <>
              <PostRow  posts={[
                <PostSkeleton />,
                <PostSkeleton />,
                <PostSkeleton />,
                <PostSkeleton />,
              ]} />
              <PostRow  posts={[
                <PostSkeleton />,
                <PostSkeleton />,
                <PostSkeleton />,
                <PostSkeleton />,
              ]} />
              <PostRow  posts={[
                <PostSkeleton />,
                <PostSkeleton />,
                <PostSkeleton />,
                <PostSkeleton />,
              ]} />
              <PostRow  posts={[
                <PostSkeleton />,
                <PostSkeleton />,
                <PostSkeleton />,
                <PostSkeleton />,
              ]} />
            </>
          }

          <PostRow  posts={[
            <PostSkeleton />,
            <PostSkeleton />,
            <PostSkeleton />,
            <PostSkeleton />,
            ]} />
        </TabsContent>
      </Tabs>
    </div>
  )
}

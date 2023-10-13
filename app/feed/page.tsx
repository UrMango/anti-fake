"use client"
import Image from 'next/image'
import { Button } from '@/components/ui/button';
import Post from '@/components/post';
import PostRow from './components/posts-row';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import PostSkeleton from '@/components/post-skeleton';
import { getPosts } from '../utils/posts';

export default function Feed() {
  const [posts, setPosts] = useState<any[]>([]);
  const [skip, setSkip] = useState<number>(0);
  const skipRef = useRef(0);
  const [loading, setLoading] = useState(false);
  const loadingRef = useRef(false);
  const [type, setType] = useState(1);
  const [isMore, setIsMore] = useState(true);
  
  const getPostsLoader = (async (_type : number, _skip : number, _limit : number = 20) => {
    setLoading(true);
    loadingRef.current = true;
    const res = await getPosts(_type, _limit, _skip);
    setIsMore(res.isMore);
    console.log(posts);
    console.log(res.posts);
    let newPosts2 = res.posts;
    if(_skip != 0)
      newPosts2 = posts.concat(res.posts);
    setPosts(newPosts2);
    setLoading(false);
    loadingRef.current = false;
  });

  useEffect(() => {
    getPostsLoader(type, skip);

    const scrollHandle = (e : any) => {
      const scrollHeight = e.target?.documentElement.scrollHeight;
      const currentHeight = e.target?.documentElement.scrollTop + window.innerHeight;
      if(currentHeight >= scrollHeight && loadingRef.current == false && isMore) {
        skipRef.current =  skipRef.current + 20;
        setSkip(skipRef.current);
        console.log(skipRef.current);
        loadingRef.current = true;
      }
    }

    const listener = window.addEventListener("scroll", scrollHandle);

    return () => window.removeEventListener("scrool", () => listener);
    
  }, []);

  useEffect(() => {
    getPostsLoader(type, skipRef.current);
  }, [skip]);
  
  return (
    
    <div className="w-full xl:w-[80rem] min-h-full flex flex-col items-center text-foreground gap-6 pt-2 pb-2">
      <Tabs defaultValue='postsSupport' className='flex flex-col items-center justify-center'>
        <TabsList>
            <TabsTrigger value='postsSupport' onClick={ () => {getPostsLoader(1, 0); setPosts([]); setType(1);} }>Post Support</TabsTrigger>
            <TabsTrigger value='postsReport' onClick={ () => {getPostsLoader(2, 0); setPosts([]); setType(2);} }>Post Reports</TabsTrigger>
        </TabsList>     
        <TabsContent value='postsReport' className='flex flex-col mt-4'>
          {
            posts.map((postRow : any[], index) => (
              <PostRow key={index} posts={[
                <Post key={1} link={postRow[0].link} isSupport={postRow[0].isSupport} platform={postRow[0].platform} />,
                postRow.length > 1 ? <Post key={1} link={postRow[1].link} isSupport={postRow[1].isSupport} platform={postRow[1].platform} /> : <PostSkeleton />,
                postRow.length > 2 ? <Post key={1} link={postRow[2].link} isSupport={postRow[2].isSupport} platform={postRow[2].platform} /> : <PostSkeleton />,
                postRow.length > 3 ? <Post key={1} link={postRow[3].link} isSupport={postRow[3].isSupport} platform={postRow[3].platform} /> : <PostSkeleton />,
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

          {
            isMore && 
            <PostRow  posts={[
              <PostSkeleton />,
              <PostSkeleton />,
              <div className='hidden lg-block'>
                <PostSkeleton />,
                <PostSkeleton />,
              </div>
            ]} />
          }
        </TabsContent>
        <TabsContent value='postsSupport' className='flex flex-col mt-0'>            
          {
            posts.map((postRow, index) => (
              <PostRow key={index} posts={[
                <Post key={1} link={postRow[0].link} isSupport={postRow[0].isSupport} platform={postRow[0].platform} />,
                postRow.length > 1 ? <Post key={1} link={postRow[1].link} isSupport={postRow[1].isSupport} platform={postRow[1].platform} /> : isMore && <PostSkeleton />,
                postRow.length > 2 ? <Post key={1} link={postRow[2].link} isSupport={postRow[2].isSupport} platform={postRow[2].platform} /> : isMore && <PostSkeleton />,
                postRow.length > 3 ? <Post key={1} link={postRow[3].link} isSupport={postRow[3].isSupport} platform={postRow[3].platform} /> : isMore && <PostSkeleton />,
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
          
          {
            isMore && 
            <PostRow posts={[
              <PostSkeleton />,
              <PostSkeleton />,
              <div className='hidden lg-block'>
                <PostSkeleton />,
                <PostSkeleton />,
              </div>
            ]} />
          }
        </TabsContent>
      </Tabs>
    </div>
  )
}

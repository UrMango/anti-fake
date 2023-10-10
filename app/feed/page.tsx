import Image from 'next/image'
import { Button } from '@/components/ui/button';
import Post from '@/components/post';
import PostBoard from './components/posts-board';

export default function Home() {
  
  return (
    <div className="w-full xl:w-[80rem] min-h-full flex flex-col items-center text-foreground gap-6">
      {/* // TODO: Add Data Table view and posts view */}
      <PostBoard posts={[
        <Post key={1} link=''  isSupport platform='' />,
        <Post key={1} link=''  isSupport platform='' />,
        <Post key={1} link=''  isSupport platform='' />,
        <Post key={1} link=''  isSupport platform='' />,
      ]}  />
    </div>
  )
}

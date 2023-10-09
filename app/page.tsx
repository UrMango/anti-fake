import Image from 'next/image'
import Post from './components/Post'

export default function Home() {
  return (
    <div className='w-full flex items-center'>
      <Post caption='Helo' imageUrl='' userImage='' />
    </div>
  )
}

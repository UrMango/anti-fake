import Image from 'next/image'
import PostsCarousel from './components/posts-carousel';
import { Button } from '@/components/ui/button';
import Post from '@/components/post';

export default function Home() {
  
  return (
    <div className="w-full xl:w-[80rem] min-h-full flex flex-col items-center text-foreground gap-6">
      <div className="flex w-full pt-[18rem] lg:pt-36 relative items-end gap-0 md:gap-14 justify-start px-3 lg:px-0 lg:justify-center">
        <div className=" flex flex-col h-full items-center justify-center gap-2"> 
          <div className='flex flex-col items-center justify-center'>
            <div className='flex flex-row w-fit items-center gap-2'>
              <h1 className="text-5xl lg:text-6xl font-extrabold">Fake Filter</h1>
              <Image alt='' src={"/assets/logo.svg"} width={73} height={78}/>
            </div>
            <h2 className="text-2xl lg:text-4xl font-medium">Spreading the truth in the web</h2>
          </div>
          <h3 className='text-xl w-2/3 text-center text-'>בתקופת מלחמה כזו, מדינת ישראל צריכה את התמיכה של כולם ברשתות החברתיות כדי לעזור בהסברה העולמית למצב הישראלי.</h3>
          <div className='flex flex-row gap-2 items-center'>
            <h3 className='font-bold'>מעבר מהיר:</h3>
            <Button variant={'default'}>הוספת סרטון למאגר</Button>
            <Button variant={'secondary'}>פיד הסרטונים</Button>
            <Button variant={'secondary'}>סרטונים ליוצרי תוכן</Button>
          </div>
        </div>
      </div>
      <h1 className='text-lg font-medium'>פוסטים מובילים לתמיכה:</h1>
      <PostsCarousel posts={[
        <Post key={1} link='https://vt.tiktok.com/ZSNYeNDvt/'  isSupport platform='' />,
        // <Post key={2} link='' isSupport={false}  platform='' />,
        // <Post key={3} link='' isSupport platform='' />,
        // <Post key={4} link='' isSupport platform='' />,
        // <Post key={5} link='' isSupport platform='' />,
        // <Post key={6} link='' isSupport platform='' />,
        // <Post key={7} link='' isSupport platform='' />,
        // <Post key={8} link='' isSupport platform='' />,
        // <Post key={9} link='' isSupport platform='' />,
        // <Post key={10} link='' isSupport platform='' />,
        // <Post key={11} link='' isSupport platform='' />,
        // <Post key={12} link='' isSupport platform='' />,
        // <Post key={13} link='' isSupport platform='' />,
        // <Post key={14} link='' isSupport platform='' />,
        // <Post key={15} link='' isSupport platform='' />,
      ]} />
    </div>
  )
}

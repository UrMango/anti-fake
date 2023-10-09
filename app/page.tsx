import Image from 'next/image'
import Post from './components/Post'
import NavBar from './components/NavBar/NavBar'

export default function Home() {
  
  return (
    
    <div>
      <NavBar />
      <div className='flex flex-auto justify-center'>
        <div className='flex flex-col text-center my-4'>
          <h1 className='text-black text-4xl'>Fake-Filter</h1>
          <h2 className='text-black text-3xl'>מפיצים את האמת ברשת</h2>
          <div className=''>
            <p className='text-black text-2xl my-2'>בתקופת מלחמה כזו, מדינת ישראל צריכה את התמיכה של כולם ברשתות החברתיות כדי לעזור בהסברה העולמית למצב הישראלי.</p>
          </div>
        </div>
      </div>
    </div>
  )

  /*return (
    <div >
      <NavBar />
     <Post caption='Helo' imageUrl='' userImage='' />
      
    </div>
  )*/
}

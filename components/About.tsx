

import React from 'react'
import Image from 'next/image'
import one from '@/public/images/profile.jpeg'

const About = () => {
  return (
    <div className='about bg-wheat min-h-[80vh pt-[20vh] mt-5 mb-5  px-4 md:px-4 lg:px-16' id='about'>
    

      <div className='about-content pb-10  flex md:flex-row items-center justify-center   gap-4'>
        
        <div className='w-full lg:w-1/2'>
          <Image className='h-[80vh] rounded-full  w-[80vh]' src={one} alt="About Me Image" />
        </div>
        
        <div className='flex flex-col text-black justify-start w-full lg:w-1/2 space-y-6'>
        <h1 className=' inline-block text-center text-3xl  md:text-xl lg:text-xl  font-bold  '>About Me</h1>
          <p className='text-base  md:text-md leading-relaxed  '>
          Im a UI/UX Designer with a passion for creating visually
appealing and user-friendly websites. My design philosophy
centers around simplicity, functionality, and aesthetics. I 

believe good design should be both beautiful and practical,
enhancing the user experience. With a strong background in
web design, I leverage my skills in Figma and HTML/CSS to 

craft intuitive interfaces. I strive to create designs that delight
users, drive engagement, and deliver results.
          </p>
          
          <p className='  md:text-md leading-relaxed'>
          Whether youre looking to revamp your existing website or
launch a new digital product, Im here to help. My design
process is collaborative, user-centered, and focused on
delivering high-quality solutions. Lets work together to 

create a stunning online presence that exceeds your
expectations.
          </p>

          <button className='bg-orange self-center p-2 shadow-lg text-white font-bold rounded-md w-[16vh] active:scale-[.98] hover:scale-[1.01] ease-in-out transition-all'>Experience</button>
        </div>
        
      </div>
    </div>
  )
}

export default About

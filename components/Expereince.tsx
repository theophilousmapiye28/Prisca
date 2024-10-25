

import React from 'react'
import Image from 'next/image'
import anime from '../public/images/Anime girl l.png'

const Experience = () => {
  return (
    <div className='bg-wheat flex flex-col min-h-[150%] p-5' id='experience'>
      <h1 className='education text-center sm:text-left pl-0 sm:pl-5 lg:pl-[5vh] pb-3 pt-3 text-xl font-bold text-black'>
        Work Experience
      </h1>

      <div className='pt-[5vh] pb-5 flex flex-col-reverse lg:flex-row lg:justify-around items-center'>
        {/* Work Experience Section */}
        <div className='Workexperience bg-orange min-h-[90vh] w-full lg:w-[60%] rounded-3xl text-white relative p-[5vh] lg:p-[10vh]'>
          <div>
            <h3>2024-2025</h3>
          </div>
          <div className="absolute top-0 left-0 mt-[6vh] flex flex-col items-center pl-7 pt-[10vh] text-center justify-center border-gray-400">
            <div className='bg-white h-[3vh] w-[2px]'></div>
            <i className='flex items-center h-3 w-3 rounded-lg self-center border-white border-2'></i>
            <div className='bg-white h-[30vh] w-[2px]'></div>
            <i className='h-3 w-3 border-white rounded-lg self-center border-2'></i>
            <div className='bg-white h-[30vh] w-[2px]'></div>
            <i className='h-3 w-3 rounded-lg self-center border-white border-2'></i>
            <div className='bg-white h-[10vh] w-[2px]'></div>
          </div>

          <h3 className='font-chillax text-2xl'>UX/UI Design Student</h3>
          <h2 className='font-chillax p-1 text-lg'>UNCOMMON.ORG</h2>

          <p className='text-md text-base leading-relaxed p-2'>
            <i className='bg-white h-2 w-2 rounded-md inline-block'></i> UX/UI Design Student Uncommon.org Mastered user-centered design principles, wireframing, prototyping, and visual design.
          </p>
          <p className='text-md text-base leading-relaxed p-1'>
            <i className='bg-white h-2 w-2 rounded-md inline-block'></i> Conducted user research, analyzed website data, optimized user experiences.
          </p>
          <p className='text-md text-base leading-relaxed p-1'>
            <i className='bg-white h-2 w-2 rounded-md inline-block'></i> Created intuitive and engaging design solutions for various projects.
          </p>
          <p className='text-md text-base leading-relaxed p-1'>
            <i className='bg-white h-2 w-2 rounded-md inline-block'></i> Developed expertise in design tools like Figma.
          </p>

          <h3 className='pt-2 pb-2 text-xl font-semibold'>YOUTH CODING AT UNCOMMON.ORG</h3>
          <p className='text-md text-base leading-relaxed p-1'>
            <i className='bg-white h-2 w-2 rounded-md inline-block'></i> Empowered young minds through coding education.
          </p>
          <p className='text-md text-base leading-relaxed p-1'>
            <i className='bg-white h-2 w-2 rounded-md inline-block'></i> Guided students in creating interactive games and projects.
          </p>
          <p className='text-md text-base leading-relaxed p-1'>
            <i className='bg-white h-2 w-2 rounded-md inline-block'></i> Developed problem-solving skills and logical thinking.
          </p>

          <h3 className='text-xl font-semibold'>Education</h3>
          <p className='text-md text-base leading-relaxed p-1'>
            <i className='bg-white h-2 w-2 rounded-md inline-block'></i> UX/UI Design
          </p>
          <p className='text-md text-base leading-relaxed p-1'>
            <i className='bg-white h-2 w-2 rounded-md inline-block'></i> 2024
          </p>
          <p className='text-md text-base leading-relaxed p-1'>
            <i className='bg-white h-2 w-2 rounded-md inline-block'></i> Foundations of User Experience (UX) Design
          </p>
        </div>

        {/* Image Section */}
        <div className='mb-10 lg:mb-0'>
          <Image className='w-full h-auto max-w-[40vh] lg:max-w-none' src={anime} alt="Anime Girl" />
        </div>
      </div>
    </div>
  )
}

export default Experience


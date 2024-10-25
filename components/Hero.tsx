
// import React from 'react'
// import Image from 'next/image'
// import profile from '../public/images/profile.jpeg'

// const Hero = () => {
//   return (
//     <div className='bg-orange  rounded-br-full rounded-bl-1xl text-white min-h-[90vh] w-full pt-[20vh] flex items-center justify-center'>
//       <div className='flex flex-wrap '>
//         <div className='pr-[15vh] '>
//      <h3 className='text-4xl font-bold pb-5 '>Hello i’m </h3>
//       <h3  className='text-4xl font-bold '>Prisca Kagai</h3>
      
//       <div className="typewriter"> And lm a
//   <span className="dynamic-text role1">UX/UI Designer</span>
//   <span className="dynamic-text role2">Product Designer</span>
//   <span className="dynamic-text role3">Graphic Designer</span>
//   <span className="dynamic-text role4">Logo Designer</span>
// </div>


     
  
//       <p className='text-md pb-1'>A passionate UX/UI Designer dedicated to crafting intuitive and </p>
//         <p className='text-md pb-1'> engaging digital experiences. With a user-centered approach, I </p>  
//        <p className='text-md pb-1'> merge creativity and functionality to deliver stunning designs that </p> 
//          <p className='text-md pb-1'>  drive results. Lets collaborate to bring your vision to life and create </p> 
//            <p className='text-md pb-1'>meaningful connections with your audience.</p>
// <div className='flex  p-5'>
// <button className='bg-white p-2 mr-5 shadow-lg text-black font-bold rounded-md active:scale-[.98] hover:scale-[1.01] ease-in-out transition-all'>Hire me</button>
// <button className='bg-black p-2 shadow-lg text-white font-bold rounded-md active:scale-[.98] hover:scale-[1.01] ease-in-out transition-all'>Experience</button>
// </div>

//             </div>
// <div>
//   <Image className='h-[65vh] rounded-full w-[70vh]' src={profile} alt="" />
// </div>
// </div>  
// </div> 
   
//   )
// }

// export default Hero



import React from 'react'
import Image from 'next/image'
import profile from '../public/images/profile.jpeg'

const Hero = () => {
  return (
    <div className='bg-orange rounded-br-full rounded-bl-12xl text-white min-h-[90vh] w-full pt-[10vh] md:pt-[20vh] flex flex-col md:flex-row items-center justify-center'>
      <div className='flex flex-col md:pr-[15vh] p-5 md:p-0'>
        <h3 className='text-2xl md:text-4xl font-bold pb-3 md:pb-5'>Hello, I’m</h3>
        <h3 className='text-3xl md:text-4xl font-bold'>Prisca Kagai</h3>
        
        <div className="typewriter mt-2">
          And Im a
          <span className="dynamic-text role1">UX/UI Designer</span>
          <span className="dynamic-text role2">Product Designer</span>
          <span className="dynamic-text role3">Graphic Designer</span>
          <span className="dynamic-text role4">Logo Designer</span>
        </div>
        
        <p className='text-sm md:text-md pb-1 mt-2'>A passionate UX/UI Designer dedicated to crafting intuitive and </p>
        <p className='text-sm md:text-md pb-1 mt-2'> engaging digital experiences With a user-centered approach, I.</p>
        <p className='text-sm md:text-md pb-1 mt-2'>merge creativity and functionality to deliver stunning designs that.</p>
        <p className='text-sm md:text-md pb-1 mt-2'>  drive results Let’s collaborate to bring your vision to life and create.</p>
        <p className='text-sm md:text-md pb-1 mt-2'> meaningful connections with your audience.</p>
        
        <div className='flex flex-col md:flex-row gap-3 md:gap-5 p-5 md:p-0 mt-3'>
          <button className='bg-white p-2 shadow-lg text-black font-bold rounded-md active:scale-[.98] hover:scale-[1.01] ease-in-out transition-all'>Hire me</button>
          <button className='bg-black p-2 shadow-lg text-white font-bold rounded-md active:scale-[.98] hover:scale-[1.01] ease-in-out transition-all'>Experience</button>
        </div>
      </div>

      <div className='mt-8 md:mt-0'>
        <Image className='h-[40vh] md:h-[65vh] rounded-full w-[40vh] md:w-[70vh]' src={profile} alt="Profile" />
      </div>
    </div>
  )
}

export default Hero

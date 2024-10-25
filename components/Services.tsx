
// import React from 'react'
// import Image from 'next/image'
// import  on1 from '../public/service icons/cont.jpeg'
// import  on2 from '../public/service icons/proto.jpeg'
// import on3 from '../public/service icons/wire.jpeg'
// import on4  from '../public/service icons/figma.jpeg'
// import on5 from '../public/service icons/proto.jpeg'
// import on6 from '../public/service icons/cont.jpeg'

// const Services = () => {
//   return (
//     <div className='flex flex-col min-h-[100vh] bg-orange pt-1 p-5' id='services'>
   
//   <h1 className='pl-0 sm:pl-5 lg:pl-[5vh] text-white text-xl font-bold '>
//     My Services
//   </h1>
// <p  className=' pb-10 pt-10 text-white sm:pl-5 lg:pl-[5vh]'>UI/UX & graphic design specialist delivering user-centered solutions, from wireframing to visual design, ensuring seamless digital experiences <br />
// and captivating brand visuals.</p>

// <div className='flex flex-wrap items-center justify-center'>
// <div className='bg-white h-[30vh] mr-[20vh] flex flex-col p-2 mb-10 rounded-3xl rounded-tl-3xl w-[40vh]'>
//   <Image src={ on1} alt="" />
//   <h2 className='text-lg font-bold'>User Research </h2>
// <p>Uncovering user needs and behaviors</p>
// </div>

// <div className='bg-green  h-[30vh] mr-[20vh] flex flex-col p-2  mb-10  rounded-3xl w-[40vh]'>
//   <Image src={ on2} alt="" />
//   <h2 className='text-lg text-white font-bold'>Prototyping </h2>
// <p className='text-md text-white'> 

// Visualizing and refining ideas</p>
// </div>

// <div className='bg-white h-[30vh] mr-[20vh] flex flex-col p-2 mb-10 rounded-3xl w-[40vh]'>
//   <Image src={ on3} alt="" />
//   <h2 className='text-lg font-bold'>Wireframing</h2>
// <p className='text-md '>

// Crafting clear and concise layouts</p>
// </div>

// <div className='bg-green  h-[30vh] mr-[20vh] flex flex-col p-2   mb-10 rounded-3xl w-[40vh]'>
//   <Image src={ on4} alt="" />
//   <h2 className='text-lg text-white font-bold'>UX/UI Design </h2>
// <p className='text-md text-white'>

// Creating intuitive, seamless, and
// engaging user experiences.</p>
// </div>

// <div className='bg-white h-[30vh] mr-[20vh] flex flex-col p-2 mb-10 rounded-3xl w-[40vh]'>
//   <Image src={ on5} alt="" />
//   <h2 className='text-lg font-bold'>Usability Testing  </h2>
// <p className='text-md '>

// Ensuring seamless and engaging
// experiences</p>
// </div>

// <div className='bg-green h-[30vh] mr-[20vh] flex flex-col p-2 mb-10 rounded-3xl w-[40vh]'>
//   <Image src={ on6} alt="" />
//   <h2 className='text-lg text-white font-bold'>Typography</h2>
// <p className='text-md text-white'>

// Creating intuitive, seamless, and
// engaging user experiences.</p>
// </div>


// </div>





//     </div>
//   )
// }

// export default Services

import React from 'react'
import Image from 'next/image'
import on1 from '../public/service icons/cont.jpeg'
import on2 from '../public/service icons/proto.jpeg'
import on3 from '../public/service icons/wire.jpeg'
import on4 from '../public/service icons/figma.jpeg'
import on5 from '../public/service icons/proto.jpeg'
import on6 from '../public/service icons/cont.jpeg'

const Services = () => {
  return (
    <div className='flex flex-col min-h-[100vh] bg-orange pt-1 p-5' id='services'>
      <h1 className='pl-0 sm:pl-5 lg:pl-[5vh] text-white text-xl font-bold '>
        My Services
      </h1>
      <p className='pb-10 pt-10 text-white sm:pl-5 lg:pl-[5vh]'>
        UI/UX & graphic design specialist delivering user-centered solutions, from wireframing to visual design, ensuring seamless digital experiences <br />
        and captivating brand visuals.
      </p>

      <div className='flex flex-wrap items-center justify-center gap-10'>
        <div className='bg-white h-[30vh] flex flex-col p-2 mb-10 rounded-3xl w-full sm:w-[45%] lg:w-[30%]'>
          <Image src={on1} alt="User Research" />
          <h2 className='text-lg font-bold'>User Research </h2>
          <p>Uncovering user needs and behaviors</p>
        </div>

        <div className='bg-green h-[30vh] flex flex-col p-2 mb-10 rounded-3xl w-full sm:w-[45%] lg:w-[30%]'>
          <Image src={on2} alt="Prototyping" />
          <h2 className='text-lg text-white font-bold'>Prototyping </h2>
          <p className='text-md text-white'>
            Visualizing and refining ideas
          </p>
        </div>

        <div className='bg-white h-[30vh] flex flex-col p-2 mb-10 rounded-3xl w-full sm:w-[45%] lg:w-[30%]'>
          <Image src={on3} alt="Wireframing" />
          <h2 className='text-lg font-bold'>Wireframing</h2>
          <p className='text-md'>
            Crafting clear and concise layouts
          </p>
        </div>

        <div className='bg-green h-[30vh] flex flex-col p-2 mb-10 rounded-3xl w-full sm:w-[45%] lg:w-[30%]'>
          <Image src={on4} alt="UX/UI Design" />
          <h2 className='text-lg text-white font-bold'>UX/UI Design </h2>
          <p className='text-md text-white'>
            Creating intuitive, seamless, and engaging user experiences.
          </p>
        </div>

        <div className='bg-white h-[30vh] flex flex-col p-2 mb-10 rounded-3xl w-full sm:w-[45%] lg:w-[30%]'>
          <Image src={on5} alt="Usability Testing" />
          <h2 className='text-lg font-bold'>Usability Testing</h2>
          <p className='text-md'>
            Ensuring seamless and engaging experiences
          </p>
        </div>

        <div className='bg-green h-[30vh] flex flex-col p-2 mb-10 rounded-3xl w-full sm:w-[45%] lg:w-[30%]'>
          <Image src={on6} alt="Typography" />
          <h2 className='text-lg text-white font-bold'>Typography</h2>
          <p className='text-md text-white'>
            Creating intuitive, seamless, and engaging user experiences.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Services

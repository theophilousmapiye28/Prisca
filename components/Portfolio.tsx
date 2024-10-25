// import React from 'react'
// import Image from 'next/image'
// import pro1 from '../public/images/Mobie.jpeg'
// import pro2  from '../public/images/arete.jpeg'
// import pro3 from '../public/images/freefall.jpeg'
// import pro4 from  '../public/images/boots.jpeg'
// import pro5 from '../public/images/stylish.jpeg'
// import pro6 from '../public/images/induldge.jpeg'

// const Portfolio = () => {
//   return (
//     <div className='flex flex-col bg-orange items-center justify-center mt-10  min-h-[100vh]' id='portfolio'>
//         <div className='flex flex-col p-10  min-h-[30vh] min-width-[90vh]'>
     
//   <h1 className='text-xl text-wheat self-center text-center m-5'>My Projects</h1>



//       <div className='flex flex-row flex-wrap items-center justify-center'>
// <Image className='p-1 rounded-3xl active:scale-[.98] hover:scale-[1.01] ease-in-out transition-all h-[50vh] w-[50%] p-5' src={pro1} alt="" />
// <Image className='p-1 rounded-3xl active:scale-[.98] hover:scale-[1.01] ease-in-out transition-all h-[50vh] w-[50%] p-5' src={pro2} alt="" />
// <Image className='p-1 rounded-3xl active:scale-[.98] hover:scale-[1.01] ease-in-out transition-all h-[50vh] w-[50%] p-5' src={pro3} alt="" />
// <Image className='p-1 rounded-3xl active:scale-[.98] hover:scale-[1.01] ease-in-out transition-all h-[50vh] w-[50%] p-5' src={pro4} alt="" />
// <Image className='p-1 rounded-3xl active:scale-[.98] hover:scale-[1.01] ease-in-out transition-all h-[50vh] w-[50%] p-5' src={pro5} alt="" />
// <Image className='p-1 rounded-3xl active:scale-[.98] hover:scale-[1.01] ease-in-out transition-all h-[50vh] w-[50%]  p-5' src={pro6} alt="" />
//       </div>
//       </div>
//     </div>
//   )
// }

// export default Portfolio

import React from 'react'
import Image from 'next/image'
import pro1 from '../public/images/Mobie.jpeg'
import pro2 from '../public/images/arete.jpeg'
import pro3 from '../public/images/freefall.jpeg'
import pro4 from '../public/images/boots.jpeg'
import pro5 from '../public/images/stylish.jpeg'
import pro6 from '../public/images/induldge.jpeg'

const Portfolio = () => {
  return (
    <div className='flex flex-col bg-orange items-center justify-center mt-10 min-h-[100vh]' id='portfolio'>
      <div className='flex flex-col p-10 w-full'>
        <h1 className='text-xl text-wheat self-center text-center m-5'>My Projects</h1>

        <div className='flex flex-wrap items-center justify-center'>
          <Image
            className='p-1 rounded-3xl active:scale-[.98] hover:scale-[1.01] ease-in-out transition-all h-[30vh] sm:h-[40vh] md:h-[45vh] lg:h-[50vh] w-full sm:w-[48%] lg:w-[30%] p-5'
            src={pro1}
            alt=""
          />
          <Image
            className='p-1 rounded-3xl active:scale-[.98] hover:scale-[1.01] ease-in-out transition-all h-[30vh] sm:h-[40vh] md:h-[45vh] lg:h-[50vh] w-full sm:w-[48%] lg:w-[30%] p-5'
            src={pro2}
            alt=""
          />
          <Image
            className='p-1 rounded-3xl active:scale-[.98] hover:scale-[1.01] ease-in-out transition-all h-[30vh] sm:h-[40vh] md:h-[45vh] lg:h-[50vh] w-full sm:w-[48%] lg:w-[30%] p-5'
            src={pro3}
            alt=""
          />
          <Image
            className='p-1 rounded-3xl active:scale-[.98] hover:scale-[1.01] ease-in-out transition-all h-[30vh] sm:h-[40vh] md:h-[45vh] lg:h-[50vh] w-full sm:w-[48%] lg:w-[30%] p-5'
            src={pro4}
            alt=""
          />
          <Image
            className='p-1 rounded-3xl active:scale-[.98] hover:scale-[1.01] ease-in-out transition-all h-[30vh] sm:h-[40vh] md:h-[45vh] lg:h-[50vh] w-full sm:w-[48%] lg:w-[30%] p-5'
            src={pro5}
            alt=""
          />
          <Image
            className='p-1 rounded-3xl active:scale-[.98] hover:scale-[1.01] ease-in-out transition-all h-[30vh] sm:h-[40vh] md:h-[45vh] lg:h-[50vh] w-full sm:w-[48%] lg:w-[30%] p-5'
            src={pro6}
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default Portfolio

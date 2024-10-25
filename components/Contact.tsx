import React from 'react'
import Image from 'next/image'
import on1 from '../public/service icons/cont.jpeg'
const Contact = () => {
  return (
    <div className='bg-wheat flex mt-5 mb-5 flex-col min-height-[100%]'>
      <h1 className='text-xl text-black font-bold self-center text-center m-5'>Contact Me</h1>
<div className='flex flex-wrap items-center justify-center justify-evenly'>

<div className='continfo flex flex-col'>

  <div className='flex flex-col p-2'>
  <a className='bg-orange text-white p-3 fex items-center justify-center text-center w-[70px] h-[70px] rounded-full w-[20vh] active:scale-[.98] hover:scale-[1.01] ease-in-out transition-all' href=""><svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 16 16"><path fill="currentColor" d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608a17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42a18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/></svg></a>
<h2 className='text-lg font-bold'>Phone Number</h2>
<a className='p-1 text-sm ' href="">+263 717 047 017</a>
<a  className='p-1 text-sm ' href="">+263 778 561 750</a>
</div>

<div className='flex flex-col p-2'>
  <a className='bg-orange text-white p-3 fex items-center justify-center text-center w-[70px] h-[70px] rounded-full w-[20vh] active:scale-[.98] hover:scale-[1.01] ease-in-out transition-all ' href=""><svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 16 16"><path fill="currentColor" d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/></svg></a>
<h2 className='text-lg font-bold'>Email Address</h2>
<a  className='p-1 text-sm ' href="">kagaiprisca8@gmail.com</a>

</div>

<div className='flex flex-col p-2'>
  <a className='bg-orange text-white p-3 fex items-center justify-center text-center w-[70px] h-[70px] rounded-full w-[20vh] active:scale-[.98] hover:scale-[1.01] ease-in-out transition-all' href=""><svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 16 16"><g fill="currentColor"><path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/><path d="M8 8a2 2 0 1 1 0-4a2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6a3 3 0 0 0 0 6"/></g></svg></a>
<h2 className='text-lg font-bold'>Location</h2>
<a  className='p-1 text-sm ' href="">8621 Kuwadzana Phase 3, Harare Zimbabwe</a>

</div>

</div>


<div className=' min-h-[50vh] '>

<div className='form flex flex-col  '>
            <form  className='flex flex-col p-1 justify-start text-white bg-orange items-center justify-center  rounded-md'>
              <div className='flex'>
              <input
                className='h-[8vh] w-full md:w-[40vh] p-5 bg-orange border-wheat border text-white rounded-md m-2'
                type='text'
                name='name'
                placeholder= 'First Name'
                required
              />

                <input
                className='h-[8vh] w-full md:w-[40vh] p-5 bg-orange border-wheat border text-white rounded-md m-2'
                type='text'
                name='lastname'
                placeholder='Last Name'
                required
              />

              </div>
              <div  className='flex'  > 
              <input
                className='h-[8vh] w-full md:w-[40vh] p-5 bg-orange border-wheat border text-white rounded-md m-2'
                type='email'
                name='email'
                placeholder='Phone Number'
                required
              />

                <input
                className='h-[8vh] w-full md:w-[40vh] p-5 bg-orange border-wheat border text-white rounded-md m-2'
                type='email'
                name='email'
                placeholder='Enter Your Email'
                required
              />
              </div>
              <textarea
                className='h-[20vh] w-full md:w-[83vh] m-2 p-5 bg-orange border-wheat border text-white rounded-md m-2'
                name='message'
                placeholder='Your Message'
                required
              ></textarea>
              <button
                className='bg-white self-center text-black rounded-md p-2 mb-2 flex items-center text-xl font-bold justify-center w-[20vh] active:scale-[.98] hover:scale-[1.01] ease-in-out transition-all'
                type="submit"> Send
              
              </button>
            </form>

</div>















</div>
</div>
</div>
  )
}

export default Contact

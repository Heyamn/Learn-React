import React from 'react'
import myImage from '../assets/amanLogo.svg';

const Home = () => {
  const redirectToLink = (url) => {
    window.location.href = url;
  };


  return (
    <>
      <div className=' grid grid-cols-2 gap-1'>
        <div>
          <img className=' h-[500px] w-[350px] m-[100px] ml-[200px]' src={myImage} alt="My Logo"/>
        </div>
        <div className=' mt-[230px]'>
          <p className=' text-gray-600 font-serif text-sm'>Hello, I'm</p>
          <h1 className='text-black font-mono mt-6 text-xl font-semibold'>Aman Tailor</h1>
          <h1 className=' text-gray-700 font-mono mt-3 text-2xl font-bold'>Frontend Developer</h1>
          <div className='grid grid-cols-2 mt-10 gap-0'>
            <div className=' ml-[100px]'>
            <button class="bg-transparent hover:bg-gray-700 text-gray-700 font-semibold hover:text-white py-2 px-3 border border-gray-500 hover:border-transparent rounded-full font-serif"
            onClick={()=>redirectToLink('https://drive.google.com/file/d/1UstIKpJaKktDYijhmrCjXzCajgr_k5x1/view?usp=sharing')}>
                Download CV
            </button>
            </div>
            <div className=' mr-[150px]'>
            <button class="bg-transparent hover:bg-gray-700 text-gray-700 font-semibold hover:text-white py-2 px-3 border border-gray-500 hover:border-transparent rounded-full font-serif"
            onClick={()=>redirectToLink('https://github.com/heyamn')}>
                Aman's Github
            </button>
            </div>
          </div>
          <div className="flex gap-4 mt-4 ml-56">
            <i className="fab fa-github text-4xl cursor-pointer hover:text-gray-600 bg-gray-950 w-10 h-10 mt-1"
              onClick={() => redirectToLink('https://github.com/heyamn')}></i>
            <i className="fab fa-linkedin text-[2.75rem] cursor-pointer text-blue-700 hover:text-blue-500 ml-10"
              onClick={() => redirectToLink('https://www.linkedin.com/in/heyamn/')}></i>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
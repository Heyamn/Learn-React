import React from 'react'

const Home = () => {
  return (
    <>
      <div className=' grid grid-cols-2 gap-1'>
        <div>
          <img className=' h-[500px] w-[350px] m-[100px] ml-[200px]' src='src/assets/amanLogo.svg'/>
        </div>
        <div className=' mt-[230px]'>
          <p className=' text-gray-600 font-serif text-sm'>Hello, I'm</p>
          <h1 className='text-black font-mono mt-6 text-xl font-semibold'>Aman Tailor</h1>
          <h1 className=' text-gray-700 font-mono mt-3 text-2xl font-bold'>Frontend Developer</h1>
          <div className='grid grid-cols-2 mt-10 gap-0'>
            <div className=' ml-[100px]'>
            <button class="bg-transparent hover:bg-gray-700 text-gray-700 font-semibold hover:text-white py-2 px-3 border border-gray-500 hover:border-transparent rounded-full font-serif">
                Download CV
            </button>
            </div>
            <div className=' mr-[150px]'>
            <button class="bg-transparent hover:bg-gray-700 text-gray-700 font-semibold hover:text-white py-2 px-3 border border-gray-500 hover:border-transparent rounded-full font-serif">
                Aman's Github
            </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
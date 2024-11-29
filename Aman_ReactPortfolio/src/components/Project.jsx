import React from 'react'

const Project = () => {
  return (
    <>
        <div className=' text-gray-800 mt-20 text-4xl'>My Projects</div>
        
        <div className='main flex gap-8 ml-60 mt-20'>
            <div className=' text-black border rounded-md h-[360px] '>
                <div>
                    <img src='/src/assets/Booksy.png' />
                </div>
                <div>
                    Project one
                </div>
                <div className=' flex gap-10'>
                    <div>
                        Github
                    </div>
                    <div>
                        Live Demo
                    </div>
                </div>
            </div>
            <div className=' text-black border rounded-md h-[360px]'>
            <div>
                    <img src='/src/assets/ChatApp.png' />
                </div>
                <div>
                    Project one
                </div>
                <div className=' flex gap-10'>
                    <div>
                        Github
                    </div>
                    <div>
                        Live Demo
                    </div>
                </div>
            </div>
            <div className=' text-black border rounded-md h-[360px]'>
                <div>
                    <img src='/src/assets/Portfolio.png' />
                </div>
                <div>
                    Project one
                </div>
                <div className=' flex gap-10'>
                    <div>
                        Github
                    </div>
                    <div>
                        Live Demo
                    </div>
                </div>
            </div>
        </div>
    </>
    
  )
}

export default Project
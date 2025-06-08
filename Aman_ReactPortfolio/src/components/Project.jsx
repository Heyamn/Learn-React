import React from 'react'
import booksyImg from '../assets/Booksy.png';
import chatAppImg from '../assets/ChatApp.png';
import portfolioImg from '../assets/Portfolio.png';

const handleProjectOneGithubLinkClick = () => {
    window.location.href = 'https://github.com/Heyamn/Booksy';
};

const handleProjectOneLiveLinkClick = () => {
    window.location.href = 'https://booksy.onrender.com/';
};
const handleProjectTwoGithubLinkClick = () => {
    window.location.href = 'https://github.com/Heyamn/Learn-React/tree/main/Aman_ReactPortfolio';
};

const handleProjectTwoLiveLinkClick = () => {
    window.location.href = 'https://amantailor-portfolio.netlify.app/';
};
const handleProjectThreeGithubLinkClick = () => {
    window.location.href = 'https://github.com/Heyamn/Chat-App';
};

const handleProjectThreeLiveLinkClick = () => {
    window.location.href = 'https://chat-app-k3zf.onrender.com/';
};

const Project = () => {
  return (
    <>
    <div className=' pb-32'>
        <div className=' text-gray-800 mt-20 text-4xl'>My Projects</div>
        
        <div className='main flex gap-10  mt-20'>
            <div className=' text-black border rounded-md h-[360px] '>
                <div className=' w-96'>
                    <img  className=' w-72 ml-10 mt-8 border rounded-xl border-solid border-gray-950 ' src={booksyImg} />
                </div>
                <div className=' mt-4'>
                    <p className=' text-xl'>Project one</p>
                </div>
                <div className=' flex gap-10 mt-10 ml-20'>
                    <div>
                        <button onClick={handleProjectOneGithubLinkClick} className='bg-transparent hover:bg-gray-500 text-black-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded'>Github</button>
                    </div>
                    <div>
                        <button onClick={handleProjectOneLiveLinkClick} className='bg-transparent hover:bg-gray-500 text-black-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded'>Live Demo</button>
                    </div>
                </div>
            </div>
            <div className=' text-black border rounded-md h-[360px]'>
                <div className=' w-96'>
                    <img className='w-72 ml-12 mt-8 border rounded-xl border-solid border-gray-950' src={portfolioImg} />
                </div>
                <div className=' mt-4'>
                    <p className=' text-xl'>Project Two</p>
                </div>
                <div className=' flex gap-10 mt-10 ml-20'>
                    <div>
                        <button onClick={handleProjectTwoGithubLinkClick} className='bg-transparent hover:bg-gray-500 text-black-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded'>Github</button>
                    </div>
                    <div>
                        <button onClick={handleProjectTwoLiveLinkClick} className='bg-transparent hover:bg-gray-500 text-black-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded'>Live Demo</button>
                    </div>
                </div>
            </div>
            <div className=' text-black border rounded-md h-[360px]'>
            <div className=' w-96'>
                    <img className=' w-80 ml-8 mt-8 border rounded-xl border-solid border-gray-950' src={chatAppImg} />
                </div>
                <div className=' mt-4'>
                <p className=' text-xl'>Project Three</p>
                </div>
                <div className=' flex gap-10 mt-10 ml-20'>
                    <div>
                        <button onClick={handleProjectThreeGithubLinkClick} className='bg-transparent hover:bg-gray-500 text-black-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded'>Github</button>
                    </div>
                    <div>
                        <button onClick={handleProjectThreeLiveLinkClick} className='bg-transparent hover:bg-gray-500 text-black-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded'>Live Demo</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    
  )
}

export default Project
import React from 'react'


const About = () => {
  return (
    <div className=' pb-44'>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 p-6 md:p-12 bg-white">
      <div className="flex-shrink-0 mt-48 ml-2">
        <img
          src="/src/assets/aman.jpg" 
          alt="Profile"
          className="w-52 h-52 rounded-full border-4 border-gray-300 dark:border-gray-600 object-cover"
        />
      </div>
      <div className="text-center md:text-left max-w-2xl mt-24 ml-32">
        <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">About Me</h2>
        <p className=" text-black dark:text-gray-900 leading-relaxed">
          Hi, I’m <span className="font-semibold text-blue-600 dark:text-blue-400">Aman Tailor</span>, a passionate Front-End developer with experience in building responsive web apps using React.js. 
          <br /><br />
          I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.
          <br /><br />
          I love turning ideas into code and solving real-world problems through efficient and scalable solutions.
        </p>
      </div>
    </div>
    </div>
  );
};

export default About;


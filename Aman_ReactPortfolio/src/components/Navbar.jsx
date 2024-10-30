import React, { useState } from "react";
import { Link } from "react-router-dom"; 

const Navbar = () => {

  return (
    <nav className="bg-white-800 fixed w-full top-0 left-0 z-50 shadow-md">
      <div className="max-w-7xl ml-2 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex space-x-4 relative gap-8 ml-[750px]">
            <button className="text-black hover:text-gray-400 text-xl font-serif">About</button>
            <button className="text-black hover:text-gray-400 text-xl font-serif">Experience</button>
            <button className="text-black hover:text-gray-400 text-xl font-serif">Projects</button>
            <button className="text-black hover:text-gray-400 text-xl font-serif">Contact</button>
            {/* <button class="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-3 border border-gray-500 hover:border-transparent rounded-full">
                Github
            </button> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

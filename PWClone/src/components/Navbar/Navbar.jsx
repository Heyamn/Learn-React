import React, { useState } from "react";
import { Link } from "react-router-dom"; // Importing Link for navigation

const Navbar = ({ name }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState); 
  };
  const disableDropdown = () => {
    setIsDropdownOpen(false)
  }

  return (
    <nav className="bg-white-800 fixed w-full top-0 left-0 z-50 shadow-md">
      <div className="max-w-7xl ml-2 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <img className="logo-img mr-1 ng-star-inserted h-10 w-10" src="src/assets/pw.png" alt="logo"/>
            <Link to="/" className="ml-3 text-black text-xl font-semibold">Physics Wallah</Link>
          </div>

          <button className="flex items-center gap-3 ml-2 lg:ml-6 lg:gap-4 px-2 pl-3 py-1 ng-star-inserted text-black rounded shadow" style={{marginRight:500}}>
            <img alt="cohort" className="h-5 ng-star-inserted" src="https://d2bps9p1kiy4ka.cloudfront.net/5eb393ee95fab7468a79d189/51f11d33-2af4-422e-afde-de55f59a5d7b.png"></img>
            <span className=" text-sm font-normal">11th - IIT JEE</span>
          </button>

          <div className="flex items-center space-x-4 relative">
            <span className="text-black">Hi, {"Aman"}</span>
            <button
              onClick={toggleDropdown}
              className="flex items-center text-white focus:outline-none"
            >
              <img
                src="/src/assets/boy.png"
                alt="Profile"
                className="h-10 w-10 rounded-full shadow-xl"
              />
              <svg
                className="ml-2 h-4 w-4 fill-current text-black"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 12l-4-4h8l-4 4z" />
              </svg>
            </button>

            {isDropdownOpen && (
              <div className="origin-top-right absolute right-0 mt-36 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1" role="menu">
                  {/* Use Link to navigate to the Profile page */}
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={disableDropdown}
                  >
                    Profile
                  </Link>
                  <button
                    to="/logout"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

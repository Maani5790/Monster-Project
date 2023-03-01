import React, { useState } from "react";
import {
//   AiOutlineHome,
  AiOutlineVideoCamera,
  AiOutlineLayout,
  AiOutlineUser,
  AiOutlineMenu,
} from "react-icons/ai";
import{HiHome} from "react-icons/hi";
import{FiCamera} from "react-icons/fi";
import {FaUserCircle} from "react-icons/fa";
import {BsFillChatFill} from "react-icons/bs"

const NavbarUpper2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black w-full flex flex-wrap items-center justify-between px-2 py-3 bgbl mb-3 shadow-lg">
      <div className="container px-4 mx-auto flex  items-center justify-between">
      <a
          className="flex items-center text-xl uppercase font-bold leading-snug text-white hover:opacity-75 "
          href="#leftmenu"
        >
          <AiOutlineMenu onClick={toggleMenu} />
          <i className="text-lg leading-lg text-white opacity-75" />
        </a>
        <div className="w-full space-x-12 relative flex flex-row justify-between lg:w-auto px-4 lg:justify-start">
          <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white">
            HELLO FUTURE
          </a>
          <input
            type="text"
            className="h-7 my-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-bl-500 focus:border-gray-500 block w-72 p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
            placeholder="Search"
          ></input>
        </div>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:flex flex-col lg:flex-grow`}
        >
          <ul className="md:flex md:flex-col lg:flex-row list-none ml-auto">
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center text-xl uppercase font-bold leading-snug text-white hover:opacity-75"
                href="#home"
              >
                {/* <AiOutlineHome /> */}
                <HiHome />
                <i className="text-lg leading-lg text-white opacity-75" />
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center text-xl uppercase font-bold leading-snug text-white hover:opacity-75"
                href="#videos"
              >
                {/* <AiOutlineVideoCamera /> */}
                <FiCamera />
                <i className="text-lg leading-lg text-white opacity-75" />
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center text-xl uppercase font-bold leading-snug text-white hover:opacity-75"
                href="#pablo"
              >
                {/* <MdCabin /> */}
                <FaUserCircle />
                <i className="fab fa-instagram text-lg leading-lg text-white opacity-75" />
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center text-xl uppercase font-bold leading-snug text-white hover:opacity-75"
                href="#pablo"
              >
               {/* <AiOutlineUser /> */}
               <BsFillChatFill />
                <i className="fab fa-github text-lg leading-lg text-white opacity-75" />
               </a>
             </li>
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center text-xl uppercase font-bold leading-snug text-white hover:opacity-75"
                href="#onlineshop"
              >
                {/* <AiOutlineLayout /> */}
                <i className="text-lg leading-lg text-white opacity-75" />
              </a>
            </li>
          </ul>
        </div>
      
      </div>
    </nav>
  );
};

export default NavbarUpper2;
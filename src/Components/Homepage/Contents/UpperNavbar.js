/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {
  AiOutlineHome,
  AiOutlineVideoCamera,
  AiOutlineLayout,
  AiOutlineUser,
  AiOutlineMenu,
  AiOutlinePlusCircle,
  AiOutlineMessage,
  AiOutlineBell,
} from "react-icons/ai";
import { MdCabin } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";

const NavbarUpper = () => {
  return (
    <nav className="flex flex-wrap items-center justify-between px-2 py-3 bg-black mb-3 shadow-lg">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <a
          className="flex items-center text-xl uppercase font-bold leading-snug text-white hover:opacity-75"
          href="#leftmenu"
        >
          <AiOutlineMenu />
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
        <div className="lg:flex flex-grow">
          <ul className="flex flex-col lg:flex-row list-none ml-auto">
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center text-xl uppercase font-bold leading-snug text-white hover:opacity-75"
                href="#home"
              >
                <AiOutlineHome />
                <i className="text-lg leading-lg text-white opacity-75" />
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center text-xl uppercase font-bold leading-snug text-white hover:opacity-75"
                href="#videos"
              >
                <AiOutlineVideoCamera />
                <i className="text-lg leading-lg text-white opacity-75" />
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center text-xl uppercase font-bold leading-snug text-white hover:opacity-75"
                href="#pablo"
              >
                <MdCabin />
                <i className="fab fa-instagram text-lg leading-lg text-white opacity-75" />
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center text-xl uppercase font-bold leading-snug text-white hover:opacity-75"
                href="#pablo"
              >
                <AiOutlineUser />
                <i className="fab fa-github text-lg leading-lg text-white opacity-75" />
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center text-xl uppercase font-bold leading-snug text-white hover:opacity-75"
                href="#onlineshop"
              >
                <AiOutlineLayout />
                <i className="text-lg leading-lg text-white opacity-75" />
              </a>
            </li>
          </ul>
        </div>
        <div className="lg:flex flex-grow">
          <ul className="flex flex-col lg:flex-row list-none ml-auto">
            <li className="nav-item">
              <a
                className="px-3 py-2 space-x-1 flex items-center text-xl uppercase font-bold leading-snug text-white hover:opacity-75"
                href="#profile"
              >
                <AiOutlineUser className="bg-gray-400 rounded-full" />
                <i className="text-lg text-white opacity-75" />
                <h1 className="text-sm">My Name</h1>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center text-xl uppercase font-bold leading-snug text-white hover:opacity-75"
                href="#add"
              >
                <AiOutlinePlusCircle />
                <i className="text-lg leading-lg text-white opacity-75" />
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center text-xl uppercase font-bold leading-snug text-white hover:opacity-75"
                href="#messages"
              >
                <AiOutlineMessage />
                <i className="text-lg leading-lg text-white opacity-75" />
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center text-xl uppercase font-bold leading-snug text-white hover:opacity-75"
                href="#notifications"
              >
                <AiOutlineBell />
                <i className="text-lg leading-lg text-white opacity-75" />
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center text-xl uppercase font-bold leading-snug text-white hover:opacity-75"
                href="#downmenu"
              >
                <IoMdArrowDropdown />
                <i className="text-lg leading-lg text-white opacity-75" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarUpper;

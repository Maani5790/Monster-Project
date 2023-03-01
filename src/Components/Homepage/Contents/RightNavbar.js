import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
import { BiLogOut } from "react-icons/bi";
import {BsChatRightDots} from "react-icons/bs"
import {TfiEmail} from "react-icons/tfi"
import {FcAbout} from "react-icons/fc"
import { Link } from "react-router-dom";

const RightNav = () => {
  const menus = [
    // { name: "dashboard", link: "/Dashboard", icon: MdOutlineDashboard },
    { name: "User", link: "/User", icon: AiOutlineUser },
    { name: "Messages", link: "/Message", icon: FiMessageSquare },
    { name: "Analytic", link: "/Analytic", icon: TbReportAnalytics },
    { name: "FileManager", link: "/FileManager", icon: FiFolder },
    { name: "Chat", link: "/", icon: BsChatRightDots },
    { name: "Contact Us", link: "/", icon: TfiEmail},
    { name: "About Us", link: "/", icon: FcAbout },
    { name: "Logout", link: "/", icon: BiLogOut },
    
  
    
  ];
  const [open, setOpen] = useState(true);
  return (
    <section className="flex gap-6">

      <div
        className={`bg-gray-100 min-h-screen ${
          open ? "w-72" : "w-16"
        } duration-500 text-black-100 px-4 ml-auto`}
      >
        <div className="py-3 flex justify-start">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={` ${
                menu?.margin && "mt-5"
              } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-100 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute right-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:right-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    
    </section>
  );
};

export default RightNav;

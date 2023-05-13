import React, { useState } from "react";
import Button from "./Button";
import { FaBeer } from "react-icons/fa";

const Nav = () => {
   let [open, setOpen] = useState(false);

   let Links = [
      { name: "HOME", link: "/" },
      { name: "SERVICE", link: "/" },
      { name: "ABOUT", link: "/" },
      { name: "BLOG'S", link: "/" },
      { name: "CONTACT", link: "/" },
   ];
   return (
      <div className="shadow-md w-full fixed top-0 left-0">
         <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
            <div
               className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800"
            >
               <span className="text-3xl text-indigo-600 mr-1 pt-2"> </span>
               Designer
            </div>

            <div onClick={() => setOpen(!open)} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
               {open ? (
                  <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">
                     ✕
                  </label>
               ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
               )}
            </div>

            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? "top-20 " : "top-[-490px]"}`}>
               {Links.map((link) => (
                  <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
                     <a href={link.link} className="text-gray-800 hover:text-gray-400 duration-500">
                        {link.name}
                     </a>
                  </li>
               ))}
               <Button>Get Started</Button>
            </ul>
         </div>
      </div>
   );
};

export default Nav;

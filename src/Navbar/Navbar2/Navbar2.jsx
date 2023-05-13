import React, { useState } from "react";

const Navbar2 = () => {
   const [active, setActive] = useState(false);

   const showMenu = () => {
      setActive(!active);
   };

   console.log(active);
   return (
      <div className="fixed w-full text-black flex justify-between p-4 items-center">
         <div className="text-black">
            <h1>right side to left</h1>
         </div>

         <nav>
            <div className="absolute right-6 md:hidden top-6 scale-150">
               <svg onClick={showMenu} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
               </svg>
            </div>

            <ul className="hidden md:flex gap-8 p-6 uppercase bg-white/10"></ul>

            <ul className={active ? "flex-col flex items-center fixed inset-0 left-1/4 uppercase bg-black/40 backdrop-blur-lg gap-8 justify-center p-8 md:hidden" : "hidden"}>
               <label onClick={showMenu} className="btn text-2xl text-black mr-8 btn-sm btn-circle absolute right-2 top-2">
                  ✕
               </label>

               <li>
                  <a href="/">Home</a>
               </li>
               <li>
                  <a href="/">Testimonials</a>
               </li>
               <li>
                  <a href="/">Information</a>
               </li>
               <li>
                  <a href="/">Jobs</a>
               </li>
               <li>
                  <a href="/">About</a>
               </li>
               <li>
                  <a href="/">Contact</a>
               </li>
            </ul>
         </nav>
      </div>
   );
};

export default Navbar2;

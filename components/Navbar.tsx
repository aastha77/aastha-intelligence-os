"use client";

import { motion } from "framer-motion";
import { useState } from "react";


export default function Navbar(){

  const [open, setOpen] = useState(false);


  return (

    <motion.nav

      initial={{
        opacity:0,
        y:-30
      }}

      animate={{
        opacity:1,
        y:0
      }}

      transition={{
        duration:1
      }}


      className="
      fixed
      top-6
      left-1/2
      -translate-x-1/2
      z-50

      w-[90%]
      max-w-5xl

      rounded-2xl

      border
      border-white/10

      bg-white/5

      backdrop-blur-xl

      px-6
      py-4

      text-white
      "

    >


      <div className="
      flex
      items-center
      justify-between
      ">


        <h2 className="
        font-bold
        text-xl
        text-cyan-400
        ">

          AASTHA OS

        </h2>



        <button

          onClick={() => setOpen(!open)}

          className="
          md:hidden
          text-2xl
          "

        >

          ☰

        </button>



        <div className="
        hidden
        md:flex
        gap-8
        text-sm
        text-gray-300
        ">


          <a href="#home">
            Identity
          </a>


          <a href="#projects">
            Projects
          </a>


          <a href="#skills">
            Skills
          </a>


          <a href="#contact">
            Contact
          </a>


        </div>


      </div>



      {open && (

        <div

          className="
          md:hidden
          mt-5
          flex
          flex-col
          gap-5
          text-gray-300
          "

        >


          <a 
          href="#home"
          onClick={() => setOpen(false)}
          >
            Identity
          </a>



          <a 
          href="#projects"
          onClick={() => setOpen(false)}
          >
            Projects
          </a>



          <a 
          href="#skills"
          onClick={() => setOpen(false)}
          >
            Skills
          </a>



          <a 
          href="#contact"
          onClick={() => setOpen(false)}
          >
            Contact
          </a>



        </div>

      )}



    </motion.nav>

  );
}
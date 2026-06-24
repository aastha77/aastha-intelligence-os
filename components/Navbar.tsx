"use client";


import { motion } from "framer-motion";



const links = [

  {
    name:"Identity",
    href:"#home"
  },

  {
    name:"Projects",
    href:"#projects"
  },

  {
    name:"Skills",
    href:"#skills"
  },

  {
    name:"Contact",
    href:"#contact"
  }

];




export default function Navbar(){


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

top-5

left-1/2

-translate-x-1/2

z-50


w-[92%]

max-w-5xl


rounded-2xl


border

border-white/10


bg-white/5


backdrop-blur-xl


px-5

md:px-8


py-4


flex

items-center

justify-between


text-white

"

>



<h2 className="

font-bold

text-lg

md:text-xl

text-cyan-400

">

AASTHA OS

</h2>




{/* Desktop Menu */}


<div className="

hidden

md:flex

gap-8

text-sm

text-gray-300

">


{

links.map((link)=>(


<a

key={link.name}

href={link.href}


className="

hover:text-cyan-400

transition

duration-300

"

>

{link.name}


</a>


))

}



</div>




{/* Mobile Icon */}


<button

className="

md:hidden

text-cyan-400

text-2xl

"

>

☰

</button>




</motion.nav>


);


}
"use client";


import { motion } from "framer-motion";



export default function Footer(){


return (


<motion.footer


initial={{
opacity:0
}}


whileInView={{
opacity:1
}}


viewport={{
once:true
}}



className="

border-t

border-white/10

bg-[#030712]

text-white

px-8

py-10

"




>


<div className="

max-w-6xl

mx-auto

flex

flex-col

md:flex-row

justify-between

gap-6

"



>


<div>


<h3 className="

text-xl

font-bold

">

AASTHA OS

</h3>



<p className="

text-gray-400

mt-2

">

Full Stack Developer building intelligent web systems.

</p>


</div>





<div className="

text-sm

text-gray-400

"


>


<p className="text-green-400">

● System Online

</p>


<p className="mt-2">

Next.js | TypeScript | AI

</p>


<p className="mt-2">

© 2026 Aastha Pandey

</p>


</div>




</div>


</motion.footer>


);


}
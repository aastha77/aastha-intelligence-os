"use client";


import { motion } from "framer-motion";

import GlassCard from "./GlassCard";



export default function BootScreen(){


return (


<main className="

min-h-screen

bg-black

text-white

flex

items-center

justify-center

"



>


<div className="

text-center

"



>



<motion.p


initial={{
opacity:0
}}


animate={{
opacity:1
}}


transition={{

duration:1

}}



className="

text-cyan-400

text-sm

tracking-[0.5em]

mb-5

"

>

SYSTEM INITIALIZING


</motion.p>





<motion.h1


initial={{

opacity:0,

y:30

}}



animate={{

opacity:1,

y:0

}}



transition={{

duration:1

}}



className="

text-4xl

md:text-5xl

font-bold

"



>


BOOTING AASTHA OS...


</motion.h1>





<motion.p


initial={{

opacity:0

}}


animate={{

opacity:1

}}


transition={{

duration:1,

delay:0.5

}}


className="

mt-6

text-gray-400

text-xl

"

>


Intelligence Portfolio Platform


</motion.p>







<motion.div


initial={{

opacity:0,

scale:0.8

}}



animate={{

opacity:1,

scale:1

}}



transition={{

duration:0.8,

delay:0.8

}}



className="

mt-10

"


>



<GlassCard>


<p className="text-green-400">

✓ System Online

</p>



<p className="mt-4">

Identity: Full Stack Developer

</p>



<p>

Modules: 06

</p>



<p className="mt-4 text-cyan-400 text-sm">

✓ React Core Loaded

</p>


<p className="text-cyan-400 text-sm">

✓ Backend Systems Loaded

</p>


<p className="text-cyan-400 text-sm">

✓ AI Layer Loaded

</p>



</GlassCard>



</motion.div>





</div>



</main>


);


}
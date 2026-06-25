"use client";


import { motion } from "framer-motion";
import ThreeScene from "./ThreeScene";


export default function Hero(){


return (


<section


id="home"


className="
min-h-screen
bg-[#030712]
text-white

relative
overflow-hidden

flex
items-center
justify-center

px-5
md:px-8

"


>



<div className="

absolute

top-20

right-10

w-72

h-72

bg-cyan-400/20

blur-[120px]

rounded-full

pointer-events-none

">


</div>





<div className="

max-w-6xl

w-full


grid


grid-cols-1

md:grid-cols-2


gap-10


items-center

"

>




{/* LEFT SIDE */}



<motion.div


initial={{

opacity:0,

x:-50

}}



animate={{


opacity:1,

x:0


}}



transition={{


duration:1

}}



className="relative z-50"

>


<p className="

text-cyan-400

tracking-[0.4em]

text-sm

mb-6

">


FULL STACK DEVELOPER


</p>





<h1 className="

text-3xl

md:text-7xl

font-bold

leading-tight

">


Aastha Pandey


</h1>





<h2 className="
text-lg
md:text-2xl
text-gray-400
mt-5
max-w-xl
">


Building Intelligent Web Systems

with React, Node.js & AI


</h2>






<div className="

flex
flex-col
sm:flex-row
gap-5
mt-10

"

>




<a

href="#projects"


className="

relative

z-50

px-6

py-3

rounded-xl

bg-cyan-400

text-black

font-semibold

hover:scale-105

transition

"

>


Explore Projects


</a>






<a

href="/resume.pdf"

target="_blank"

rel="noopener noreferrer"


className="

relative

z-50

px-6

py-3

rounded-xl

border

border-white/20

hover:border-cyan-400

transition

"


>


Resume


</a>





</div>



</motion.div>









{/* RIGHT SIDE */}




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


duration:1


}}



className="


h-[260px]

md:h-[400px]


rounded-3xl


border

border-cyan-400/20


bg-white/5


backdrop-blur-xl


relative


"

>


<div className="

absolute

inset-0

pointer-events-none

">


<ThreeScene />


</div>



</motion.div>







</div>




</section>


);


}
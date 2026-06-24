"use client";


import { motion } from "framer-motion";



export default function Contact(){


return (


<motion.section


id="contact"


initial={{

opacity:0,

y:50

}}


whileInView={{

opacity:1,

y:0

}}


viewport={{

once:true

}}



className="

min-h-screen

bg-[#030712]

text-white

px-8

py-20

"



>



<h2 className="

text-4xl

font-bold

mb-10

">

CONTACT TERMINAL

</h2>




<div className="

border

border-white/10

bg-white/5

backdrop-blur-xl

rounded-2xl

p-8

max-w-3xl

"

>



<p className="

text-cyan-400

mb-5

">

aastha@os:~$ connect --with-aastha

</p>




<p className="

text-gray-300

mb-6

">

Let's build intelligent web systems together.

</p>


<div className="

flex

flex-wrap

gap-4

mt-6

">


<a

href="mailto:aasthapandey8830@gmail.com"

className="

px-5

py-2

rounded-xl

bg-cyan-400

text-black

font-semibold

hover:scale-105

transition

"

>

Email Me

</a>




<a

href="https://github.com/aastha77"

target="_blank"

rel="noopener noreferrer"

className="

px-5

py-2

rounded-xl

border

border-white/20

hover:border-cyan-400

transition

"

>

GitHub

</a>




<a

href="https://www.linkedin.com/in/aastha-pandey-401839275/"

target="_blank"

rel="noopener noreferrer"

className="

px-5

py-2

rounded-xl

border

border-white/20

hover:border-cyan-400

transition

"

>

LinkedIn

</a>



</div>



</div>


</motion.section>


);


}
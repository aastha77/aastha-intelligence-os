"use client";


import { motion } from "framer-motion";



type ProjectCardProps = {


  title:string;

  description:string;

  tech:string[];

  status:string;

  github?:string;

  category:string;

  features:string[];



};



export default function ProjectCard({


title,

description,

tech,

status,

github,

category,

features


}:ProjectCardProps){



return (


<motion.div


whileHover={{

y:-10,

scale:1.03

}}


transition={{

duration:0.3

}}



className="

border

border-white/10

bg-white/5

backdrop-blur-xl

rounded-2xl

p-6

hover:border-cyan-400/60

transition

"



>



<div className="

flex

justify-between

items-center

mb-5

">


<div>

<h3 className="
text-2xl
font-bold
text-white
">

{title}

</h3>


<p className="
text-cyan-400
text-sm
mt-2
">

{category}

</p>

</div>

<span className="

text-xs

px-3

py-1

rounded-full

bg-cyan-400/10

text-cyan-400

">


{status}


</span>



</div>




<p className="

text-gray-400

mb-6

">


{description}


</p>

<ul className="
text-gray-300
text-sm
mb-6
space-y-2
">

{
features.map((feature)=>(

<li key={feature}>

✓ {feature}

</li>

))

}

</ul>




<div className="

flex

flex-wrap

gap-2

mb-6

">



{

tech.map((item)=>(


<span

key={item}


className="

px-3

py-1

rounded-full

bg-black/40

text-sm

text-cyan-300

"


>


{item}


</span>


))


}


</div>





{

github && (

<a

href={github}

target="_blank"

rel="noopener noreferrer"


className="

inline-flex

items-center

gap-2

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

View GitHub ↗

</a>


)


}





</motion.div>


);


}
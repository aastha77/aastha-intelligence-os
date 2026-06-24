"use client";


import { motion } from "framer-motion";



const skills = [

{
name:"Frontend Engineering",

level:"90%",

tech:[

"React",

"Next.js",

"TypeScript",

"Tailwind CSS"

]

},



{
name:"Backend Systems",

level:"85%",

tech:[

"Node.js",

"Express",

"REST API",

"Authentication"

]

},



{
name:"Database Engineering",

level:"80%",

tech:[

"MongoDB",

"MySQL",

"Sequelize"

]

},



{
name:"AI / Machine Learning",

level:"70%",

tech:[

"Python",

"AI Concepts",

"Data Science",

"Machine Learning Basics"

]

}


];





export default function Skills(){


return (


<motion.section


id="skills"


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

mb-12

">

SKILL MATRIX

</h2>




<div className="

grid

md:grid-cols-2

gap-8

">



{

skills.map((skill)=>(



<div

key={skill.name}


className="

border

border-white/10

bg-white/5

backdrop-blur-xl

rounded-2xl

p-6

"


>



<div className="

flex

justify-between

mb-4

">


<h3 className="

text-xl

font-bold

">

{skill.name}

</h3>



<span className="

text-cyan-400

">

{skill.level}

</span>


</div>




<div className="

w-full

h-3

bg-black/40

rounded-full

overflow-hidden

">



<div

className="

h-full

bg-cyan-400

rounded-full

"


style={{

width:skill.level

}}


/>



</div>





<div className="

flex

flex-wrap

gap-2

mt-5

">


{

skill.tech.map((item)=>(


<span

key={item}


className="

px-3

py-1

rounded-full

bg-cyan-400/10

text-cyan-300

text-sm

"


>


{item}


</span>


))


}



</div>




</div>


))


}




</div>



</motion.section>


);


}
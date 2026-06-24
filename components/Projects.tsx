"use client";


import ProjectCard from "./ProjectCard";

import { motion } from "framer-motion";



const projects = [

  {
title:"EduTrack",

category:"Backend System",

description:
"Role-based student management system for managing students, courses, enrollments, attendance and grades.",


features:[

"JWT Authentication",

"Admin Faculty Student Roles",

"Course Management",

"Attendance Tracking",

"Grade Management"

],


tech:[

"Node.js",

"Express.js",

"MySQL",

"Sequelize",

"JWT"

],


status:"Completed",


github:
"https://github.com/aastha77/edutrack-backend"


},


  {
title:"TaskFlow",

category:"Project Management API",

description:
"Collaborative backend API for managing users, projects and tasks with secure role-based access.",


features:[

"JWT Authentication",

"Role Based Authorization",

"Project Management",

"Task Assignment",

"Task Status Updates"

],


tech:[

"Node.js",

"Express.js",

"MySQL",

"Sequelize",

"JWT"

],


status:"Completed",


github:
"https://github.com/aastha77/taskflow-backend"


},

  {
title:"VIGILANT-AI",

category:"AI Research Project",

description:
"AI intelligence platform currently under active development.",


features:[

"AI Driven Analysis",

"Modern Next.js Architecture",

"Experimental Intelligence Workflows"

],


tech:[

"Next.js",

"TypeScript",

"AI"

],


status:"In Development",


github:
"https://github.com/aastha77/vigilant-ai"


},

{
title:"Simple Blogging Platform",

category:"Full Stack API",

description:
"Secure blogging platform with authentication and complete CRUD operations.",


features:[

"JWT Authentication",

"Password Hashing",

"Create Update Delete Posts"

],


tech:[

"Node.js",

"Express",

"MongoDB",

"Mongoose",

"JWT"

],


status:"Completed",


github:
"https://github.com/aastha77/simple-blogging-platform"


}


];



export default function Projects(){


return (

<motion.section

id="projects"

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

PROJECT DATABASE

</h2>



<div className="
grid
md:grid-cols-2
gap-8
">


{

projects.map((project)=>(

<motion.div

      key={project.title}

      initial={{
        opacity:0,
        y:30
      }}

      whileInView={{
        opacity:1,
        y:0
      }}

      transition={{
        duration:0.5
      }}

    >
<ProjectCard

title={project.title}

category={project.category}

description={project.description}

features={project.features}

tech={project.tech}

status={project.status}

github={project.github}

/>


</motion.div>
))

}



</div>



</motion.section>

);


}
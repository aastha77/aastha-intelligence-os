"use client";


import { useEffect, useState } from "react";


import Navbar from "@/components/Navbar";
import BootScreen from "@/components/BootScreen";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";



export default function Home() {


  const [loading, setLoading] = useState(true);



  useEffect(() => {


    const timer = setTimeout(() => {

      setLoading(false);

    }, 3000);



    return () => clearTimeout(timer);


  }, []);





  return (


    <main>


      {loading ? (


        <BootScreen />


      ) : (


        <>


          <Navbar />


          <Hero />


          <Projects />


          <Skills />


          <Contact />

          <Footer />


        </>


      )}


    </main>


  );


}
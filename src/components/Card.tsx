"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import coursedata from "../Data/music_course.json"
import robo from "../images/robo.jpg"

interface Course {
        id: Number,
        title: string,
        slug: string,
        description: string,
        price: Number,
        instructor: String,
        isFeatured: boolean,
        // image: "/courses/guitar.jpg" 
}

const Card = () => {

   const somecourses= coursedata.courses.filter((course:Course)=>course.isFeatured)
  return (
   <div className="py-12 bg-gray-900 " >
    <div>
      <div className="text-center" >
        <h2  className="mt-20 md:mt-0 text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Projects Section </h2>  
        <p className="text-green-300" >Explore the Projects and Learn With best </p>
      </div>
    </div>
    {/* card section */}
    <div className="mt-10" >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center " >

{
somecourses.map((course:Course)=>(
  <div  key={course.id}   className="flex justify-center " >
    <BackgroundGradient  className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">

    <Image
    
          src={robo}
          alt="jordans"
          height="500 px"
          width="600 px"
          className="object-contain"
        />
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          Project name : DeepGuard
        </p>
 
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Project Description : This is a project that is made to detect the mask on the face of the person. It is made using the OpenCV and the Deep Learning model.
        </p>
        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span> Overview</span>
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
            View More
          </span>
        </button>



    </BackgroundGradient>
  </div>
))
}
        
      </div>

    </div>

    {/* button  */}
    <div className="  text-center  mt-20 " >
      <Link href="/Allcourses" >
    <button className="btn glass text-white hover:bg-slate-950 ">Explore all courses</button>
    </Link>
    </div>


   </div>
  );
}

export default Card;

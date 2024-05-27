"use client";

import Link from "next/link"
import { Spotlight } from "./ui/Spotlight"
import { Button } from "./ui/moving-border";
import Amazingtext from "./Amazingtext";
import Searchbar from "./Searchbar";
import Popup from "./Popup";
import { useState } from "react";

function HeroSection() {
  const [showmodal , setShowmodal] = useState(false) ;
  return (

    <div
    className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0"
    >  
        <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
        <div className="p-4 relative z-10 w-full text-center" >
          

            <h1
            className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
            >Codev</h1>
            <Amazingtext/>
            <div className="mt-16">
              
                    {/* <Button
                    borderRadius="1.75rem"
                    className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                    Explore courses
                    </Button> */}
                    <button  onClick={()=>setShowmodal(true)} className="btn btn-primary">Explore Courses</button>
                  {showmodal && < Popup  onClose={()=>setShowmodal(false)} />}
             
            </div>
        </div>












       
        
        </div>
  )
}

export default HeroSection ;
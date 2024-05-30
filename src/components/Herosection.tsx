"use client";

import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
import Amazingtext from "./Amazingtext";
import Searchbar from "./Searchbar";
import Popup from "./Popup";
import { useState } from "react";
import { div } from "three/examples/jsm/nodes/Nodes.js";

function HeroSection() {
  const [showmodal, setShowmodal] = useState(false);
  return (
    <div>
      <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
        <div className="absolute right-24 top-14 flex  gap-x-5">
          <Link href='/Login'>
            <button className="btn btn-outline text-white ">Login page</button>
          </Link>
          <Link href={"/Signup"}>
            <button className="btn btn-active  btn-neutral text-white ">
              Signup
            </button>
          </Link>
        </div>

        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <div className="p-4 relative z-10 w-full text-center">
          <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            CoDev
          </h1>
          <Amazingtext />
          <div className="mt-16">
        
            <button
              onClick={() => setShowmodal(true)}
              className="btn btn-primary px-10 "
            >
              <h1  className="text-gray-200 text-[17px] " >  Add Projects </h1> 

              </button>
            {showmodal && <Popup onClose={() => setShowmodal(false)} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

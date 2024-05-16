"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";
 
const words = `Welcome to CodeDev, where you can Collaborate and find the  perfect match for you projects and develop your skills 
Explore the Projects !`;

const Amazingtext = () => {
    return <TextGenerateEffect words={words} />;
}

export default Amazingtext;

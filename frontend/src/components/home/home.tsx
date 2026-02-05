"use client"

import Image from "next/image";

import Terminal from "../../../public/icons/terminal.png"

export default function Home(){
    return(
        /*--Desktop View--*/
        <section id="home" className="w-full min-w-200 max-w-500 h-screen min-h-200 flex justify-center items-center">
            <main className="w-3/4 h-full flex">
                <div className="w-1/2 h-full flex flex-col justify-center">
                    <div className={`w-full min-w-150 max-h-125 h-2/5 px-10 flex flex-col justify-center gap-y-5 rounded-[50px]`}>
                        <div className="flex items-center gap-x-3">
                            <Image src={Terminal} alt="EMT" className="w-20"/>
                            <h1 className="text-[#007eff] text-name text-7xl font-semibold text-shadow-lg">Aidan Holton</h1>
                        </div>
                        <div>
                            <h2 className="text-black text-4xl text-shadow-md">Data Developer Intern @ UNG</h2>
                            <h3 className="text-black text-xl text-shadow-md">Computer Science Major / Machine Learning Minor</h3>
                        </div>
                        <div className="flex items-center gap-x-5">
                            <a href="#projects"><button className="px-2 py-1 bg-black text-white font-semibold border-2 border-black rounded-md shadow-lg cursor-pointer transition-all hover:scale-95">Projects</button></a>
                            <a href="/downloads/Resume.pdf" target="_blank" rel="noopener noreferrer" download><button className="px-2 py-1 bg-black text-white font-semibold border-2 border-black rounded-md shadow-lg cursor-pointer transition-all hover:scale-95">Resume</button></a>
                        </div>
                        <h4 className="text-black text-lg text-shadow-md">Based in Atlanta</h4>
                    </div>
                </div>
            </main>
        </section>
    )
}
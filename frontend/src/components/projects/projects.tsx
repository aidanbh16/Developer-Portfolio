"use client"

import { useState } from "react"

import style from "./projects.module.css"

export default function Projects(){
    const [activeProj, setActiveProj] = useState<number | null>(null)
    const [activeRow, setActiveRow] = useState(1)

    const data = [
        {
            id: 1,
            type: "project",
            title: "Developer Portfolio", 
            focus: "Web Development", 
            description: "This project is a personal portfolio site built to document and organize my technical work as it develops over time. It brings together projects, coursework, and applied experience in web development and systems-focused learning, including hands-on work with modern web frameworks, application structure, and technical problem-solving. The site is designed to grow alongside my experience, prioritizing clarity, structure, and an honest representation of ongoing work rather than polished end results.",
            status: "In Progress",
            link: "https://github.com/aidanbh16/Developer-Portfolio",
            languages: ["TypeScript"],
            frameworks: ["NextJS", "NodeJS", "ExpressJS", "Nodemailer"],
            database: [],
            infra: ["Vercel"]
        },        
        {
            id: 2,
            type: "project",
            title: "filler", 
            focus: "filler", 
            description: "filler",
            status: "In Progress",
            link: "https://github.com/aidanbh16",
            languages: [],
            frameworks: [],
            database: [],
            infra: []
        },        
        {
            id: 3,
            type: "project",
            title: "filler", 
            focus: "filler", 
            description: "filler",
            status: "In Progress",
            link: "https://github.com/aidanbh16",
            languages: [],
            frameworks: [],
            database: [],
            infra: []
        },
        {
            id: 4, 
            type: "assignment",
            title: "Python Introduction", 
            class: "CSCI 3900C", 
            description: "This assignment begins with a brief recap of core Python concepts needed for future work, including loops, conditionals, and recursion. It then introduces NumPy and Pandas through hands-on data analysis while exploring the mathematical foundation of simple linear regression.",
            status: "Completed",
            link: "https://github.com/aidanbh16/CSCI-3900C-Assignment-1",
            languages: ["Python"],
            frameworks: ["NumPy", "Pandas", "Matplotlib"],
            database: [],
            infra: []
        },
        {
            id: 5, 
            type: "assignment",
            title: "filler", 
            class: "filler", 
            description: "filler",
            status: "In Progress",
            link: "https://github.com/aidanbh16",
            languages: [],
            frameworks: [],
            database: [],
            infra: []
        },
        {
            id: 6, 
            type: "assignment",
            title: "filler", 
            class: "filler", 
            description: "filler",
            status: "In Progress",
            link: "https://github.com/aidanbh16",
            languages: [],
            frameworks: [],
            database: [],
            infra: []
        }
    ]

    const tools_data = [
        "Python",
        "NumPy",
        "Pandas",
        "Matplotlib",
        "TypeScript",
        "JavaScript",
        "NextJS",
        "ReactJS",
        "NodeJS",
        "ExpressJS",
        "SQL",
        "T-SQL",
        "SSMS",
        "PostgreSQL",
        "PGAdmin 4",
        "Redis",
        "AWS",
        "Vercel"
    ]

    return(
        <section id="projects" className="w-full min-w-300 max-w-500 h-screen min-h-200 flex justify-center items-center">
            <div className="w-3/4 h-full max-h-300 py-[5vh] flex flex-col gap-y-10">
                <div className="w-full h-1/2 flex">
                    <div className="w-1/2 h-full">
                        <h1 className="w-full h-1/10 px-10 text-black text-3xl font-semibold flex items-center">Assignments</h1>
                        <ul className="w-full h-9/10 px-10 py-1 flex flex-col items-center justify-start gap-y-5 overflow-y-scroll">
                            {data.map((data) => (
                                data.type === "assignment"
                                &&
                                <li key={data.id} className={`w-full h-45 px-5 py-3 bg-linear-to-br from-black via-neutral-900 to-neutral-900 rounded-2xl shadow-lg flex flex-col items-start cursor-pointer transition-all duration-300 ease-in-out ${data.id === activeProj && "shadow-md shadow-[#007eff]"} hover:scale-101`} onClick={() => {activeProj === data.id ? setActiveProj(null) : setActiveProj(data.id)}}>
                                    <div className="w-full h-1/5 flex">
                                        <h2 className="w-3/4 text-white text-xl text-start">{data.title}</h2>
                                        <h3 className="w-1/4 text-white text-lg text-end">{data.class}</h3>
                                    </div>
                                    <div className="w-full h-3/5 mt-2 overflow-y-scroll">
                                        <p className="text-white select-none">{data.description}</p>
                                    </div>
                                    <div className="w-full h-0.5 mt-2 bg-white"></div>
                                    <div className="w-full h-1/5 mt-2 flex">
                                        <div className="w-1/2 text-white text-start">Status: {data.status}</div>
                                        <div className="w-1/2 text-white text-end"><a href={data.link} target="_black" className="transition-all duration-200 ease-in-out hover:text-[#007eff]">&lt; &gt; Source Code</a></div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="w-1/2 h-full flex flex-col items-center justify-center gap-y-5">
                        {
                            activeProj === null
                            ?
                            <h1 className={`w-full text-black text-3xl font-semibold flex justify-center items-center ${style.appearHeader}`}>Experience With</h1>
                            :
                            data.map((project) => (
                                activeProj === project.id
                                &&
                                <h1 key={project.id} className={`w-full text-black text-3xl text-center font-semibold flex justify-center items-center ${style.appearHeader}`}>{project.title} Stack</h1>
                            ))
                        }
                        <div className="w-full flex justify-center items-center">
                            {
                                activeProj === null
                                ?
                                <ul className="w-2/3 flex flex-wrap justify-center items-center gap-x-5 gap-y-5">
                                    {
                                        tools_data.map((tool, index) => (
                                                <li key={tool} className={`px-2 py-1 bg-white text-black text-[18px] rounded-lg shadow-lg cursor-pointer select-none transition-all duration-150 ease-in-out hover:scale-105 ${style.appear}`} style={{ animationDelay: `${index * 175}ms` }}>{tool}</li>
                                        ))
                                    }
                                </ul>
                                :
                                data.map((data) => (
                                    activeProj === data.id
                                    &&
                                    <ul key={data.id} className="w-2/3 flex flex-wrap justify-start items-center gap-x-5 gap-y-5">
                                        <li className="flex flex-col gap-y-10">
                                            <div className={`flex flex-col gap-y-2 ${style.slidedown}`} style={{ animationDelay: `${1 * 175}ms` }}>
                                                <h3 className="text-black text-xl font-semibold">Languages</h3>
                                                <ul className="flex flex-wrap gap-y-3 gap-x-3">
                                                    {
                                                        data.languages.map((lang, index) => (
                                                                <div key={lang} className={`px-2 py-1 flex bg-white text-black text-[18px] rounded-lg shadow-lg cursor-pointer select-none transition-all duration-150 ease-in-out hover:scale-105 ${style.appear}`} style={{ animationDelay: `${index * 350}ms` }}>{lang}</div>
                                                        ))
                                                    }
                                                </ul>
                                            </div>
                                            <div className={`flex flex-col gap-y-2 ${style.slidedown}`} style={{ animationDelay: `${2 * 175}ms` }}>
                                                <h3 className="text-black text-xl font-semibold">Frameworks & Libraries</h3>
                                                <ul className="flex flex-wrap gap-y-3 gap-x-3">
                                                    {
                                                        data.frameworks.map((fw, index) => (
                                                                <div key={fw} className={`px-2 py-1 flex bg-white text-black text-[18px] rounded-lg shadow-lg cursor-pointer select-none transition-all duration-150 ease-in-out hover:scale-105 ${style.appear}`} style={{ animationDelay: `${index * 350}ms` }}>{fw}</div>
                                                        ))
                                                    }
                                                </ul>
                                            </div>
                                            <div className={`flex flex-col gap-y-2 ${style.slidedown}`} style={{ animationDelay: `${3 * 175}ms` }}>
                                                <h3 className="text-black text-xl font-semibold">Database & Tools</h3>
                                                <ul className="flex flex-wrap gap-y-3 gap-x-3">
                                                    {
                                                        data.database.map((db, index) => (
                                                                <div key={db} className={`px-2 py-1 flex bg-white text-black text-[18px] rounded-lg shadow-lg cursor-pointer select-none transition-all duration-150 ease-in-out hover:scale-105 ${style.appear}`} style={{ animationDelay: `${index * 350}ms` }}>{db}</div>
                                                        ))
                                                    }
                                                </ul>
                                            </div>
                                            <div className={`flex flex-col gap-y-2 ${style.slidedown}`} style={{ animationDelay: `${4 * 175}ms` }}>
                                                <h3 className="text-black text-xl font-semibold">Infrastructure</h3>
                                                <ul className="flex flex-wrap gap-y-3 gap-x-3">
                                                    {
                                                        data.infra.map((infra, index) => (
                                                                <div key={infra} className={`px-2 py-1 flex bg-white text-black text-[18px] rounded-lg shadow-lg cursor-pointer select-none transition-all duration-150 ease-in-out hover:scale-105 ${style.appear}`} style={{ animationDelay: `${index * 350}ms` }}>{infra}</div>
                                                        ))
                                                    }
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="w-full h-1/2 max-h-150 p-5 flex flex-col justify-start items-center">
                    <h1 className="w-full h-1/10 text-black text-3xl font-semibold flex justify-center items-center">Projects</h1>
                    <div className="w-full h-8/10 carousel flex gap-x-10 overflow-x-hidden">
                        <div id="row1" className="w-full flex justify-start items-center gap-x-10 carousel-item scroll-mt-[60vh]">
                                {data.filter(data => data.type === "project").slice(0, 3).map((data) => (
                                    <div key={data.id} className={`w-1/3 h-[90%] max-h-100 m-2 px-5 py-3 bg-white flex flex-col justify-start rounded-xl shadow-lg cursor-pointer transition-all duration-300 ease-in-out hover:scale-102 ${data.id === activeProj && "shadow-md shadow-[#007eff]"}`} onClick={() => {activeProj === data.id ? setActiveProj(null) : setActiveProj(data.id)}}>
                                        <div className="flex">
                                            <h2 className="w-1/2 text-black text-lg">{data.title}</h2>
                                            <h3 className="w-1/2 text-black text-lg text-end">{data.focus}</h3>
                                        </div>
                                        <div className="w-full h-[90%] mt-2 overflow-y-scroll">
                                            <p className="text-black select-none">{data.description}</p>
                                        </div>
                                        <div className="w-full h-0.5 mt-2 bg-black"></div>
                                        <div className="w-full mt-2 flex items-end">
                                            <div className="w-1/2 text-black text-start">Status: {data.status}</div>
                                            <div className="w-1/2 text-black text-end"><a href={data.link} target="_black" className="transition-all duration-200 ease-in-out hover:text-[#007eff]">&lt; &gt; Source Code</a></div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                        <div id="row2" className="w-full flex justify-start items-center gap-x-10 carousel-item scroll-mt-[60vh]">
                                {data.filter(data => data.type === "project").slice(3, 7).map((data) => (
                                    <div key={data.id} className={`w-1/3 h-[90%] max-h-100 m-2 px-5 py-3 bg-white flex flex-col justify-start rounded-xl shadow-lg cursor-pointer transition-all duration-300 ease-in-out hover:scale-102 ${data.id === activeProj && "shadow-md shadow-[#007eff]"}`} onClick={() => {activeProj === data.id ? setActiveProj(null) : setActiveProj(data.id)}}>
                                        <div className="flex">
                                            <h2 className="w-1/2 text-black text-xl">{data.title}</h2>
                                            <h3 className="w-1/2 text-black text-lg text-end">{data.focus}</h3>
                                        </div>
                                        <div className="w-full h-[90%] mt-2 overflow-y-scroll">
                                            <p className="text-black select-none">{data.description}</p>
                                        </div>
                                        <div className="w-full h-0.5 mt-2 bg-black"></div>
                                        <div className="w-full mt-2 flex items-end">
                                            <div className="w-1/2 text-black text-start">Status: {data.status}</div>
                                            <div className="w-1/2 text-black text-end"><a href={data.link} target="_black" className="transition-all duration-200 ease-in-out hover:text-[#007eff]">&lt; &gt; Source Code</a></div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                        <div id="row3" className="w-full flex justify-start items-center gap-x-10 carousel-item scroll-mt-[60vh]">
                                {data.filter(data => data.type === "project").slice(6, 10).map((data) => (
                                    <div key={data.id} className={`w-1/3 h-[90%] max-h-100 m-2 px-5 py-3 bg-white flex flex-col justify-start rounded-xl shadow-lg cursor-pointer transition-all duration-300 ease-in-out hover:scale-102 ${data.id === activeProj && "shadow-md shadow-[#007eff]"}`} onClick={() => {activeProj === data.id ? setActiveProj(null) : setActiveProj(data.id)}}>
                                        <div className="flex">
                                            <h2 className="w-1/2 text-black text-xl">{data.title}</h2>
                                            <h3 className="w-1/2 text-black text-lg text-end">{data.focus}</h3>
                                        </div>
                                        <div className="w-full h-[90%] mt-2 overflow-y-scroll">
                                            <p className="text-black select-none">{data.description}</p>
                                        </div>
                                        <div className="w-full h-0.5 mt-2 bg-black"></div>
                                        <div className="w-full mt-2 flex items-end">
                                            <div className="w-1/2 text-black text-start">Status: {data.status}</div>
                                            <div className="w-1/2 text-black text-end"><a href={data.link} target="_black" className="transition-all duration-200 ease-in-out hover:text-[#007eff]">&lt; &gt; Source Code</a></div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                    <div className="w-full h-1/10 flex justify-center items-center gap-x-5">
                        <a href="#row1" className={`w-5 h-5 border-white border-5 rounded-full shadow-md transition-all hover:scale-110 hover:-translate-y-1 ${activeRow === 1 ? "bg-[#007eff]": "bg-white"}`} onClick={() => {setActiveRow(1)}}></a>
                        <a href="#row2" className={`w-5 h-5 border-white border-5 rounded-full shadow-md transition-all hover:scale-110 hover:-translate-y-1 ${activeRow === 2 ? "bg-[#007eff]": "bg-white"}`} onClick={() => {setActiveRow(2)}}></a>
                        <a href="#row3" className={`w-5 h-5 border-white border-5 rounded-full shadow-md transition-all hover:scale-110 hover:-translate-y-1 ${activeRow === 3 ? "bg-[#007eff]": "bg-white"}`} onClick={() => {setActiveRow(3)}}></a>
                    </div>
                </div>
            </div>
        </section>
    )
}
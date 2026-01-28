"use client"

import Image from "next/image"

import Cap from "../../../public/icons/graduationcap.png"
import Suitcase from "../../../public/icons/suitcase.png"
import Terminal from "../../../public/icons/terminal.png"

export default function Experience(){
    return(
        /*--Desktop View--*/
        <section id="experience" className="w-full min-w-200 max-w-500 h-screen min-h-300 flex justify-center items-center">
            <div className="w-3/4 h-full flex flex-col items-center justify-center gap-y-10">
                <div className="w-full min-h-150 flex justify-center items-start gap-x-10">
                    <div className="w-1/3 max-h-175 p-5 bg-white text-black flex flex-col gap-y-3 shadow-lg">
                        <div className="flex items-center gap-x-3">
                            <Image src={Cap} alt="Graduation Cap" className="w-10"/>
                            <h1 className="text-3xl font-semibold">Education</h1>
                        </div>
                        <div className="w-full h-0.5 bg-black"></div>
                        <h2>University of North Georgia | Aug 2022 - Present<br/>Computer Science</h2>
                        <ul className="list-disc pl-4 overflow-y-scroll">
                            <li>Completed coursework in programming, data structures, databases, and introductory machine learning</li>
                            <li>Applied concepts through hands-on assignments emphasizing logic, data modeling, and analytical problem-solving</li>
                            <li>Developed strong debugging habits and the ability to break down complex problems into manageable steps</li>
                            <li>Gained experience reading, understanding, and modifying existing code rather than only writing from scratch</li>
                            <li>Built a solid foundation in how software systems are structured and how data moves through applications</li>
                        </ul>
                        <h2>Courses Completed</h2>
                        <div className="flex justify-center items-start gap-x-10 overflow-y-scroll">
                            <ul className="list-disc pl-4">
                                <li>Computer Science 1</li>
                                <li>Computer Science 2</li>
                                <li>Computer Ethics</li>
                                <li>Web Programming</li>
                                <li>Computer Architecture</li>
                                <li>Computer Security</li>
                            </ul>
                            <ul className="list-disc pl-4">
                                <li>Introduction to UNIX</li>
                                <li>Software Engineering</li>
                                <li>Databases</li>
                                <li>Programming Languages</li>
                                <li>Machine Learning</li>
                                <li>AI in Manufactoring</li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-1/3 max-h-175 p-5 bg-white text-black flex flex-col gap-y-3 shadow-lg">
                        <div className="flex items-center gap-x-3">
                            <Image src={Suitcase} alt="Suitcase" className="w-9"/>
                            <h1 className="text-3xl font-semibold">Work Experience</h1>
                        </div>
                        <div className="w-full h-0.5 bg-black"></div>
                        <h2>SQL Developer Intern | Jan 2026 - Present</h2>
                        <ul className="list-disc pl-4 overflow-y-scroll">
                            <li>Reviewed existing documentation and database design standards</li>
                            <li>Created and updated Entity Relationship (ER) diagrams to model system data structures</li>
                        </ul>
                        <h2>IT Help Desk Technician | Jan 2024 - Present</h2>
                        <ul className="list-disc pl-4 overflow-y-scroll">
                            <li>Provide frontline technical support for students, faculty, and staff in a fast-paced environment</li>
                            <li>Troubleshoot operating system issues, authentication problems, and basic networking concerns</li>
                            <li>Support hardware, software, and classroom technology used across campus</li>
                            <li>Communicate technical solutions clearly to non-technical users with varying levels of technical familiarity</li>
                            <li>Document issues and resolutions to improve team workflows and knowledge sharing</li>
                            <li>Balance accuracy, efficiency, and professionalism while handling multiple requests</li>
                        </ul>
                    </div>
                    <div className="w-1/3 max-h-175 p-5 bg-white text-black flex flex-col gap-y-3 shadow-lg">
                        <div className="flex items-center gap-x-3">
                            <Image src={Terminal} alt="Terminal" className="w-9"/>
                            <h1 className="text-3xl font-semibold">Technical Experience</h1>
                        </div>
                        <div className="w-full h-0.5 bg-black"></div>
                        <ul className="text-lg">
                            <li>Web & Software Development</li>
                        </ul>
                        <ul className="list-disc pl-4 overflow-y-scroll">
                            <li>Built personal and academic projects using Next.js and TypeScript, focusing on application structure and long-term maintainability</li>
                            <li>Developed responsive frontend components and layouts using modern web development practices</li>
                            <li>Gained introductory backend experience through lightweight APIs and services, including basic Go</li>
                            <li>Explored full-stack concepts such as routing, state management, and data flow between frontend and backend systems</li>
                            <li>Emphasized learning through hands-on building, refactoring, and experimentation rather than relying on boilerplate</li>
                            <li>Continuously expanded technical understanding by tackling unfamiliar tools and concepts independently</li>
                        </ul>
                    </div>
                </div>
                <div className="w-4/5 py-5 flex justify-center items-center">
                    <ul className="timeline">
                        <li>
                            <div className="timeline-start timeline-box max-w-50 mb-2 bg-white text-black text-[14px] border-none shadow-md">Graduated Highschool</div>
                            <time className="timeline-middle px-1 text-black text-md">May 2022</time>
                            <hr className="bg-black"/>
                        </li>
                        <li>
                            <hr className="bg-black"/>
                            <div className="timeline-end timeline-box max-w-50 mt-2 bg-white text-black text-[14px] border-none shadow-md">Started University</div>
                            <time className="timeline-middle px-1 text-black text-md">Aug 2022</time>
                            <hr className="bg-black"/>
                        </li>
                        <li>
                            <hr className="bg-black"/>
                            <div className="timeline-start timeline-box max-w-50 mb-2 bg-white text-black text-[14px] border-none shadow-md">Started position as IT Help Desk Technician</div>
                            <time className="timeline-middle px-1 text-black text-md">Jan 2024</time>
                            <hr className="bg-black"/>
                        </li>
                        <li>
                            <hr className="bg-black"/>
                            <div className="timeline-end timeline-box max-w-50 mt-2 bg-white text-black text-[14px] border-none shadow-md">Started position as SQL Developer Intern</div>
                            <time className="timeline-middle px-1 text-black text-md">Jan 2026</time>
                            <hr className="bg-black"/>
                        </li>
                        <li>
                            <hr className="bg-black"/>
                            <div className="timeline-start timeline-box max-w-50 mt-2 bg-white text-black text-[14px] border-none shadow-md">Graduate University</div>
                            <time className="timeline-middle px-1 text-black text-md">Jul 2027</time>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
"use client"

import Image from "next/image"

import Email from "../../../public/icons/email.png"
import Github from "../../../public/icons/github.png"
import Linkedin from "../../../public/icons/linkedin.png"
import Instagram from "../../../public/icons/instagram.png"

export default function Contact(){
    return(
        <section id="contact" className="w-full min-w-300 max-w-500 h-screen min-h-200 flex justify-center">
            <div className="w-3/4 h-full flex items-center gap-x-20">
                <div className="w-2/3 flex items-center">
                    <div className="w-full h-full px-10 flex flex-col gap-y-5">
                        <h1 className="text-4xl font-semibold text-shadow-md text-black">Reach Out</h1>
                        <form className="w-full h-full flex flex-col gap-y-5">
                            <fieldset>
                                <input type="text" className="w-full px-1 py-2 bg-white rounded-md shadow-lg outline-none text-black" placeholder="Name"></input>
                            </fieldset>
                            <fieldset className="flex flex-col gap-y-5">
                                <input type="text" className="w-full px-1 py-2 bg-white rounded-md shadow-lg outline-none text-black" placeholder="Company"></input>
                                <input type="text" className="w-full px-1 py-2 bg-white rounded-md shadow-lg outline-none text-black" placeholder="Email"></input>
                            </fieldset>
                            <fieldset className="flex flex-col gap-y-5">
                                <input type="text" className="w-full px-1 py-2 bg-white rounded-md shadow-lg outline-none text-black" placeholder="Subject"></input>
                                <textarea className="w-full min-h-75 max-h-100 px-1 py-2 bg-white rounded-md shadow-lg outline-none text-black" placeholder="Content"></textarea>
                            </fieldset>
                            <fieldset className="flex flex-col gap-y-5">
                                <input type="file" className="w-1/8 min-w-15 max-w-30 px-2 bg-neutral-400 text-black rounded-md shadow-lg cursor-pointer transition-all duration-200 ease-in-out hover:bg-neutral-400/80" />
                                <button type="submit" className="w-1/8 min-w-15 max-w-30 p-1 bg-[#007eff] text-white font-semibold rounded-md shadow-lg cursor-pointer select-none transition-all duration-200 ease-in-out hover:bg-[#007eff]/80 hover:scale-95">Send</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
                <div className="w-1/3 h-full flex items-center">
                    <div className="w-full py-5 px-5 bg-white rounded-xl shadow-lg flex flex-col justify-start">
                        <h1 className="w-full text-2xl font-semibold text-center text-black text-shadow-md">Socials</h1>
                        <ul className="w-full flex flex-col gap-y-5">
                            <a href="mailto:aidanbh16@gmail.com" className="p-2 rounded-md text-black transition-all duration-200 ease-in-out hover:bg-black/10 hover:text-[#007eff] hover:scale-98">
                                <li className="w-full flex items-center gap-x-5">
                                    <Image src={Email} alt="email" className="w-1/8"/>
                                    <div className="w-7/8 flex flex-col">
                                        <p className="font-semibold">Email</p>
                                        <p>aidanbh16@gmail.com</p>
                                    </div>
                                </li>
                            </a>
                            <a href="https://github.com/aidanbh16" className="p-2 rounded-md text-black transition-all duration-200 ease-in-out hover:bg-black/10 hover:text-[#007eff] hover:scale-98">
                                <li className="w-full flex items-center gap-x-5">
                                    <Image src={Github} alt="github" className="w-1/8"/>
                                    <div className="w-7/8 flex flex-col">
                                        <p className="font-semibold">GitHub</p>
                                        <p>github.com/aidanbh16</p>
                                    </div>
                                </li>
                            </a>
                            <a href="https://www.linkedin.com/in/aidan-holton/" className="p-2 rounded-md text-black transition-all duration-200 ease-in-out hover:bg-black/10 hover:text-[#007eff] hover:scale-98">
                                <li className="w-full flex items-center gap-x-5">
                                    <Image src={Linkedin} alt="linkedin" className="w-1/8"/>
                                    <div className="w-7/8 flex flex-col">
                                        <p className="font-semibold">LinkedIn</p>
                                        <p>linkedin.com/in/aidan-holton/</p>
                                    </div>
                                </li>
                            </a>
                            <a href="https://www.instagram.com/holton_aidan" target="_blank" className="p-2 rounded-md text-black transition-all duration-200 ease-in-out hover:bg-black/10 hover:text-[#007eff] hover:scale-98">
                                <li className="w-full flex items-center gap-x-5">
                                    <Image src={Instagram} alt="instagram" className="w-1/8"/>
                                    <div className="w-7/8 flex flex-col">
                                        <p className="font-semibold">Instagram</p>
                                        <p>instagram.com/holton_aidan</p>
                                    </div>
                                </li>
                            </a>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
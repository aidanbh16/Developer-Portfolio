
import Image from "next/image"

import Github from "../../../public/icons/github.png"
import Linkedin from "../../../public/icons/linkedin.png"
import Instagram from "../../../public/icons/instagram.png"

export default function Footer(){
    return(
        <footer className="w-full h-40 bg-black/85 flex justify-center items-center">
            <div className="w-3/4 min-w-200 max-w-500 flex flex-col items-center gap-y-3">
                <div className="w-full flex justify-center">
                    <div className="w-1/2 flex flex-col">
                        <h1 className="text-white text-lg font-semibold">Aidan Holton</h1>
                        <h2 className="text-white text-md">Data Developer Intern · CS & ML Student</h2>
                    </div>
                    <ul className="w-1/2 flex justify-end items-center gap-x-5 invert">
                        <li className="transition-all duration-200 ease-in-out hover:opacity-60 hover:scale-95">
                            <a href="https://github.com/aidanbh16" target="_blank">
                                <Image src={Github} alt="github" className="w-8"/>
                            </a>
                        </li>
                        <li className="transition-all duration-200 ease-in-out hover:opacity-60 hover:scale-95">
                            <a href="https://www.linkedin.com/in/aidan-holton/" target="_blank">
                                <Image src={Linkedin} alt="email" className="w-8"/>
                            </a>
                        </li>
                        <li className="transition-all duration-200 ease-in-out hover:opacity-60 hover:scale-95">
                            <a href="https://www.instagram.com/holton_aidan" target="_blank">
                                <Image src={Instagram} alt="email" className="w-8"/>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="w-full h-0.5 bg-white/60"></div>
                <div className="w-full flex justify-center items-center">
                    <h3 className="text-white text-sm">© 2026 Aidan Holton. All rights reserved.</h3>
                </div>
            </div>
        </footer>
    )
}
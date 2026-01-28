"use client"

import Image from "next/image"
import { useEffect } from "react"

import style from "./header.module.css"

import Terminal from "../../../../public/icons/terminal.png"

export default function Header(){
    useEffect(() => {
        const header = document.getElementById("header")
        const nav = document.querySelectorAll(".nav-button")
        const image = document.querySelector(".image")
        const name = document.querySelector(".name")
        if (!header) return

        function initialMount(){
            if(window.scrollY < 10 ){
                header?.classList.remove(style.scrolldown)
                header?.classList.add(style.scrollup)
                nav.forEach(el => {
                    el.classList.remove("text-white")
                    el.classList.add("text-black")
                })
                image?.classList.remove("invert")
                name?.classList.remove("text-white")
                name?.classList.add("text-black")
            }else{
                header?.classList.remove(style.scrollup)
                header?.classList.add(style.scrolldown)
                nav.forEach(el => {
                    el.classList.remove("text-black")
                    el.classList.add("text-white")
                })
                image?.classList.add("invert")
                name?.classList.remove("text-black")
                name?.classList.add("text-white")
            }
        }

        function handleScroll(){
            if(window.scrollY < 10 ){
                header?.classList.remove(style.scrolldown)
                header?.classList.add(style.scrollup)
                nav.forEach(el => {
                    el.classList.remove("text-white")
                    el.classList.add("text-black")
                })
                image?.classList.remove("invert")
                name?.classList.remove("text-white")
                name?.classList.add("text-black")
            }else{
                header?.classList.remove(style.scrollup)
                header?.classList.add(style.scrolldown)
                nav.forEach(el => {
                    el.classList.remove("text-black")
                    el.classList.add("text-white")
                })
                image?.classList.add("invert")
                name?.classList.remove("text-black")
                name?.classList.add("text-white")
            }
        }

        initialMount()
        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return(
        /*--Desktop View--*/
        <header id="header" className="w-full min-w-200 h-10 px-10 flex fixed z-100">
            <div className="w-1/2 h-full flex justify-start items-center gap-x-2">
                <Image src={Terminal} alt="EMT" className="image w-6"></Image>
                <h1 className="name text-black text-xl text-shadow-lg">Aidan Holton</h1>
            </div>
            <nav className="w-1/2 h-full flex justify-end items-center gap-x-5">
                <a href="#home" className="nav-button px-2 text-black text-sm text-shadow-md rounded-[3px] transition-all duration-200 ease-in-out hover:text-[#007eff] hover:text-shadow-none">Home</a>
                <a href="#experience" className="nav-button px-2 text-black text-sm text-shadow-md rounded-[3px] transition-all duration-200 ease-in-out hover:text-[#007eff] hover:text-shadow-none">Experience</a>
                <a href="#projects" className="nav-button px-2 text-black text-sm text-shadow-md rounded-[3px] transition-all duration-200 ease-in-out hover:text-[#007eff] hover:text-shadow-none">Projects</a>
                <a href="#contact" className="nav-button px-2 text-black text-sm text-shadow-md rounded-[3px] transition-all duration-200 ease-in-out hover:text-[#007eff] hover:text-shadow-none">Contact</a>
            </nav>
        </header>
    )
}
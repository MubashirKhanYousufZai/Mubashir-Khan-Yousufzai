<<<<<<< HEAD
"use client"
import React from 'react';
import { FaGithub } from "react-icons/fa";
import { HiDocumentArrowDown } from 'react-icons/hi2';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname(); // Get current route for active link styling

  return (
    <header className="bg-black text-white">
      <div className="container mx-auto flex flex-wrap items-center justify-between p-5">
        
        {/* Logo & GitHub Link */}
        <Link href="https://github.com/MubashirKhanYousufZai" className="flex items-center gap-2 text-white hover:text-blue-300 transition-all duration-300">
          <FaGithub className="text-3xl" />
          <span className="text-xl font-semibold">Mubashir Khan Yousufzai</span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6 text-base">
          {[
            { name: "Home", href: "/" },
            { name: "About", href: "/components/hero" },
            { name: "Projects", href: "/components/projects" },
            { name: "Skills", href: "/components/skills" },
            { name: "Experience", href: "/components/experience" },
            { name: "Contact", href: "/components/contact" }
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:text-blue-300 transition-all duration-300 ${
                pathname === link.href ? "text-blue-300 border-b-2 border-blue-300 pb-1" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CV Download Button */}
        <Link href="/components/CV" className="flex items-center gap-2 bg-slate-300 text-black hover:bg-blue-300 hover:text-white px-4 py-2 rounded-md transition-all duration-300">
          <span className="font-medium">CV</span>
          <HiDocumentArrowDown className="text-xl" />
        </Link>
        
      </div>
    </header>
  );
};

export default Header;
=======
import React from 'react'
import { FaGithub } from "react-icons/fa";
import { HiDocumentArrowDown } from 'react-icons/hi2';
const Header = () => {
  return (
    <div>
        <header className="bg-black text-white body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0" href='https://github.com/MubashirKhanYousufZai'>
                <FaGithub className='text-3xl font-boid hover:text-blue-300'/>
                <span className="ml-3 text-xl hover:text-blue-300">Mubashir Khan Yousufzai !</span>
                </a>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                <a className="mr-5 hover:text-blue-300" href='/'>Home</a>
                <a className="mr-5 hover:text-blue-300" href='/components/hero'>About</a>
                <a className="mr-5 hover:text-blue-300" href='/components/projects'>Projects</a>
                <a className="mr-5 hover:text-blue-300" href='/components/skills'>Skills</a>
                <a className="mr-5 hover:text-blue-300" href='/components/contact'>Contact</a>
                </nav>
                <button className="inline-flex items-center bg-slate-300 border-0 py-1 px-3 gap-2 focus:outline-none text-black hover:text-gray-100 hover:bg-blue-300 rounded text-base mt-4 md:mt-0">
                  <a href="/components/CV" className='flex gap-1 items-center'>Cv<HiDocumentArrowDown className='font-bold text-xl'/></a>
                </button>
            </div>
        </header>
    </div>
  )
}

export default Header
>>>>>>> 92e6d749b1571c6998789b48dd7272fe76bbe574

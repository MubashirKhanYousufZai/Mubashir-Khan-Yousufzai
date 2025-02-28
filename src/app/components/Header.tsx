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

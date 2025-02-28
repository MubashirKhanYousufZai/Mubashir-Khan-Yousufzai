"use client"; // Ensure animations work in Next.js App Router

import React from "react";
import { motion } from "framer-motion";
import { TiHtml5 } from "react-icons/ti";
import { FaCss3Alt, FaNode, FaPython } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { MdEngineering } from "react-icons/md";

const skills = [
  { name: "HTML", level: 50, icon: <TiHtml5 className="text-4xl text-orange-500" /> },
  { name: "CSS/Tailwind CSS", level: 50, icon: <FaCss3Alt className="text-4xl text-blue-500" /> },
  { name: "TypeScript/JavaScript", level: 50, icon: <BiLogoTypescript className="text-4xl text-blue-700" /> },
  { name: "Node.js", level: 50, icon: <FaNode className="text-4xl text-green-600" /> },
  { name: "Python", level: 20, icon: <FaPython className="text-4xl text-gray-700" /> },
  { name: "Prompt Engineering", level: 70, icon: <MdEngineering className="text-4xl text-gray-700" /> },
];

const Skills = () => {
  return (
    <section className="text-slate-600 body-font py-20 px-5">
      <div className="container mx-auto">
        {/* Title Animation */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl font-extrabold text-black">Skills</h1>
          <p className="mt-2 text-lg text-gray-700">I am a UI/UX designer.</p>
        </motion.div>

        {/* Skills Grid with Animation */}
        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="border border-slate-300 rounded-2xl p-6 flex flex-col items-center shadow-md hover:shadow-lg transition-all duration-300"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full mb-4">
                {skill.icon}
              </div>
              <h2 className="text-xl font-semibold text-slate-900 mb-2">{skill.name}</h2>
              <p className="text-gray-600 mb-2">{skill.level}% (Still Learning)</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <motion.div
                  className="bg-blue-500 h-2.5 rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Button Animation */}
        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          <a
            href="/contact"
            className="bg-slate-300 text-black font-semibold py-3 px-10 rounded-lg transition-all duration-300 hover:bg-blue-500 hover:text-white shadow-md"
          >
            Contact
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

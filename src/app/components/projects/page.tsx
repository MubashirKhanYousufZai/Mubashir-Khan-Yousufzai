"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      type: "Full Stack",
      link: "https://hackathon-milestone5-task2.vercel.app/",
      name: "Resume Builder",
      description: "A user-friendly web app for creating personalized resumes effortlessly.",
<<<<<<< HEAD
      image: "/resume.webp",
=======
      image: "/resume.webp"
>>>>>>> 92e6d749b1571c6998789b48dd7272fe76bbe574
    },
    {
      type: "Full Stack",
      link: "https://quick-crave-iota.vercel.app/",
      name: "Quick Crave",
      description: "A Q-commerce website for a Cafe Quick Crave.",
<<<<<<< HEAD
      image: "/quick.webp",
=======
      image: "/quick.webp"
>>>>>>> 92e6d749b1571c6998789b48dd7272fe76bbe574
    },
    {
      type: "Full Stack",
      link: "https://read-sphere-five.vercel.app/",
      name: "Read Sphere",
      description: "A modern reading platform.",
<<<<<<< HEAD
      image: "/read-sphere.webp",
=======
      image: "/read-sphere.webp"
>>>>>>> 92e6d749b1571c6998789b48dd7272fe76bbe574
    },
    {
      type: "Full Stack",
      link: "https://quarter2-final-hackathon-day4-1lxd.vercel.app/",
      name: "Pizza Run",
      description: "A Q-commerce website for a restaurant Pizza Run.",
<<<<<<< HEAD
      image: "/pizza.jpg",
=======
      image: "/pizza.jpg"
>>>>>>> 92e6d749b1571c6998789b48dd7272fe76bbe574
    },
    {
      type: "Full Stack",
      link: "https://urdu-rapandreality.vercel.app/",
      name: "Urdu Rap And Reality",
<<<<<<< HEAD
      description: "A Blog website for Urdu Rap And Reality.",
      image: "/urdu.webp",
=======
      description: "A Blog website for Urdu Rap And Reality",
      image: "/urdu.webp"
>>>>>>> 92e6d749b1571c6998789b48dd7272fe76bbe574
    },
    {
      type: "FrontEnd & UI/UX",
      link: "https://project-12-murex.vercel.app/",
      name: "Rivayati Andaz",
      description: "A Rental E-commerce website for a furniture brand Rivayati Andaz.",
<<<<<<< HEAD
      image: "/rivayati.webp",
    },
=======
      image: "/rivayati.webp"
    }
>>>>>>> 92e6d749b1571c6998789b48dd7272fe76bbe574
  ];

  return (
    <div className="bg-slate-200 min-h-screen px-5 py-10 md:py-20">
<<<<<<< HEAD
      <motion.section
        className="text-gray-700 body-font"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto">
          {/* Title Section with Animation */}
          <motion.div
            className="flex flex-wrap items-center w-full mb-12"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="text-4xl font-extrabold text-gray-900">Few of My Projects!</h1>
              <motion.div
                className="h-1 w-24 bg-blue-300 rounded mt-2"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
=======
      <section className="text-gray-700 body-font">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center w-full mb-12">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="text-4xl font-extrabold text-gray-900">Few of My Projects!</h1>
              <div className="h-1 w-24 bg-blue-300 rounded mt-2"></div>
>>>>>>> 92e6d749b1571c6998789b48dd7272fe76bbe574
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-lg text-gray-600 mt-5 lg:mt-0">
              Explore my diverse portfolio featuring full-stack applications, backend utilities, and UI/UX-focused web experiences.
            </p>
<<<<<<< HEAD
          </motion.div>

          {/* Projects Grid with Staggered Animations */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
            }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="relative w-full h-[300px]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <Image
                    src={project.image}
                    alt={project.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg mb-4"
                  />
                </motion.div>
                <h3 className="text-xs font-medium text-blue-500 tracking-widest">{project.type}</h3>
                <h2 className="text-lg font-semibold text-gray-900 mt-2 hover:text-blue-500 transition-colors">
                  {project.name}
                </h2>
                <p className="text-gray-600 mt-2">{project.description}</p>

                {/* View Project Button */}
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-all duration-300 hover:bg-blue-600 hover:shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Project
                </motion.a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
=======
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative w-full h-[300px]">
                  <Image 
                    src={project.image} 
                    alt={project.name} 
                    layout="fill" 
                    objectFit="cover" 
                    className="rounded-lg mb-4" 
                  />
                </div>
                <h3 className="text-xs font-medium text-blue-500 tracking-widest">{project.type}</h3>
                <h2 className="text-lg font-semibold text-gray-900 mt-2 hover:text-blue-500 transition-colors">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={project.name}>
                    {project.name}
                  </a>
                </h2>
                <p className="text-gray-600 mt-2">{project.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
>>>>>>> 92e6d749b1571c6998789b48dd7272fe76bbe574
    </div>
  );
};

export default Projects;

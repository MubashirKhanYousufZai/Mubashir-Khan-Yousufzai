import React from 'react';
import { FaGithub, FaLinkedin, FaNpm, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-600 body-font py-8">
      <div className="container px-5 mx-auto flex items-center sm:flex-row flex-col justify-between">
        {/* GitHub Link */}
        <a
          className="flex title-font font-medium items-center justify-center text-white hover:text-blue-300 mb-4 sm:mb-0"
          href="https://github.com/MubashirKhanYousufZai"
        >
          <FaGithub className="text-3xl font-bold hover:text-blue-300 transition duration-300" />
          <span className="ml-3 text-xl hover:text-blue-300">Mubashir Khan YousufZai !</span>
        </a>

        {/* Email */}
        <p className="text-sm text-white hover:text-blue-300 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4 cursor-pointer underline">
          © mubashirmpa2008@gmail.com
        </p>

        {/* Social Links */}
        <div className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start gap-4">
          <a
            className="text-white hover:text-blue-300 text-3xl font-bold transition duration-300"
            href="https://www.linkedin.com/in/mubashir-khan-538a662bb"
          >
            <FaLinkedin />
          </a>
          <a
            className="ml-3 text-white hover:text-blue-300 text-3xl font-bold transition duration-300"
            href="https://github.com/MubashirKhanYousufZai"
          >
            <FaGithub />
          </a>
          <a
            className="ml-3 text-white hover:text-red-400 text-3xl font-bold transition duration-300"
            href="https://www.npmjs.com/~mubashir_khan08"
          >
            <FaNpm />
          </a>
          <a
            className="ml-3 text-white hover:text-green-300 text-3xl font-bold transition duration-300"
            href="https://wa.me/qr/FWX3BWWPABVRG1"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

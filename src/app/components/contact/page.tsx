'use client';

import React, { useState } from 'react';
import { TfiEmail } from "react-icons/tfi";
import { FaPhoneAlt, FaLocationArrow, FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    const templateParams = {
      from_name: name,
      from_email: email,
      message,
    };

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_USER_ID!
      );
      setSuccess(true);
      setName('');
      setEmail('');
      setMessage('');
    } catch (err) {
      console.error('Failed to send email:', err);
      setError('Failed to send message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <motion.section
        className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8 md:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Contact Info Section */}
        <motion.div
          className="md:w-1/2 p-6 bg-blue-500 text-white rounded-l-lg flex flex-col justify-center"
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="mb-6 text-gray-200">Have a question or want to work together? Feel free to reach out.</p>

          {/* Contact Details */}
          <div className="space-y-4">
            <div className="flex items-center">
              <FaPhoneAlt className="text-lg mr-3" />
              <span className="text-gray-200">+92 315 266 9152</span>
            </div>
            <div className="flex items-center">
              <TfiEmail className="text-lg mr-3" />
              <span className="text-gray-200">mubashirmpa2008@email.com</span>
            </div>
            <div className="flex items-center">
              <FaLocationArrow className="text-lg mr-3" />
              <span className="text-gray-200">Karachi, Pakistan</span>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex mt-6 space-x-4">
            <motion.a
              href="https://wa.me/qr/FWX3BWWPABVRG1"
              className="p-3 bg-white text-blue-500 rounded-full hover:bg-gray-200 transition"
              whileHover={{ scale: 1.1 }}
            >
              <FaWhatsapp />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/mubashir-khan-538a662bb"
              className="p-3 bg-white text-blue-500 rounded-full hover:bg-gray-200 transition"
              whileHover={{ scale: 1.1 }}
            >
              <FaLinkedinIn />
            </motion.a>
            <motion.a
              href="https://github.com/MubashirKhanYousufZai"
              className="p-3 bg-white text-blue-500 rounded-full hover:bg-gray-200 transition"
              whileHover={{ scale: 1.1 }}
            >
              <FaGithub />
            </motion.a>
          </div>
        </motion.div>

        {/* Contact Form Section */}
        <motion.div
          className="md:w-1/2 p-6"
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center md:text-left">Send a Message</h2>
          <form className="space-y-4" onSubmit={sendEmail}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <label htmlFor="name" className="block text-sm font-medium text-gray-600">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-300 focus:outline-none"
                placeholder="Enter your name"
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-300 focus:outline-none"
                placeholder="Enter your email"
                autoCapitalize="none"
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <label htmlFor="message" className="block text-sm font-medium text-gray-600">Message</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full h-32 px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-300 focus:outline-none"
                placeholder="Write your message..."
                required
              ></textarea>
            </motion.div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="flex items-center px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={loading || !name || !email || !message}
              >
                {loading ? 'Sending...' : 'Send Message'}
                <TfiEmail className="ml-2 text-xl" />
              </button>
            </div>
          </form>

          {success && (
            <motion.p
              className="mt-4 text-center text-green-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Message sent successfully! ✅
            </motion.p>
          )}
          {error && (
            <motion.p
              className="mt-4 text-center text-red-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {error}
            </motion.p>
          )}
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Contact;

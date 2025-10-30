'use client';

import Image from 'next/image';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-20"
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 space-y-6 animate-fade-in">
            <div className="space-y-2">
              <p className="text-primary-400 text-lg font-medium">
                Hello, I'm
              </p>
              <h1 className="text-5xl md:text-7xl font-bold text-gradient">
                Renuja Janith
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-300">
                Full Stack Developer | Front End Developer
              </h2>
            </div>

            <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
              I am a creative and self-motivated undergraduate who loves to
              always explore and learn new technologies.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/Renuja-7671"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-primary-600 text-gray-300 hover:text-white rounded-full transition-all duration-300 transform hover:scale-110"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/renuja-janith-381587279"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-primary-600 text-gray-300 hover:text-white rounded-full transition-all duration-300 transform hover:scale-110"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="mailto:renujajanith7671@gmail.com"
                className="p-3 bg-gray-800 hover:bg-primary-600 text-gray-300 hover:text-white rounded-full transition-all duration-300 transform hover:scale-110"
              >
                <FaEnvelope size={24} />
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary-600/50"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105 border border-gray-700"
              >
                View Projects
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-1 flex justify-center animate-slide-in">
            <div className="relative">
              <div className="absolute inset-0 bg-primary-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary-600 shadow-2xl shadow-primary-600/50">
                <Image
                  src="/renujaforweb.jpg"
                  alt="Renuja Janith"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
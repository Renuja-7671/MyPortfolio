'use client';

import { FaMapMarkerAlt, FaGraduationCap, FaCode } from 'react-icons/fa';

export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              I am a creative and self-motivated undergraduate who loves to
              always explore and learn new technologies. Currently pursuing my
              degree in Information Technology and Management at the University
              of Moratuwa, I'm passionate about building innovative solutions
              that make a difference.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary-600/20 rounded-lg">
                  <FaMapMarkerAlt className="text-primary-400 text-xl" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Location</h3>
                  <p className="text-gray-400">Horana, Sri Lanka</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary-600/20 rounded-lg">
                  <FaGraduationCap className="text-primary-400 text-xl" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Education</h3>
                  <p className="text-gray-400">
                    University of Moratuwa - BSc Hons. IT & Management
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary-600/20 rounded-lg">
                  <FaCode className="text-primary-400 text-xl" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Focus</h3>
                  <p className="text-gray-400">
                    Full Stack Development & Modern Web Technologies
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="card-gradient p-6 rounded-xl border border-gray-800 hover:border-primary-600 transition-all duration-300 transform hover:scale-105">
              <h3 className="text-4xl font-bold text-primary-400 mb-2">4+</h3>
              <p className="text-gray-400">Projects Completed</p>
            </div>

            <div className="card-gradient p-6 rounded-xl border border-gray-800 hover:border-primary-600 transition-all duration-300 transform hover:scale-105">
              <h3 className="text-4xl font-bold text-primary-400 mb-2">A+</h3>
              <p className="text-gray-400">Academic Excellence</p>
            </div>

            <div className="card-gradient p-6 rounded-xl border border-gray-800 hover:border-primary-600 transition-all duration-300 transform hover:scale-105">
              <h3 className="text-4xl font-bold text-primary-400 mb-2">
                1.41
              </h3>
              <p className="text-gray-400">Z-Score</p>
            </div>

            <div className="card-gradient p-6 rounded-xl border border-gray-800 hover:border-primary-600 transition-all duration-300 transform hover:scale-105">
              <h3 className="text-4xl font-bold text-primary-400 mb-2">8A+</h3>
              <p className="text-gray-400">O/L Results</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
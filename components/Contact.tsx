'use client';

import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg">
            Feel free to reach out for collaborations or just a friendly chat
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h3>

              <div className="card-gradient p-6 rounded-xl border border-gray-800 hover:border-primary-600 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-600/20 rounded-lg">
                    <FaEnvelope className="text-primary-400 text-xl" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Email</h4>
                    <a
                      href="mailto:renujajanith7671@gmail.com"
                      className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                    >
                      renujajanith7671@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="card-gradient p-6 rounded-xl border border-gray-800 hover:border-primary-600 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-600/20 rounded-lg">
                    <FaMapMarkerAlt className="text-primary-400 text-xl" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Location</h4>
                    <p className="text-gray-400">Horana, Sri Lanka</p>
                  </div>
                </div>
              </div>

              <div className="card-gradient p-6 rounded-xl border border-gray-800">
                <h4 className="text-white font-semibold mb-4">
                  Connect with me
                </h4>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/Renuja-7671"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-800 hover:bg-primary-600 text-gray-300 hover:text-white rounded-lg transition-all duration-300 transform hover:scale-110"
                  >
                    <FaGithub size={24} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/renuja-janith-381587279"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-800 hover:bg-primary-600 text-gray-300 hover:text-white rounded-lg transition-all duration-300 transform hover:scale-110"
                  >
                    <FaLinkedin size={24} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card-gradient p-8 rounded-xl border border-gray-800">
              <h3 className="text-2xl font-bold text-white mb-6">
                Send a Message
              </h3>
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-300 mb-2 font-medium"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary-600 transition-colors duration-200"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-300 mb-2 font-medium"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary-600 transition-colors duration-200"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-300 mb-2 font-medium"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary-600 transition-colors duration-200 resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary-600/50"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
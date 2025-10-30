'use client';

import { FaGraduationCap, FaCertificate } from 'react-icons/fa';

export default function Education() {
  const education = [
    {
      institution: 'University of Moratuwa',
      degree: 'BSc Hons. Information Technology and Management',
      period: 'Present',
      status: 'Undergraduate',
      icon: '🎓',
    },
    {
      institution: 'Taxila Central College - Horana',
      degree: 'G.C.E. Advanced Level - Physical Science',
      period: 'Completed',
      achievement: 'Z-Score: 1.4117',
      icon: '📚',
    },
    {
      institution: 'Ashoka College - Horana',
      degree: 'G.C.E. Ordinary Level',
      period: 'Completed',
      achievement: '8 As and 1 B',
      icon: '📖',
    },
  ];

  const certifications = [
    {
      title: 'React 18/19 Course 2025',
      issuer: 'Udemy',
      date: '2025',
      link: 'https://www.udemy.com/certificate/UC-7c79f02b-8a73-4075-a699-365b13d1bf5e/',
    },
  ];

  return (
    <section id="education" className="py-20 px-6 bg-gray-900/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Education & Certifications
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg">
            My academic journey and professional certifications
          </p>
        </div>

        {/* Education Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <FaGraduationCap className="text-primary-400" />
            Education
          </h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="card-gradient p-6 rounded-xl border border-gray-800 hover:border-primary-600 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{edu.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                      <h4 className="text-xl font-bold text-white">
                        {edu.institution}
                      </h4>
                      <span className="px-3 py-1 bg-primary-600/20 text-primary-400 text-sm rounded-full">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-2">{edu.degree}</p>
                    {edu.achievement && (
                      <p className="text-primary-400 font-semibold">
                        {edu.achievement}
                      </p>
                    )}
                    {edu.status && (
                      <p className="text-gray-500 text-sm">{edu.status}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <FaCertificate className="text-primary-400" />
            Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="card-gradient p-6 rounded-xl border border-gray-800 hover:border-primary-600 transition-all duration-300 group"
              >
                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors duration-200">
                  {cert.title}
                </h4>
                <p className="text-gray-400 mb-2">{cert.issuer}</p>
                <p className="text-gray-500 text-sm mb-4">{cert.date}</p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors duration-200"
                >
                  <span>View Certificate</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
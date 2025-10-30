'use client';

import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function Projects() {
  const projects = [
    {
      title: 'Employee Management System',
      period: 'September 2025 - October 2025',
      description:
        'Developed a fully functional Employee Management System for Unique Industrial Solutions Pvt (Ltd). Built comprehensive employee management features with modern tech stack.',
      technologies: ['Next.js', 'PostgreSQL', 'Prisma ORM'],
      role: 'Full-stack Developer',
      github: 'https://github.com/Renuja-7671/Employee-Management-System',
      type: 'Client Project',
    },
    {
      title: 'CourtFind',
      period: 'Level 02 Software Project',
      description:
        'Led a team to design and develop a responsive sports arena booking web application. Achieved A+ academic result. Created user interfaces in Figma and implemented dynamic booking functionality with seamless payment processing.',
      technologies: ['ReactJS', 'Express.js', 'Node.js', 'MySQL', 'Figma'],
      role: 'Team Leader & Full-stack Developer',
      github: 'https://github.com/Renuja-7671/courtfindFrontend',
      githubBackend: 'https://github.com/Renuja-7671/courtfindBackend',
      type: 'Academic Project',
      achievement: 'A+ Result',
    },
    {
      title: 'Medicare Medicine Store Management System',
      period: 'December 2024',
      description:
        'Developed a comprehensive medicine store management system with secure admin panel, user authentication, and role-based access control. Implemented inventory management functionality.',
      technologies: ['Laravel', 'MySQL', 'Bootstrap', 'Figma'],
      role: 'Full-stack Developer',
      github: 'https://github.com/Renuja-7671/MedicareLaravelProject',
      type: 'Personal Project',
    },
    {
      title: 'Book Manufacturing Machine',
      period: 'January 2024 - July 2024',
      description:
        'Designed and developed an automated Arduino-based book manufacturing machine. Created 3D designs and simulations in Tinkercad, architected the hardware structure, and developed the control code.',
      technologies: ['Arduino', 'Tinkercad', 'C++'],
      role: 'Team Leader',
      github: 'https://github.com/Renuja-7671/Book-Manufacturing-Machine',
      type: 'Hardware Project',
      achievement: 'A+ Result',
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gray-900/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg">
            Some of my recent work and academic projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card-gradient p-6 rounded-xl border border-gray-800 hover:border-primary-600 transition-all duration-300 transform hover:scale-105 group"
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-primary-600/20 text-primary-400 text-xs rounded-full">
                      {project.type}
                    </span>
                    {project.achievement && (
                      <span className="px-3 py-1 bg-green-600/20 text-green-400 text-xs rounded-full">
                        {project.achievement}
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500">{project.period}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-400 mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Role */}
              <p className="text-sm text-primary-400 mb-4">
                Role: {project.role}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-lg border border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors duration-200"
                >
                  <FaGithub size={20} />
                  <span className="text-sm">
                    {project.githubBackend ? 'Frontend' : 'View Code'}
                  </span>
                </a>
                {project.githubBackend && (
                  <a
                    href={project.githubBackend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors duration-200"
                  >
                    <FaGithub size={20} />
                    <span className="text-sm">Backend</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
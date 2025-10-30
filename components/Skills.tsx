'use client';

import {
  FaReact,
  FaNodeJs,
  FaLaravel,
  FaDatabase,
  FaGitAlt,
  FaFigma,
  FaBootstrap,
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMysql,
  SiPostgresql,
  SiPrisma,
  SiExpress,
  SiArduino,
} from 'react-icons/si';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React.js', icon: <FaReact />, color: 'text-cyan-400' },
        { name: 'Next.js', icon: <SiNextdotjs />, color: 'text-white' },
        {
          name: 'TypeScript',
          icon: <SiTypescript />,
          color: 'text-blue-400',
        },
        {
          name: 'Tailwind CSS',
          icon: <SiTailwindcss />,
          color: 'text-cyan-400',
        },
        {
          name: 'Bootstrap',
          icon: <FaBootstrap />,
          color: 'text-purple-400',
        },
      ],
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', icon: <FaNodeJs />, color: 'text-green-500' },
        { name: 'Express.js', icon: <SiExpress />, color: 'text-gray-400' },
        { name: 'Laravel', icon: <FaLaravel />, color: 'text-red-500' },
      ],
    },
    {
      title: 'Database & ORM',
      skills: [
        { name: 'MySQL', icon: <SiMysql />, color: 'text-blue-400' },
        { name: 'PostgreSQL', icon: <SiPostgresql />, color: 'text-blue-400' },
        { name: 'Prisma ORM', icon: <SiPrisma />, color: 'text-cyan-400' },
      ],
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', icon: <FaGitAlt />, color: 'text-orange-500' },
        { name: 'Figma', icon: <FaFigma />, color: 'text-purple-400' },
        { name: 'Arduino', icon: <SiArduino />, color: 'text-teal-400' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg">
            Technologies I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="card-gradient p-6 rounded-xl border border-gray-800 hover:border-primary-600 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-white mb-6 pb-3 border-b border-gray-700">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center gap-3 group cursor-pointer"
                  >
                    <div
                      className={`text-3xl ${skill.color} group-hover:scale-110 transition-transform duration-200`}
                    >
                      {skill.icon}
                    </div>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-200">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
'use client';

import { motion } from 'framer-motion';
import { AnimatedText } from '../components/ui/AnimatedText';
import { BackgroundBeams } from '../components/ui/BackgroundBeams';

const skills = [
  { category: 'Frontend', items: ['React', 'Next.js', 'TailwindCSS', 'TypeScript'] },
  { category: 'Backend', items: ['Node.js', 'Express', 'Python', 'MongoDB'] },
  { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'Figma'] },
  { category: 'Other', items: ['SEO', 'Agile', 'UI/UX', 'Testing'] },
];

const experiences = [
  {
    title: 'Senior Frontend Developer',
    company: 'Tech Corp',
    period: '2022 - Present',
    description: 'Led the development of modern web applications using Next.js and React.',
  },
  {
    title: 'Full Stack Developer',
    company: 'Digital Solutions',
    period: '2020 - 2022',
    description: 'Developed and maintained full-stack applications using MERN stack.',
  },
  {
    title: 'Web Developer',
    company: 'Creative Agency',
    period: '2018 - 2020',
    description: 'Created responsive websites and web applications for various clients.',
  },
];

export default function About() {
  return (
    <div className="relative min-h-screen">
      <BackgroundBeams />
      
      <div className="relative pt-24 pb-16 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <AnimatedText
              text="About Me"
              className="text-4xl md:text-6xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600"
            />
            <AnimatedText
              text="Passionate developer crafting digital experiences"
              className="text-lg md:text-xl text-gray-400 mb-12 text-center"
            />
          </motion.div>

          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="prose prose-invert max-w-none mb-16"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-8">
              <p className="text-gray-300 leading-relaxed">
                I'm a full-stack developer with over 5 years of experience in building web applications.
                My journey in tech started with a passion for creating user-friendly interfaces and has
                evolved into architecting complete digital solutions. I specialize in React, Next.js,
                and Node.js, with a strong focus on creating performant and scalable applications.
              </p>
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold mb-8 text-center">Skills & Technologies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skillGroup, index) => (
                <motion.div
                  key={skillGroup.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
                >
                  <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-sm rounded-full border border-white/10 bg-white/5"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-8 text-center">Experience</h2>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{exp.title}</h3>
                      <p className="text-gray-400">{exp.company}</p>
                    </div>
                    <span className="text-sm text-gray-500">{exp.period}</span>
                  </div>
                  <p className="text-gray-300">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

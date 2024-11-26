'use client';

import { motion } from 'framer-motion';
import { AnimatedText } from '../components/ui/AnimatedText';
import { BackgroundBeams } from '../components/ui/BackgroundBeams';

const projects = [
  {
    title: 'Modern E-commerce Platform',
    description: 'A full-stack e-commerce solution built with Next.js, Stripe, and Tailwind CSS.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    tech: ['Next.js', 'Stripe', 'Tailwind CSS', 'MongoDB'],
    link: 'https://github.com/yourusername/project1'
  },
  {
    title: 'AI Analytics Dashboard',
    description: 'Real-time analytics dashboard powered by machine learning algorithms.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40',
    tech: ['React', 'Python', 'TensorFlow', 'FastAPI'],
    link: 'https://github.com/yourusername/project2'
  },
  {
    title: 'Social Media App',
    description: 'A modern social media platform with real-time messaging and post sharing.',
    image: 'https://images.unsplash.com/photo-1487014679447-9f8336841d58',
    tech: ['React Native', 'Firebase', 'Node.js', 'Express'],
    link: 'https://github.com/yourusername/project3'
  },
];

export default function Projects() {
  return (
    <div className="relative min-h-screen">
      <BackgroundBeams />
      
      <div className="relative pt-24 pb-16 px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto"
        >
          <AnimatedText
            text="My Projects"
            className="text-4xl md:text-6xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600"
          />
          <AnimatedText
            text="Here are some of the projects I've worked on"
            className="text-lg md:text-xl text-gray-400 mb-12 text-center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-black/50 backdrop-blur-sm"
              >
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                  <p className="text-gray-400 mb-4 text-sm">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-full border border-white/10 bg-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium hover:opacity-90 transition-opacity"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Project
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

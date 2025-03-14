import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform built with React and Node.js, featuring real-time inventory management and payment processing.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=400&fit=crop',
    link: '#'
  },
  {
    title: 'AI Chat Application',
    description: 'Real-time chat application with AI-powered responses, built using WebSocket and natural language processing.',
    image: 'https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=800&h=400&fit=crop',
    link: '#'
  },
  {
    title: '3D Portfolio Website',
    description: 'Interactive portfolio website featuring Three.js animations and WebGL effects.',
    image: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?w=800&h=400&fit=crop',
    link: '#'
  }
];

export function Projects() {
  return (
    <section className="relative z-10 px-6 py-24">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg bg-indigo-950/50 backdrop-blur-sm"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm">{project.description}</p>
                <a
                  href={project.link}
                  className="mt-4 inline-flex items-center text-indigo-400 hover:text-indigo-300"
                >
                  View Project <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
import { motion } from 'framer-motion';
import { Code2, Rocket, Server } from 'lucide-react';

export function About() {
  return (
    <section className="relative z-10 px-6 py-24 bg-black/50 backdrop-blur-xl">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-white mb-8 text-center">About Me</h2>
        <div className="text-gray-300 space-y-6">
          <p>
            With over 5 years of experience in full-stack development, I specialize in building
            scalable web applications using modern technologies. My passion lies in creating
            elegant solutions to complex problems while ensuring the best user experience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="p-6 rounded-lg bg-indigo-950/50 backdrop-blur-sm">
              <Code2 className="w-8 h-8 text-indigo-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Frontend</h3>
              <p className="text-gray-400">React, TypeScript, Tailwind CSS, Three.js</p>
            </div>
            <div className="p-6 rounded-lg bg-indigo-950/50 backdrop-blur-sm">
              <Server className="w-8 h-8 text-indigo-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Backend</h3>
              <p className="text-gray-400">Node.js, Python, PostgreSQL, Redis</p>
            </div>
            <div className="p-6 rounded-lg bg-indigo-950/50 backdrop-blur-sm">
              <Rocket className="w-8 h-8 text-indigo-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">DevOps</h3>
              <p className="text-gray-400">Docker, AWS, CI/CD, Kubernetes</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
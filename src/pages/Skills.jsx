import { motion, useScroll, useTransform } from 'framer-motion';
import { Code, Terminal, Braces, Shield, Github, Cpu, Database, Palette, Zap, Feather } from 'lucide-react';

const skillGroups = [
  {
    title: 'Programming Languages',
    skills: [
      'C', 'C++', 'Java', 'Python', 'HTML', 'CSS', 'JavaScript', 'React (basics)'
    ],
    icon: Code,
    color: 'text-accent-red'
  },
  {
    title: 'Frameworks & Libraries',
    skills: [
      'Django', 'React (basics)'
    ],
    icon: Feather,
    color: 'text-white'
  },
  {
    title: 'Databases',
    skills: [
      'SQL', 'MongoDB'
    ],
    icon: Database,
    color: 'text-accent-red'
  },
  {
    title: 'Core CS & Data Science',
    skills: [
      'Data Structures and Algorithms', 'OOPS', 'Operating Systems', 'Data Science'
    ],
    icon: Cpu,
    color: 'text-white'
  },
  {
    title: 'Tools',
    skills: [
      'VS Code', 'PyCharm', 'Canva', 'GitHub', 'Cisco Packet Tracer', 'AWS'
    ],
    icon: Terminal,
    color: 'text-accent-red'
  },
];

const Skills = () => {
  // Parallax effect for background blobs
  const { scrollY } = useScroll();
  const yBlob1 = useTransform(scrollY, [0, 600], [0, 80]);
  const yBlob2 = useTransform(scrollY, [0, 600], [0, -60]);
  const yBlob3 = useTransform(scrollY, [0, 600], [0, 50]);

  // Section reveal with clipPath
  const sectionVariants = {
    hidden: { clipPath: 'inset(0 0 100% 0)', opacity: 0 },
    visible: {
      clipPath: 'inset(0 0 0% 0)',
      opacity: 1,
      transition: { duration: 1, ease: 'easeOut' },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-red-900/10 to-black pt-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <motion.div
          style={{ y: yBlob1 }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-32 left-20 w-60 h-60 bg-accent-red rounded-full blur-3xl opacity-10 shadow-2xl"
        />
        <motion.div
          style={{ y: yBlob2 }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-60 right-32 w-80 h-80 bg-white rounded-full blur-3xl opacity-10 shadow-2xl"
        />
        <motion.div
          style={{ y: yBlob3 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-32 left-1/2 w-72 h-72 bg-black rounded-full blur-3xl opacity-10 shadow-2xl"
        />
      </motion.div>
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.01 }}
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 1, ease: 'easeOut' } } }}
      >
        <div className="terminal-header mb-6">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-3 h-3 bg-red-600 rounded-full shadow-md"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full shadow-md"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full shadow-md"></div>
            <span className="text-gray-400 ml-4 font-mono text-sm">portfolio:~$ cd /skills</span>
          </div>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 font-montserrat bg-gradient-to-r from-accent-red via-white to-accent-red bg-[length:200%_100%] animate-gradient bg-clip-text text-transparent drop-shadow-xl text-center mx-auto">
          My <span className="text-red-500">Skills</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto text-center">
          A comprehensive set of skills in programming, data science, web development, and modern tools.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
          {skillGroups.map((group, idx) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.01 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.04, boxShadow: '0 0 32px #ef444488' }}
              className="glass-card p-8 rounded-2xl shadow-2xl border border-red-500/30 bg-white/5 backdrop-blur-lg flex flex-col items-center transition-all duration-300 cursor-pointer shadow-xl hover:shadow-accent-red/40"
            >
              <div className={`w-14 h-14 flex items-center justify-center rounded-xl mb-4 text-3xl ${group.color} bg-black/60 shadow-inner`}>
                <group.icon size={36} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 font-mono text-center">{group.title}</h3>
              <ul className="list-disc list-inside text-gray-200 text-base space-y-1 text-left w-full">
                {group.skills.map(skill => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Skills; 
import { motion, useScroll, useTransform } from 'framer-motion';
import { Database, Bot, Braces, Palette, Feather, Sparkles, Shield, Cpu, Terminal, Zap, Code, Github, Linkedin, Award, Trophy, BookOpen, School, Briefcase } from 'lucide-react';

const skills = [
  { name: 'C', icon: Braces, color: 'text-accent-red', category: 'Programming' },
  { name: 'C++', icon: Braces, color: 'text-white', category: 'Programming' },
  { name: 'Java', icon: Code, color: 'text-accent-red', category: 'Programming' },
  { name: 'Python', icon: Code, color: 'text-white', category: 'Programming' },
  { name: 'HTML', icon: Code, color: 'text-accent-red', category: 'Frontend' },
  { name: 'CSS', icon: Palette, color: 'text-white', category: 'Frontend' },
  { name: 'JavaScript', icon: Code, color: 'text-accent-red', category: 'Frontend' },
  { name: 'React (basics)', icon: Code, color: 'text-white', category: 'Frontend' },
  { name: 'Django', icon: Feather, color: 'text-accent-red', category: 'Framework' },
  { name: 'SQL', icon: Database, color: 'text-white', category: 'Database' },
  { name: 'MongoDB', icon: Database, color: 'text-accent-red', category: 'Database' },
  { name: 'VS Code', icon: Terminal, color: 'text-white', category: 'Tools' },
  { name: 'PyCharm', icon: Terminal, color: 'text-accent-red', category: 'Tools' },
  { name: 'Canva', icon: Palette, color: 'text-white', category: 'Tools' },
  { name: 'GitHub', icon: Github, color: 'text-accent-red', category: 'Tools' },
  { name: 'Cisco Packet Tracer', icon: Cpu, color: 'text-white', category: 'Tools' },
  { name: 'AWS', icon: Zap, color: 'text-accent-red', category: 'Tools' },
];

const projects = [
  {
    title: 'Smart Trading using Reinforcement Learning',
    year: '2023',
    description: 'Developed an algorithmic trading system using reinforcement learning to automate trading decisions based on real-time market data. Optimized trading strategies, enhanced responsiveness to market changes, and reduced human error, increasing efficiency and profitability.',
    tech: 'HTML, CSS, Reinforcement Learning, Neural Networks, TensorFlow, Pandas',
  },
  {
    title: 'Retrieval-Augmented Chat Assistant',
    year: '2024',
    description: 'Built an AI assistant using Retrieval-Augmented Generation (RAG) to answer user queries based on chat logs. Combined advanced language models and retrieval techniques to provide context-aware responses while maintaining data privacy.',
    tech: 'Python, LangChain, Groq AI, Streamlit, SentenceTransformers, Chroma DB',
  },
  {
    title: 'HubSpot MCP Server',
    year: '2025',
    description: 'Developed a Python-based tool integrating AI assistants with HubSpot’s CRM using the Model Context Protocol (MCP). Enabled natural language control of contacts, deals, and carts, powered by Azure OpenAI. Designed for modularity, robust error handling, and automation support to streamline marketing and sales workflows.',
    tech: 'Python, Model Context Protocol (MCP)',
  },
];

const certifications = [
  { title: 'Data Structures Algorithm', year: '2023', platform: 'Udemy', icon: Award, color: 'text-accent-red' },
  { title: 'Java Programming', year: '2023', platform: 'Udemy', icon: Award, color: 'text-white' },
  { title: 'Practical Cyber Security for Cyber Security Practitioners', year: '2024', platform: 'NPTEL', icon: Award, color: 'text-accent-red' },
  { title: 'Programming in Modern C++', year: '2024', platform: 'NPTEL', icon: Award, color: 'text-white' },
  { title: 'AWS Cloud Quest: Cloud Practitioner', year: '2024', platform: 'AWS', icon: Award, color: 'text-accent-red' },
  { title: 'JLPT N3 Certification', year: '2024', platform: 'JLPT', icon: Award, color: 'text-white' },
];

const internships = [
  { title: 'CodeCraft Winter Internship (Django)', org: 'Mosaique Pvt Ltd', icon: Briefcase, color: 'text-accent-red' },
  { title: 'Cybersecurity Internship', org: 'Ditto Cybersecurity', icon: Briefcase, color: 'text-white' },
];

const education = [
  { degree: 'B.E. (CSE - AI & ML)', school: 'Sri Eshwar College of Engineering', year: '2022 - 2026', details: 'CGPA: 7.8 (up to 6th semester)', icon: School, color: 'text-accent-red' },
  { degree: 'HSC', school: 'Vidhya Vikashini Matric Higher Secondary School', year: '2020 - 2022', details: '88.67%', icon: School, color: 'text-white' },
  { degree: 'SSLC', school: 'Vidhya Vikashini Matric Higher Secondary School', year: '2019 - 2020', details: '83.4%', icon: School, color: 'text-accent-red' },
];

const About = () => {
  // Parallax effect for background blobs
  const { scrollY } = useScroll();
  const yBlob1 = useTransform(scrollY, [0, 600], [0, 80]);
  const yBlob2 = useTransform(scrollY, [0, 600], [0, -60]);
  const yBlob3 = useTransform(scrollY, [0, 600], [0, 50]);

  return (
    <div className="min-h-screen bg-dark-bg pt-20 relative overflow-hidden">
      {/* Parallax Background Elements */}
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
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.01 }}
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 1, ease: 'easeOut' } } }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="terminal-header mb-6">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-3 h-3 bg-accent-red rounded-full"></div>
              <div className="w-3 h-3 bg-white rounded-full"></div>
              <div className="w-3 h-3 bg-black rounded-full border border-white"></div>
              <span className="text-gray-400 ml-4 font-mono text-sm">portfolio:~$ cd /about</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-montserrat bg-gradient-to-r from-accent-red via-white to-accent-red bg-[length:200%_100%] animate-gradient bg-clip-text text-transparent">
            About <span className="text-gradient">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left: Avatar and Bio */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-1"
          >
            <div className="relative group mb-8 glass-card shadow-xl">
              {/* Glow background */}
              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                  filter: [
                    'blur(32px) brightness(1.2)',
                    'blur(40px) brightness(1.4)',
                    'blur(32px) brightness(1.2)'
                  ],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-accent-red to-black opacity-60 blur-2xl z-0"
              />
              {/* Avatar */}
              <div className="relative z-10 w-48 h-48 rounded-2xl overflow-hidden glass-card shadow-xl mx-auto">
                <motion.img
                  src="/src/image/ChatGPT Image Jun 18, 2025, 02_30_10 PM.png"
                  alt="Naveen Kumar T"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>

            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-white mb-4 font-mono">Naveen Kumar T</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                I am a passionate Computer Science Engineering (AI & ML) student with a strong foundation in programming, data science, and modern web technologies. I enjoy building intelligent systems and automating solutions to real-world problems. Always eager to learn and grow beyond limits.
              </p>
              <div className="text-base text-gray-400">
                <div className="mb-2"><span className="font-semibold text-white">Phone:</span> <a href="tel:+917695831532" className="text-accent-red hover:underline">+91 76958 31532</a></div>
                <div className="mb-2"><span className="font-semibold text-white">Email:</span> <a href="mailto:naveenkumar.t2022ai-ml@sece.ac.in" className="text-accent-red hover:underline">naveenkumar.t2022ai-ml@sece.ac.in</a></div>
                <div className="mb-2"><span className="font-semibold text-white">Domains:</span> Data Science, AI & ML, Web Development, Cyber Security</div>
                <div className="mb-2"><span className="font-semibold text-white">GitHub:</span> <a href="#" className="text-accent-red hover:underline">GitHub</a></div>
                <div className="mb-2"><span className="font-semibold text-white">LinkedIn:</span> <a href="#" className="text-accent-red hover:underline">LinkedIn</a></div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Skills, Projects, Certifications, Internships, Education */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-2 space-y-12"
          >
            {/* Skills Section */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 font-mono">Skills & Technologies</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {skills.map((skill, idx) => (
                  <div key={skill.name} className="flex items-center space-x-3 mb-2">
                    <skill.icon size={20} className={skill.color} />
                    <span className="text-gray-200 text-base">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects Section */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 font-mono">Projects</h3>
              <div className="space-y-4">
                {projects.map((project, idx) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: idx * 0.1 }}
                    className="glass-card p-4 rounded-lg hover:bg-dark-card/50 transition-colors group shadow-xl hover:shadow-accent-red/40"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-dark-card rounded-lg flex items-center justify-center text-accent-red group-hover:scale-110 transition-transform">
                        <BookOpen size={24} />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-semibold group-hover:text-accent-red transition-colors">{project.title} <span className="text-xs text-gray-400 font-normal">({project.year})</span></h4>
                        <p className="text-gray-400 text-sm mb-1">{project.description}</p>
                        <p className="text-xs text-gray-500">Tech Stack: {project.tech}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications Section */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 font-mono">Certifications</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {certifications.map((cert, idx) => (
                  <motion.div
                    key={cert.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: idx * 0.1 }}
                    className="glass-card p-4 rounded-lg hover:bg-dark-card/50 transition-colors group shadow-xl hover:shadow-accent-red/40"
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 bg-dark-card rounded-lg flex items-center justify-center ${cert.color} group-hover:scale-110 transition-transform`}>
                        <cert.icon size={20} />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-semibold text-sm group-hover:text-accent-red transition-colors">{cert.title}</h4>
                        <p className="text-gray-400 text-xs">{cert.platform} • {cert.year}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Internships Section */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 font-mono">Internships</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {internships.map((intern, idx) => (
                  <motion.div
                    key={intern.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: idx * 0.1 }}
                    className="glass-card p-4 rounded-lg hover:bg-dark-card/50 transition-colors group shadow-xl hover:shadow-accent-red/40"
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 bg-dark-card rounded-lg flex items-center justify-center ${intern.color} group-hover:scale-110 transition-transform`}>
                        <intern.icon size={20} />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-semibold text-sm group-hover:text-accent-red transition-colors">{intern.title}</h4>
                        <p className="text-gray-400 text-xs">{intern.org}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 font-mono">Education</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {education.map((edu, idx) => (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: idx * 0.1 }}
                    className="glass-card p-4 rounded-lg hover:bg-dark-card/50 transition-colors group shadow-xl hover:shadow-accent-red/40"
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 bg-dark-card rounded-lg flex items-center justify-center ${edu.color} group-hover:scale-110 transition-transform`}>
                        <edu.icon size={20} />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-semibold text-sm group-hover:text-accent-red transition-colors">{edu.degree}</h4>
                        <p className="text-gray-400 text-xs">{edu.school} • {edu.year}</p>
                        <p className="text-gray-400 text-xs">{edu.details}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About; 
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Code, Zap, Sparkles, Shield, Terminal, Cpu } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const Home = () => {
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const fullText = "Building intelligent, secure, and scalable solutions with AI, data, and code.";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  // Parallax effect for background blobs
  const { scrollY } = useScroll();
  const yBlob1 = useTransform(scrollY, [0, 600], [0, 80]);
  const yBlob2 = useTransform(scrollY, [0, 600], [0, -60]);
  const yBlob3 = useTransform(scrollY, [0, 600], [0, 50]);

  // Section reveal with opacity only
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1, ease: 'easeOut' },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-dark-bg relative overflow-hidden">
      {/* Parallax Background Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <motion.div
          style={{ y: yBlob1 }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 left-10 w-72 h-72 bg-accent-red rounded-full blur-3xl opacity-20 shadow-2xl"
        />
        <motion.div
          style={{ y: yBlob2 }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-40 right-20 w-96 h-96 bg-white rounded-full blur-3xl opacity-10 shadow-2xl"
        />
        <motion.div
          style={{ y: yBlob3 }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-20 left-1/3 w-80 h-80 bg-black rounded-full blur-3xl opacity-10 shadow-2xl"
        />
      </motion.div>

      {/* Terminal-style grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 z-0"></div>

      {/* Floating Back-to-Top Button */}
      <motion.a
        href="#home"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-accent-red text-white shadow-xl hover:scale-110 hover:bg-white hover:text-accent-red transition-all duration-300"
        whileHover={{ scale: 1.15 }}
        title="Back to Top"
      >
        <ArrowRight style={{ transform: 'rotate(-90deg)' }} size={24} />
      </motion.a>

      {/* Hero Section */}
      <motion.section
        className="relative z-10 min-h-screen flex items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.01 }}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left Content - Terminal Style */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Terminal Header */}
              <div className="terminal-header mb-6">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-accent-red rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-400 ml-4 font-mono text-sm">portfolio:~$</span>
                </div>
              </div>

              {/* Name and Title */}
              <motion.h1
                variants={itemVariants}
                className="text-5xl md:text-7xl font-bold leading-tight font-montserrat drop-shadow-xl"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <span className="bg-gradient-to-r from-accent-red via-white to-accent-red bg-[length:200%_100%] animate-gradient bg-clip-text text-transparent">[Naveen Kumar T]</span>
                <br />
                <span className="text-gradient"></span>
              </motion.h1>
              
              <motion.h2
                variants={itemVariants}
                className="text-2xl md:text-3xl font-semibold text-gray-300 font-mono"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
              >
                Computer Science Engineer (AI & ML) | Data Science | Web Developer | Cybersecurity Enthusiast
              </motion.h2>
              
              {/* Typing Effect */}
              <motion.div
                variants={itemVariants}
                className="text-xl text-gray-400 max-w-2xl leading-relaxed font-mono"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.4 }}
              >
                <span className="text-accent-red">$</span> {text}
                <span className={`inline-block w-2 h-6 bg-accent-red ml-1 ${isTyping ? 'animate-pulse' : ''}`}></span>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <motion.button
                    whileHover={{ scale: 1.08, boxShadow: '0 0 32px #ef4444cc', filter: 'brightness(1.1)' }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary flex items-center space-x-2 terminal-btn shadow-xl glass-card hover:shadow-accent-red/60 transition-all duration-300"
                  >
                    <Terminal size={20} />
                    <span>Resume</span>
                    <ArrowRight size={20} />
                  </motion.button>
                </a>
                
                <a href="#projects">
                  <motion.button
                    whileHover={{ scale: 1.08, boxShadow: '0 0 32px #fff', filter: 'brightness(1.1)' }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-secondary flex items-center space-x-2 terminal-btn shadow-xl glass-card hover:shadow-white/60 transition-all duration-300"
                  >
                    <Code size={20} />
                    <span>View Projects</span>
                  </motion.button>
                </a>
              </motion.div>

              {/* Tech Stack Preview */}
              <motion.ul
                variants={itemVariants}
                className="flex items-center space-x-6 text-sm text-gray-400 font-mono"
              >
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="flex items-center space-x-2 group relative"
                >
                  <Shield size={16} className="text-accent-red group-hover:scale-125 transition-transform duration-200" />
                  <span>Cybersecurity</span>
                  <span className="absolute left-1/2 -top-8 -translate-x-1/2 px-2 py-1 rounded bg-black text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20 shadow-lg">Cybersecurity</span>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex items-center space-x-2 group relative"
                >
                  <Cpu size={16} className="text-white group-hover:scale-125 transition-transform duration-200" />
                  <span>Data Science</span>
                  <span className="absolute left-1/2 -top-8 -translate-x-1/2 px-2 py-1 rounded bg-black text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20 shadow-lg">Data Science</span>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex items-center space-x-2 group relative"
                >
                  <Sparkles size={16} className="text-accent-red group-hover:scale-125 transition-transform duration-200" />
                  <span>AI/ML</span>
                  <span className="absolute left-1/2 -top-8 -translate-x-1/2 px-2 py-1 rounded bg-black text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20 shadow-lg">AI/ML</span>
                </motion.li>
              </motion.ul>
            </motion.div>

            {/* Right Content - Advanced Terminal Card */}
            <motion.div
              variants={itemVariants}
              className="relative flex justify-center lg:justify-end"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
            >
              <div className="relative w-full max-w-lg">
                {/* Terminal Card */}
                <motion.div
                  variants={floatingVariants}
                  animate="animate"
                  className="terminal-card p-8 shadow-2xl hover:shadow-accent-red/40 transition-shadow duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="space-y-6">
                    {/* Terminal Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-accent-red rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="text-gray-400 font-mono text-sm">terminal</span>
                    </div>

                    {/* Terminal Content */}
                    <div className="space-y-4 font-mono text-sm">
                      <div className="flex items-center space-x-2">
                        <span className="text-accent-red">$</span>
                        <span className="text-white">whoami</span>
                      </div>
                      <div className="text-gray-300 ml-4">
                        [naveenkumart] - Computer Science Engineer (AI & ML) | Data Science | Web Developer | Cybersecurity Enthusiast
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <span className="text-accent-red">$</span>
                        <span className="text-white">ls skills/</span>
                      </div>
                      <div className="text-gray-300 ml-4">
                        C/C++, Python, Java, HTML, CSS, JavaScript, React, Django, SQL, MongoDB, AWS, GitHub, Cybersecurity, Data Science
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <span className="text-accent-red">$</span>
                        <span className="text-white">cat achievements.txt</span>
                      </div>
                      <div className="text-gray-300 ml-4">
                        • Smart Trading using Reinforcement Learning<br/>
                        • Retrieval-Augmented Chat Assistant<br/>
                        • HubSpot MCP Server<br/>
                        • Multiple certifications and internships
                      </div>
                    </div>

                    {/* Floating Elements */}
                    <motion.div
                      animate={{
                        y: [-5, 5, -5],
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute -top-4 -right-4 w-8 h-8 bg-accent-red rounded-full opacity-60"
                    />
                    <motion.div
                      animate={{
                        y: [5, -5, 5],
                        rotate: [0, -5, 5, 0],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute -bottom-4 -left-4 w-6 h-6 bg-white rounded-full opacity-60"
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Add similar scroll-based animation wrappers to any other main sections here if present */}
    </div>
  );
};

export default Home; 
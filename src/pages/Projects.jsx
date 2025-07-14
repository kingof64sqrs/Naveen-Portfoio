import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, ExternalLink, Code, BookOpen } from 'lucide-react';

const projects = [
  {
    title: 'Smart Trading using Reinforcement Learning',
    description: 'Developed an algorithmic trading system using reinforcement learning to automate trading decisions based on real-time market data. Optimized trading strategies, enhanced responsiveness to market changes, and reduced human error, increasing efficiency and profitability.',
    tags: ['#ReinforcementLearning', '#Trading', '#AI', '#TensorFlow', '#Pandas'],
    github: '',
    demo: '',
    tech: ['HTML', 'CSS', 'Reinforcement Learning', 'Neural Networks', 'TensorFlow', 'Pandas'],
    icon: BookOpen,
    color: 'text-accent-red',
    category: 'AI/ML'
  },
  {
    title: 'Retrieval-Augmented Chat Assistant',
    description: 'Built an AI assistant using Retrieval-Augmented Generation (RAG) to answer user queries based on chat logs. Combined advanced language models and retrieval techniques to provide context-aware responses while maintaining data privacy.',
    tags: ['#RAG', '#AI', '#LangChain', '#ChromaDB', '#Python'],
    github: '',
    demo: '',
    tech: ['Python', 'LangChain', 'Groq AI', 'Streamlit', 'SentenceTransformers', 'Chroma DB'],
    icon: BookOpen,
    color: 'text-accent-red',
    category: 'AI/ML'
  },
  {
    title: 'HubSpot MCP Server',
    description: 'Developed a Python-based tool integrating AI assistants with HubSpot’s CRM using the Model Context Protocol (MCP). Enabled natural language control of contacts, deals, and carts, powered by Azure OpenAI. Designed for modularity, robust error handling, and automation support to streamline marketing and sales workflows.',
    tags: ['#Python', '#MCP', '#HubSpot', '#AzureOpenAI'],
    github: '',
    demo: '',
    tech: ['Python', 'Model Context Protocol (MCP)'],
    icon: BookOpen,
    color: 'text-accent-red',
    category: 'AI/ML'
  },
];

const techIcons = {
  'Python': Code,
  'HTML': Code,
  'CSS': Code,
  'Reinforcement Learning': Code,
  'Neural Networks': Code,
  'TensorFlow': Code,
  'Pandas': Code,
  'LangChain': Code,
  'Groq AI': Code,
  'Streamlit': Code,
  'SentenceTransformers': Code,
  'Chroma DB': Code,
  'Model Context Protocol (MCP)': Code,
};

const Projects = () => {
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
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.01 }}
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 1, ease: 'easeOut' } } }}
      >
        {/* Terminal Header */}
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
              <span className="text-gray-400 ml-4 font-mono text-sm">portfolio:~$ cd /projects</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-montserrat bg-gradient-to-r from-accent-red via-white to-accent-red bg-[length:200%_100%] animate-gradient bg-clip-text text-transparent">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Showcasing my expertise in AI/ML, data science, and automation projects
          </p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
              }}
              whileHover={{ scale: 1.04, boxShadow: '0 0 48px #ef444488' }}
              className="relative group glass-card p-6 rounded-2xl transition-all duration-300 cursor-pointer overflow-hidden shadow-xl hover:shadow-accent-red/40"
            >
              {/* Project Icon */}
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-accent-red/10 text-accent-red shadow-md`}>
                  <project.icon size={24} />
                </div>
                <span className="text-xs px-2 py-1 rounded bg-dark-card/70 text-gray-400 font-mono">
                  {project.category}
                </span>
              </div>

              {/* Project Title */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-red transition-colors duration-200">
                {project.title}
              </h3>

              {/* Project Description */}
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <motion.span
                    key={tag}
                    whileHover={{ scale: 1.1, backgroundColor: '#ef4444', color: '#fff' }}
                    className="text-xs px-2 py-1 rounded bg-dark-card/70 text-accent-red font-semibold font-mono transition-all duration-200"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center justify-between">
                <div className="flex space-x-2">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-accent-red transition-colors p-2 rounded-lg hover:bg-dark-card/50 shadow-md"
                    title="View on GitHub"
                  >
                    <Github size={18} />
                  </a>
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-accent-red/20 shadow-md"
                    title="Live Demo"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>

              {/* Tech Stack Overlay */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-dark-bg/95 backdrop-blur-sm rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
              >
                <div className="text-center space-y-4">
                  <h4 className="text-white font-semibold mb-4">Tech Stack</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {project.tech.map(tech => {
                      const Icon = techIcons[tech] || Code;
                      return (
                        <div key={tech} className="flex items-center space-x-2 px-3 py-2 rounded bg-dark-card/80 text-xs text-gray-300 border border-dark-border/50 group relative">
                          <Icon size={16} className="text-accent-red group-hover:scale-125 transition-transform duration-200" />
                          <span>{tech}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Projects; 
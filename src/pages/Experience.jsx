import { motion, useScroll, useTransform } from 'framer-motion'
import { Shield, Code, Database, Terminal, Award, Cpu, Zap, Lock, Cloud, Github, Linkedin, ExternalLink, ArrowRight } from 'lucide-react'

const Experience = () => {
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

  const internships = [
    {
      title: 'Full Stack Developer Intern',
      company: 'Better Tomorrow',
      period: 'Jun 2022 - Aug 2022',
      description: 'Developed web applications using MongoDB, Express.js, React, and Node.js. Collaborated in an agile team to meet project requirements and deadlines.',
      icon: Code,
      skills: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Agile']
    },
    {
      title: 'Cybersecurity Intern',
      company: 'Ditto Security',
      period: 'Jan 2024 - Present',
      description: 'Gained practical experience in threat analysis, network security, and risk assessment. Performed vulnerability assessments and helped simulate cyber attack scenarios.',
      icon: Shield,
      skills: ['Threat Analysis', 'Network Security', 'Risk Assessment', 'Vulnerability Assessment', 'Cyber Attack Simulation']
    }
  ]

  const projects = [
    {
      title: 'CyberShield',
      description: 'Developed an AI-driven cybersecurity system to identify and track drug trafficking on Telegram using web scraping, machine learning, and ethical hacking techniques. Implemented steganography analysis and cryptanalysis to detect hidden drug-related content in images, text, and media, enhancing real-time threat detection.',
      technologies: ['AI/ML', 'Web Scraping', 'Steganography', 'Cryptanalysis', 'Python', 'Machine Learning'],
      icon: Shield,
      category: 'Cybersecurity',
      featured: true
    },
    {
      title: 'Network Traffic Analysis',
      description: 'Developed a Network Traffic Analysis system to monitor and analyze packet flow, detect unusual traffic patterns, and visualize network activity. Implemented data collection, filtering, and basic anomaly detection techniques.',
      technologies: ['Network Analysis', 'Packet Monitoring', 'Anomaly Detection', 'Python', 'Data Visualization'],
      icon: Cloud,
      category: 'Network Security',
      featured: true
    },
    {
      title: 'Smart Plant IoT',
      description: 'Smart Plant automates plant watering using IoT technology. It ensures optimal hydration, notifies users when the water tank needs refilling, and triggers a buzzer alert when water is depleted, making plant care effortless.',
      technologies: ['IoT', 'Raspberry Pi', 'Arduino', 'Sensors', 'Automation', 'Hardware'],
      icon: Cpu,
      category: 'IoT/Hardware',
      featured: false
    },
    {
      title: 'AI Hardware Projects',
      description: 'Built advanced AI projects using cutting-edge hardware including Raspberry Pi and NVIDIA Jetson Nano boards. Implemented real-time computer vision, edge computing, and AI inference on embedded systems for cybersecurity and automation applications.',
      technologies: ['Raspberry Pi', 'NVIDIA Jetson Nano', 'Computer Vision', 'Edge Computing', 'AI Inference', 'Embedded Systems'],
      icon: Cpu,
      category: 'AI/Hardware',
      featured: true
    },
    {
      title: 'MCP (Model Context Protocol)',
      description: 'Developed projects using Model Context Protocol (MCP) for advanced AI model communication and context management. Implemented secure, efficient protocols for AI model interactions and data processing in cybersecurity applications.',
      technologies: ['MCP', 'AI Protocols', 'Model Communication', 'Context Management', 'Python', 'AI/ML'],
      icon: Cloud,
      category: 'Advanced Computing',
      featured: true
    },
    {
      title: 'HPC (High Performance Computing)',
      description: 'Implemented High Performance Computing (HPC) solutions for large-scale data processing, parallel computing, and distributed systems. Optimized algorithms for cybersecurity analysis, network monitoring, and AI model training.',
      technologies: ['HPC', 'Parallel Computing', 'Distributed Systems', 'GPU Computing', 'Cluster Computing', 'Performance Optimization'],
      icon: Zap,
      category: 'Advanced Computing',
      featured: true
    }
  ]

  const certifications = [
    { name: 'Mastering Data Structure & Algorithm Using C and C++', issuer: 'Udemy', year: '2025', icon: Code },
    { name: 'Mastering in C', issuer: 'Udemy', year: '2025', icon: Code },
    { name: 'Certified Blockchain Associate', issuer: 'Kerala Blockchain Academy', year: '2025', icon: Zap },
    { name: 'Network Essentials', issuer: 'Cisco Academy', year: '2025', status: 'ONGOING', icon: Cloud },
    { name: 'Ethical Hacking', issuer: 'TCM Security', year: '2025', status: 'ONGOING', icon: Shield }
  ]

  const achievements = [
    { title: 'Tirupur Road Safety Ideathon 2023', position: '3rd Place', location: 'Collector Office, Tiruppur', icon: Award },
    { title: 'ProjectExpo 2023', position: '2nd Place', location: 'SECE, Coimbatore', icon: Award },
    { title: 'Cryptera 2023 (National Level Hackathon)', position: '2nd Place', location: 'CIT, Coimbatore', icon: Shield },
    { title: 'Elanza 2023', position: 'Winner', location: 'Bannari Institute of Technology (BIT)', icon: Zap },
    { title: 'Talos 2024', position: '2nd Place', location: 'CIT, Chennai', icon: Award }
  ]

  const skills = {
    'Industry Knowledge': ['Penetration Testing', 'VAPT', 'Cybersecurity'],
    'Programming Languages': ['Python', 'Bash Scripting', 'C', 'C++', 'Java'],
    'Tools & Technologies': ['Burp Suite', 'Postman API', 'Metasploit', 'Nmap', 'Netcat', 'SQL Map', 'Hydra', 'Git', 'GitHub'],
    'Operating Systems': ['Kali Linux', 'Windows'],
    'Virtualization': ['VMware', 'VirtualBox'],
    'Frontend': ['HTML', 'CSS', 'JavaScript', 'React.js'],
    'Backend': ['Node.js', 'Express.js', 'Nginx'],
    'Database': ['MySQL', 'Firebase', 'MongoDB'],
    'Hardware & IoT': ['Raspberry Pi', 'NVIDIA Jetson Nano', 'Arduino', 'Sensors', 'Computer Vision', 'Edge Computing'],
    'Advanced Computing': ['MCP (Model Context Protocol)', 'HPC (High Performance Computing)', 'AI/ML', 'Parallel Computing', 'Distributed Systems', 'GPU Computing'],
    'AI & Machine Learning': ['Computer Vision', 'AI Inference', 'Model Communication', 'Context Management', 'Performance Optimization']
  }

  const education = [
    {
      degree: 'B.Tech in Computer Science & Business Systems',
      institution: 'Sri Eshwar College of Engineering, Coimbatore',
      period: 'Sep 2019 - Sep 2023',
    },
    {
      degree: 'SSLC & HSC',
      institution: 'Trinity Matric Higher Secondary School',
      period: 'Sep 2019 - Sep 2023',
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <motion.section className="py-20 bg-gradient-to-br from-black via-red-900/5 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white font-montserrat mb-6 bg-gradient-to-r from-accent-red via-white to-accent-red bg-[length:200%_100%] animate-gradient bg-clip-text text-transparent drop-shadow-xl">
              <span className="text-red-400">$</span> cat experience.txt
            </h1>
            <p className="text-xl text-gray-300 font-mono max-w-3xl mx-auto">
              Cybersecurity specialist with expertise in MERN stack development, AI hardware projects using Raspberry Pi and NVIDIA Jetson Nano, 
              and advanced computing technologies including MCP (Model Context Protocol) and HPC (High Performance Computing).
            </p>
          </motion.div>
        </div>
      </motion.section>
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

      {/* Internships Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white font-mono mb-4">
              <span className="text-red-400">$</span> ls internships/
            </h2>
            <p className="text-gray-300 font-mono">Professional experience and industry exposure</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {internships.map((internship, index) => (
              <motion.div
                key={internship.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(255, 68, 68, 0.3)" }}
                className="bg-black/50 backdrop-blur-md border border-red-500/20 rounded-lg p-6 hover:border-red-500/40 transition-all duration-300 shadow-xl hover:shadow-accent-red/40"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <internship.icon className="w-8 h-8 text-red-400" />
                  <div>
                    <h3 className="text-xl font-semibold text-white font-mono">{internship.title}</h3>
                    <p className="text-red-400 font-mono text-sm">{internship.company} • {internship.period}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 font-mono text-sm leading-relaxed mb-4">
                  {internship.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {internship.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-gray-800/50 text-gray-300 text-xs font-mono rounded border border-gray-700/50 hover:border-red-500/50 hover:text-red-400 transition-all duration-300 cursor-pointer"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gradient-to-br from-black via-red-900/5 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white font-mono mb-4">
              <span className="text-red-400">$</span> ls projects/
            </h2>
            <p className="text-gray-300 font-mono">Advanced projects in cybersecurity, IoT, and computing</p>
          </motion.div>

          <div className="space-y-8">
            {projects.filter(p => p.featured).map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.01, boxShadow: "0 0 25px rgba(255, 68, 68, 0.3)" }}
                className="bg-black/50 backdrop-blur-md border border-red-500/20 rounded-lg p-6 hover:border-red-500/40 transition-all duration-300 shadow-xl hover:shadow-accent-red/40"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <project.icon className="w-8 h-8 text-red-400" />
                  <div>
                    <h3 className="text-xl font-semibold text-white font-mono">{project.title}</h3>
                    <span className="text-red-400 font-mono text-sm">{project.category}</span>
                  </div>
                </div>
                
                <p className="text-gray-300 font-mono text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-800/50 text-gray-300 text-xs font-mono rounded border border-gray-700/50 hover:border-red-500/50 hover:text-red-400 transition-all duration-300 cursor-pointer"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* All Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(255, 68, 68, 0.3)" }}
                className="bg-black/50 backdrop-blur-md border border-red-500/20 rounded-lg p-4 hover:border-red-500/40 transition-all duration-300 shadow-xl hover:shadow-accent-red/40"
              >
                <div className="flex items-center space-x-2 mb-3">
                  <project.icon className="w-5 h-5 text-red-400" />
                  <h3 className="text-lg font-semibold text-white font-mono">{project.title}</h3>
                </div>
                
                <p className="text-gray-300 font-mono text-xs leading-relaxed mb-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-800/50 text-gray-300 text-xs font-mono rounded border border-gray-700/50 hover:border-red-500/50 hover:text-red-400 transition-all duration-300 cursor-pointer"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white font-mono mb-4">
              <span className="text-red-400">$</span> cat skills.json
            </h2>
            <p className="text-gray-300 font-mono">Comprehensive technical expertise and tools</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, skillList], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, boxShadow: "0 0 15px rgba(255, 68, 68, 0.3)" }}
                className="bg-black/50 backdrop-blur-md border border-red-500/20 rounded-lg p-6 hover:border-red-500/40 transition-all duration-300 shadow-xl hover:shadow-accent-red/40"
              >
                <h3 className="text-lg font-semibold text-white font-mono mb-4">{category}</h3>
                <div className="space-y-2">
                  {skillList.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                      whileHover={{ x: 5, color: '#ff4444' }}
                      className="text-gray-300 font-mono text-sm hover:text-red-400 transition-colors cursor-pointer"
                    >
                      • {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-gradient-to-br from-black via-red-900/5 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white font-mono mb-4">
              <span className="text-red-400">$</span> ls certifications/
            </h2>
            <p className="text-gray-300 font-mono">Professional certifications and ongoing learning</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, boxShadow: "0 0 15px rgba(255, 68, 68, 0.3)" }}
                className="bg-black/50 backdrop-blur-md border border-red-500/20 rounded-lg p-6 hover:border-red-500/40 transition-all duration-300 shadow-xl hover:shadow-accent-red/40"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <cert.icon className="w-6 h-6 text-red-400" />
                  <div>
                    <h3 className="text-sm font-semibold text-white font-mono">{cert.name}</h3>
                    <p className="text-gray-400 font-mono text-xs">{cert.issuer}</p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-red-400 font-mono text-xs">{cert.year}</span>
                  {cert.status && (
                    <span className="text-yellow-400 font-mono text-xs animate-pulse">{cert.status}</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white font-mono mb-4">
              <span className="text-red-400">$</span> cat achievements.txt
            </h2>
            <p className="text-gray-300 font-mono">Competition wins and recognitions</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, boxShadow: "0 0 15px rgba(255, 68, 68, 0.3)" }}
                className="bg-black/50 backdrop-blur-md border border-red-500/20 rounded-lg p-6 hover:border-red-500/40 transition-all duration-300 shadow-xl hover:shadow-accent-red/40"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <achievement.icon className="w-6 h-6 text-red-400" />
                  <div>
                    <h3 className="text-sm font-semibold text-white font-mono">{achievement.title}</h3>
                    <p className="text-red-400 font-mono text-xs">{achievement.position}</p>
                  </div>
                </div>
                <p className="text-gray-400 font-mono text-xs">{achievement.location}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white font-mono mb-4">
              <span className="text-red-400">$</span> cat education.txt
            </h2>
            <p className="text-gray-300 font-mono">Academic background and qualifications</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((edu, idx) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-black/50 backdrop-blur-md border border-red-500/20 rounded-lg p-6 hover:border-red-500/40 transition-all duration-300 shadow-xl hover:shadow-accent-red/40"
              >
                <h3 className="text-xl font-semibold text-white font-mono mb-2">{edu.degree}</h3>
                <p className="text-gray-300 font-mono text-sm mb-1">{edu.institution}</p>
                <p className="text-red-400 font-mono text-xs">{edu.period}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-black via-red-900/5 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white font-mono">
              <span className="text-red-400">$</span> echo "Ready for the next challenge?"
            </h2>
            <p className="text-xl text-gray-300 font-mono">
              Let's build something innovative with cybersecurity, AI hardware, MCP protocols, and HPC solutions
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(255, 68, 68, 0.6)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-mono rounded-lg transition-all duration-300 shadow-lg shadow-red-500/20 hover:shadow-red-500/50 border border-red-500/30 flex items-center space-x-2 group mx-auto"
            >
              <Terminal className="w-5 h-5 group-hover:animate-pulse" />
              <span>Start a Project</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Experience 
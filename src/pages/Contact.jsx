import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Terminal, Send } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'naveenkumar.t2022ai-ml@sece.ac.in',
    link: 'mailto:naveenkumar.t2022ai-ml@sece.ac.in',
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+91 76958 31532',
    link: 'tel:+917695831532',
  },
  {
    icon: MapPin,
    title: 'Coimbatore',
    value: 'Coimbatore',
    link: '#',
  },
];

const socialLinks = [
  {
    icon: Github,
    name: 'GitHub',
    url: 'https://github.com/your-github', // Replace with actual username if available
    color: 'hover:text-red-500',
  },
  {
    icon: Linkedin,
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/your-linkedin', // Replace with actual profile if available
    color: 'hover:text-red-500',
  },
];

const Contact = () => {
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
        {/* Terminal Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="terminal-header mb-6">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-3 h-3 bg-red-600 rounded-full shadow-md"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full shadow-md"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full shadow-md"></div>
              <span className="text-gray-400 ml-4 font-mono text-sm">portfolio:~$ cd /contact</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 font-montserrat bg-gradient-to-r from-accent-red via-white to-accent-red bg-[length:200%_100%] animate-gradient bg-clip-text text-transparent drop-shadow-xl">
            Get In <span className="text-red-500">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form - Terminal Style */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="glass-card p-8 rounded-2xl shadow-2xl border border-red-500/30 bg-white/5 backdrop-blur-lg shadow-xl hover:shadow-accent-red/40"
          >
            {/* Terminal Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-600 rounded-full shadow-md"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full shadow-md"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full shadow-md"></div>
              </div>
              <span className="text-gray-400 font-mono text-sm">contact-form</span>
            </div>

            <h2 className="text-2xl font-bold text-white mb-6 font-mono">Send a Message</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative group">
                  <label className="block text-sm font-medium text-gray-300 mb-2 font-mono">
                    <span className="text-red-500">$</span> name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-black/60 border border-red-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors font-mono shadow-inner"
                    placeholder="Enter your name"
                  />
                  {/* Custom Tooltip */}
                  <span className="absolute left-0 -bottom-7 opacity-0 group-hover:opacity-100 transition bg-black text-white text-xs px-2 py-1 rounded shadow-lg pointer-events-none z-10">
                    Your full name
                  </span>
                </div>
                <div className="relative group">
                  <label className="block text-sm font-medium text-gray-300 mb-2 font-mono">
                    <span className="text-red-500">$</span> email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-black/60 border border-red-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors font-mono shadow-inner"
                    placeholder="your.email@example.com"
                  />
                  <span className="absolute left-0 -bottom-7 opacity-0 group-hover:opacity-100 transition bg-black text-white text-xs px-2 py-1 rounded shadow-lg pointer-events-none z-10">
                    We'll never share your email.
                  </span>
                </div>
              </div>
              <div className="relative group">
                <label className="block text-sm font-medium text-gray-300 mb-2 font-mono">
                  <span className="text-red-500">$</span> subject
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-black/60 border border-red-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors font-mono shadow-inner"
                  placeholder="What's this about?"
                />
                <span className="absolute left-0 -bottom-7 opacity-0 group-hover:opacity-100 transition bg-black text-white text-xs px-2 py-1 rounded shadow-lg pointer-events-none z-10">
                  Brief subject of your message
                </span>
              </div>
              <div className="relative group">
                <label className="block text-sm font-medium text-gray-300 mb-2 font-mono">
                  <span className="text-red-500">$</span> message
                </label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 bg-black/60 border border-red-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors resize-none font-mono shadow-inner"
                  placeholder="Tell me about your project..."
                />
                <span className="absolute left-0 -bottom-7 opacity-0 group-hover:opacity-100 transition bg-black text-white text-xs px-2 py-1 rounded shadow-lg pointer-events-none z-10">
                  Please provide details
                </span>
              </div>
              <motion.button
                whileHover={{ scale: 1.04, backgroundColor: '#b91c1c' }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-500/20 border border-red-500/30 transition-all duration-300"
              >
                <Terminal size={20} />
                <span>Send Message</span>
                <Send size={20} />
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-bold text-white mb-6 font-mono">Contact Information</h2>
              <div className="space-y-4">
                {contactInfo.map((info, idx) => (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center space-x-4 p-4 glass-card rounded-lg hover:bg-black/60 border border-red-500/30 shadow-md transition-colors group shadow-xl hover:shadow-accent-red/40"
                  >
                    <div className="w-12 h-12 bg-black/70 rounded-lg flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform shadow-inner">
                      <info.icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">{info.title}</h3>
                      <p className="text-gray-300">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-6 font-mono">Follow Me</h2>
              <div className="flex space-x-4">
                {socialLinks.map((social, idx) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    className={`w-12 h-12 bg-black/70 rounded-lg flex items-center justify-center text-gray-300 hover:text-red-500 border border-red-500/30 shadow-md transition-all duration-300 shadow-xl hover:shadow-accent-red/40`}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.5 }}
              className="glass-card p-6 rounded-lg border border-red-500/30 bg-white/5 shadow-lg"
            >
              <h3 className="text-lg font-bold text-white mb-3 font-mono">Quick Info</h3>
              <div className="space-y-2 text-sm text-gray-300">
                <p>• Open to AI/ML collaborations</p>
                <p>• Open to cybersecurity consulting</p>
                <p>• Always learning new technologies</p>
                <p>• Passionate about data science and web development</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact; 
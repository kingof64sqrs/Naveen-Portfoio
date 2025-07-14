import { motion, useScroll, useTransform } from 'framer-motion';
import { Bot, Database, Code, Shield, BookOpen } from 'lucide-react';

const services = [
  {
    title: 'AI/ML Solutions',
    description: 'Custom machine learning and AI solutions for automation, analytics, and intelligent systems.',
    icon: Bot,
    color: 'text-accent-red',
  },
  {
    title: 'Data Science Consulting',
    description: 'Data analysis, visualization, and actionable insights to drive business decisions.',
    icon: Database,
    color: 'text-white',
  },
  {
    title: 'Web Development',
    description: 'Modern, responsive websites and web applications using the latest technologies.',
    icon: Code,
    color: 'text-accent-red',
  },
  {
    title: 'Cybersecurity Consulting',
    description: 'Security assessments, penetration testing, and best practices to protect your digital assets.',
    icon: Shield,
    color: 'text-white',
  },
  {
    title: 'Technical Training',
    description: 'Workshops and training sessions on programming, AI/ML, and cybersecurity topics.',
    icon: BookOpen,
    color: 'text-accent-red',
  },
];

const Services = () => {
  // Parallax effect for background blobs
  const { scrollY } = useScroll();
  const yBlob1 = useTransform(scrollY, [0, 600], [0, 80]);
  const yBlob2 = useTransform(scrollY, [0, 600], [0, -60]);
  const yBlob3 = useTransform(scrollY, [0, 600], [0, 50]);

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
            <span className="text-gray-400 ml-4 font-mono text-sm">portfolio:~$ cd /services</span>
          </div>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 font-montserrat bg-gradient-to-r from-accent-red via-white to-accent-red bg-[length:200%_100%] animate-gradient bg-clip-text text-transparent drop-shadow-xl text-center mx-auto">
          My <span className="text-red-500">Services</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto text-center">
          Explore the main areas where I can help you achieve your goals with technology and expertise.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.01 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.04, boxShadow: '0 0 32px #ef444488' }}
              className="glass-card p-8 rounded-2xl shadow-2xl border border-red-500/30 bg-white/5 backdrop-blur-lg flex flex-col items-center transition-all duration-300 cursor-pointer shadow-xl hover:shadow-accent-red/40"
            >
              <div className={`w-14 h-14 flex items-center justify-center rounded-xl mb-4 text-3xl ${service.color} bg-black/60 shadow-inner`}>
                <service.icon size={36} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 font-mono text-center">{service.title}</h3>
              <p className="text-gray-200 text-base text-center">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Services;

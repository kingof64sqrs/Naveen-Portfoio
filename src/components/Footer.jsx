import { motion } from 'framer-motion';
import { Sun, Moon, Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = ({ darkMode, setDarkMode }) => {
  const navItems = [
    { name: 'Home', path: '#home' },
    { name: 'About', path: '#about' },
    { name: 'Projects', path: '#projects' },
    { name: 'Contact', path: '#contact' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/NaveenKumarThirugnanamhttps://github.com/NaveenKumarThirugnanam', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/naveen-kumar-thirugnanam-7a7618257/?original_referer=', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:contact@example.com', label: 'Email' },
  ];

  return (
    <footer className="bg-dark-card/50 border-t border-dark-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Brand */}
          <div className="col-span-1 md:col-span-2">
            <a href="#home" className="flex items-center space-x-2 mb-4">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-8 h-8 bg-gradient-to-br from-accent-red to-white rounded-lg flex items-center justify-center"
              >
                <span className="text-white font-bold text-sm">P</span>
              </motion.div>
              <span className="text-lg font-bold text-white">ONE CHANCE Associations</span>
            </a>
            <p className="text-gray-400 text-sm max-w-md">
              Building fast, intelligent, and beautiful AI-driven web applications for the modern web.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.path}
                    className="text-gray-400 hover:text-accent-red transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-dark-card rounded-lg text-gray-400 hover:text-accent-red transition-colors duration-200"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-dark-border/50 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 text-gray-400 text-sm mb-4 md:mb-0">
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart size={16} className="text-accent-red" />
            </motion.div>
            <span>by Naveen Kumar T</span>
          </div>

          {/* Theme Toggle */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg bg-dark-card border border-dark-border/50 text-gray-400 hover:text-white transition-colors duration-200"
          >
            {darkMode ? <Sun size={16} /> : <Moon size={16} />}
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Sparkles, Zap, Code, Bot, Brain, Cpu, Rocket, Wifi, Globe, Shield } from 'lucide-react';

const Loader = ({ isLoading, onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentPhase, setCurrentPhase] = useState(0);
  const [particles, setParticles] = useState([]);
  const [svgProgress, setSvgProgress] = useState(0);

  const phases = [
    { name: 'Initializing AI Core', icon: Brain, color: 'text-accent-red' },
    { name: 'Loading Neural Networks', icon: Cpu, color: 'text-accent-red' },
    { name: 'Compiling Codebase', icon: Code, color: 'text-accent-red' },
    { name: 'Optimizing Performance', icon: Zap, color: 'text-accent-red' },
    { name: 'Launching Systems', icon: Rocket, color: 'text-accent-red' },
    { name: 'Connecting to Cloud', icon: Wifi, color: 'text-accent-red' },
    { name: 'Securing Network', icon: Shield, color: 'text-accent-red' },
    { name: 'Naveen Kumar', icon: Globe, color: 'text-accent-red' },
  ];

  useEffect(() => {
    if (!isLoading) return;

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onComplete(), 800);
          return 100;
        }
        return prev + Math.random() * 12;
      });
    }, 150);

    // SVG animation progress
    const svgInterval = setInterval(() => {
      setSvgProgress(prev => {
        if (prev >= 100) return 100;
        return prev + 2;
      });
    }, 50);

    // Generate floating particles
    const particleInterval = setInterval(() => {
      setParticles(prev => {
        const newParticle = {
          id: Date.now() + Math.random(),
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 6 + 3,
          speed: Math.random() * 3 + 1.5,
          color: ['#ef4444', '#ffffff', '#ef4444', '#ffffff'][Math.floor(Math.random() * 4)],
          type: Math.random() > 0.5 ? 'circle' : 'square',
        };
        return [...prev.slice(-25), newParticle];
      });
    }, 80);

    return () => {
      clearInterval(interval);
      clearInterval(svgInterval);
      clearInterval(particleInterval);
    };
  }, [isLoading, onComplete]);

  useEffect(() => {
    setCurrentPhase(Math.floor((progress / 100) * phases.length));
  }, [progress]);

  if (!isLoading) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-dark-bg flex items-center justify-center overflow-hidden"
      >
        {/* Advanced Background Effects */}
        <div className="absolute inset-0">
          {/* Animated Grid */}
          <div className="absolute inset-0 opacity-20">
            <svg width="100%" height="100%" className="w-full h-full">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ef4444" strokeWidth="1" opacity="0.3"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          {/* Gradient Orbs with enhanced effects */}
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, 180, 360],
              x: [0, 20, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-accent-red/30 via-white/20 to-transparent rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
              x: [0, -30, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-white/30 via-accent-red/20 to-transparent rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.4, 1],
              rotate: [180, 360, 180],
              x: [0, 25, 0],
              y: [0, 25, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-accent-red/30 via-white/20 to-transparent rounded-full blur-3xl"
          />
        </div>

        {/* Enhanced Floating Particles */}
        {particles.map(particle => (
          <motion.div
            key={particle.id}
            initial={{ opacity: 0, scale: 0, rotate: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              rotate: [0, 360],
              y: [particle.y, particle.y - 150],
              x: [particle.x, particle.x + Math.random() * 200 - 100],
            }}
            transition={{
              duration: particle.speed,
              ease: "easeOut",
            }}
            className={`absolute ${particle.type === 'square' ? 'w-2 h-2' : 'w-1 h-1'} rounded-full`}
            style={{
              backgroundColor: particle.color,
              boxShadow: `0 0 ${particle.size * 3}px ${particle.color}`,
              transform: particle.type === 'square' ? 'rotate(45deg)' : 'none',
            }}
          />
        ))}

        {/* Main Loader Content */}
        <div className="relative z-10 text-center">
          {/* Advanced SVG Logo Animation */}
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              rotate: [0, 2, -2, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto relative">
              {/* SVG Circle Progress */}
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
                <circle
                  cx="60"
                  cy="60"
                  r="54"
                  stroke="#222222"
                  strokeWidth="4"
                  fill="none"
                />
                <motion.circle
                  cx="60"
                  cy="60"
                  r="54"
                  stroke="url(#gradient)"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ strokeDasharray: "0 339.292", strokeDashoffset: "0" }}
                  animate={{ 
                    strokeDasharray: `${(svgProgress / 100) * 339.292} 339.292`,
                    strokeDashoffset: "0"
                  }}
                  transition={{ duration: 0.3 }}
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ef4444" />
                    <stop offset="50%" stopColor="#ffffff" />
                    <stop offset="100%" stopColor="#ef4444" />
                  </linearGradient>
                </defs>
              </svg>
              
              {/* Center Logo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(239, 68, 68, 0.5)",
                      "0 0 40px rgba(239, 68, 68, 0.8)",
                      "0 0 20px rgba(239, 68, 68, 0.5)"
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-20 h-20 bg-gradient-to-br from-accent-red via-white to-accent-red rounded-2xl flex items-center justify-center overflow-hidden"
                >
                  <motion.img
                    src="/ChatGPT Image Jun 18, 2025, 02_30_10 PM.png"
                    alt="Naveen Kumar T"
                    className="w-full h-full object-cover rounded-2xl"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Remote.ai Branding */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <motion.h1
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
              className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-accent-red via-white to-accent-red bg-[length:200%_100%] bg-clip-text text-transparent"
            >
              NAVEEN KUMAR T
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-gray-400 text-lg"
            >
              ONE CHANCE Platform 
            </motion.p>
          </motion.div>

          {/* Enhanced Current Phase */}
          <motion.div
            key={currentPhase}
            initial={{ opacity: 0, x: -30, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 30, scale: 0.9 }}
            className="flex items-center justify-center space-x-3 mb-8"
          >
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                rotate: { duration: 2, repeat: Infinity, ease: "linear" },
                scale: { duration: 1, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              {phases[currentPhase] && phases[currentPhase].icon && (
                React.createElement(phases[currentPhase].icon, {
                  size: 28,
                  className: phases[currentPhase].color
                })
              )}
            </motion.div>
            <span className="text-gray-300 text-xl font-medium">
              {phases[currentPhase]?.name || 'Initializing...'}
            </span>
          </motion.div>

          {/* Enhanced Progress Bar */}
          <div className="w-96 mx-auto mb-6">
            <div className="relative h-3 bg-dark-card rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
                className="h-full bg-gradient-to-r from-accent-red via-white to-accent-red rounded-full relative"
              >
                <motion.div
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    x: ["-100%", "100%"]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute inset-0 bg-white/30 rounded-full"
                />
              </motion.div>
            </div>
          </div>

          {/* Enhanced Progress Percentage */}
          <motion.div
            key={`progress-${Math.floor(progress)}`}
            initial={{ scale: 1.3, y: -10 }}
            animate={{ scale: 1, y: 0 }}
            className="text-3xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-accent-red via-white to-accent-red bg-clip-text text-transparent">
              {Math.floor(progress)}%
            </span>
          </motion.div>

          {/* Enhanced Loading Dots */}
          <motion.div className="flex justify-center space-x-3">
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={`dot-${i}`}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.4, 1, 0.4],
                  y: [0, -5, 0]
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: i * 0.15,
                  ease: "easeInOut",
                }}
                className="w-4 h-4 bg-gradient-to-r from-accent-red to-white rounded-full"
              />
            ))}
          </motion.div>
        </div>

        {/* Enhanced Corner Decorations */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-8 left-8 w-20 h-20 border-2 border-accent-red/40 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-8 right-8 w-24 h-24 border-2 border-white/40 rounded-full"
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="absolute top-8 right-8 w-16 h-16 border-2 border-accent-red/40 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-8 left-8 w-18 h-18 border-2 border-white/40 rounded-full"
        />

        {/* Additional floating elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/3 right-1/4 w-8 h-8 border border-accent-red/30 rounded-full"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/3 left-1/4 w-6 h-6 border border-white/30 rounded-full"
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default Loader; 
import { Button } from "./ui/button";
import { Mail, Download, Github, Linkedin, Code2, Server, Network } from "lucide-react";
import { motion } from "motion/react";

export function PortfolioHero() {
  const techIcons = [
    { icon: Code2, label: "Development", delay: 0 },
    { icon: Server, label: "IT Support", delay: 0.2 },
    { icon: Network, label: "Networking", delay: 0.4 },
  ];

  return (
    <div id="home" className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 overflow-hidden pt-20 flex items-center">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-block mb-6"
              >
                <div className="bg-cyan-500/20 backdrop-blur-md border border-cyan-400/30 rounded-full px-4 py-2 flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                  <span className="text-sm text-cyan-400">Available for opportunities</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <h1 className="text-gray-400 mb-2">Hello, I'm</h1>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-5xl lg:text-6xl xl:text-7xl text-white mb-4"
              >
                Yon Chanranuth
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="mb-6"
              >
                <motion.span
                  initial={{ backgroundPosition: "0% 50%" }}
                  animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="text-2xl lg:text-3xl bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent bg-[length:200%_auto]"
                >
                  IT Support & Network Engineering
                </motion.span>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg text-gray-300 max-w-xl leading-relaxed mb-8"
              >
                RUPP Graduate specializing in IT infrastructure, network architecture, 
                and technical support. Passionate about solving complex technical challenges 
                and optimizing system performance.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="flex flex-wrap gap-4 mb-8"
              >
                <Button
                  size="lg"
                  className="gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 shadow-lg hover:shadow-cyan-500/50 transition-all"
                >
                  <Mail className="w-5 h-5" />
                  Get In Touch
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-500/10"
                >
                  <Download className="w-5 h-5" />
                  Download CV
                </Button>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex gap-4"
              >
                <a
                  href="#"
                  className="w-12 h-12 bg-gray-800/50 hover:bg-cyan-500/20 border border-gray-700 hover:border-cyan-400 rounded-lg flex items-center justify-center transition-all"
                >
                  <Github className="w-5 h-5 text-gray-400 hover:text-cyan-400" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-gray-800/50 hover:bg-cyan-500/20 border border-gray-700 hover:border-cyan-400 rounded-lg flex items-center justify-center transition-all"
                >
                  <Linkedin className="w-5 h-5 text-gray-400 hover:text-cyan-400" />
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Content - Tech Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Central Circle */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="w-80 h-80 mx-auto relative"
              >
                <div className="absolute inset-0 rounded-full border-2 border-cyan-400/30 border-dashed" />
                <div className="absolute inset-8 rounded-full border-2 border-blue-400/20" />
                <div className="absolute inset-16 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm flex items-center justify-center">
                  <div className="text-center">
                    <Code2 className="w-16 h-16 text-cyan-400 mx-auto mb-2" />
                    <div className="text-white text-sm">IT Professional</div>
                  </div>
                </div>
              </motion.div>

              {/* Orbiting Icons */}
              {techIcons.map((item, index) => {
                const Icon = item.icon;
                const angle = (index * 120) * (Math.PI / 180);
                const radius = 160;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: item.delay + 0.5 }}
                    className="absolute top-1/2 left-1/2"
                    style={{
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    }}
                  >
                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                      className="w-20 h-20 bg-gray-800/80 backdrop-blur-md border border-cyan-400/30 rounded-2xl flex flex-col items-center justify-center shadow-lg"
                    >
                      <Icon className="w-8 h-8 text-cyan-400 mb-1" />
                      <span className="text-xs text-gray-400">{item.label}</span>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-auto" preserveAspectRatio="none">
          <path
            d="M0,64 C360,16 720,16 1080,64 C1440,112 1440,112 1440,112 L1440,120 L0,120 Z"
            fill="#111827"
          />
        </svg>
      </div>
    </div>
  );
}

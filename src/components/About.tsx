import { Card, CardContent } from "./ui/card";
import { CheckCircle, Award, Users, Zap } from "lucide-react";
import { motion } from "motion/react";

const highlights = [
  {
    icon: CheckCircle,
    title: "Problem Solver",
    description: "Quick to diagnose and resolve technical issues efficiently",
  },
  {
    icon: Award,
    title: "Quality Focused",
    description: "Committed to delivering high-quality solutions and support",
  },
  {
    icon: Users,
    title: "Team Player",
    description: "Excellent collaboration and communication skills",
  },
  {
    icon: Zap,
    title: "Fast Learner",
    description: "Quickly adapts to new technologies and methodologies",
  },
];

export function About() {
  return (
    <div id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6" />
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            I'm a dedicated IT professional with a strong foundation in network engineering 
            and technical support, driven by a passion for technology and problem-solving.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-gray-800/50 border-cyan-400/20 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl text-white mb-6">My Journey</h3>
                <div className="space-y-4 text-gray-300">
                  <p>
                    As a graduate from the Royal University of Phnom Penh (RUPP), I've developed 
                    a comprehensive understanding of IT infrastructure, network architecture, and 
                    system administration.
                  </p>
                  <p>
                    My education at RUPP equipped me with both theoretical knowledge and practical 
                    skills in IT Support and Network Engineering, preparing me to tackle real-world 
                    technical challenges.
                  </p>
                  <p>
                    I'm passionate about leveraging technology to create efficient solutions and 
                    improve system reliability. Whether it's troubleshooting complex network issues 
                    or providing technical support, I approach every challenge with enthusiasm and dedication.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <Card className="bg-gray-800/50 border-cyan-400/20 hover:border-cyan-400/50 transition-all h-full">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-white mb-2">{item.title}</h4>
                      <p className="text-sm text-gray-400">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-4 gap-6"
        >
          {[
            { value: "RUPP", label: "Graduate" },
            { value: "IT Support", label: "Specialization" },
            { value: "Network", label: "Engineering" },
            { value: "Tech", label: "Enthusiast" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-cyan-400/30 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl text-cyan-400 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

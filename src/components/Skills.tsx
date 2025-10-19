import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Server, Network, Shield, Database, Code, HardDrive, Wifi, Settings } from "lucide-react";
import { motion } from "motion/react";
import { Progress } from "./ui/progress";

const skillCategories = [
  {
    title: "Network Engineering",
    icon: Network,
    skills: [
      { name: "Network Configuration", level: 85 },
      { name: "Cisco Routing & Switching", level: 80 },
      { name: "Network Security", level: 75 },
      { name: "LAN/WAN Setup", level: 85 },
    ],
  },
  {
    title: "IT Support",
    icon: Settings,
    skills: [
      { name: "Technical Troubleshooting", level: 90 },
      { name: "Hardware Maintenance", level: 85 },
      { name: "Software Installation", level: 88 },
      { name: "User Support", level: 92 },
    ],
  },
  {
    title: "System Administration",
    icon: Server,
    skills: [
      { name: "Windows Server", level: 80 },
      { name: "Linux Administration", level: 75 },
      { name: "Active Directory", level: 78 },
      { name: "Virtualization", level: 72 },
    ],
  },
  {
    title: "Security & Tools",
    icon: Shield,
    skills: [
      { name: "Firewall Configuration", level: 75 },
      { name: "Network Monitoring", level: 80 },
      { name: "Backup Solutions", level: 82 },
      { name: "Documentation", level: 88 },
    ],
  },
];

const technologies = [
  { name: "Cisco IOS", icon: Network },
  { name: "Windows Server", icon: Server },
  { name: "Linux", icon: HardDrive },
  { name: "MySQL", icon: Database },
  { name: "Python", icon: Code },
  { name: "Wi-Fi Technologies", icon: Wifi },
];

export function Skills() {
  return (
    <div id="skills" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl text-white mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6" />
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Technical competencies developed through education and hands-on experience
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-gray-900/50 border-cyan-400/20 hover:border-cyan-400/50 transition-all h-full">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-white">{category.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                      >
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-300 text-sm">{skill.name}</span>
                          <span className="text-cyan-400 text-sm">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: skillIndex * 0.1 }}
                            className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl text-white text-center mb-8">Technologies & Tools</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {technologies.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  <Card className="bg-gray-900/50 border-cyan-400/20 hover:border-cyan-400/50 transition-all">
                    <CardContent className="p-6 text-center">
                      <Icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                      <p className="text-sm text-gray-300">{tech.name}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

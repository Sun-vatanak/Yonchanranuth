import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ExternalLink, Github, Network, Server, Shield } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  {
    title: "Network Infrastructure Setup",
    description: "Designed and implemented a complete network infrastructure for a small business including router configuration, VLAN setup, and firewall implementation.",
    image: "https://images.unsplash.com/flagged/photo-1579274216947-86eaa4b00475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwbmV0d29yayUyMHNlcnZlcnxlbnwxfHx8fDE3NjA4NjUwNjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Cisco", "Networking", "Security"],
    icon: Network,
  },
  {
    title: "IT Support System",
    description: "Developed comprehensive IT support documentation and troubleshooting guides for common hardware and software issues, reducing resolution time by 40%.",
    image: "https://images.unsplash.com/photo-1653564142048-d5af2cf9b50f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZyUyMGNvZGUlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYwODY1MDYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Documentation", "Support", "Training"],
    icon: Server,
  },
  {
    title: "Security Implementation",
    description: "Implemented network security measures including firewall rules, intrusion detection, and secure remote access solutions for enhanced data protection.",
    image: "https://images.unsplash.com/photo-1649429398909-db7ae841c386?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXR3b3JrJTIwZW5naW5lZXJpbmclMjB0ZWNofGVufDF8fHx8MTc2MDg2NTA2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Security", "Firewall", "VPN"],
    icon: Shield,
  },
];

export function Projects() {
  return (
    <div id="projects" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl text-white mb-4">
            Projects & Work
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6" />
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Showcase of technical projects and implementations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="bg-gray-900/50 border-cyan-400/20 hover:border-cyan-400/50 transition-all h-full overflow-hidden group">
                  <CardHeader className="p-0 relative">
                    <div className="aspect-video overflow-hidden relative">
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
                      <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="text-white mb-3">{project.title}</CardTitle>
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          className="bg-cyan-500/10 border-cyan-400/30 text-cyan-400 hover:bg-cyan-500/20"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

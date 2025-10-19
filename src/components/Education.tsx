import { Card, CardContent } from "./ui/card";
import { GraduationCap, BookOpen, Award, Calendar } from "lucide-react";
import { motion } from "motion/react";

export function Education() {
  return (
    <div id="education" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl text-white mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6" />
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Academic background and professional development
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-cyan-400/30 backdrop-blur-sm overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl" />
              
              <CardContent className="p-8 md:p-12 relative">
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Icon Section */}
                  <div className="flex-shrink-0">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg"
                    >
                      <GraduationCap className="w-12 h-12 text-white" />
                    </motion.div>
                  </div>

                  {/* Content Section */}
                  <div className="flex-grow space-y-6">
                    <div>
                      <h3 className="text-2xl lg:text-3xl text-white mb-2">
                        Royal University of Phnom Penh
                      </h3>
                      <p className="text-cyan-400 text-lg mb-4">
                        Bachelor's Degree in Information Technology
                      </p>
                      <div className="flex items-center gap-2 text-gray-400 mb-4">
                        <Calendar className="w-4 h-4" />
                        <span>Graduated</span>
                      </div>
                    </div>

                    {/* Specializations */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="bg-gray-800/50 border border-cyan-400/20 rounded-xl p-4"
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                            <BookOpen className="w-5 h-5 text-cyan-400" />
                          </div>
                          <h4 className="text-white">Major Focus</h4>
                        </div>
                        <p className="text-gray-400 text-sm">
                          IT Support & Technical Services
                        </p>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="bg-gray-800/50 border border-cyan-400/20 rounded-xl p-4"
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                            <Award className="w-5 h-5 text-blue-400" />
                          </div>
                          <h4 className="text-white">Specialization</h4>
                        </div>
                        <p className="text-gray-400 text-sm">
                          Network Engineering
                        </p>
                      </motion.div>
                    </div>

                    {/* Key Courses */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      <h4 className="text-white mb-3">Key Coursework</h4>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Network Infrastructure",
                          "System Administration",
                          "IT Security",
                          "Database Management",
                          "Technical Support",
                          "Network Protocols",
                        ].map((course, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-cyan-500/10 border border-cyan-400/30 rounded-full text-cyan-400 text-sm"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Additional Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid md:grid-cols-3 gap-6 mt-8"
          >
            {[
              { icon: BookOpen, title: "Academic Excellence", desc: "Strong IT Foundation" },
              { icon: Award, title: "Practical Skills", desc: "Hands-on Experience" },
              { icon: GraduationCap, title: "Certified Graduate", desc: "RUPP Alumni" },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={index}
                  className="bg-gray-800/50 border-cyan-400/20 hover:border-cyan-400/50 transition-all"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-white mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Heart, Stethoscope, Activity, Brain, Baby, Eye } from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    icon: Heart,
    title: "Cardiology",
    description: "Comprehensive heart care with advanced diagnostic and treatment options for all cardiac conditions.",
  },
  {
    icon: Stethoscope,
    title: "General Medicine",
    description: "Expert diagnosis and treatment for a wide range of health conditions and preventive care.",
  },
  {
    icon: Activity,
    title: "Orthopedics",
    description: "Specialized care for bone, joint, and muscle disorders with modern treatment techniques.",
  },
  {
    icon: Brain,
    title: "Neurology",
    description: "Advanced neurological care for brain and nervous system conditions with expert specialists.",
  },
  {
    icon: Baby,
    title: "Pediatrics",
    description: "Gentle, comprehensive care for infants, children, and adolescents in a friendly environment.",
  },
  {
    icon: Eye,
    title: "Ophthalmology",
    description: "Complete eye care services from routine exams to advanced surgical procedures.",
  },
];

export function Services() {
  return (
    <div id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
            Our Medical Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of medical services delivered by experienced specialists 
            using state-of-the-art technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card className="border-2 hover:border-blue-200 hover:shadow-xl transition-all h-full">
                  <CardHeader className="p-8">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

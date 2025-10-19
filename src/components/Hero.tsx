import { Button } from "./ui/button";
import { Calendar, Phone, Heart, Shield, Award, CheckCircle } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";

export function Hero() {
  const floatingIcons = [
    { icon: Heart, color: "text-red-500", delay: 0 },
    { icon: Shield, color: "text-blue-500", delay: 0.2 },
    { icon: Award, color: "text-yellow-500", delay: 0.4 },
  ];

  return (
    <div id="home" className="relative bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-400 overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-1/2 -right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 relative z-10">
            {/* Floating Icons */}
            <div className="absolute -left-16 top-0 hidden lg:block">
              {floatingIcons.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50, y: 50 }}
                    animate={{
                      opacity: [0.4, 1, 0.4],
                      x: [-50, 0, -50],
                      y: [index * 80, index * 80 + 20, index * 80],
                    }}
                    transition={{
                      duration: 3,
                      delay: item.delay,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="mb-8"
                  >
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center">
                      <Icon className={`w-8 h-8 ${item.color}`} />
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-block mb-4"
              >
                <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-4 py-2 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-white" />
                  <span className="text-sm text-white">Trusted by 50,000+ Patients</span>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-5xl lg:text-6xl xl:text-7xl text-white mb-6"
              >
                Excellence in{" "}
                <motion.span
                  initial={{ backgroundPosition: "0% 50%" }}
                  animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="bg-gradient-to-r from-yellow-300 via-pink-300 to-yellow-300 bg-clip-text text-transparent bg-[length:200%_auto]"
                >
                  Healthcare
                </motion.span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg lg:text-xl text-white/90 max-w-xl leading-relaxed"
              >
                Experience world-class medical care with cutting-edge technology and
                compassionate professionals dedicated to your wellbeing.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                size="lg"
                className="gap-2 bg-white text-blue-600 hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all"
              >
                <Calendar className="w-5 h-5" />
                Book Appointment
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 bg-white/10 backdrop-blur-md text-white border-white/30 hover:bg-white/20"
              >
                <Phone className="w-5 h-5" />
                Emergency: 911
              </Button>
            </motion.div>

            {/* Stats with animations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              {[
                { value: "15+", label: "Years Experience" },
                { value: "50k+", label: "Happy Patients" },
                { value: "25+", label: "Expert Doctors" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/20 backdrop-blur-md rounded-2xl p-4 border border-white/30"
                >
                  <div className="text-3xl text-white">{stat.value}</div>
                  <div className="text-sm text-white/80 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Image with animations */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Decorative elements */}
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -inset-4 bg-gradient-to-tr from-yellow-400 via-pink-400 to-blue-400 rounded-3xl blur-xl opacity-50"
            />

            {/* Main image container */}
            <div className="relative">
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative bg-white/10 backdrop-blur-md p-4 rounded-3xl border border-white/30"
              >
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1758691462848-ba1e929da259?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwaGVhbHRoY2FyZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYwODA3Mjg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Medical Healthcare"
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">24/7 Available</div>
                      <div className="text-gray-900">Emergency Care</div>
                    </div>
                  </div>
                </motion.div>

                {/* Floating badge 2 */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <Award className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">ISO Certified</div>
                      <div className="text-gray-900">Quality Care</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2 }}
            d="M0,64 C360,16 720,16 1080,64 C1440,112 1440,112 1440,112 L1440,120 L0,120 Z"
            fill="#ffffff"
            opacity="0.3"
          />
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.2 }}
            d="M0,80 C360,32 720,32 1080,80 C1440,128 1440,128 1440,128 L1440,120 L0,120 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </div>
  );
}

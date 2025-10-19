import { Card, CardContent } from "./ui/card";
import { Star } from "lucide-react";
import { motion } from "motion/react";

const testimonials = [
  {
    name: "Jennifer Martinez",
    rating: 5,
    comment: "The care I received was exceptional. Dr. Johnson and her team were professional, compassionate, and thorough. I couldn't ask for better treatment.",
  },
  {
    name: "Robert Thompson",
    rating: 5,
    comment: "Outstanding medical facility with state-of-the-art equipment. The staff is friendly and the doctors are highly knowledgeable. Highly recommended!",
  },
  {
    name: "Lisa Anderson",
    rating: 5,
    comment: "From booking to treatment, everything was seamless. The doctors took time to explain my condition and the entire staff made me feel comfortable.",
  },
];

export function Testimonials() {
  return (
    <div id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
            What Our Patients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Read testimonials from our satisfied patients who have experienced our 
            commitment to excellence in healthcare.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              <Card className="border-2 hover:border-blue-200 hover:shadow-xl transition-all h-full">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.comment}"</p>
                  <div className="border-t pt-4">
                    <p className="text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">Patient</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

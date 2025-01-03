import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

export function Features() {
  const features = [
    {
      title: "Virtual Reality Training",
      description:
        "Experience real-world scenarios in a safe, controlled environment.",
    },
    {
      title: "Personalized Learning",
      description:
        "AI-powered curriculum adapts to your learning style and progress.",
    },
    {
      title: "Certified Instructors",
      description:
        "Learn from the best with our team of experienced, certified professionals.",
    },
  ];

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <section id="features" className="py-20 bg-zinc-700" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Why Choose DriveEase
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="text-center hover-lift"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">{index + 1}</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

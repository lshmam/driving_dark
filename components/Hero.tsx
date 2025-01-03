import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        {/* Heading Animation */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 font-dmserif"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Learn to Drive with Confidence
        </motion.h1>

        {/* Paragraph Animation */}
        <motion.p
          className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          Experience the future of driver education with cutting-edge technology
          and expert instructors.
        </motion.p>

        {/* Button Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
        >
          <Link
            href="#get-started"
            className="inline-flex items-center text-lg bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-600 transition-colors"
          >
            Start Your Journey
            <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

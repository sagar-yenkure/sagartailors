"use client"

import { motion } from "framer-motion"
import TestimonialsGrid from "./TestimonialsGrid"
import RatingSection from "./RatingSection"

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-12 bg-gray-50">
      <div className="px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our valued customers have to say
            about their experience with Sagar Tailors.
          </p>
        </motion.div>

        <TestimonialsGrid />
        <RatingSection />

      </div>
    </section>
  )
}
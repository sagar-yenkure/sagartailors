"use client"

import { motion } from "framer-motion"
import CTA from "./CTA"
import ServiceGrid from "./ServiceGrid"

export function ServicesSection() {
  return (
    <section id="services" className="py-12 bg-gray-50">
      <div className="px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional stitching services for individuals, businesses, schools, and organizations.
            Bring your fabric and we&apos;ll create the perfect fit.
          </p>
        </motion.div>

        <ServiceGrid />
        <CTA />

      </div>
    </section>
  )
}
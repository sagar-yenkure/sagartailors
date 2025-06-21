"use client"

import { motion } from "framer-motion"
import FeatureGrid from "./FeatureGrid"
import AchievementsStats from "./AchievementsStats"
import QualityPromise from "./QualityPromise"

export function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" className="py-12 bg-white">
      <div className=" px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Why Choose Sagar Tailors?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the difference that comes with passion, precision, and decades of expertise
            in the art of tailoring.
          </p>
        </motion.div>

        <FeatureGrid />
        <AchievementsStats />
        <QualityPromise />

      </div>
    </section>
  )
}
"use client"

import { motion } from "framer-motion"
import MapSection from "./MapSection"
import StoreInformation from "./StoreInformation"

export function LocationSection() {
  return (
    <section id="location" className="py-12 bg-white">
      <div className=" px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Visit Our Store
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Located in the heart of the city, our showroom offers a comfortable environment
            to discuss your tailoring needs and explore our extensive fabric collection.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          <MapSection />
          <StoreInformation />

        </div>
      </div>
    </section>
  )
}
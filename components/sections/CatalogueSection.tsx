"use client"

import { motion } from "framer-motion"
import { Scissors } from "lucide-react"
import CatalogueGrid from "./CatalogueGrid"
import BulkOrders from "./BulkOrders"

export function CatalogueSection() {
  return (
    <section id="catalogue" className="py-12 bg-gray-50">
      <div className="container px-4 md:px-8">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-6"
          >
            <Scissors className="h-8 w-8 text-amber-600" />
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
            Our <span className="bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent">Catalogue</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Expertly crafted garments tailored to perfection. Bring your fabric, we&apos;ll create your vision.
          </p>
        </motion.div>

        <CatalogueGrid />
        <BulkOrders />

      </div>
    </section>
  )
}

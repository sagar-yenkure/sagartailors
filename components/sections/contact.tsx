"use client"

import { motion } from "framer-motion"
import ContactInformation from "./ContactInformation"
import ContactForm from "./ContactForm"
import { Clock, MessageSquare } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-12 bg-gray-50">
      <div className=" px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to create your perfect outfit? Contact us today for a consultation
            or to schedule an appointment with our expert tailors.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          <ContactInformation />
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
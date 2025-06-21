"use client"

import { motion } from "framer-motion"
import { Scissors, Phone, Mail, MapPin, Clock } from "lucide-react"
import { Info, navItems } from "@/constant"
import Link from "next/link"

export function Footer() {
  const currentYear = new Date()?.getFullYear()

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container px-4 md:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-3">
              <Scissors className="h-8 w-8 text-amber-600" />
              <span className="text-xl font-bold">NEW SAGAR TAILORS</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Expert stitching services since 1998. Experience the finest in custom tailoring
              with over 25 years of expertise in traditional and contemporary styles.
            </p>
            {/* <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-slate-800">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-slate-800">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-slate-800">
                <Twitter className="h-5 w-5" />
              </Button>
            </div> */}
          </motion.div>

          <div className="grid grid-cols-2 gap-4 md:gap-8">

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-4 "
            >
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <ul className="space-y-2">
                {navItems.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => {
                        const element = document.querySelector(link.href)
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' })
                        }
                      }}
                      className="text-gray-300 hover:text-amber-400 transition-colors"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold">Our Services</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Custom Stitching</li>
                <li>Wedding Attire</li>
                <li>Formal Wear</li>
                <li>Alterations</li>
                <li>Express Service</li>
                <li>Bulk Orders</li>
              </ul>
            </motion.div>

          </div>
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-amber-600 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  Tarwadewasti, Mohammed Wadi Rd<br />
                  Pune, Maharashtra 411060<br />
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-amber-600" />
                <span className="text-gray-300">+91-{Info.number}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-amber-600" />
                <span className="text-gray-300">sagaryenkure4@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-amber-600" />
                <span className="text-gray-300 text-sm">
                  Mon-Sat: 08AM-10PM<br />
                  Sunday: 10AM-10PM
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-slate-800 mt-2 pt-2 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-sm">
            © {currentYear} Sagar Tailors. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-2 md:mt-0">
            <Link href={"/privacy-policy"}>
              <button className="text-gray-400 hover:text-amber-400 text-sm transition-colors">
                Privacy Policy
              </button>
            </Link>
            <Link href={"/terms-of-service"}>
              <button className="text-gray-400 hover:text-amber-400 text-sm transition-colors">
                Terms of Service
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
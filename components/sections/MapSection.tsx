import { motion } from "framer-motion"
import { MapPin, Navigation } from "lucide-react"
import Link from "next/link"

const MapSection = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
        >
            <div className="rounded-3xl overflow-hidden shadow-xl">
                <div className="relative h-96 bg-gradient-to-br from-slate-100 to-amber-100">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1937491.520035373!2d71.48489285624999!3d18.476268799999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ebeb69788771%3A0x397fb92b920cd6b0!2sNew%20Sagar%20Tailors!5e0!3m2!1sen!2sin!4v1750346935673!5m2!1sen!2sin"
                        className="w-full h-full border-0"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>

            {/* Directions Button */}
            <Link
                href={"https://maps.app.goo.gl/mWVwPRqthePX6Qow8"}
                target="_blank"
                className="mt-6 w-full rounded-3xl bg-black text-white px-6 py-3 font-semibold flex items-center justify-center space-x-2"
            >
                <Navigation className="h-5 w-5" />
                <span>Get Directions</span>
            </Link>

        </motion.div>
    )
}

export default MapSection
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { heroStat } from "@/constant"
import Link from "next/link"

const LeftHero = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1 "
        >
            <h1 className="hidden">New Sagar Tailors - Premium Custom Tailoring Since 1998</h1>
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-6 leading-tight"
            >
                Expert Tailoring
                <span className="block bg-gradient-to-r from-slate-800 to-amber-600 bg-clip-text text-transparent">
                    Since 1998
                </span>
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-base md:text-lg lg:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
                Professional tailoring services for individuals, businesses, schools, and organizations.
                We bring your fabric to life with precision stitching and expert craftsmanship.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 lg:mb-12"
            >
                <Link href={"#contact"} className="w-full sm:w-auto">
                    <Button size="lg" className="btn-gradient-primary px-6 md:px-8 py-3 text-base md:text-lg rounded-3xl">
                        Book Appointment
                    </Button>
                </Link>
                <Link href={"#services"} className="w-full sm:w-auto">
                    <Button variant="outline" size="lg" className="btn-gradient-outline px-6 md:px-8 py-3 text-base md:text-lg rounded-3xl">
                        View Services
                    </Button>
                </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="grid grid-cols-3 gap-4 md:gap-6 max-w-md mx-auto lg:mx-0"
            >
                {heroStat.map((stat, idx) => {
                    return <div key={idx} className="text-center">
                        <div className="flex items-center justify-center mb-2 gap-2">
                            {stat.icon}
                            <span className="text-xl md:text-2xl font-bold text-slate-900">{stat.number}</span>
                        </div>
                        <p className="text-xs md:text-sm text-gray-600">{stat.label}</p>
                    </div>
                })
                }

            </motion.div>
        </motion.div >
    )
}

export default LeftHero
import { motion } from "framer-motion"
import Image from "next/image"

const RightHero = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-1 lg:order-2 pt-20"
        >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <Image
                    height={100}
                    width={100}
                    quality={100}
                    src="https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Professional Tailor at Work"
                    className="w-full h-64 sm:h-80 md:h-[300px] lg:h-[450px] xl:h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/20 to-transparent" />
            </div>
           
        </motion.div>
    )
}

export default RightHero
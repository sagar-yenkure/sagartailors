
import { achievements } from "@/constant"
import { motion } from "framer-motion"
import { Star } from "lucide-react"

const AchievementsStats = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-slate-800 to-amber-600 rounded-2xl p-8 md:p-12 text-white mb-16"
        >
            <div className="text-center mb-8">
                <Star className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
                <h3 className="text-3xl font-bold mb-4">Our Track Record</h3>
                <p className="text-slate-100 text-lg">
                    Numbers that speak for our commitment to excellence
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {achievements.map((achievement, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">
                            {achievement.number}
                        </div>
                        <div className="text-slate-100 font-medium">
                            {achievement.label}
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    )
}

export default AchievementsStats